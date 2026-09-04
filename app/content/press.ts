export type PressMention = {
  outlet: string;
  title: string;
  date: string;
  href: string;
};

// Add the first verified external publication here. The section stays out of the
// rendered page while this list is empty, so the site never shows placeholders.
export const pressMentions: readonly PressMention[] = [];
