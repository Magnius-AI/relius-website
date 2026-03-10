"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Redirect /docs/releases/ to /blog/
export default function DocsReleasesRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/blog/");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-slate-500">Redirecting...</p>
    </div>
  );
}
