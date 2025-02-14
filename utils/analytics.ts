interface PageViewProps {
  url: string;
  title?: string;
  referrer?: string;
}

interface EventProps {
  action: string;
  category: string;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
}

interface UserProps {
  id: string;
  email?: string;
  role?: string;
}

// Initialize Google Analytics
export function initGA(): void {
  if (typeof window === 'undefined') return;

  const gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`;
  document.head.appendChild(gtagScript);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID, {
    page_path: window.location.pathname,
  });
}

// Track Page View
export function trackPageView({ url, title, referrer }: PageViewProps): void {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID, {
    page_path: url,
    page_title: title,
    page_referrer: referrer,
  });
}

// Track Event
export function trackEvent({
  action,
  category,
  label,
  value,
  nonInteraction = false,
}: EventProps): void {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
    non_interaction: nonInteraction,
  });
}

// Track User
export function trackUser({ id, email, role }: UserProps): void {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('set', {
    user_id: id,
    user_properties: {
      email,
      role,
    },
  });
}

// Track Error
export function trackError(error: Error, isFatal: boolean = false): void {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'exception', {
    description: error.message,
    fatal: isFatal,
  });
}

// Track Social Interaction
export function trackSocialInteraction(
  network: string,
  action: string,
  target: string
): void {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'social', {
    social_network: network,
    social_action: action,
    social_target: target,
  });
}

// Track Timing
export function trackTiming(
  category: string,
  variable: string,
  value: number,
  label?: string
): void {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'timing_complete', {
    name: variable,
    value: value,
    event_category: category,
    event_label: label,
  });
}

// Track Ecommerce
export const ecommerce = {
  viewItem(item: {
    id: string;
    name: string;
    category?: string;
    price?: number;
  }): void {
    if (typeof window === 'undefined' || !window.gtag) return;

    window.gtag('event', 'view_item', {
      items: [item],
    });
  },

  addToCart(item: {
    id: string;
    name: string;
    category?: string;
    price?: number;
    quantity?: number;
  }): void {
    if (typeof window === 'undefined' || !window.gtag) return;

    window.gtag('event', 'add_to_cart', {
      items: [item],
    });
  },

  purchase(transaction: {
    id: string;
    value: number;
    items: Array<{
      id: string;
      name: string;
      category?: string;
      price?: number;
      quantity?: number;
    }>;
  }): void {
    if (typeof window === 'undefined' || !window.gtag) return;

    window.gtag('event', 'purchase', transaction);
  },
};

// Performance Monitoring
export const performance = {
  mark(name: string): void {
    if (typeof window === 'undefined') return;
    window.performance.mark(name);
  },

  measure(name: string, startMark: string, endMark: string): void {
    if (typeof window === 'undefined') return;
    try {
      window.performance.measure(name, startMark, endMark);
      const measure = window.performance.getEntriesByName(name, 'measure')[0];
      trackTiming('Performance', name, measure.duration);
    } catch (e) {
      console.error('Error measuring performance:', e);
    }
  },
};

// Declare global window object with gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
