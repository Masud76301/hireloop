"use client";

import { createJob } from "@/app/lib/action/job";
import { toast } from "@heroui/react";
import { useRouter } from "next/navigation";


import Link from "next/link";
import { redirect } from "next/navigation";

import React, { useState } from "react";

export default function PostJobForm({company}) {

  const router = useRouter();
  // State management for the form inputs
  const [formData, setFormData] = useState({
    jobTitle: "",
    category: "Technology",
    jobType: "Full-time",
    minSalary: "",
    maxSalary: "",
    currency: "USD",
    location: "",
    isRemote: false,
    deadline: "",
    responsibilities: "",
    requirements: "",
    benefits: "",
  });

  // Mocked auto-filled data from the registered company
  const autoFilledCompany = {
    company: company?.[0].companyName ,
    companyId:company?.[0]._id,
    companyLogo:company?.[0].logo,
    status: company?.[0].status,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggle = () => {
    setFormData((prev) => ({
      ...prev,
      isRemote: !prev.isRemote,
      location: !prev.isRemote ? "Remote" : ""
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Logic to save job with status: 'active', linked to the company
    // console.log("Submitting Job Data:", {
    //   ...formData,
    //   company: autoFilledCompany.name,
    //   status: "active",
    // });
    const payload = {
      ...formData,
      ...autoFilledCompany,
      // company: autoFilledCompany.name,
      status: "active",
      // companyId:company?.[0]._id,
      isPubliclyVisible: true,
    }
    const res = await createJob(payload);
    if (res.insertedId) {
      toast.success("Job Posted Successfully!");
      e.target.reset();
      setTimeout(() => {
        router.push("/dashbord/recruiter/job");
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-gray-200 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-[#1a1a1a] border border-gray-800 rounded-xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="p-6 border-b border-gray-800 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-white">Post a New Job</h1>
            <p className="text-sm text-gray-400 mt-1">Fill out the details below to publish your job opening.</p>
          </div>
          <Link href="/dashbord/recruiter/job"><button type="button" className="text-gray-400 hover:text-white text-xl">&times;</button></Link>
        </div>

        {company?.[0].status!=='approved' && <div className="text-center p-10 text-bold">Please wait to get approval</div>}      
        {company?.[0].status === 'approved' && <form onSubmit={handleSubmit} className="p-6 space-y-8">

          {/* SECTION 1: Job Info */}
          <section className="space-y-4">
            <h2 className="text-md font-semibold text-emerald-400 tracking-wide uppercase text-xs">1. Job Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Job Title</label>
                <input
                  type="text"
                  name="jobTitle"
                  required
                  placeholder="e.g. Senior Frontend Engineer"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="w-full bg-[#242424] border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Job Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full bg-[#242424] border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 transition"
                >
                  <option value="Technology">Technology</option>
                  <option value="Design">Design</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Management">Management</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Job Type</label>
                <select
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleChange}
                  className="w-full bg-[#242424] border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 transition"
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Remote">Remote</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Application Deadline</label>
                <input
                  type="date"
                  name="deadline"
                  required
                  value={formData.deadline}
                  onChange={handleChange}
                  className="w-full bg-[#242424] border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 transition"
                />
              </div>
            </div>

            {/* Salary Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Min Salary</label>
                <input
                  type="number"
                  name="minSalary"
                  placeholder="e.g. 50000"
                  value={formData.minSalary}
                  onChange={handleChange}
                  className="w-full bg-[#242424] border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Max Salary</label>
                <input
                  type="number"
                  name="maxSalary"
                  placeholder="e.g. 80000"
                  value={formData.maxSalary}
                  onChange={handleChange}
                  className="w-full bg-[#242424] border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Currency</label>
                <select
                  name="currency"
                  value={formData.currency}
                  onChange={handleChange}
                  className="w-full bg-[#242424] border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 transition"
                >
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                </select>
              </div>
            </div>

            {/* Location & Remote Toggle */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center pt-2">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  disabled={formData.isRemote}
                  placeholder={formData.isRemote ? "Remote selected" : "City, Country"}
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full bg-[#242424] disabled:opacity-50 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 transition"
                />
              </div>
              <div className="flex items-center space-x-3 mt-4 md:mt-0">
                <input
                  type="checkbox"
                  id="isRemote"
                  checked={formData.isRemote}
                  onChange={handleToggle}
                  className="w-4 h-4 rounded text-emerald-500 focus:ring-emerald-500 bg-[#242424] border-gray-700"
                />
                <label htmlFor="isRemote" className="text-sm font-medium text-gray-300 select-none cursor-pointer">
                  This is a fully remote position
                </label>
              </div>
            </div>
          </section>

          <hr className="border-gray-800" />

          {/* SECTION 2: Job Description */}
          <section className="space-y-4">
            <h2 className="text-md font-semibold text-emerald-400 tracking-wide uppercase text-xs">2. Job Details & Requirements</h2>

            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Responsibilities</label>
              <textarea
                name="responsibilities"
                rows={3}
                required
                placeholder="What will the employee do on a day-to-day basis?"
                value={formData.responsibilities}
                onChange={handleChange}
                className="w-full bg-[#242424] border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Requirements</label>
              <textarea
                name="requirements"
                rows={3}
                required
                placeholder="Skills, experience, and qualifications needed..."
                value={formData.requirements}
                onChange={handleChange}
                className="w-full bg-[#242424] border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Benefits <span className="text-gray-500">(Optional)</span></label>
              <textarea
                name="benefits"
                rows={2}
                placeholder="Health insurance, remote stipend, PTO..."
                value={formData.benefits}
                onChange={handleChange}
                className="w-full bg-[#242424] border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 transition"
              />
            </div>
          </section>

          <hr className="border-gray-800" />

          {/* SECTION 3: Auto-filled Company Banner */}
          <div className="bg-[#202020] border border-gray-800 rounded-lg p-4 flex justify-between items-center text-xs">
            <div>
              <span className="text-gray-400 font-medium block">Posting organization:</span>
              <span className="text-white text-sm font-semibold">{autoFilledCompany.company}</span>
            </div>
            <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-1 rounded font-medium">
              Verified & {autoFilledCompany.status}
            </span>
          </div>

          {/* Footer Action Buttons */}
          <div className="flex justify-end space-x-3 pt-2">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-400 hover:bg-[#242424] border border-transparent rounded-lg transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-sm font-medium text-black bg-white hover:bg-gray-200 rounded-lg transition shadow-md font-semibold"
            >
              Publish Job Listing
            </button>
          </div>

        </form> }
        
      </div>
    </div>
  );
}