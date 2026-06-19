"use client";

import React, { useEffect, useState, useMemo } from "react";
import { getJobs } from "../lib/api/job";
import JobCard from "../component/job/JobCard";

import JobSearch from "../component/job/JobSearch";
import JobFilter from "../component/job/JobFilter";
import JobSort from "../component/job/JobSort";


const BrowsJobs = () => {
  const [showRemoteOnly, setShowRemoteOnly] = useState(false);
  const [jobs, setJobs] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      const data = await getJobs();
      setJobs(data);
    };

    fetchJobs();
  }, []);

  // ✅ DERIVE instead of storing state
  const filteredJobs = useMemo(() => {
    let result = [...jobs];

    // SEARCH
    if (search) {
      result = result.filter((job) =>
        job.jobTitle.toLowerCase().includes(search.toLowerCase())
      );
    }

    // FILTER
    if (filter !== "all") {
      result = result.filter((job) =>
        job.category.toLowerCase() === filter.toLowerCase()
      );
    }

    if (showRemoteOnly) {
      result = result.filter((job) => job.isRemote);
    }
    // SORT
    if (sort === "salary_high") {
      result.sort((a, b) => b.maxSalary - a.maxSalary);
    }

    if (sort === "salary_low") {
      result.sort((a, b) => a.minSalary - b.minSalary);
    }

    return result;
  }, [jobs, search, filter, sort,showRemoteOnly]);

  return (
    <div className="container mx-auto">
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 my-6">
        <JobSearch setSearch={setSearch} />

        <JobFilter setFilter={setFilter} />

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showRemoteOnly}
            onChange={(e) => setShowRemoteOnly(e.target.checked)}
          />
          Remote Only
        </label>

        <JobSort setSort={setSort} />
      </div>

      {/* Jobs */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {filteredJobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default BrowsJobs;