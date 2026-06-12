const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
export const getCompanyJobs = async (company, status="active")=>{
    const res = await fetch(`${baseUrl}/api/jobs?company=${company}&status=${status}`);
    return res.json();
}