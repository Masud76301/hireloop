import { getJobById } from '@/app/lib/api/job';
import { getUserSession } from '@/app/lib/core/session';
import { redirect } from 'next/navigation';
import React from 'react';
import JobApply from './JobApply';
import { getApplicationsByApplicant } from '@/app/lib/api/applications';
import Link from 'next/link';
import { Button, ProgressBar, Card, Label, } from '@heroui/react';
import { getPlanById } from '@/app/lib/api/plan';

const ApplyPage = async ({ params }) => {
    const { id } = await params;

    const user = await getUserSession();

    if (!user) {
        redirect(`/signin?redirect=/browse-jobs/${id}/apply`);
    }

    if (user.role !== 'seeker') {
        return (
            <div className="min-h-screen flex items-center justify-center px-4">
                <Card className="max-w-xl w-full shadow-lg border">
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">🚫</div>

                        <h1 className="text-2xl font-bold mb-3">
                            Job Seeker Account Required
                        </h1>

                        <p className="text-default-500">
                            Only job seekers can apply for positions. Please sign in with a
                            seeker account to continue.
                        </p>
                    </div>
                </Card>
            </div>
        );
    }

    const applications = await getApplicationsByApplicant(user.id);
    
    const plan = await getPlanById(user?.plan || 'seeker_free')
    console.log("Your Plan is :",plan);
    // const plan = {
    //     name: 'Free',
    //     maxApplicationPerMonth: 3,
    // };

    const job = await getJobById(id);

    const usagePercentage =
        (applications.length / plan.maxApplicationPerMonth) * 100;

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            {/* Hero Section */}
            <div className="rounded-3xl border bg-linear-to-r from-primary-50 to-content1 p-8 md:p-12 shadow-sm mb-8">
                <div className="space-y-4">

                    <h1 className="text-3xl md:text-5xl font-bold">
                        {job.jobTitle}
                    </h1>

                    <p className="text-default-500 text-lg">
                        Complete the form below to submit your application.
                    </p>
                </div>
            </div>

            {/* Application Usage Card */}
            <Card className="mb-8 border shadow-sm">
                <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                        <div>
                            <h2 className="text-xl font-semibold">
                                Monthly Application Usage
                            </h2>

                            <p className="text-default-500">
                                {applications.length} of {plan.maxApplicationPerMonth} applications used
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium">
                                {plan.name} Plan
                            </span>
                        </div>
                    </div>

                    <ProgressBar value={usagePercentage} className="mt-5">

                        <div className="flex justify-between mb-2">
                            <Label>Application Usage</Label>
                            <ProgressBar.Output />
                        </div>

                        <ProgressBar.Track>
                            <ProgressBar.Fill />
                        </ProgressBar.Track>

                    </ProgressBar>
                </div>
            </Card>

            {/* Content */}
            {applications.length < plan.maxApplicationPerMonth ? (
                <Card className="border shadow-sm">
                    <div className="p-6 md:p-8">
                        <JobApply job={job} applicant={user} />
                    </div>
                </Card>
            ) : (
                <Card className="border border-warning/30 bg-warning/5 shadow-sm">
                    <div className="p-8 text-center">
                        <div className="text-5xl mb-4">⚡</div>

                        <h2 className="text-2xl font-bold mb-3">
                            Application Limit Reached
                        </h2>

                        <p className="text-default-500 mb-6 max-w-lg mx-auto">
                            You have reached the maximum number of applications available on
                            your current plan. Upgrade to continue applying for more jobs.
                        </p>

                        <Link href="/plans">
                            <Button
                                color="primary"
                                size="lg"
                            >
                                Upgrade Plan
                            </Button>
                        </Link>
                    </div>
                </Card>
            )}
        </div>
    );
};

export default ApplyPage;