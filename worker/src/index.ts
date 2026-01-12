/**
 * Relius Contact Form Worker
 * Handles form submissions from the static website and sends email via Resend
 */

export interface Env {
  RESEND_API_KEY: string;
  ALLOWED_ORIGIN: string;
  TO_EMAIL: string;
  FROM_EMAIL: string;
}

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

// Main handler
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get("Origin") || "";
    const cors = corsHeaders(origin, env.ALLOWED_ORIGIN);

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

    // Rate limiting
    const clientIP = request.headers.get("CF-Connecting-IP") || "unknown";
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
