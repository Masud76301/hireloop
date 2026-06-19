"use client";

import Link from "next/link";
import { Card, Button } from "@heroui/react";
import {
  FiMapPin,
  FiDollarSign,
  FiClock,
  FiBriefcase,
} from "react-icons/fi";

export default function ApplyJobCard({ job }) {
  const {
    _id,
    location,
    minSalary,
    maxSalary,
    currency,
    jobType,
    deadline,
    isRemote,
  } = job;

  return (
    <Card className="sticky top-24 border border-default-200">
      <Card.Content className="p-6 space-y-5">
        <h3 className="text-xl font-semibold">
          Job Overview
        </h3>

        <div className="space-y-4 text-sm">
          <div className="flex items-center gap-3">
            <FiMapPin />
            <span>{location}</span>
          </div>

          <div className="flex items-center gap-3">
            <FiBriefcase />
            <span>
              {isRemote ? "Remote" : "On-site"} · {jobType}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <FiDollarSign />
            <span>
              {currency} {minSalary} - {maxSalary}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <FiClock />
            <span>Apply before {deadline}</span>
          </div>
        </div>

        <Link href={`/browse-jobs/${_id}/apply`}>
          <Button  
            color="primary"
            size="lg"
            className="w-full"
          >
            Apply For This Job
          </Button>
        </Link>

      </Card.Content>
    </Card>
  );
}