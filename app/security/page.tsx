import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, Key, AlertTriangle, FileCheck, Server, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Security & Compliance",
  description: "Learn how Relius protects your church data with encryption, role-based access control, audit logs, and comprehensive security measures.",
  alternates: {
    canonical: "https://relius.ai/security/",
  },
  openGraph: {
    title: "Security & Compliance | Relius",
    description: "Enterprise-grade security for your church data. Encryption, RBAC, audit logs, and GDPR compliance.",
    url: "https://relius.ai/security/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Security & Compliance | Relius",
    description: "Enterprise-grade security for your church data. Encryption, RBAC, audit logs, and GDPR compliance.",
  },
  keywords: ["church data security", "church software compliance", "GDPR church", "church data encryption"],
};

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: Lock,
      title: "Encryption in Transit & at Rest",
      description: "All data is encrypted using industry-standard TLS 1.3 for transmission and AES-256 for storage.",
    },
    {
      icon: Users,
      title: "Role-Based Access Control (RBAC)",
      description: "Granular permissions system ensures users only see and modify data they're authorized to access.",
    },
    {
      icon: FileCheck,
      title: "Audit Logs",
      description: "Comprehensive logging of all data access and modifications for accountability and compliance.",
    },
    {
      icon: Eye,
      title: "Privacy Levels",
      description: "Individual members can control their data visibility with customizable privacy settings.",
    },
    {
      icon: Shield,
      title: "XSS & CSRF Protection",
      description: "Built-in protections against cross-site scripting and cross-site request forgery attacks.",
    },
    {
      icon: Key,
      title: "Soft Delete & Data Recovery",
      description: "Deleted data is soft-deleted and recoverable for 30 days, preventing accidental data loss.",
    },
    {
      icon: AlertTriangle,
      title: "Rate Limiting & Validation",
      description: "API rate limiting and input validation prevent abuse and ensure data integrity.",
    },
    {
      icon: Server,
      title: "Infrastructure Security",
      description: "Hosted on enterprise-grade infrastructure with automatic backups and disaster recovery.",
    },
  ];

  const complianceItems = [
    {
      title: "Data Protection",
      items: [
        "GDPR compliant data handling",
        "Right to access and deletion",
        "Data portability options",
        "Consent management",
        "Privacy-by-design architecture",
      ],
    },
    {
      title: "Security Practices",
      items: [
        "Regular security audits",
        "Penetration testing",
        "Vulnerability scanning",
        "Security patch management",
        "Incident response plan",
      ],
    },
    {
      title: "Access Control",
      items: [
        "Multi-factor authentication (planned)",
        "Session management",
        "Password complexity requirements",
        "Automatic session timeout",
        "IP whitelisting (Enterprise)",
      ],
    },
  ];

  return (
    <div className="py-14 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <Badge variant="default" className="mb-4">
            Enterprise-Grade Security
          </Badge>
          <h1 className="mb-4">Security & Compliance</h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto">
            Your data belongs to your church. We protect it with encryption, strict roles, audit trails, and privacy controls.
          </p>
        </div>

        <div className="mb-24">
          <h2 className="text-center mb-8">Security Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {securityFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="border-2">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-500 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mb-24 bg-gray-50 rounded-2xl p-12">
          <h2 className="text-center mb-8">Architecture & Best Practices</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h3 className="mb-4">Infrastructure</h3>
              <p className="text-slate-500 mb-4">
                Relius is built on modern, secure cloud infrastructure with automatic scaling, redundancy, and backups:
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary" aria-hidden="true">&bull;</span>
                  <span>Multi-region data replication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary" aria-hidden="true">&bull;</span>
                  <span>Automated daily backups</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary" aria-hidden="true">&bull;</span>
                  <span>99.9% uptime SLA (Enterprise)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary" aria-hidden="true">&bull;</span>
                  <span>DDoS protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary" aria-hidden="true">&bull;</span>
                  <span>Load balancing & auto-scaling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary" aria-hidden="true">&bull;</span>
                  <span>Disaster recovery procedures</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4">Application Security</h3>
              <p className="text-slate-500 mb-4">
                Every layer of Relius is designed with security in mind:
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary" aria-hidden="true">&bull;</span>
                  <span>Input sanitization and validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary" aria-hidden="true">&bull;</span>
                  <span>SQL injection prevention</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary" aria-hidden="true">&bull;</span>
                  <span>Secure API design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary" aria-hidden="true">&bull;</span>
                  <span>Rate limiting on all endpoints</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary" aria-hidden="true">&bull;</span>
                  <span>Dependency scanning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary" aria-hidden="true">&bull;</span>
                  <span>Security headers (CSP, HSTS)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4">Data Stewardship</h3>
              <p className="text-slate-500 mb-4">
                We take the responsibility of managing church data seriously:
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary" aria-hidden="true">&bull;</span>
                  <span>Data ownership remains with your church</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary" aria-hidden="true">&bull;</span>
                  <span>Export your data anytime</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary" aria-hidden="true">&bull;</span>
                  <span>No data selling or third-party sharing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary" aria-hidden="true">&bull;</span>
                  <span>Transparent privacy policies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary" aria-hidden="true">&bull;</span>
                  <span>Member consent management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary" aria-hidden="true">&bull;</span>
                  <span>Complete data deletion on request</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-center mb-8">Compliance & Best Practices</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {complianceItems.map((item) => (
              <Card key={item.title} className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.items.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span className="text-slate-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-primary-50 border-2 border-primary-200 rounded-2xl p-12">
          <h3 className="text-center mb-4">Responsible AI</h3>
          <p className="text-slate-600 text-center max-w-3xl mx-auto">
            Our AI features follow strict ethical guidelines: all data is anonymized before processing, AI outputs require human review before sending, and individual privacy settings are always respected. We believe AI should augment ministry, not replace the human touch.
          </p>
        </div>
      </div>
    </div>
  );
}


