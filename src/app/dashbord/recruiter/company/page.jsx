"use client"
import NotRegistered from '@/app/component/dashboard/myCompany/NotRegistered';
import { Button } from '@heroui/react';
import React, { useState } from 'react';
import { FiEdit2, FiPlus } from 'react-icons/fi';
import { LuBuilding2 } from 'react-icons/lu';

const CompanyPage = () => {
    const [company, setCompany] = useState(null);
    return (
        <div className='p-8'>

            <div className="mb-10 flex items-center justify-between">
                <div className="mb-10 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">My Company</h1>
                        <p className="text-default-500">
                            Manage your company profile.
                        </p>
                    </div>

                    {company && (
                        <Button
                            onPress={() => setIsOpen(true)}
                        >
                         <FiEdit2 />   Edit Company
                        </Button>
                    )}
                </div>


            </div>

            {!company && (
                <NotRegistered></NotRegistered>
            )}
        </div>
    );
};

export default CompanyPage;