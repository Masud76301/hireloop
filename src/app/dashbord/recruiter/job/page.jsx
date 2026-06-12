import JobTable from "@/app/component/dashboard/JobTable";
import { getCompanyJobs } from "@/app/lib/api/job";


const JobListPage = async () => {
  const company = "Acme Corp (Auto-filled)";
  const jobs = await getCompanyJobs(company);

  return (
    <div className="p-6">
      <JobTable jobs={jobs} />
    </div>
  );
};

export default JobListPage;