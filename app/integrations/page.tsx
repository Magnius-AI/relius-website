"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function IntegrationsRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/features/");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-slate-500">Redirecting to Features...</p>
    </div>
  );
}
