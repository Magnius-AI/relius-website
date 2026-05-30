// Platform URLs
export const PLATFORM_BASE_URL = "https://app.relius.ai";

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
