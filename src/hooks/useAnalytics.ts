// Declarar gtag globalmente
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

export const useAnalytics = () => {
  const trackPageView = (pageName: string, pageTitle: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-XE96RY5VQS', {
        page_title: pageTitle,
        page_location: window.location.href,
        page_path: `/${pageName}`
      });
    }
  };

  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
  };

  const trackScreenView = (screenName: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'screen_view', {
        screen_name: screenName,
        app_name: 'Ariel Paz Portfolio'
      });
    }
  };

  return {
    trackPageView,
    trackEvent,
    trackScreenView
  };
};

export default useAnalytics;
