# Samotsvet Assessment Pipeline 1.0.0

EspoCRM extension for the Samotsvet two-stage preliminary assessment.

It adds assessment fields, calculates an internal 0–12 operational score, assigns Tier A/B/C, joins the detailed stage to the original Lead by `cAssessmentId`, and creates a next-business-day reply task.

## Build

Create the ZIP from the contents of this directory, keeping `manifest.json` and `files/` at the archive root.

## Install

1. Back up the EspoCRM database and files.
2. Open `Administration → Extensions`.
3. Upload and install the ZIP.
4. Run `Administration → Rebuild`.
5. Add the new fields to Lead Detail/List layouts.
6. Add the new input fields to the active Lead Capture record's Payload Fields.
7. Submit one marked test assessment and confirm that the detailed stage updates the original Lead.

The operational score is not a visa approval probability and must not be presented as one.

See `docs/samotsvet-crm-and-domain-mail-guide.md` in the site repository for the full field map, pipeline, security controls and test plan.
