import React from 'react';
import Link from 'next/link';
import PostJobForm from './PostJobForm';
import { getLoggedInRecruiterCompany } from '@/app/lib/api/companies';
import { Button, Card, CardBody } from '@heroui/react';
import { FiPlus, FiAlertCircle } from 'react-icons/fi';

const PostJobPage = async () => {
    const company = await getLoggedInRecruiterCompany();

    // Check if company data doesn't exist, is empty, or is undefined
    if (!company || company.length === 0) {
        return (
            <div className="flex items-center justify-center min-h-[60vh] px-4">
                <Card className="max-w-md w-full border border-warning/20 bg-content1 shadow-lg">
                    <div className="flex flex-col items-center text-center p-6 gap-4">
                        <div className="p-3 bg-warning/10 text-warning rounded-full text-3xl">
                            <FiAlertCircle />
                        </div>
                        
                        <div className="space-y-1">
                            <h2 className="text-xl font-bold tracking-tight">No Company Registered</h2>
                            <p className="text-sm text-default-500">
                                You need to register a company profile before you can post a job listing.
                            </p>
                        </div>

                        <Link href="/dashbord/recruiter/company">
                        <Button 
                            color="primary"
                            className="font-medium mt-2"
                        >
                            <FiPlus size={18} />
                            Register Company Now
                        </Button>
                        </Link>
                    </div>
                </Card>
            </div>
        );
    }

    // If company exists, proceed to show the form
    return (
        <div>
            <PostJobForm company={company} />
        </div>
    );
};

export default PostJobPage;