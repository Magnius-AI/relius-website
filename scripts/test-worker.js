// Smoke test the public Worker endpoints.
const workerUrl = (process.env.NEXT_PUBLIC_WORKER_URL || "https://contact-form.relius.workers.dev").replace(/\/+$/, "");

async function readResponse(response) {
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

async function testEndpoints() {
  console.log("Testing worker endpoints");
  console.log("Worker URL:", workerUrl);

  console.log("\n1. Contact form endpoint");
  try {
    const formResponse = await fetch(`${workerUrl}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Test User",
        email: "test@example.com",
        church: "Test Church",
        memberSize: "100-250",
        goals: "Testing the contact form endpoint",
        honeypot: "",
      }),
    });
    console.log("Status:", formResponse.status);
    console.log("Response:", await readResponse(formResponse));
  } catch (error) {
    console.log("Contact form error:", error.message);
  }

  console.log("\n2. CTA notification endpoint");
  try {
    const ctaResponse = await fetch(`${workerUrl}/notify-cta`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cta_name: "get_started_free_hero",
        page_url: "https://relius.ai",
        timestamp: new Date().toISOString(),
        referrer: "https://test.com",
      }),
    });
    console.log("Status:", ctaResponse.status);
    console.log("Response:", await readResponse(ctaResponse));
  } catch (error) {
    console.log("CTA notification error:", error.message);
  }

  console.log("\nWorker smoke test complete");
}

testEndpoints();
