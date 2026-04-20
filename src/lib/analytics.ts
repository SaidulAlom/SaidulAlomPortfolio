declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? '';

export function trackEvent(action: string, category: string, label?: string) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', action, { event_category: category, event_label: label });
}

// Pre-built trackers for common portfolio interactions
export const track = {
  projectClick: (projectName: string) => trackEvent('click', 'Projects', projectName),
  livePreviewClick: (projectName: string) => trackEvent('live_preview', 'Projects', projectName),
  githubClick: (projectName: string) => trackEvent('github_link', 'Projects', projectName),
  resumeDownload: () => trackEvent('download', 'Resume', 'PDF'),
  contactSubmit: () => trackEvent('form_submit', 'Contact'),
  socialClick: (platform: string) => trackEvent('click', 'Social', platform),
};
