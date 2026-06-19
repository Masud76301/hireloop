import { serverFetch } from "../core/server";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
export const getCompanyJobs = async (company, status="active")=>{
    const res = await fetch(`${baseUrl}/api/jobs?company=${company}&status=${status}`);
    return res.json();
}

export const getAllJobs = async() =>{
    const res = await fetch(`${baseUrl}/api/jobs`);
    return res.json();
}


export const getJobs =async ()=>{
    return serverFetch('/api/jobs');
}


export const getJobById = async (jobId) =>{
    return serverFetch(`/api/jobs/${jobId}`);

}