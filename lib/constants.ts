// Platform URLs
export const PLATFORM_BASE_URL = "https://app.relius.ai";

// Authentication URLs
export const AUTH_URLS = {
  LOGIN: `${PLATFORM_BASE_URL}/login`,
  SIGNUP: `${PLATFORM_BASE_URL}/signup`,
} as const;

// Checkout URLs with plan parameters
export const CHECKOUT_URLS = {
  BASIC_MONTHLY: `${PLATFORM_BASE_URL}/checkout?plan=basic`,
  BASIC_ANNUAL: `${PLATFORM_BASE_URL}/checkout?plan=basic&billing=annual`,
  PRO_MONTHLY: `${PLATFORM_BASE_URL}/checkout?plan=pro`,
  PRO_ANNUAL: `${PLATFORM_BASE_URL}/checkout?plan=pro&billing=annual`,
  ENTERPRISE_CONTACT: "/contact", // Internal route for enterprise inquiries
} as const;

// Default signup URL (Basic plan)
export const DEFAULT_SIGNUP_URL = CHECKOUT_URLS.BASIC_MONTHLY;
