import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Public Website | Relius Documentation",
  description: "Create a beautiful, functional website for your church with Relius.",
};

export default function WebsitePage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Public Website</h1>

      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
        <strong>Quick Summary:</strong> Give your church a modern, mobile-friendly website that updates automatically from your Relius data.
      </blockquote>

      <h2>Overview</h2>
      <p>
        Your church website is often the first impression visitors get of your community. With Relius, you don't need to hire a web developer or wrestle with website builders. Your public website is built right in, pulling from the data you're already managing—events, staff, sermons, and more.
      </p>
      <p>
        The best part? When you update an event in Relius, it automatically appears on your website. When you add a new staff member, their profile goes live instantly. No duplicate data entry, no waiting for IT support, no outdated information.
      </p>
      <p>
        Your Relius website is responsive (looks great on phones and tablets), fast, accessible, and designed specifically for churches. You can customize colors, add your logo, connect your own domain, and even embed your online giving page anywhere on the web.
      </p>

      <h2>Key Concepts</h2>
      <ul>
        <li>
          <strong>Custom Domain</strong>: Use your own church domain (like yourchurch.org) instead of a Relius subdomain.
        </li>
        <li>
          <strong>Dynamic Content</strong>: Website pages pull live data from your Relius account, so they're always up to date.
        </li>
        <li>
          <strong>Responsive Design</strong>: Your site automatically adapts to any screen size—desktop, tablet, or phone.
        </li>
        <li>
          <strong>Embedded Pages</strong>: Use iframes to embed your Relius giving page or event calendar on external websites.
        </li>
      </ul>

      <h2>What's Included</h2>
      <p>Your Relius public website comes with several ready-to-go pages:</p>
      
      <div className="grid gap-4 my-6">
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="mt-0 mb-2 text-lg font-semibold">Homepage</h3>
          <p className="mb-0 text-sm text-gray-700">
            Welcome visitors with your church's mission, upcoming events, and a call to action. Fully customizable.
          </p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="mt-0 mb-2 text-lg font-semibold">About Page</h3>
          <p className="mb-0 text-sm text-gray-700">
            Share your church's story, beliefs, and leadership team with auto-updating staff profiles.
          </p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="mt-0 mb-2 text-lg font-semibold">Events Calendar</h3>
          <p className="mb-0 text-sm text-gray-700">
            Display your events in a clean calendar view with registration links. Updates automatically from your event data.
          </p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="mt-0 mb-2 text-lg font-semibold">Sermons</h3>
          <p className="mb-0 text-sm text-gray-700">
            Showcase recent messages with audio, video, and downloadable notes. Perfect for members who missed a Sunday.
          </p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="mt-0 mb-2 text-lg font-semibold">Online Giving</h3>
          <p className="mb-0 text-sm text-gray-700">
            A secure, beautiful giving page where members can give one-time or set up recurring donations.
          </p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="mt-0 mb-2 text-lg font-semibold">Custom Pages</h3>
          <p className="mb-0 text-sm text-gray-700">
            Need a Beliefs page? Ministries overview? Add custom pages using a simple rich-text editor.
          </p>
        </div>
      </div>

      <h2>Getting Started</h2>
      
      <h3>Step 1: Set Up Your Site Settings</h3>
      <p>
        Start by configuring your church name, logo, colors, and basic information. This takes about 5 minutes and gives your site a branded look.
      </p>
      <p>
        <Link href="/resources/docs/website/setup" className="text-blue-600 hover:underline">
          → Read the Website Setup guide
        </Link>
      </p>

      <h3>Step 2: Configure Your Pages</h3>
      <p>
        Decide which pages you want to show, customize their content, and arrange them in your navigation menu. You can enable or disable pages at any time.
      </p>
      <p>
        <Link href="/resources/docs/website/pages" className="text-blue-600 hover:underline">
          → Read the Pages & Content guide
        </Link>
      </p>

      <h3>Step 3: Launch Your Giving Page</h3>
      <p>
        Connect Stripe for payment processing, customize your giving page colors and messaging, then publish it. You can even embed it on other websites.
      </p>
      <p>
        <Link href="/resources/docs/website/giving" className="text-blue-600 hover:underline">
          → Read the Online Giving Page guide
        </Link>
      </p>

      <h3>Step 4: Connect Your Domain (Optional)</h3>
      <p>
        If you own a domain like yourchurch.org, you can point it to your Relius website. We'll walk you through the DNS settings.
      </p>

      <h2>Why Use Relius for Your Website?</h2>
      <ul>
        <li>
          <strong>No duplicate data entry</strong>: Update once in Relius, and it appears everywhere—your admin dashboard, mobile app, and public website.
        </li>
        <li>
          <strong>Always current</strong>: No more "oops, we forgot to update the website" moments. Events, staff, and sermons update automatically.
        </li>
        <li>
          <strong>Mobile-first design</strong>: Over 60% of church website visitors use phones. Your Relius site looks great on every device.
        </li>
        <li>
          <strong>Built for churches</strong>: Every feature—from sermon archives to online giving—is designed with ministry in mind.
        </li>
        <li>
          <strong>One platform, one login</strong>: Manage your website from the same place you manage your people, events, and donations.
        </li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li>
          <strong>Use high-quality images</strong>: Upload a clear logo and vibrant photos for your homepage hero section.
        </li>
        <li>
          <strong>Keep navigation simple</strong>: 5-7 menu items is ideal. Too many options overwhelm visitors.
        </li>
        <li>
          <strong>Test on mobile</strong>: Most first-time visitors will see your site on their phone. Check how it looks!
        </li>
        <li>
          <strong>Update your About page</strong>: When pastoral staff changes, update Relius once and your website updates automatically.
        </li>
        <li>
          <strong>Feature upcoming events</strong>: Use your homepage to highlight what's happening this week. It drives engagement.
        </li>
      </ul>

      <h2>Common Questions</h2>
      
      <p className="font-semibold mb-1">Q: Can I use my own domain name?</p>
      <p className="ml-4 mb-4">
        A: Yes! You can connect your existing domain (like yourchurch.org) to your Relius website. We'll provide DNS settings to add at your domain registrar.
      </p>

      <p className="font-semibold mb-1">Q: What if I already have a website?</p>
      <p className="ml-4 mb-4">
        A: You have options! You can replace your old site entirely, run both side-by-side, or just embed specific Relius pages (like your giving page or event calendar) into your existing site.
      </p>

      <p className="font-semibold mb-1">Q: Can I customize the design beyond colors and logo?</p>
      <p className="ml-4 mb-4">
        A: Currently, Relius websites use a consistent, church-friendly design framework. You can customize colors, fonts, logo, and content. Full custom design isn't available yet, but it's on our roadmap.
      </p>

      <p className="font-semibold mb-1">Q: How do I add a blog or news section?</p>
      <p className="ml-4 mb-4">
        A: Use the Announcements feature to post news and updates. These can be displayed on your website's homepage or a dedicated announcements page.
      </p>

      <p className="font-semibold mb-1">Q: Is my website automatically secure (HTTPS)?</p>
      <p className="ml-4 mb-4">
        A: Yes! All Relius websites use HTTPS encryption by default, keeping your visitors' data secure.
      </p>

      <h2>Related Topics</h2>
      <ul>
        <li>
          <Link href="/resources/docs/website/setup" className="text-blue-600 hover:underline">
            Website Setup
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
          <Link href="/resources/docs/events/registration" className="text-blue-600 hover:underline">
            Event Registration
          </Link>
        </li>
        <li>
          <Link href="/resources/docs/communications/announcements" className="text-blue-600 hover:underline">
            Announcements
          </Link>
        </li>
      </ul>
    </div>
  );
}
