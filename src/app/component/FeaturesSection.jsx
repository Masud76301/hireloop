"use client";

import { Card } from "@heroui/react";
import {
  FiSearch,
  FiBarChart2,
  FiBriefcase,
  FiBookmark,
  FiSend,
  FiFileText,
  FiHexagon,
  FiTrendingUp,
} from "react-icons/fi";

const features = [
  {
    title: "Smart Search",
    description: "Find your ideal job with advanced filters.",
    icon: FiSearch,
  },
  {
    title: "Salary Insights",
    description: "Get real salary data to negotiate confidently.",
    icon: FiBarChart2,
  },
  {
    title: "Top Companies",
    description: "Apply to vetted companies that are hiring.",
    icon: FiBriefcase,
  },
  {
    title: "Saved Jobs",
    description: "Manage apps & favorites on your dashboard.",
    icon: FiBookmark,
  },
  {
    title: "One-Click Apply",
    description: "Simplify your job applications for an easier process!",
    icon: FiSend,
  },
  {
    title: "Resume Builder",
    description: "Create professional resumes with modern templates.",
    icon: FiFileText,
  },
  {
    title: "Skill-Based Matching",
    description: "Discover jobs that match your skills and experience.",
    icon: FiHexagon,
  },
  {
    title: "Career Growth Resources",
    description: "Boost your career with quick interview tips.",
    icon: FiTrendingUp,
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-24 bg-zinc-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.15),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-gray-400 mb-5">
            <span className="w-2 h-2 bg-violet-500 rounded-full" />
            Features Job
            <span className="w-2 h-2 bg-violet-500 rounded-full" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Everything you need
            <br />
            to succeed
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="flex items-start gap-5 group"
              >
                {/* Icon Card */}
                <Card
                  className="
                    min-w-[80px]
                    h-20
                    bg-black/70
                    border
                    border-white/10
                    backdrop-blur-md
                    flex
                    items-center
                    justify-center
                    shadow-lg
                  "
                >
                  <Icon
                    size={32}
                    className="text-violet-300 group-hover:scale-110 transition-transform"
                  />
                </Card>

                {/* Content */}
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}