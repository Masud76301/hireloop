"use client";

import RecruiterStats from "@/app/component/dashboard/RecruiterStats";
import { useSession } from "@/app/lib/auth-client";

const RecruiterDashboardPage = () => {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex-1 p-6">
      <h1 className="mb-10 text-3xl font-bold">
        Welcome Back! {session?.user?.name}
      </h1>

      <RecruiterStats />
    </div>
  );
};

export default RecruiterDashboardPage;