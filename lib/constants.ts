// Platform URLs
export const PLATFORM_BASE_URL = "https://app.relius.ai";

// Authentication URLs
export const AUTH_URLS = {
  LOGIN: `${PLATFORM_BASE_URL}/login`,
  SIGNUP: `${PLATFORM_BASE_URL}/signup`,
} as const;

// Checkout URLs
// The checkout page has built-in plan selection for paid tiers
export const CHECKOUT_URLS = {
  DEFAULT: `${PLATFORM_BASE_URL}/checkout`,
  ENTERPRISE_CONTACT: "/contact", // Internal route for enterprise inquiries
} as const;

// Default signup URL - goes to checkout which handles both free and paid signups
export const DEFAULT_SIGNUP_URL = CHECKOUT_URLS.DEFAULT;
