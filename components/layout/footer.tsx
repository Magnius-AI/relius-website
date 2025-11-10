import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  const footerLinks = {
    product: [
      { name: "Features", href: "/features" },
      { name: "AI Features", href: "/ai" },
      { name: "Pricing", href: "/pricing" },
      { name: "Integrations", href: "/integrations" },
      { name: "Security", href: "/security" },
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Book a Demo", href: "/contact" },
    ],
    resources: [
      { name: "Stories", href: "/stories" },
      { name: "Resources", href: "/resources" },
      { name: "Documentation", href: "/docs" },
      { name: "Blog", href: "/blog" },
      { name: "Support", href: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
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
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="p-2 rounded-xl bg-primary-100 transition-all group-hover:shadow-glow">
                <Image
                  src="/relius_emblem_circle.png"
                  alt="Relius Emblem"
                  width={48}
                  height={48}
                  className="transition-transform group-hover:scale-105 drop-shadow-sm"
                />
              </div>
              <span className="text-xl font-bold text-slate-900">Relius</span>
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed">
              The modern Church Management System with built-in AI. Empowering churches to focus on people, not paperwork.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-slate-600 hover:text-primary focus-visible:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900 mb-3">Product</h3>
            <ul className="space-y-2.5">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-primary focus-visible:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900 mb-3">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-primary focus-visible:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900 mb-3">Resources</h3>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-primary focus-visible:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900 mb-3">Legal</h3>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-primary focus-visible:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 space-y-2 text-center">
          <p className="text-sm font-semibold text-slate-600">Made for churches by people who care.</p>
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Relius. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
