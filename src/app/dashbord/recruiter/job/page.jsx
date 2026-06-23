import React from 'react';
import Link from 'next/link';
import JobTable from "@/app/component/dashboard/JobTable";
import { getLoggedInRecruiterCompany } from "@/app/lib/api/companies";
import { getCompanyJobs } from "@/app/lib/api/job";
import { Button, Card } from '@heroui/react';
import { FiPlus, FiAlertCircle } from 'react-icons/fi';

const JobListPage = async () => {
  const company = await getLoggedInRecruiterCompany();

  // 1. Check if company data doesn't exist or is empty
  if (!company || company.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] px-4">
        <Card className="max-w-md w-full border border-warning/20 bg-content1 shadow-lg">
          <div className="flex flex-col items-center text-center p-6 gap-4">
            <div className="p-3 bg-warning/10 text-warning rounded-full text-3xl">
              <FiAlertCircle />
            </div>

            <div className="space-y-1">
              <h2 className="text-xl font-bold tracking-tight">No Company Registered</h2>
              <p className="text-sm text-default-500">
                You must register your company profile before managing or viewing posted job listings.
              </p>
            </div>

            <Link href="/dashbord/recruiter/company">
              <Button
                color="primary"
                className="font-medium mt-2"
              >
                <FiPlus size={18} />
                Register Company Now
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  // 2. Safely fetch jobs since we know company is guaranteed to exist now
  const jobs = await getCompanyJobs(company.companyName);

  return (
    <div className="p-6">
      <JobTable jobs={jobs} />
    </div>
  );
};

export default JobListPage;