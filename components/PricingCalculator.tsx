"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, Users, Target, DollarSign } from "lucide-react";

interface CalculatorResult {
  tier: "starter" | "growth" | "aipro" | "enterprise";
  confidence: number; // 0-100
  reasons: string[];
}

export function PricingCalculator() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    churchSize: "",
    keyNeeds: [] as string[],
    budget: "",
  });
  const [result, setResult] = useState<CalculatorResult | null>(null);

  const churchSizeOptions = [
    { value: "small", label: "Under 150 members", icon: Users },
    { value: "medium", label: "150-500 members", icon: Users },
    { value: "large", label: "500-1,000 members", icon: Users },
    { value: "xlarge", label: "1,000+ members", icon: Users },
  ];

  const keyNeedsOptions = [
    { value: "basic", label: "Basic member management", tier: "starter" },
    { value: "pastoral", label: "Pastoral care & follow-ups", tier: "growth" },
    { value: "ai", label: "AI automation (save time)", tier: "aipro" },
    { value: "multisite", label: "Multi-site management", tier: "aipro" },
    { value: "branding", label: "Custom branding & SSO", tier: "enterprise" },
    { value: "compliance", label: "SOC 2 / HIPAA compliance", tier: "enterprise" },
  ];

  const budgetOptions = [
    { value: "budget", label: "Under $75/month", icon: DollarSign },
    { value: "moderate", label: "$75-$125/month", icon: DollarSign },
    { value: "flexible", label: "$125-$200/month", icon: DollarSign },
    { value: "premium", label: "$200+/month", icon: DollarSign },
  ];

  const tierDetails = {
    starter: {
      name: "Starter",
      price: "$49/month",
      annualPrice: "$499/year",
      tagline: "Essential Tools for Growing Churches",
      description: "Core church management features with unlimited members, events, and groups.",
      features: [
        "Unlimited members, events, groups",
        "Member directory & family management",
        "Event calendar with RSVP",
        "Donation tracking & analytics",
        "QR code check-in",
        "Public church website",
        "Email communications (500/month)",
        "Data migration wizard",
      ],
    },
    growth: {
      name: "Growth",
      price: "$99/month",
      annualPrice: "$1,009/year",
      tagline: "Complete Pastoral Care & Advanced Features",
      description: "Everything in Starter plus pastoral care, services, volunteer scheduling, and advanced communications.",
      features: [
        "Everything in Starter",
        "Pastoral care module",
        "Prayer request management",
        "Service planning & teams",
        "Volunteer scheduling",
        "Room rental management",
        "Unlimited email communications",
        "Advanced reporting",
        "Custom branding",
        "Priority email support",
      ],
    },
    aipro: {
      name: "AI Pro",
      price: "$149/month",
      annualPrice: "$1,519/year",
      tagline: "Full AI Suite: Save 10+ Hours Every Week",
      description: "Everything in Growth plus AI Sermon Planner, Content Studio, Pastoral Insights, Translation Console, and more.",
      features: [
        "Everything in Growth",
        "AI Sermon Planner (save 3-5 hrs/week)",
        "AI Content Studio (sermon → emails/social)",
        "AI Pastoral Insights (sentiment analysis)",
        "AI Volunteer Scheduler (smart matching)",
        "AI Donations Manager (churn prediction)",
        "Translation Console (50+ languages)",
        "Semantic Bible Search",
        "Phone support",
        "Custom Public Site Support",
      ],
    },
    enterprise: {
      name: "Enterprise",
      price: "Contact Us",
      annualPrice: "Custom Solution",
      tagline: "White-Labeling, Unlimited Sites, Dedicated Support",
      description: "Everything in AI Pro plus unlimited campuses, SSO, white-labeling, and dedicated account management.",
      features: [
        "Everything in AI Pro",
        "Unlimited sites/campuses",
        "White-labeling (remove Relius branding)",
        "Custom Website Creation - Fully synced",
        "Single Sign-On (SSO)",
        "Full API access",
        "Custom integrations",
        "Dedicated account manager",
        "Onboarding assistance",
        "99.9% uptime SLA",
      ],
    },
  };

  const calculateRecommendation = (): CalculatorResult => {
    const scores = {
      starter: 0,
      growth: 0,
      aipro: 0,
      enterprise: 0,
    };
    const reasons: string[] = [];

    // Church size scoring
    if (answers.churchSize === "small") {
      scores.starter += 40;
      scores.growth += 30;
      reasons.push("Your church size fits well with Starter or Growth");
    } else if (answers.churchSize === "medium") {
      scores.growth += 40;
      scores.aipro += 30;
      reasons.push("Growing churches benefit from Growth or AI Pro features");
    } else if (answers.churchSize === "large") {
      scores.aipro += 40;
      scores.enterprise += 30;
      reasons.push("Larger churches need advanced features and AI automation");
    } else if (answers.churchSize === "xlarge") {
      scores.enterprise += 50;
      scores.aipro += 20;
      reasons.push("Large organizations need Enterprise-grade tools");
    }

    // Key needs scoring
    answers.keyNeeds.forEach((need) => {
      const option = keyNeedsOptions.find((o) => o.value === need);
      if (option) {
        if (option.tier === "starter") scores.starter += 30;
        if (option.tier === "growth") {
          scores.growth += 30;
          scores.aipro += 10; // Growth features are in AI Pro too
        }
        if (option.tier === "aipro") {
          scores.aipro += 40;
          scores.enterprise += 10; // AI Pro features are in Enterprise too
        }
        if (option.tier === "enterprise") scores.enterprise += 50;

        reasons.push(`You need: ${option.label}`);
      }
    });

    // Budget scoring
    if (answers.budget === "budget") {
      scores.starter += 50;
      reasons.push("Budget-conscious choice: Starter gives you core features");
    } else if (answers.budget === "moderate") {
      scores.growth += 50;
      reasons.push("Growth tier fits your budget and unlocks pastoral tools");
    } else if (answers.budget === "flexible") {
      scores.aipro += 50;
      reasons.push("AI Pro delivers exceptional ROI within your budget");
    } else if (answers.budget === "premium") {
      scores.enterprise += 40;
      scores.aipro += 30;
      reasons.push("Premium budget allows for advanced features");
    }

    // Find highest score
    const maxScore = Math.max(scores.starter, scores.growth, scores.aipro, scores.enterprise);
    let recommendedTier: CalculatorResult["tier"] = "growth"; // Default
    if (maxScore === scores.starter) recommendedTier = "starter";
    if (maxScore === scores.growth) recommendedTier = "growth";
    if (maxScore === scores.aipro) recommendedTier = "aipro";
    if (maxScore === scores.enterprise) recommendedTier = "enterprise";

    // Calculate confidence (normalize to 100)
    const totalScore = scores.starter + scores.growth + scores.aipro + scores.enterprise;
    const confidence = totalScore > 0 ? Math.round((maxScore / totalScore) * 100) : 50;

    return {
      tier: recommendedTier,
      confidence,
      reasons: reasons.slice(0, 3), // Top 3 reasons
    };
  };

  const handleNext = () => {
    if (step === 3) {
      const recommendation = calculateRecommendation();
      setResult(recommendation);
    } else {
      setStep(step + 1);
    }
  };

  const handleReset = () => {
    setStep(1);
    setAnswers({ churchSize: "", keyNeeds: [], budget: "" });
    setResult(null);
  };

  const toggleNeed = (need: string) => {
    if (answers.keyNeeds.includes(need)) {
      setAnswers({ ...answers, keyNeeds: answers.keyNeeds.filter((n) => n !== need) });
    } else {
      setAnswers({ ...answers, keyNeeds: [...answers.keyNeeds, need] });
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Find Your Perfect Plan</CardTitle>
        <CardDescription className="text-lg">
          Answer a few questions to see which Relius tier fits your church best
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!result ? (
          <>
            {/* Progress Indicator */}
            <div className="flex justify-between mb-8">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`flex-1 h-2 mx-1 rounded-full transition-colors ${
                    s <= step ? "bg-blue-600" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>

            {/* Step 1: Church Size */}
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-center mb-6">
                  How many active members do you have?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {churchSizeOptions.map((option) => {
                    const Icon = option.icon;
                    return (
                      <button
                        key={option.value}
                        onClick={() => setAnswers({ ...answers, churchSize: option.value })}
                        className={`p-6 border-2 rounded-lg flex items-center gap-4 transition-all hover:shadow-md ${
                          answers.churchSize === option.value
                            ? "border-blue-600 bg-blue-50"
                            : "border-gray-200 hover:border-blue-300"
                        }`}
                      >
                        <Icon className="h-8 w-8 text-blue-600" />
                        <span className="text-lg font-medium">{option.label}</span>
                        {answers.churchSize === option.value && (
                          <CheckCircle2 className="h-6 w-6 text-blue-600 ml-auto" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 2: Key Needs */}
            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-center mb-6">
                  What's most important to your ministry?
                </h3>
                <p className="text-center text-gray-600 mb-6">Select all that apply</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {keyNeedsOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => toggleNeed(option.value)}
                      className={`p-4 border-2 rounded-lg flex items-center gap-3 transition-all hover:shadow-md ${
                        answers.keyNeeds.includes(option.value)
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                          answers.keyNeeds.includes(option.value)
                            ? "bg-blue-600 border-blue-600"
                            : "border-gray-300"
                        }`}
                      >
                        {answers.keyNeeds.includes(option.value) && (
                          <CheckCircle2 className="h-4 w-4 text-white" />
                        )}
                      </div>
                      <span className="text-base font-medium">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Budget */}
            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-center mb-6">
                  What's your monthly software budget?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {budgetOptions.map((option) => {
                    const Icon = option.icon;
                    return (
                      <button
                        key={option.value}
                        onClick={() => setAnswers({ ...answers, budget: option.value })}
                        className={`p-6 border-2 rounded-lg flex items-center gap-4 transition-all hover:shadow-md ${
                          answers.budget === option.value
                            ? "border-blue-600 bg-blue-50"
                            : "border-gray-200 hover:border-blue-300"
                        }`}
                      >
                        <Icon className="h-8 w-8 text-blue-600" />
                        <span className="text-lg font-medium">{option.label}</span>
                        {answers.budget === option.value && (
                          <CheckCircle2 className="h-6 w-6 text-blue-600 ml-auto" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
              >
                Back
              </Button>
              <Button
                onClick={handleNext}
                disabled={
                  (step === 1 && !answers.churchSize) ||
                  (step === 2 && answers.keyNeeds.length === 0) ||
                  (step === 3 && !answers.budget)
                }
              >
                {step === 3 ? "See Recommendation" : "Next"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </>
        ) : (
          <>
            {/* Results */}
            <div className="space-y-6">
              <div className="text-center mb-6">
                <Badge className="mb-4 text-lg px-4 py-2">{result.confidence}% Match</Badge>
                <h3 className="text-3xl font-bold mb-2">We recommend: {tierDetails[result.tier].name}</h3>
                <p className="text-xl text-gray-600">{tierDetails[result.tier].tagline}</p>
              </div>

              <Card className="border-2 border-blue-600 bg-blue-50">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">{tierDetails[result.tier].name}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {tierDetails[result.tier].description}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-blue-600">
                        {tierDetails[result.tier].price}
                      </div>
                      <div className="text-sm text-gray-600">{tierDetails[result.tier].annualPrice}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Key features for you:</h4>
                  <ul className="space-y-2">
                    {tierDetails[result.tier].features.slice(0, 5).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {result.reasons.length > 0 && (
                    <div className="mt-6 p-4 bg-white rounded-lg">
                      <h4 className="font-semibold mb-2">Why this tier?</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        {result.reasons.map((reason, idx) => (
                          <li key={idx}>• {reason}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-6 flex gap-4">
                    <Button className="flex-1" size="lg">
                      Start Free Trial
                    </Button>
                    <Button variant="outline" size="lg" onClick={handleReset}>
                      Try Again
                    </Button>
                  </div>

                  <p className="text-center text-sm text-gray-600 mt-4">
                    Not sure? Try it free for 30 days—no credit card required.
                  </p>
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
