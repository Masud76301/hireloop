import JobTable from "@/app/component/dashboard/JobTable";
import { getLoggedInRecruiterCompany, getRecruiterCompany } from "@/app/lib/api/companies";
import { getCompanyJobs } from "@/app/lib/api/job";
import { getUserSession } from "@/app/lib/core/session";


const JobListPage = async () => {
  // const user = await getUserSession();
  // const company = await getRecruiterCompany(user?.id);
  const company = await getLoggedInRecruiterCompany();
  const jobs = await getCompanyJobs(company?.[0].companyName);  
  

  return (
    <div className="p-6">
      <JobTable jobs={jobs} />
    </div>
  );
};

export default JobListPage;