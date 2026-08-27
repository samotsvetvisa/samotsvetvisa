<?php

declare(strict_types=1);

namespace Espo\Custom\Hooks\Lead;

use DateTimeImmutable;
use DateTimeZone;
use Espo\Core\ORM\Repository\Option\SaveOption;
use Espo\ORM\Entity;
use Espo\ORM\EntityManager;
use Throwable;

final class SamotsvetAssessment
{
    public static int $order = 12;

    private const DETAIL_FIELDS = [
        'cRoute',
        'cObjective',
        'cCitizenship',
        'cResidence',
        'cFamily',
        'cEmployment',
        'cProfile',
        'cProfileLink',
        'cEvidence',
        'cStage',
        'cHistory',
        'cReferral',
        'cFormSource',
        'cUtmSource',
        'cUtmMedium',
        'cUtmCampaign',
        'cLandingPage',
        'cReferrer',
        'cConsentAt',
        'cPrivacyVersion',
    ];

    public function __construct(private EntityManager $entityManager)
    {
    }

    /** @param array<string, mixed> $options */
    public function beforeSave(Entity $lead, array $options): void
    {
        if (!$lead->get('cAssessmentId')) {
            return;
        }

        $total = 0;

        foreach (['cFitScore', 'cEvidenceScore', 'cUrgencyScore', 'cReadinessScore'] as $field) {
            $total += max(0, min(3, (int) ($lead->get($field) ?? 0)));
        }

        $lead->set('cTotalScore', $total);
        $lead->set('cTier', $total >= 9 ? 'A' : ($total >= 6 ? 'B' : 'C'));
    }

    /**
     * @param array<string, mixed> $options
     * @param array<string, mixed> $data
     */
    public function afterLeadCapture(Entity $lead, array $options, array $data): void
    {
        $assessmentId = trim((string) ($lead->get('cAssessmentId') ?? ''));

        if ($assessmentId === '') {
            return;
        }

        if ($lead->get('cAssessmentStage') === 'Detailed') {
            $this->mergeDetailedStage($lead, $assessmentId);
            return;
        }

        $this->scheduleReply($lead, $assessmentId);
    }

    private function mergeDetailedStage(Entity $supplement, string $assessmentId): void
    {
        $lead = $this->entityManager
            ->getRDBRepository('Lead')
            ->where([
                'cAssessmentId' => $assessmentId,
                'id!=' => $supplement->getId(),
            ])
            ->order('createdAt', 'ASC')
            ->findOne();

        if (!$lead) {
            return;
        }

        foreach (self::DETAIL_FIELDS as $field) {
            $value = $supplement->get($field);

            if ($value !== null && $value !== '') {
                $lead->set($field, $value);
            }
        }

        $lead->set('cAssessmentStage', 'Detailed');
        $this->entityManager->saveEntity($lead, [SaveOption::SKIP_HOOKS => true]);
        $this->entityManager->removeEntity($supplement);
    }

    private function scheduleReply(Entity $lead, string $assessmentId): void
    {
        if ($lead->get('cFollowUpAt')) {
            return;
        }

        $due = new DateTimeImmutable('now', new DateTimeZone('UTC'));
        $due = $due->modify('+1 day');

        while ((int) $due->format('N') >= 6) {
            $due = $due->modify('+1 day');
        }

        $dueAt = $due->format('Y-m-d H:i:s');
        $lead->set('cFollowUpAt', $dueAt);

        try {
            $this->entityManager->createEntity('Task', [
                'name' => "Ответить на предварительную оценку {$assessmentId}",
                'status' => 'Not Started',
                'priority' => 'Normal',
                'dateEnd' => $dueAt,
                'parentType' => 'Lead',
                'parentId' => $lead->getId(),
                'assignedUserId' => $lead->get('assignedUserId'),
            ]);
            $lead->set('cFollowUpTaskCreated', true);
        } catch (Throwable) {
            $lead->set('cFollowUpTaskCreated', false);
        }

        $this->entityManager->saveEntity($lead, [SaveOption::SKIP_HOOKS => true]);
    }
}
