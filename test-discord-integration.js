// Test the updated worker with Discord integration
const workerUrl = "https://relius-contact-form.kishor-panthi00.workers.dev";

async function testWithMockDiscord() {
  console.log("Testing updated worker with Discord integration...\n");
  
  // Test CTA notification
  const testData = {
    cta_name: "start_free_trial_hero",
    page_url: "https://relius.ai/pricing",
    timestamp: new Date().toISOString(),
    referrer: "https://google.com/search?q=church+management+software",
    user_agent: "Mozilla/5.0 (Test) AppleWebKit/537.36"
  };
  
  console.log("Sending test notification:", JSON.stringify(testData, null, 2));
  
  try {
    const response = await fetch(`${workerUrl}/notify-cta`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(testData)
    });
    
    const result = await response.json();
    console.log("\n✅ Worker response:", result);
    console.log("Status:", response.status);
    
    if (response.status === 200) {
      console.log("\n🎉 Success! The notification was sent.");
      console.log("If DISCORD_WEBHOOK_URL is set, a Discord message should appear in #relius-marketing.");
      console.log("\nEmail should be sent to: contact@relius.ai");
    }
    
  } catch (error) {
    console.error("❌ Test failed:", error.message);
  }
}

// Also test what the Discord payload would look like
function previewDiscordMessage() {
  console.log("\n📋 Preview of Discord message that would be sent:");
  
  const data = {
    cta_name: "start_free_trial_hero",
    page_url: "https://relius.ai/pricing",
    timestamp: new Date().toISOString(),
    referrer: "https://google.com/search?q=church+management+software"
  };
  
  const ctaLabel = "Hero Section";
  const timestamp = new Date(data.timestamp).toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    dateStyle: "medium",
    timeStyle: "short",
  });
  
  let referrerDisplay = "Direct";
  if (data.referrer) {
    try {
      const url = new URL(data.referrer);
      referrerDisplay = url.hostname.replace(/^www\./, '');
    } catch {
      referrerDisplay = data.referrer;
    }
  }
  
  console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 **Free Trial Button Clicked!**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
**Button Location:** ${ctaLabel}
**Page:** /pricing
**Time:** ${timestamp} PST
**Referrer:** ${referrerDisplay}
**CTA Name:** \`${data.cta_name}\`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
}

testWithMockDiscord();
previewDiscordMessage();