"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Redirect /resources/migration-checklist/ to migration docs
export default function MigrationChecklistRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/resources/docs/getting-started/migration/");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-slate-500">Redirecting...</p>
    </div>
  );
}
