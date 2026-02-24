"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Redirect /docs/ to the actual documentation at /resources/docs/
export default function DocsRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/resources/docs/");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-slate-500">Redirecting to Documentation...</p>
    </div>
  );
}
