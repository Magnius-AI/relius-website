"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Redirect /resources/staff-communication-template/ to blog post
export default function StaffCommunicationTemplateRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/blog/streamline-church-communications/");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-slate-500">Redirecting...</p>
    </div>
  );
}
