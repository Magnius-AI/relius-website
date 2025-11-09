"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  church: z.string().min(2, "Church name is required"),
  memberSize: z.string().min(1, "Please select a size"),
  currentTools: z.string().optional(),
  goals: z.string().min(10, "Please tell us a bit more about your goals"),
  honeypot: z.string().max(0),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", data);

    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
  };

  if (isSubmitted) {
    return (
      <Card className="border-2 border-green-200 bg-green-50">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-label="Success">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-700 mb-6">
            We've received your request and will be in touch within 24 hours to schedule your demo.
          </p>
          <Button variant="primary" onClick={() => setIsSubmitted(false)}>
            Submit Another Request
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="text-2xl">Book Your Demo</CardTitle>
        <p className="text-gray-600">Fill out the form below and we'll be in touch soon</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Your Name *
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="John Smith"
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="john@church.org"
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="church" className="block text-sm font-medium text-gray-700 mb-2">
              Church Name *
            </label>
            <input
              {...register("church")}
              type="text"
              id="church"
              aria-invalid={errors.church ? "true" : "false"}
              aria-describedby={errors.church ? "church-error" : undefined}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Grace Community Church"
            />
            {errors.church && (
              <p id="church-error" className="mt-1 text-sm text-red-600" role="alert">{errors.church.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="memberSize" className="block text-sm font-medium text-gray-700 mb-2">
              Approximate Member Size *
            </label>
            <select
              {...register("memberSize")}
              id="memberSize"
              aria-invalid={errors.memberSize ? "true" : "false"}
              aria-describedby={errors.memberSize ? "memberSize-error" : undefined}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Select a size</option>
              <option value="50-200">50-200 members</option>
              <option value="200-500">200-500 members</option>
              <option value="500-1000">500-1,000 members</option>
              <option value="1000-2500">1,000-2,500 members</option>
              <option value="2500-5000">2,500-5,000 members</option>
              <option value="5000+">5,000+ members</option>
            </select>
            {errors.memberSize && (
              <p id="memberSize-error" className="mt-1 text-sm text-red-600" role="alert">{errors.memberSize.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="currentTools" className="block text-sm font-medium text-gray-700 mb-2">
              Current Tools (Optional)
            </label>
            <input
              {...register("currentTools")}
              type="text"
              id="currentTools"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Planning Center, Excel, etc."
            />
          </div>

          <div>
            <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
              What are your goals? *
            </label>
            <textarea
              {...register("goals")}
              id="goals"
              rows={4}
              aria-invalid={errors.goals ? "true" : "false"}
              aria-describedby={errors.goals ? "goals-error" : undefined}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Tell us what you're hoping to achieve with Relius..."
            />
            {errors.goals && (
              <p id="goals-error" className="mt-1 text-sm text-red-600" role="alert">{errors.goals.message}</p>
            )}
          </div>

          <input
            {...register("honeypot")}
            type="text"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Book a Demo"}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
