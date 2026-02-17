import { redirect } from "next/navigation";

// Redirect /resources/data-cleanup-guide/ to migration docs
export default function DataCleanupGuideRedirect() {
  redirect("/resources/docs/getting-started/migration/");
}
