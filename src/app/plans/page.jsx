import React from "react";
import PricingCard from "../component/plan/PricingCard";
import { Tabs } from "@heroui/react";
import FAQSection from "../component/plan/FAQSection";

export const seekerPlans = [
  {
    name: "Free",
    id: 'seeker_free',
    price: 0,
    applications: "Up to 3 / month",
    savedJobs: "Up to 10",
    features: ["Basic Profile", "Email Alerts"],
  },
  {
    name: "Pro",
    id: 'seeker_pro',
    price: 19,
    popular: true,
    applications: "Up to 30 / month",
    savedJobs: "Unlimited",
    features: ["Application Tracking", "Salary Insights"],
  },
  {
    name: "Premium",
    id: 'seeker_premium',
    price: 39,
    applications: "Unlimited",
    savedJobs: "Unlimited",
    features: [
      "Profile Boost",
      "Early Access To New Jobs",
      "Priority Support",
    ],
  },
];

export const recruiterPlans = [
  {
    name: "Free",
    id: 'recruiter_free',
    price: 0,
    activeJobPosts: "Up to 3",
    analytics: "Not Available",
    features: [
      "Basic Applicant Management",
      "Standard Visibility",
    ],
  },
  {
    name: "Growth",
    id:'recruiter_growth',
    price: 49,
    popular: true,
    activeJobPosts: "Up to 10",
    analytics: "Basic",
    features: [
      "Applicant Tracking",
      "Email Support",
    ],
  },
  {
    name: "Enterprise",
    id:'recruiter_enterprise', 
    price: 149,
    activeJobPosts: "Up to 50",
    analytics: "Advanced",
    features: [
      "Featured Listings",
      "Team Collaboration",
      "Custom Branding",
      "Priority Support",
    ],
  },
];

export const faqItems = [
  {
    question: "Can I switch plans later?",
    answer:
      "Yes. You can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    question: "What happens when I reach my application limit?",
    answer:
      "Once you reach your monthly application limit, you'll need to upgrade your plan or wait until your next billing cycle to apply for more jobs.",
  },
  {
    question: "Do unused applications roll over to the next month?",
    answer:
      "No. Monthly application limits reset at the beginning of each billing cycle and do not roll over.",
  },
  {
    question: "Can recruiters post unlimited jobs?",
    answer:
      "Only Enterprise recruiters can manage up to 50 active job posts. Additional capacity may be available through custom plans.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely. You can cancel your subscription at any time from your account settings.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Refunds are handled according to our billing policy. Contact support if you experience any issues with your subscription.",
  },
];
const Plans = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold">
            Simple Pricing for Every Career Stage
          </h1>

          <p className="mt-4 text-lg text-default-500">
            Whether you are looking for your next opportunity or hiring top
            talent, HireLoop has a plan designed for you.
          </p>
        </div>
      </section>

      <Tabs defaultSelectedKey="seeker">
        <Tabs.ListContainer className="w-[90vh] mx-auto">
          <Tabs.List aria-label="Pricing Plans">
            <Tabs.Tab id="seeker">
              Job Seeker Plans
              <Tabs.Indicator />
            </Tabs.Tab>

            <Tabs.Tab id="recruiter">
              Recruiter Plans
              <Tabs.Indicator />
            </Tabs.Tab>
          </Tabs.List>
        </Tabs.ListContainer>

        <Tabs.Panel id="seeker">
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {seekerPlans.map((plan) => (
              <PricingCard
                key={plan.name}
                plan={plan}
                type="seeker"
              />
            ))}
          </div>
        </Tabs.Panel>

        <Tabs.Panel id="recruiter">
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {recruiterPlans.map((plan) => (
              <PricingCard
                key={plan.name}
                plan={plan}
                type="recruiter"
              />
            ))}
          </div>
        </Tabs.Panel>
      </Tabs>

      {/* FAQ Section Component */}

      <FAQSection faqItems={faqItems} />
    </div>
  );
};

export default Plans;