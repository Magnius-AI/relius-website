// Test script to verify worker endpoints
const workerUrl = "https://relius-contact-form.kishor-panthi00.workers.dev";

async function testEndpoints() {
  console.log("Testing worker endpoints...");
  console.log("Worker URL:", workerUrl);
  
  // Test 1: Contact form endpoint
  console.log("\n1. Testing contact form endpoint...");
  try {
    const formResponse = await fetch(workerUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Test User",
        email: "test@example.com",
        church: "Test Church",
        memberSize: "100-250",
        goals: "Testing the contact form endpoint"
      })
    });
    console.log("Contact form status:", formResponse.status);
    console.log("Contact form response:", await formResponse.text());
  } catch (error) {
    console.log("Contact form error:", error.message);
  }
  
  // Test 2: CTA notification endpoint
  console.log("\n2. Testing CTA notification endpoint...");
  try {
    const ctaResponse = await fetch(`${workerUrl}/notify-cta`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cta_name: "start_free_trial_hero",
        page_url: "https://relius.ai",
        timestamp: new Date().toISOString(),
        referrer: "https://test.com"
      })
    });
    console.log("CTA notification status:", ctaResponse.status);
    console.log("CTA notification response:", await ctaResponse.text());
  } catch (error) {
    console.log("CTA notification error:", error.message);
  }
  
  console.log("\n✅ Tests completed!");
}

testEndpoints();