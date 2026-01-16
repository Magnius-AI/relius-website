import { NextRequest, NextResponse } from "next/server";

const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY;
const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID;

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    // Check for required environment variables
    if (!BEEHIIV_API_KEY || !BEEHIIV_PUBLICATION_ID) {
      console.error("Missing beehiiv configuration");
      return NextResponse.json(
        { error: "Newsletter service not configured" },
        { status: 500 }
      );
    }

    // Subscribe to beehiiv
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${BEEHIIV_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: "website_footer",
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("beehiiv API error:", errorData);

      // Handle already subscribed case gracefully
      if (response.status === 409) {
        return NextResponse.json(
          { success: true, message: "You're already subscribed!" },
          { status: 200 }
        );
      }

      throw new Error("Failed to subscribe");
    }

    return NextResponse.json(
      { success: true, message: "Successfully subscribed to newsletter" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}
