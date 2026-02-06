import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Youtube, Mail } from "lucide-react";
import { NewsletterForm } from "@/components/forms/newsletter-form";

export function Footer() {
  const footerLinks = {
    product: [
      { name: "Features", href: "/features/" },
      { name: "AI Features", href: "/ai/" },
      { name: "Pricing", href: "/pricing/" },
      { name: "Security", href: "/security/" },
    ],
    switchToRelius: [
      { name: "Migration Hub", href: "/switch/" },
      { name: "Planning Center Alternative", href: "/switch/planning-center/" },
      { name: "ChurchTrac Alternative", href: "/switch/churchtrac/" },
      { name: "Tithe.ly Alternative", href: "/switch/tithely/" },
    ],
    resources: [
      { name: "Use Cases", href: "/use-cases/" },
      { name: "Docs", href: "/resources/docs/" },
      { name: "Documentation", href: "/resources/docs/" },
      { name: "Blog", href: "/blog/" },
      { name: "Support", href: "/contact/" },
    ],
    company: [
      { name: "About", href: "/about/" },
      { name: "Contact", href: "/contact/" },
      { name: "Book a Demo", href: "/contact/" },
      { name: "Privacy Policy", href: "/privacy/" },
      { name: "Terms of Service", href: "/terms/" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "YouTube", href: "#", icon: Youtube },
  ];

  return (
    <footer className="bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="container-width py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="p-2 rounded-xl bg-white border border-slate-100 shadow-sm transition-all group-hover:shadow-md group-hover:border-primary-100">
                <Image
                  src="/relius_emblem_circle.png"
                  alt="Relius Emblem"
                  width={40}
                  height={40}
                  className="transition-transform group-hover:scale-105"
                />
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">Relius</span>
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
              The modern Church Management System with built-in AI. Empowering churches to focus on people, not paperwork.
            </p>

            {/* Newsletter */}
            <div className="pt-2">
              <h4 className="text-sm font-semibold text-slate-900 mb-3">
                Ministry insights, delivered monthly
              </h4>
              <NewsletterForm variant="compact" className="max-w-xs" />
              <p className="text-xs text-slate-500 mt-2">No spam, unsubscribe anytime.</p>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="mailto:support@relius.ai"
                className="text-slate-400 hover:text-primary transition-colors"
                aria-label="Email support"
              >
                <Mail className="h-5 w-5" />
              </a>
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-slate-400 hover:text-primary transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-4">Switch to Relius</h3>
              <ul className="space-y-3">
                {footerLinks.switchToRelius.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-8 flex items-center justify-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Relius. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
