"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiMapPin,
  FiUsers,
  FiGlobe,
} from "react-icons/fi";

export default function CompanyCard({ company }) {
  const {
    companyName,
    industry,
    website,
    location,
    employeeCount,
    description,
    logo,
    status,
  } = company?.[0];

  return (
    <div className="group h-full rounded-2xl border border-white/10 bg-zinc-900/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-4">
          <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-white/10 bg-white">
            <Image
              src={logo}
             
              alt={companyName}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">
              {companyName}
            </h3>

            <p className="text-sm text-gray-400">
              {industry}
            </p>
          </div>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
            status === "approved"
              ? "border border-green-500/30 bg-green-500/10 text-green-400"
              : "border border-yellow-500/30 bg-yellow-500/10 text-yellow-400"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Description */}
      <div className="mt-6 min-h-[100px]">
        <p className="line-clamp-3 text-base leading-8 text-gray-300">
          {description}
        </p>
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-white/10" />

      {/* Info */}
      <div className="flex flex-wrap items-center gap-6 text-gray-400">
        <div className="flex items-center gap-2">
          <FiMapPin className="text-lg" />
          <span>{location}</span>
        </div>

        <div className="flex items-center gap-2">
          <FiUsers className="text-lg" />
          <span>{employeeCount} Employees</span>
        </div>
      </div>

      {/* Website */}   
      <div className="mt-8">
        <Link
          href="/"
          target="_blank"
          className="inline-flex items-center gap-2 text-gray-300 transition hover:text-primary"
        >
          <FiGlobe />
          Visit Website
        </Link>
      </div>
    </div>
  );
}