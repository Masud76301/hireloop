"use client";

import { useState } from "react";
import { Card, CardBody, Button } from "@heroui/react";
import { FaCrown, FaBolt, FaChartLine } from "react-icons/fa";

export default function PricingSection() {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      name: "Starter",
      icon: <FaCrown className="text-purple-400" />,
      monthly: 0,
      yearly: 0,
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
    },
    {
      name: "Growth",
      icon: <FaChartLine className="text-pink-400" />,
      monthly: 17,
      yearly: 13, // 25% off
      popular: true,
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
    },
    {
      name: "Premium",
      icon: <FaBolt className="text-yellow-400" />,
      monthly: 99,
      yearly: 74, // 25% off
      features: [
        "Everything in Pro",
        "Multi-profile career portfolios",
        "Shared talent rooms",
        "Recruiter view (read-only)",
      ],
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm tracking-[0.3em] text-gray-400 mb-4">
            ● PRICING ●
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold">
            Pay for the leverage,
            <br />
            not the listings
          </h2>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mt-12 mb-16">
          <div className="bg-zinc-900 border border-white/10 rounded-full p-1 flex items-center">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-2 rounded-full transition-all ${
                billing === "monthly"
                  ? "bg-white text-black"
                  : "text-gray-300"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling("yearly")}
              className={`px-6 py-2 rounded-full flex items-center gap-2 transition-all ${
                billing === "yearly"
                  ? "bg-white text-black"
                  : "text-gray-300"
              }`}
            >
              Yearly
              <span className="bg-pink-600 text-white text-xs px-2 py-1 rounded-full">
                25%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`border rounded-3xl bg-[#0b0b0b] text-white ${
                plan.popular
                  ? "border-white/20  bg-gray-900  shadow-[0_0_60px_rgba(255,255,255,0.08)]"
                  : "border-white/10"
              }`}
            >
              <div className="p-8">
                {/* Plan */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center">
                    {plan.icon}
                  </div>

                  <h3 className="text-2xl font-medium">{plan.name}</h3>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <h4 className="text-5xl font-bold">
                    $
                    {billing === "monthly"
                      ? plan.monthly
                      : plan.yearly}
                    <span className="text-base font-normal text-gray-400">
                      /month
                    </span>
                  </h4>
                </div>

                {/* Features */}
                <p className="text-gray-300 mb-6">
                  Start building your insights hub:
                </p>

                <ul className="space-y-4 mb-12">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-gray-400"
                    >
                      <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center">
                        +
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Button
                  size="lg"
                  className={`w-full ${
                    plan.popular
                      ? "bg-white text-black"
                      : "bg-white/10 text-white"
                  }`}
                >
                  Choose This Plan →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}