"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TrainingRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/resources/docs/getting-started/roles/");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-slate-500">Redirecting...</p>
    </div>
  );
}
