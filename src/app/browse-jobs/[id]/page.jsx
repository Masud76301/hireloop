import ApplyJobCard from '@/app/component/job/ApplyJobCard';
import JobDetailsContent from '@/app/component/job/JobDetailsContent';
import { getJobById } from '@/app/lib/api/job';
import Image from 'next/image';
import React from 'react';

const JobDetailPage = async ({ params }) => {
    const { id } = await params;

    const jobDetails = await getJobById(id)

    // console.log("job id is ",id);
    return (
        <div className="container border  mx-auto p-10 my-10">


            <div className='flex gap-10  items-center bg-zinc-700 text-white w-3xl p-10 border mb-10'>

                <Image className='border border-white m-10' src="https://i.ibb.co.com/8DW3n7DY/tesla.png" width={80} height={80} alt={jobDetails.jobTitle}>
                </Image>
                <h1 className='text-3xl font-bold'>{jobDetails.jobTitle}</h1>
            </div>


            <div className="w-full p-10 grid lg:grid-cols-3 gap-8">
                {/* Left */}
                <div className="lg:col-span-2">
                    <JobDetailsContent  job={jobDetails} />
                </div>

                {/* Right */}
                <div>
                    <ApplyJobCard job={jobDetails} />
                </div>
            </div>
        </div>
    );
};

export default JobDetailPage;