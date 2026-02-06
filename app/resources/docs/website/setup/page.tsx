import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Setup | Relius Documentation",
  description: "Configure your church's public website with custom branding, domain, and site settings.",
};

export default function WebsiteSetupPage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Website Setup</h1>

      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
        <strong>Quick Summary:</strong> Configure your church's branding, domain, and site settings to create a professional public website in minutes.
      </blockquote>

      <h2>Overview</h2>
      <p>
        Setting up your church website in Relius is straightforward and designed for people without technical expertise. You don't need to know HTML, CSS, or hire a developer. Simply fill in your church information, upload your logo, choose your colors, and you're ready to go live.
      </p>
      <p>
        This guide walks you through the essential settings to launch your website. Most churches complete this initial setup in 10-15 minutes. You can always come back and refine settings later—your website updates instantly when you make changes.
      </p>
      <p>
        Whether you're using a Relius subdomain (like yourchurch.relius.church) or connecting your own custom domain (yourchurch.org), the setup process is the same. Let's get your website online!
      </p>

      <h2>Key Concepts</h2>
      <ul>
        <li>
          <strong>Site Settings</strong>: Basic information like church name, address, contact details, and timezone.
        </li>
        <li>
          <strong>Branding</strong>: Your logo, color palette, and fonts that give your site a unique identity.
        </li>
        <li>
          <strong>Custom Domain</strong>: Using your own web address (yourchurch.org) instead of a Relius subdomain.
        </li>
        <li>
          <strong>DNS Records</strong>: Technical settings at your domain registrar that point your domain to Relius.
        </li>
        <li>
          <strong>SEO Settings</strong>: Information that helps search engines understand and rank your website.
        </li>
      </ul>

      <h2>Getting Started</h2>

      <h3>Step 1: Access Website Settings</h3>
      <p>
        Navigate to <strong>Settings</strong> → <strong>Website</strong> from your Relius dashboard. You'll see tabs for General, Branding, Domain, and SEO settings.
      </p>

      <h3>Step 2: Configure General Site Settings</h3>
      <p>
        Fill in your basic church information:
      </p>
      <ul>
        <li><strong>Church Name</strong>: Your full church name (appears in browser tabs and search results)</li>
        <li><strong>Tagline</strong>: A short phrase describing your church (e.g., "A community of grace in downtown Portland")</li>
        <li><strong>Primary Address</strong>: Your physical location (pulls from your church settings)</li>
        <li><strong>Contact Email</strong>: Where visitors can reach you</li>
        <li><strong>Phone Number</strong>: Formatted automatically for your region</li>
        <li><strong>Service Times</strong>: When people can visit (e.g., "Sundays at 9am & 11am")</li>
      </ul>
      <p>
        This information appears in your website footer and on your About page. Keep it current—especially service times and contact details.
      </p>

      <h3>Step 3: Upload Your Branding</h3>
      <p>
        Click the <strong>Branding</strong> tab to customize your visual identity:
      </p>
      <ul>
        <li>
          <strong>Logo Upload</strong>: Upload a PNG or SVG file with a transparent background. Ideal size: 300x100px or similar aspect ratio. Your logo appears in the top-left corner of every page.
        </li>
        <li>
          <strong>Favicon</strong>: A small icon that appears in browser tabs. Upload a square image (at least 512x512px). We'll generate all the sizes needed.
        </li>
        <li>
          <strong>Primary Color</strong>: Choose the main accent color for buttons, links, and highlights. This should match your church's brand. Use the color picker or enter a hex code (e.g., #3B82F6).
        </li>
        <li>
          <strong>Secondary Color</strong>: A complementary color for less prominent elements. Often a lighter or darker shade of your primary color.
        </li>
        <li>
          <strong>Font Style</strong>: Select from church-friendly font pairings. Options range from classic serif to modern sans-serif.
        </li>
      </ul>

      <details className="my-6">
        <summary className="cursor-pointer font-semibold text-gray-900">
          Advanced Branding Options
        </summary>
        <div className="mt-2 ml-4 text-gray-700">
          <p><strong>Custom CSS</strong> (Pro plan): Add custom styles to fine-tune spacing, typography, or layout.</p>
          <p><strong>Header Style</strong>: Choose between a traditional horizontal header or a modern centered layout.</p>
          <p><strong>Footer Content</strong>: Add custom text, social media links, or a copyright statement.</p>
          <p><strong>Hero Image</strong>: Upload a high-quality photo for your homepage hero section (recommended: 1920x1080px).</p>
        </div>
      </details>

      <h3>Step 4: Set Up Your Domain</h3>
      <p>
        By default, your website lives at <code>yourchurch.relius.church</code>. To use your own domain:
      </p>
      <ol>
        <li>Go to the <strong>Domain</strong> tab</li>
        <li>Enter your custom domain (e.g., yourchurch.org or www.yourchurch.org)</li>
        <li>Copy the DNS records we provide</li>
        <li>Log in to your domain registrar (GoDaddy, Namecheap, Google Domains, etc.)</li>
        <li>Add the DNS records to your domain settings</li>
        <li>Wait 24-48 hours for DNS propagation</li>
        <li>Return to Relius and click "Verify Domain"</li>
      </ol>
      <p>
        Need help? We have step-by-step guides for popular domain registrars, or reach out to support—we're happy to walk you through it.
      </p>

      <details className="my-6">
        <summary className="cursor-pointer font-semibold text-gray-900">
          Understanding DNS Records
        </summary>
        <div className="mt-2 ml-4 text-gray-700">
          <p>DNS (Domain Name System) records tell the internet where your website lives. You'll need to add two types:</p>
          <ul>
            <li><strong>A Record</strong>: Points your root domain (yourchurch.org) to Relius servers.</li>
            <li><strong>CNAME Record</strong>: Points your www subdomain (www.yourchurch.org) to Relius.</li>
          </ul>
          <p>Don't worry if this sounds technical—we provide exact values to copy and paste. Most registrars have similar interfaces for adding these records.</p>
        </div>
      </details>

      <h3>Step 5: Configure SEO Settings</h3>
      <p>
        Help people find your church on Google:
      </p>
      <ul>
        <li>
          <strong>Meta Description</strong>: A 150-character summary of your church (appears in search results)
        </li>
        <li>
          <strong>Keywords</strong>: Terms people might search (e.g., "church Portland", "family church downtown")
        </li>
        <li>
          <strong>Social Share Image</strong>: An image that appears when someone shares your site on Facebook or Twitter (1200x630px recommended)
        </li>
        <li>
          <strong>Google Analytics ID</strong>: Optional, if you want to track website traffic
        </li>
      </ul>

      <h2>Features</h2>

      <h3>Live Preview</h3>
      <p>
        As you update settings, click the <strong>Preview</strong> button to see your changes before publishing. You can view your site as it appears on desktop, tablet, and mobile devices.
      </p>

      <h3>Auto-Saving</h3>
      <p>
        Your changes save automatically as you type. You'll see a small "Saved" indicator when updates are complete. No need to remember to click Save!
      </p>

      <h3>Multi-Language Support</h3>
      <p>
        If your church serves multiple language communities, you can enable language switcher in the header. Visitors can choose their preferred language, and content will display accordingly (requires content translation in each language).
      </p>

      <h3>Accessibility Features</h3>
      <p>
        Relius websites are built with accessibility in mind:
      </p>
      <ul>
        <li>Keyboard navigation support</li>
        <li>Screen reader compatibility</li>
        <li>High-contrast mode option</li>
        <li>Adjustable text size controls</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li>
          <strong>Use a simple, clear logo</strong>: Intricate designs with small text don't scale well on mobile devices.
        </li>
        <li>
          <strong>Choose accessible colors</strong>: Ensure good contrast between text and background. Relius will warn you if contrast is too low.
        </li>
        <li>
          <strong>Keep your tagline short</strong>: 5-10 words is ideal. It should immediately communicate what makes your church unique.
        </li>
        <li>
          <strong>Test on mobile</strong>: Over 60% of church website visitors use phones. Check how your branding looks on small screens.
        </li>
        <li>
          <strong>Update service times seasonally</strong>: Remember to update if you switch to summer hours or holiday schedules.
        </li>
        <li>
          <strong>Use high-quality images</strong>: Blurry or pixelated photos detract from your site's professionalism.
        </li>
      </ul>

      <h2>Common Questions</h2>

      <p className="font-semibold mb-1">Q: How long does it take for my custom domain to work?</p>
      <p className="ml-4 mb-4">
        A: DNS changes typically propagate within 24-48 hours, but it can be as fast as a few hours. During this time, some visitors might see your old site while others see the new one. This is normal and temporary.
      </p>

      <p className="font-semibold mb-1">Q: Can I change my branding colors later?</p>
      <p className="ml-4 mb-4">
        A: Absolutely! You can update colors, logo, or any other branding element at any time. Changes appear instantly on your live website.
      </p>

      <p className="font-semibold mb-1">Q: What happens to my old website when I launch the Relius one?</p>
      <p className="ml-4 mb-4">
        A: If you point your domain to Relius, your old website will no longer be accessible at that address. Consider keeping a backup or running both sites simultaneously on different domains during a transition period.
      </p>

      <p className="font-semibold mb-1">Q: Do I need to buy hosting separately?</p>
      <p className="ml-4 mb-4">
        A: No! Website hosting is included with your Relius subscription. You just need to own a domain name (optional) if you want to use a custom address.
      </p>

      <p className="font-semibold mb-1">Q: Can I have multiple languages on my website?</p>
      <p className="ml-4 mb-4">
        A: Yes! Enable multi-language support in settings, then translate your content in each language. Visitors can switch languages using a dropdown in your site header.
      </p>

      <h2>Related Topics</h2>
      <ul>
        <li>
          <Link href="/resources/docs/website" className="text-blue-600 hover:underline">
            Public Website Overview
          </Link>
        </li>
        <li>
          <Link href="/resources/docs/website/pages" className="text-blue-600 hover:underline">
            Pages & Content
          </Link>
        </li>
        <li>
          <Link href="/resources/docs/website/giving" className="text-blue-600 hover:underline">
            Online Giving Page
          </Link>
        </li>
        <li>
          <Link href="/resources/docs/administration/church-settings" className="text-blue-600 hover:underline">
            Church Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}
