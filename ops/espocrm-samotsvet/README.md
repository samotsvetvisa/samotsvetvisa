# Samotsvet Assessment Pipeline 1.1.0

EspoCRM extension for the Samotsvet profile audit.

It adds audit fields, calculates an internal 0–12 operational score, assigns Tier A/B/C and creates a next-business-day reply task. The live form sends one complete Lead only after the visitor requests a team review. Backward-compatible merging by `cAssessmentId` remains available for earlier two-stage forms.

## Build

Create the ZIP from the contents of this directory, keeping `manifest.json` and `files/` at the archive root.

## Install

1. Back up the EspoCRM database and files.
2. Open `Administration → Extensions`.
3. Upload and install the ZIP.
4. Run `Administration → Rebuild`.
5. Add the new fields to Lead Detail/List layouts.
6. Add the new input fields to the active Lead Capture record's Payload Fields.
7. Submit one clearly marked test audit and confirm that one Lead and one reply task are created.

The operational score is not a visa approval probability and must not be presented as one.

See `docs/samotsvet-crm-and-domain-mail-guide.md` in the site repository for the full field map, pipeline, security controls and test plan.
