import ApplicationTable from '@/app/component/dashboard/application/ApplicationTable';
import { getApplicationsByApplicant } from '@/app/lib/api/applications';
import { getUserSession } from '@/app/lib/core/session';
import React from 'react';

const ApplicationPage = async () => {
    const user = await getUserSession();
    const jobs = await getApplicationsByApplicant(user?.id);
    return (
        <div className='max-w-5xl mx-auto my-10'>
            <h1> Your total applied job is : {jobs.length} </h1>
            <ApplicationTable jobs={jobs}/>
        </div>
    );
};

export default ApplicationPage;