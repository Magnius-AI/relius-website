"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function VolunteerRecruitmentRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/blog/prevent-volunteer-burnout/");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-slate-500">Redirecting...</p>
    </div>
  );
}
