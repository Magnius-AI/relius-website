"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";

// Initialize PostHog once
let isInitialized = false;

function initializePostHog() {
  if (isInitialized || typeof window === "undefined") return;

  const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const apiHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

  if (!apiKey) {
    console.warn("PostHog API key not configured");
    return;
  }

  posthog.init(apiKey, {
    api_host: apiHost || "https://us.i.posthog.com",
    capture_pageview: false, // We handle this manually for SPA routing
    capture_pageleave: true, // Automatic time-on-page tracking
    persistence: "memory", // Cookieless mode - no consent banner needed
    autocapture: true, // Auto-capture clicks, form submissions
    disable_session_recording: false,
    session_recording: {
      maskAllInputs: true, // Privacy: mask form inputs in recordings
    },
  });

  isInitialized = true;
}

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize on mount
  useEffect(() => {
    initializePostHog();
  }, []);

  // Track page views on route change
  useEffect(() => {
    if (typeof window === "undefined" || !isInitialized) return;

    // Capture pageview with URL and referrer
    posthog.capture("$pageview", {
      $current_url: window.location.href,
      $referrer: document.referrer,
      path: pathname,
      search: searchParams.toString(),
    });
  }, [pathname, searchParams]);

  return null;
}

// Export tracking utilities for use in components
export const analytics = {
  // Track custom events
  track: (eventName: string, properties?: Record<string, unknown>) => {
    if (typeof window === "undefined") return;
    posthog.capture(eventName, properties);
  },

  // Track form submissions
  trackFormSubmission: (formName: string, formData?: Record<string, unknown>) => {
    if (typeof window === "undefined") return;
    posthog.capture("form_submitted", {
      form_name: formName,
      ...formData,
    });
  },

  // Track CTA clicks
  trackCTAClick: (ctaName: string, destination?: string) => {
    if (typeof window === "undefined") return;
    posthog.capture("cta_clicked", {
      cta_name: ctaName,
      destination,
    });
  },

  // Track demo interactions
  trackDemoInteraction: (action: string, details?: Record<string, unknown>) => {
    if (typeof window === "undefined") return;
    posthog.capture("demo_interaction", {
      action,
      ...details,
    });
  },

  // Identify users (when they submit a form with email)
  identify: (email: string, properties?: Record<string, unknown>) => {
    if (typeof window === "undefined") return;
    posthog.identify(email, properties);
  },
};
