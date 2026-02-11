import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pages & Content | Relius Documentation",
  description: "Manage your church website's pages, from homepage to custom content.",
};

export default function PagesContentPage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Pages & Content</h1>

      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
        <strong>Quick Summary:</strong> Manage your website's pages—homepage, about, events, sermons, and custom content—all pulling from your Relius data.
      </blockquote>

      <h2>Overview</h2>
      <p>
        Your Relius website comes with essential pages ready to go: a welcoming homepage, an informative about page, a dynamic events calendar, a sermon archive, and more. The beauty of this system is that most pages update automatically from data you're already managing in Relius.
      </p>
      <p>
        When you add an event to your calendar, it appears on your public events page. When you upload a sermon, it shows up in your sermon archive. When you update staff information, your about page reflects the changes. This means less maintenance, fewer mistakes, and more time for ministry.
      </p>
      <p>
        You also have the flexibility to create custom pages—for beliefs, ministries, history, or anything else your church needs. Use the built-in rich-text editor to add text, images, videos, and formatted content without touching code.
      </p>

      <h2>Key Concepts</h2>
      <ul>
        <li>
          <strong>Dynamic Pages</strong>: Pages that pull live data from Relius (events, sermons, staff).
        </li>
        <li>
          <strong>Static Pages</strong>: Custom pages with content you write and maintain yourself.
        </li>
        <li>
          <strong>Navigation Menu</strong>: The links that appear in your website header.
        </li>
        <li>
          <strong>Page Visibility</strong>: Choose whether a page is published (visible to everyone) or draft (hidden from public).
        </li>
        <li>
          <strong>Rich-Text Editor</strong>: A word-processor-like interface for formatting content without HTML.
        </li>
      </ul>

      <h2>Getting Started</h2>

      <h3>Step 1: Review Default Pages</h3>
      <p>
        Navigate to <strong>Website</strong> → <strong>Pages</strong> to see all available pages. Each page has an on/off toggle and an edit button. Start by reviewing what's already there:
      </p>
      <ul>
        <li><strong>Homepage</strong>: Your site's front door</li>
        <li><strong>About</strong>: Church story, beliefs, and staff</li>
        <li><strong>Events</strong>: Public calendar with upcoming events</li>
        <li><strong>Sermons</strong>: Archive of messages with audio/video</li>
        <li><strong>Give</strong>: Online giving page (covered in separate guide)</li>
        <li><strong>Contact</strong>: Location, hours, and contact form</li>
      </ul>

      <h3>Step 2: Customize Your Homepage</h3>
      <p>
        Click <strong>Edit</strong> next to Homepage. You'll find several customizable sections:
      </p>
      <ul>
        <li>
          <strong>Hero Section</strong>: A large, eye-catching banner with headline, subheadline, background image, and call-to-action button
        </li>
        <li>
          <strong>Welcome Message</strong>: A brief introduction to your church (2-3 paragraphs)
        </li>
        <li>
          <strong>Featured Events</strong>: Automatically displays your next 3 upcoming events
        </li>
        <li>
          <strong>Recent Sermon</strong>: Shows the latest message from your sermon archive
        </li>
        <li>
          <strong>Call-to-Action Blocks</strong>: Highlight giving, small groups, or visitor info
        </li>
      </ul>
      <p>
        Fill in the text fields, upload a hero image (1920x1080px recommended), and arrange sections in the order that makes sense for your church.
      </p>

      <h3>Step 3: Update Your About Page</h3>
      <p>
        The About page has several components:
      </p>
      <ul>
        <li>
          <strong>Our Story</strong>: Write your church's history and mission (use the rich-text editor)
        </li>
        <li>
          <strong>What We Believe</strong>: Add bullet points or paragraphs about core beliefs
        </li>
        <li>
          <strong>Staff Directory</strong>: Automatically pulls from your People → Staff in Relius. Add staff photos, titles, and bios in the People section, and they appear here instantly.
        </li>
        <li>
          <strong>Leadership Team</strong>: Highlight elders, deacons, or board members
        </li>
      </ul>
      <p>
        Pro tip: Keep staff bios between 50-100 words. Visitors want to know who you are, not read a full biography.
      </p>

      <h3>Step 4: Configure Events & Sermons Pages</h3>
      <p>
        These pages are mostly automatic but have a few settings:
      </p>
      <p>
        <strong>Events Page</strong>:
      </p>
      <ul>
        <li>Choose calendar view (grid, list, or both)</li>
        <li>Filter which event categories appear (e.g., hide internal events)</li>
        <li>Enable/disable registration buttons</li>
      </ul>
      <p>
        <strong>Sermons Page</strong>:
      </p>
      <ul>
        <li>Display format (grid of sermon cards or list view)</li>
        <li>Show audio player, video embed, or both</li>
        <li>Enable sermon series grouping</li>
        <li>Add sermon notes/study guide downloads</li>
      </ul>
      <p>
        When you publish a sermon in Relius, it automatically appears here. No extra steps needed.
      </p>

      <h2>Features</h2>

      <h3>Creating Custom Pages</h3>
      <p>
        Need a page for your Beliefs, Ministries, History, or FAQ? Click <strong>Add Custom Page</strong> and you'll get:
      </p>
      <ul>
        <li><strong>Page Title</strong>: What appears in navigation and as the page heading</li>
        <li><strong>URL Slug</strong>: The web address (e.g., /beliefs or /our-ministries)</li>
        <li><strong>Rich-Text Content</strong>: Write and format your content using the editor</li>
        <li><strong>Featured Image</strong>: Optional banner image at the top</li>
        <li><strong>Visibility</strong>: Published or draft</li>
      </ul>
      <p>
        Use the toolbar to format text (bold, italic, headings), insert images, embed videos, create lists, and add links. It works like Google Docs or Microsoft Word.
      </p>

      <details className="my-6">
        <summary className="cursor-pointer font-semibold text-gray-900">
          Advanced Rich-Text Features
        </summary>
        <div className="mt-2 ml-4 text-gray-700">
          <p><strong>Embed YouTube Videos</strong>: Paste a YouTube URL and it converts to an embedded player.</p>
          <p><strong>Image Galleries</strong>: Upload multiple images to create a photo gallery with lightbox view.</p>
          <p><strong>Buttons & CTAs</strong>: Add styled buttons that link to registration forms or external sites.</p>
          <p><strong>Columns</strong>: Create two or three-column layouts for comparing information.</p>
          <p><strong>Accordion Sections</strong>: Collapsible content blocks for FAQs or lengthy information.</p>
        </div>
      </details>

      <h3>Managing Navigation</h3>
      <p>
        Your navigation menu (the links at the top of every page) is managed in <strong>Website</strong> → <strong>Navigation</strong>:
      </p>
      <ul>
        <li>Drag and drop to reorder menu items</li>
        <li>Show/hide pages from the menu (useful for landing pages you link to directly)</li>
        <li>Create dropdown menus for grouped pages (e.g., "About" dropdown with Our Story, Staff, Beliefs)</li>
        <li>Add external links (like your church's social media)</li>
      </ul>
      <p>
        Keep your navigation simple. 5-7 top-level items is ideal. If you have more, consider grouping them into dropdowns.
      </p>

      <h3>Staff Directory</h3>
      <p>
        The staff directory on your About page pulls directly from <strong>People</strong> → <strong>Staff</strong> in Relius. To add someone:
      </p>
      <ol>
        <li>Go to People and find the staff member's profile</li>
        <li>Add them to the "Staff" tag or category</li>
        <li>Upload a professional photo (square crop works best)</li>
        <li>Fill in their title and bio</li>
        <li>Choose whether to display their email address publicly</li>
      </ol>
      <p>
        They'll appear on your website within seconds. When someone leaves staff, remove the tag and they're instantly removed from the public site.
      </p>

      <h3>Contact Page</h3>
      <p>
        The contact page displays:
      </p>
      <ul>
        <li>Your church's address with an embedded Google Map</li>
        <li>Phone number and email (from your site settings)</li>
        <li>Service times and office hours</li>
        <li>Optional contact form for visitor inquiries</li>
      </ul>
      <p>
        When someone submits the contact form, it creates a new contact in your Relius People directory and can trigger a follow-up workflow.
      </p>

      <h2>Best Practices</h2>
      <ul>
        <li>
          <strong>Keep homepages focused</strong>: Your homepage should answer "What's happening here?" within 3 seconds. Feature upcoming events and clear next steps.
        </li>
        <li>
          <strong>Update staff photos regularly</strong>: Outdated headshots create a stale impression. Refresh them every 1-2 years.
        </li>
        <li>
          <strong>Write for visitors, not members</strong>: Assume people visiting your website don't know church lingo. Explain what "small groups" or "midweek service" means.
        </li>
        <li>
          <strong>Mobile-first thinking</strong>: Most visitors will see your site on a phone. Keep paragraphs short, use large buttons, and avoid tiny text.
        </li>
        <li>
          <strong>Refresh sermon archives monthly</strong>: Delete or archive very old sermons so the page doesn't become overwhelming.
        </li>
        <li>
          <strong>Use high-quality images</strong>: Photos of real people from your church (with permission) are more engaging than stock photos.
        </li>
      </ul>

      <h2>Common Questions</h2>

      <p className="font-semibold mb-1">Q: Can I hide a page temporarily without deleting it?</p>
      <p className="ml-4 mb-4">
        A: Yes! Toggle any page to "Draft" mode and it will be hidden from your public site but remain editable in your admin panel.
      </p>

      <p className="font-semibold mb-1">Q: How do I add a photo gallery?</p>
      <p className="ml-4 mb-4">
        A: Create a custom page, then use the rich-text editor's image gallery feature. Upload multiple images and they'll display in a grid with lightbox viewing.
      </p>

      <p className="font-semibold mb-1">Q: Can I password-protect certain pages?</p>
      <p className="ml-4 mb-4">
        A: Not currently. All published pages are publicly accessible. If you need member-only content, consider using the member portal or email communications instead.
      </p>

      <p className="font-semibold mb-1">Q: What if I want a completely custom page design?</p>
      <p className="ml-4 mb-4">
        A: While you can't change the underlying page templates, the rich-text editor offers substantial flexibility with columns, images, videos, buttons, and more. For highly custom needs, consider embedding external content via iframes.
      </p>

      <p className="font-semibold mb-1">Q: How do I add social media icons to my site?</p>
      <p className="ml-4 mb-4">
        A: Go to <strong>Settings</strong> → <strong>Website</strong> → <strong>Social Media</strong> and add your Facebook, Instagram, Twitter, and YouTube URLs. Icons will appear in your footer automatically.
      </p>

      <h2>Related Topics</h2>
      <ul>
        <li>
          <Link href="/resources/docs/website" className="text-blue-600 hover:underline">
            Public Website Overview
          </Link>
        </li>
        <li>
          <Link href="/resources/docs/website/setup" className="text-blue-600 hover:underline">
            Website Setup
          </Link>
        </li>
        <li>
          <Link href="/resources/docs/events/scheduler" className="text-blue-600 hover:underline">
            Events Scheduler
          </Link>
        </li>
        <li>
          <Link href="/resources/docs/people/directory" className="text-blue-600 hover:underline">
            Member Directory
          </Link>
        </li>
        <li>
          <Link href="/resources/docs/services/service-planning" className="text-blue-600 hover:underline">
            Service Planning (Sermons)
          </Link>
        </li>
      </ul>
    </div>
  );
}
