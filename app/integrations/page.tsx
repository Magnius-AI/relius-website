import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageSquare, CreditCard, Calendar, Zap, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Integrations",
  description: "Relius integrates with the tools you already use including email, SMS, payments, calendars, and AI providers.",
};

export default function IntegrationsPage() {
  const integrations = [
    {
      icon: Zap,
      name: "OpenAI / Anthropic",
      category: "AI Providers",
      description: "Power all AI features including sermon generation, content studio, and pastoral care AI.",
      status: "active",
    },
    {
      icon: Mail,
      name: "SendGrid / AWS SES",
      category: "Email",
      description: "Reliable email delivery for newsletters, reminders, and automated communications.",
      status: "planned",
    },
    {
      icon: MessageSquare,
      name: "Twilio",
      category: "SMS",
      description: "Send text message reminders, alerts, and two-way communication with members.",
      status: "planned",
    },
    {
      icon: CreditCard,
      name: "Stripe",
      category: "Payments",
      description: "Accept online donations, recurring giving, and event registrations securely.",
      status: "planned",
    },
    {
      icon: Calendar,
      name: "Google Calendar",
      category: "Calendar",
      description: "Sync events and services with Google Calendar for seamless scheduling.",
      status: "planned",
    },
    {
      icon: Database,
      name: "Supabase",
      category: "Database",
      description: "Secure, scalable PostgreSQL database powering all church data.",
      status: "active",
    },
  ];

  const statusConfig = {
    active: { label: "Active", variant: "success" as const },
    planned: { label: "Planned", variant: "secondary" as const },
    progress: { label: "In Progress", variant: "warning" as const },
  };

  return (
    <div className="py-14 px-6 lg:px-8\">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <h1 className="mb-4">Integrations</h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto">
            Relius connects with the tools you already use to create a seamless ministry workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {integrations.map((integration) => {
            const Icon = integration.icon;
            const status = statusConfig[integration.status as keyof typeof statusConfig];
            return (
              <Card key={integration.name} className="border-2 hover:border-primary hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant={status.variant}>{status.label}</Badge>
                  </div>
                  <CardTitle className="text-lg">{integration.name}</CardTitle>
                  <p className="text-sm text-gray-500">{integration.category}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-500 text-sm">{integration.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gray-50 rounded-2xl p-12 text-center">
          <h3 className="mb-4">Need a Custom Integration?</h3>
          <p className="text-lg text-slate-500 mb-6 max-w-2xl mx-auto">
            Enterprise plans include custom integration support. We can work with your team to connect Relius to your existing tools.
          </p>
          <Badge variant="secondary" className="text-sm">
            API Documentation Coming Soon
          </Badge>
        </div>
      </div>
    </div>
  );
}
