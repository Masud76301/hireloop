"use client";

import { Card, Button } from "@heroui/react";
import {
  FiMapPin,
  FiBriefcase,
  FiDollarSign,
  FiArrowRight,
} from "react-icons/fi";

const jobs = Array(6).fill({
  title: "Frontend Developer",
  description:
    "Showcase your commitment to diversity and inclusion by highlighting initiatives",
  location: "New York, USA",
  type: "Hybrid",
  salary: "€25–€40/hour",
});

export default function JobSection() {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1a1a2e,transparent_60%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-zinc-400 mb-5">
            <span className="w-2 h-2 bg-violet-500 rounded-full" />
            Smart Job Discovery
            <span className="w-2 h-2 bg-violet-500 rounded-full" />
          </div>

          <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
            The roles you'd never
            <br />
            find by searching
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <Card
              key={index}
              className="bg-zinc-950/90 border border-zinc-800 rounded-[32px] p-6 min-h-80 backdrop-blur-xl overflow-hidden"
            >
              <div className="flex flex-col h-full">
                <div>
                  <h3 className="text-3xl font-medium mb-4">
                    {job.title}
                  </h3>

                  <p className="text-zinc-400 text-lg leading-relaxed">
                    {job.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-full text-sm">
                    <FiMapPin className="text-pink-300" />
                    {job.location}
                  </div>

                  <div className="flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-full text-sm">
                    <FiBriefcase className="text-pink-300" />
                    {job.type}
                  </div>

                  <div className="flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-full text-sm">
                    <FiDollarSign className="text-pink-300" />
                    {job.salary}
                  </div>
                </div>

                <div className="mt-auto pt-12">
                  <button className="group flex items-center gap-3 text-lg font-medium hover:text-violet-300 transition">
                    Apply Now
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-14">
          <Button
            radius="lg"
            size="lg"
            className="bg-white text-black px-8 h-14 text-base font-medium"
          >
            View all job open
          </Button>
        </div>
      </div>
    </section>
  );
}