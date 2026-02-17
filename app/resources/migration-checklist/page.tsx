import { redirect } from "next/navigation";

// Redirect /resources/migration-checklist/ to migration docs
export default function MigrationChecklistRedirect() {
  redirect("/resources/docs/getting-started/migration/");
}
