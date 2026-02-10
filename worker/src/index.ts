/**
 * Relius Website Worker
 * Handles form submissions and CTA click notifications via Resend
 */

export interface Env {
  RESEND_API_KEY: string;
  ALLOWED_ORIGIN: string;
  TO_EMAIL: string;
  FROM_EMAIL: string;
  DISCORD_WEBHOOK_URL?: string;
}

// CTA Click Notification Types
interface CTANotification {
  cta_name: string;
  page_url: string;
  timestamp: string;
  referrer?: string;
  user_agent?: string;
}

// Human-readable CTA names
const CTA_LABELS: Record<string, string> = {
  get_started_free_hero: "Hero Section",
  get_started_free_final: "Final CTA Section",
  start_free_trial_hero: "Hero Section",
  start_free_trial_final: "Final CTA Section",
  start_free_trial_pricing: "Pricing Calculator",
  start_free_trial_nav: "Navigation Bar",
};

interface ContactFormData {
  name: string;
  email: string;
  church: string;
  memberSize: string;
  currentSoftware?: string;
  primaryInterest?: string;
  goals: string;
  honeypot?: string;
}

interface ResendResponse {
  id?: string;
  error?: {
    message: string;
    name: string;
  };
}

// CORS headers helper
function corsHeaders(origin: string, allowedOrigin: string): HeadersInit {
  const isAllowed =
    origin === allowedOrigin ||
    allowedOrigin === "*" ||
    origin.endsWith(".github.io") ||
    origin === "http://localhost:3000";

  return {
    "Access-Control-Allow-Origin": isAllowed ? origin : allowedOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

// Validation function
function validateFormData(data: unknown): {
  valid: boolean;
  error?: string;
  data?: ContactFormData;
} {
  if (!data || typeof data !== "object") {
    return { valid: false, error: "Invalid request body" };
  }

  const formData = data as Record<string, unknown>;

  // Honeypot check - if filled, it's a bot
  if (
    formData.honeypot &&
    typeof formData.honeypot === "string" &&
    formData.honeypot.length > 0
  ) {
    return { valid: false, error: "Bot detected" };
  }

  // Required fields validation
  const requiredFields = ["name", "email", "church", "memberSize", "goals"];
  for (const field of requiredFields) {
    if (
      !formData[field] ||
      typeof formData[field] !== "string" ||
      (formData[field] as string).trim() === ""
    ) {
      return { valid: false, error: `Missing required field: ${field}` };
    }
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email as string)) {
    return { valid: false, error: "Invalid email format" };
  }

  // Name length validation
  if ((formData.name as string).length < 2) {
    return { valid: false, error: "Name must be at least 2 characters" };
  }

  // Goals length validation
  if ((formData.goals as string).length < 10) {
    return { valid: false, error: "Goals must be at least 10 characters" };
  }

  return {
    valid: true,
    data: {
      name: (formData.name as string).trim(),
      email: (formData.email as string).trim().toLowerCase(),
      church: (formData.church as string).trim(),
      memberSize: (formData.memberSize as string).trim(),
      currentSoftware: formData.currentSoftware
        ? (formData.currentSoftware as string).trim()
        : undefined,
      primaryInterest: formData.primaryInterest
        ? (formData.primaryInterest as string).trim()
        : undefined,
      goals: (formData.goals as string).trim(),
    },
  };
}

// Human-readable label mappings
const SOFTWARE_LABELS: Record<string, string> = {
  "planning-center": "Planning Center",
  churchtrac: "ChurchTrac",
  tithely: "Tithe.ly",
  breeze: "Breeze",
  ccb: "Church Community Builder",
  elvanto: "Elvanto",
  spreadsheets: "Spreadsheets / Manual",
  other: "Other",
  none: "No current software",
};

const INTEREST_LABELS: Record<string, string> = {
  "general-demo": "General demo",
  "migration-help": "Migration assistance",
  "pricing-questions": "Pricing questions",
  "ai-features": "AI features",
  "multi-site": "Multi-site/Enterprise",
};

function escapeHtml(text: string): string {
  const htmlEscapes: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return text.replace(/[&<>"']/g, (char) => htmlEscapes[char]);
}

// Format email content
function formatEmailHtml(data: ContactFormData): string {
  const softwareLabel = data.currentSoftware
    ? SOFTWARE_LABELS[data.currentSoftware] || data.currentSoftware
    : "Not specified";
  const interestLabel = data.primaryInterest
    ? INTEREST_LABELS[data.primaryInterest] || data.primaryInterest
    : "Not specified";

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Demo Request</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: white; padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
    <h1 style="margin: 0; font-size: 24px;">New Demo Request</h1>
    <p style="margin: 10px 0 0; opacity: 0.9;">Someone wants to learn more about Relius!</p>
  </div>

  <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
    <h2 style="color: #6366f1; font-size: 18px; margin-top: 0; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">Contact Information</h2>

    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b; width: 140px;">Name:</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">${escapeHtml(data.name)}</td>
      </tr>
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b;">Email:</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
          <a href="mailto:${escapeHtml(data.email)}" style="color: #6366f1; text-decoration: none;">${escapeHtml(data.email)}</a>
        </td>
      </tr>
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b;">Church:</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">${escapeHtml(data.church)}</td>
      </tr>
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b;">Member Size:</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">${escapeHtml(data.memberSize)} members</td>
      </tr>
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b;">Current Software:</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">${escapeHtml(softwareLabel)}</td>
      </tr>
      <tr>
        <td style="padding: 12px 0; font-weight: 600; color: #64748b;">Primary Interest:</td>
        <td style="padding: 12px 0;">${escapeHtml(interestLabel)}</td>
      </tr>
    </table>

    <h2 style="color: #6366f1; font-size: 18px; margin-top: 30px; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">Goals & Notes</h2>
    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; white-space: pre-wrap;">${escapeHtml(data.goals)}</div>

    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; color: #64748b; font-size: 12px;">
      <p>This email was sent from the Relius website contact form.</p>
      <p>Submitted at: ${new Date().toISOString()}</p>
    </div>
  </div>
</body>
</html>
  `;
}

function formatEmailText(data: ContactFormData): string {
  const softwareLabel = data.currentSoftware
    ? SOFTWARE_LABELS[data.currentSoftware] || data.currentSoftware
    : "Not specified";
  const interestLabel = data.primaryInterest
    ? INTEREST_LABELS[data.primaryInterest] || data.primaryInterest
    : "Not specified";

  return `
NEW DEMO REQUEST FROM RELIUS WEBSITE
=====================================

CONTACT INFORMATION
-------------------
Name: ${data.name}
Email: ${data.email}
Church: ${data.church}
Member Size: ${data.memberSize} members
Current Software: ${softwareLabel}
Primary Interest: ${interestLabel}

GOALS & NOTES
-------------
${data.goals}

---
Submitted at: ${new Date().toISOString()}
  `.trim();
}

// Send email via Resend API
async function sendEmail(
  data: ContactFormData,
  env: Env
): Promise<{ success: boolean; error?: string }> {
  const emailPayload = {
    from: env.FROM_EMAIL,
    to: [env.TO_EMAIL],
    reply_to: data.email,
    subject: `Demo Request: ${data.church} (${data.memberSize} members)`,
    html: formatEmailHtml(data),
    text: formatEmailText(data),
  };

  console.log("Sending email with payload:", JSON.stringify({
    from: emailPayload.from,
    to: emailPayload.to,
    reply_to: emailPayload.reply_to,
    subject: emailPayload.subject,
  }));

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailPayload),
  });

  const responseText = await response.text();
  console.log("Resend API response status:", response.status);
  console.log("Resend API response body:", responseText);

  let result: ResendResponse;
  try {
    result = JSON.parse(responseText);
  } catch {
    console.error("Failed to parse Resend response:", responseText);
    return { success: false, error: "Invalid response from email service" };
  }

  if (!response.ok || result.error) {
    console.error("Resend API error:", result.error);
    return {
      success: false,
      error: result.error?.message || "Failed to send email",
    };
  }

  console.log("Email sent successfully, ID:", result.id);
  return { success: true };
}

// Simple in-memory rate limiting (resets on worker restart)
// For production, consider using Cloudflare KV or Durable Objects
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // Max requests per window
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

// Separate rate limit for CTA notifications (more lenient)
const CTA_RATE_LIMIT_MAX = 20; // Allow more CTA clicks per hour
const CTA_RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour

// Validate CTA notification data
function validateCTAData(data: unknown): {
  valid: boolean;
  error?: string;
  data?: CTANotification;
} {
  if (!data || typeof data !== "object") {
    return { valid: false, error: "Invalid request body" };
  }

  const notificationData = data as Record<string, unknown>;

  // Required: cta_name
  if (
    !notificationData.cta_name ||
    typeof notificationData.cta_name !== "string"
  ) {
    return { valid: false, error: "Missing required field: cta_name" };
  }

  return {
    valid: true,
    data: {
      cta_name: (notificationData.cta_name as string).trim(),
      page_url: (notificationData.page_url as string)?.trim() || "unknown",
      timestamp: (notificationData.timestamp as string) || new Date().toISOString(),
      referrer: (notificationData.referrer as string)?.trim() || undefined,
      user_agent: (notificationData.user_agent as string)?.trim() || undefined,
    },
  };
}

// Send CTA click notification email
async function sendCTANotification(
  data: CTANotification,
  env: Env
): Promise<{ success: boolean; error?: string }> {
  const ctaLabel = CTA_LABELS[data.cta_name] || data.cta_name;
  const timestamp = new Date(data.timestamp).toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const emailPayload = {
    from: env.FROM_EMAIL,
    to: [env.TO_EMAIL],
    subject: `🚀 Free Trial Click: ${ctaLabel}`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 500px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 20px; border-radius: 12px 12px 0 0; text-align: center;">
    <h1 style="margin: 0; font-size: 20px;">🚀 Free Trial Button Clicked!</h1>
  </div>
  <div style="background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
      <tr>
        <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Button:</td>
        <td style="padding: 8px 0;">${escapeHtml(ctaLabel)}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Page:</td>
        <td style="padding: 8px 0; word-break: break-all;">${escapeHtml(data.page_url)}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Time:</td>
        <td style="padding: 8px 0;">${timestamp} PST</td>
      </tr>
      ${data.referrer ? `
      <tr>
        <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Referrer:</td>
        <td style="padding: 8px 0; word-break: break-all;">${escapeHtml(data.referrer)}</td>
      </tr>
      ` : ""}
    </table>
    <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e2e8f0; text-align: center;">
      <a href="https://app.relius.ai/admin/users" style="display: inline-block; background: #6366f1; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 500;">Check New Signups →</a>
    </div>
  </div>
</body>
</html>
    `,
    text: `Free Trial Button Clicked!\n\nButton: ${ctaLabel}\nPage: ${data.page_url}\nTime: ${timestamp} PST\nReferrer: ${data.referrer || "direct"}\n\nCheck for new signups at https://app.relius.ai/admin/users`,
  };

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailPayload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("CTA notification email failed:", errorText);
    return { success: false, error: "Failed to send notification" };
  }

  console.log("CTA notification email sent for:", data.cta_name);
  
  // Send Discord notification if webhook URL is configured
  if (env.DISCORD_WEBHOOK_URL) {
    try {
      await sendDiscordNotification(data, ctaLabel, timestamp, env.DISCORD_WEBHOOK_URL);
      console.log("Discord notification sent for:", data.cta_name);
    } catch (discordError) {
      console.error("Failed to send Discord notification:", discordError);
      // Don't fail the whole request if Discord fails
    }
  }
  
  return { success: true };
}

// Send Discord notification to marketing channel
async function sendDiscordNotification(
  data: CTANotification,
  ctaLabel: string,
  timestamp: string,
  webhookUrl: string
): Promise<void> {
  // Extract domain from referrer for cleaner display
  let referrerDisplay = "Direct";
  if (data.referrer) {
    try {
      const url = new URL(data.referrer);
      referrerDisplay = url.hostname;
      // Remove www. prefix
      referrerDisplay = referrerDisplay.replace(/^www\./, '');
    } catch {
      referrerDisplay = data.referrer;
    }
  }

  // Create Discord embed
  const discordPayload = {
    username: "Relius Free Trial Bot",
    avatar_url: "https://relius.ai/favicon.ico",
    embeds: [
      {
        title: "🚀 Free Trial Button Clicked!",
        color: 0x10b981, // Green color
        fields: [
          {
            name: "Button Location",
            value: ctaLabel,
            inline: true
          },
          {
            name: "Page",
            value: `[${new URL(data.page_url).pathname}](${data.page_url})`,
            inline: true
          },
          {
            name: "Time",
            value: timestamp,
            inline: true
          },
          {
            name: "Referrer",
            value: referrerDisplay,
            inline: true
          },
          {
            name: "CTA Name",
            value: `\`${data.cta_name}\``,
            inline: true
          }
        ],
        footer: {
          text: "Relius Marketing Automation",
          icon_url: "https://relius.ai/favicon.ico"
        },
        timestamp: new Date(data.timestamp).toISOString()
      }
    ]
  };

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(discordPayload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Discord webhook failed: ${response.status} - ${errorText}`);
  }
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count++;
  return true;
}

// Check CTA-specific rate limit
function checkCTARateLimit(ip: string): boolean {
  const now = Date.now();
  const key = `cta:${ip}`;
  const record = rateLimitMap.get(key);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + CTA_RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= CTA_RATE_LIMIT_MAX) {
    return false;
  }

  record.count++;
  return true;
}

// Main handler with path-based routing
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get("Origin") || "";
    const cors = corsHeaders(origin, env.ALLOWED_ORIGIN);
    const url = new URL(request.url);
    const path = url.pathname;

    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }

    // Only allow POST
    if (request.method !== "POST") {
      return new Response(
        JSON.stringify({ success: false, error: "Method not allowed" }),
        {
          status: 405,
          headers: { ...cors, "Content-Type": "application/json" },
        }
      );
    }

    const clientIP = request.headers.get("CF-Connecting-IP") || "unknown";

    // Route: /notify-cta - CTA click notifications
    if (path === "/notify-cta") {
      // Rate limiting for CTA notifications
      if (!checkCTARateLimit(clientIP)) {
        return new Response(
          JSON.stringify({ success: false, error: "Rate limited" }),
          {
            status: 429,
            headers: { ...cors, "Content-Type": "application/json" },
          }
        );
      }

      try {
        const body = await request.json();
        const validation = validateCTAData(body);

        if (!validation.valid || !validation.data) {
          return new Response(
            JSON.stringify({ success: false, error: validation.error }),
            {
              status: 400,
              headers: { ...cors, "Content-Type": "application/json" },
            }
          );
        }

        // Send notification (fire-and-forget style, but we await for logging)
        const result = await sendCTANotification(validation.data, env);

        return new Response(
          JSON.stringify({ success: result.success }),
          {
            status: result.success ? 200 : 500,
            headers: { ...cors, "Content-Type": "application/json" },
          }
        );
      } catch (error) {
        console.error("CTA notification error:", error);
        return new Response(
          JSON.stringify({ success: false, error: "Failed to process" }),
          {
            status: 500,
            headers: { ...cors, "Content-Type": "application/json" },
          }
        );
      }
    }

    // Route: / or /contact - Contact form submission (default)
    // Rate limiting for contact form
    if (!checkRateLimit(clientIP)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Too many requests. Please try again later.",
        }),
        {
          status: 429,
          headers: { ...cors, "Content-Type": "application/json" },
        }
      );
    }

    try {
      // Parse request body
      const body = await request.json();

      // Validate form data
      const validation = validateFormData(body);
      if (!validation.valid || !validation.data) {
        return new Response(
          JSON.stringify({ success: false, error: validation.error }),
          {
            status: 400,
            headers: { ...cors, "Content-Type": "application/json" },
          }
        );
      }

      // Send email
      const emailResult = await sendEmail(validation.data, env);
      if (!emailResult.success) {
        return new Response(
          JSON.stringify({
            success: false,
            error: "Failed to process your request. Please try again.",
          }),
          {
            status: 500,
            headers: { ...cors, "Content-Type": "application/json" },
          }
        );
      }

      // Success response
      return new Response(
        JSON.stringify({
          success: true,
          message: "Thank you! We will be in touch within 24 hours.",
        }),
        {
          status: 200,
          headers: { ...cors, "Content-Type": "application/json" },
        }
      );
    } catch (error) {
      console.error("Worker error:", error);
      return new Response(
        JSON.stringify({
          success: false,
          error: "An unexpected error occurred. Please try again.",
        }),
        {
          status: 500,
          headers: { ...cors, "Content-Type": "application/json" },
        }
      );
    }
  },
};
