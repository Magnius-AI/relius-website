// Platform URLs
export const PLATFORM_BASE_URL = "https://app.relius.ai";

// Public Cloudflare Worker endpoint
export const DEFAULT_PUBLIC_WORKER_URL = "https://contact-form.relius.workers.dev";

const trimTrailingSlash = (url: string) => url.replace(/\/+$/, "");
const joinWorkerPath = (baseUrl: string, path: string) =>
  `${trimTrailingSlash(baseUrl)}${path}`;

const configuredWorkerUrl = process.env.NEXT_PUBLIC_WORKER_URL;
const legacyContactEndpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;

export const PUBLIC_WORKER_URL = trimTrailingSlash(
  configuredWorkerUrl || DEFAULT_PUBLIC_WORKER_URL
);

export const WORKER_ENDPOINTS = {
  CONTACT: configuredWorkerUrl
    ? joinWorkerPath(configuredWorkerUrl, "/contact")
    : process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT ||
      joinWorkerPath(PUBLIC_WORKER_URL, "/contact"),
  NEWSLETTER: configuredWorkerUrl
    ? joinWorkerPath(configuredWorkerUrl, "/newsletter")
    : process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT ||
      joinWorkerPath(PUBLIC_WORKER_URL, "/newsletter"),
  CTA_NOTIFICATION: joinWorkerPath(PUBLIC_WORKER_URL, "/notify-cta"),
} as const;

// Authentication URLs
export const AUTH_URLS = {
  LOGIN: `${PLATFORM_BASE_URL}/login`,
  SIGNUP: `${PLATFORM_BASE_URL}/signup`,
} as const;

// Checkout URLs
// Keep acquisition CTAs plan-aware so marketing intent survives the handoff to
// the app checkout. The checkout page defaults to Pro when no plan is supplied.
export const CHECKOUT_URLS = {
  DEFAULT: `${PLATFORM_BASE_URL}/checkout`,
  FREE: `${PLATFORM_BASE_URL}/checkout?plan=free`,
  PRO: `${PLATFORM_BASE_URL}/checkout?plan=pro`,
  AI: `${PLATFORM_BASE_URL}/checkout?plan=ai`,
  ENTERPRISE_CONTACT: "/contact", // Internal route for enterprise inquiries
} as const;

// Default signup URL - public "Get Started Free" CTAs should land on the
// no-credit-card Free path, not the paid trial default.
export const DEFAULT_SIGNUP_URL = CHECKOUT_URLS.FREE;
