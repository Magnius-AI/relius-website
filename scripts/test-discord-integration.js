// Smoke test the CTA notification path that can fan out to Discord when configured.
const workerUrl = (process.env.NEXT_PUBLIC_WORKER_URL || "https://contact-form.relius.workers.dev").replace(/\/+$/, "");

const testData = {
  cta_name: "get_started_free_hero",
  page_url: "https://relius.ai/pricing/",
  timestamp: new Date().toISOString(),
  referrer: "https://google.com/search?q=church+management+software",
  user_agent: "Mozilla/5.0 (Worker smoke test)",
};

async function testNotification() {
  console.log("Testing CTA notification endpoint");
  console.log("Worker URL:", workerUrl);
  console.log("Payload:", JSON.stringify(testData, null, 2));

  try {
    const response = await fetch(`${workerUrl}/notify-cta`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(testData),
    });

    const result = await response.json().catch(async () => response.text());
    console.log("Status:", response.status);
    console.log("Response:", result);
  } catch (error) {
    console.error("Test failed:", error.message);
  }
}

function previewDiscordMessage() {
  const timestamp = new Date(testData.timestamp).toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    dateStyle: "medium",
    timeStyle: "short",
  });

  let referrerDisplay = "Direct";
  if (testData.referrer) {
    try {
      referrerDisplay = new URL(testData.referrer).hostname.replace(/^www\./, "");
    } catch {
      referrerDisplay = testData.referrer;
    }
  }

  console.log("\nDiscord notification preview");
  console.log("----------------------------");
  console.log("Title: Free plan CTA clicked");
  console.log("Button location: Hero Section");
  console.log("Page: /pricing/");
  console.log("Time:", timestamp, "PST");
  console.log("Referrer:", referrerDisplay);
  console.log("CTA name:", testData.cta_name);
}

testNotification();
previewDiscordMessage();
