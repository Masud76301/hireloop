import { getJobById } from '@/app/lib/api/job';
import { getUserSession } from '@/app/lib/core/session';
import { redirect } from 'next/navigation';
import React from 'react';
import JobApply from './JobApply';
import { getApplicationsByApplicant } from '@/app/lib/api/applications';
import Link from 'next/link';
import { Button } from '@heroui/react';

const ApplyPage = async ({ params }) => {
    const { id } = await params;
    console.log("the id is ", id);
    const user = await getUserSession();
    if (!user) {
        redirect(`/signin?redirect=/browse-jobs/${id}/apply`);
    }
    if (user.role !== 'seeker') {
        return (
            <div className='w-full min-h-screen flex flex-col justify-center items-center p-6'>

                <p className='text-2xl text-blue-600 font-bold'>Only Job seeker can apply for this positions. Please sing in with a seaker account to proceed</p>

            </div>
        )
    }
    const applications = await getApplicationsByApplicant(user.id);
    const plan = {
        name: 'Free',
        maxApplicationPerMonth: 3
    }
    const job = await getJobById(id);
    return (
        <div className="container mx-auto">
            <div className='bg-black text-center text-white border p-10 m-10'>
                <h1 className=" text-3xl font-bold">Apply for this job : {job.jobTitle}</h1>
                <p>You have applied  so far: {applications.length} out of {plan.maxApplicationPerMonth} this month</p>
            </div>
           
            {
                applications.length < plan.maxApplicationPerMonth?(
                    <JobApply job={job} applicant={user} />
                ): (<div>
                        <p>Purchase plan to apply for more positions. </p>
                        <Link href="/"><Button>Plans</Button></Link>
                    </div>
                    )
            }

        </div>
    );
};

export default ApplyPage;