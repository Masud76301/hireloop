"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, Button } from "@heroui/react";
import {
  FiMapPin,
  FiDollarSign,
  FiArrowRight,
  FiBriefcase,
} from "react-icons/fi";

export default function JobCard({ job }) {
  const {
    _id,
    jobTitle,
    location,
    minSalary,
    maxSalary,
    currency,
    company,
    companyLogo,
    isRemote,
  } = job;

  return (
    <Card
      className="
        relative
        overflow-hidden
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        text-white
        p-6
        rounded-[32px]
        min-h-105
      "
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-zinc-700 pointer-events-none text-white" />

      <Card.Content className="relative h-full flex flex-col">
        {/* Company Logo */}
        <div className="mb-5">
          <div className="h-14 w-14 rounded-xl bg-white p-2 flex items-center justify-center">
            <Image
              src="https://i.ibb.co.com/7tdrvkTm/spotify.png"
              alt={company}
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        </div>

        {/* Job Title */}
        <h2 className="text-3xl font-semibold mb-3">
          {jobTitle}
        </h2>

        {/* Description Placeholder */}
        <p className="text-white/60 text-base leading-relaxed mb-6">
          Join {company} and help build innovative products while
          collaborating with a talented global team.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-8">
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
            <FiMapPin className="text-pink-300" />
            <span>{location}</span>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
            <FiBriefcase className="text-pink-300" />
            <span>{isRemote ? "Remote" : "Hybrid"}</span>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
            <FiDollarSign className="text-pink-300" />
            <span>
              {currency} {minSalary} - {maxSalary}
            </span>
          </div>
        </div>

        {/* Spacer */}
        <div className="grow" />

        {/* Footer */}
        <Link href={`/browse-jobs/${_id}`}>
          <Button
            variant="light"
            className="text-white text-xl font-medium p-0 min-w-fit hover:translate-x-1 transition-transform"
          >
            Apply Now
            <FiArrowRight className="ml-2" />
          </Button>
        </Link>
      </Card.Content>
    </Card>
  );
}