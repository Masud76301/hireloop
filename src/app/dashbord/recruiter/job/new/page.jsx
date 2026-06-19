import React from 'react';
import PostJobForm from './PostJobForm';
import { getUserSession } from '@/app/lib/core/session';
import { getLoggedInRecruiterCompany, getRecruiterCompany } from '@/app/lib/api/companies';

const PostJobPage = async() => {
    // const user = await getUserSession();
    // const company = await getRecruiterCompany(user?.id);
    const company = await getLoggedInRecruiterCompany();
    return (
        <div>
            <PostJobForm company={company} />
        </div>
    );
};

export default PostJobPage; <PostJobForm />