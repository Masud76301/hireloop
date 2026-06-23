import CompanyTable from '@/app/component/dashboard/CompanyTable';
import { getCompanies } from '@/app/lib/api/companies';
import React from 'react';

const AdminCompaniesPage = async () => {
    const companies = await getCompanies();
    return (
        <div className='w-5xl mx-auto my-10'>
            <h1> Total Companies : {companies.length}</h1>
            <CompanyTable companies = {companies} />
        </div>
    );
};

export default AdminCompaniesPage;