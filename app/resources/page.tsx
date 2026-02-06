import { redirect } from "next/navigation";

// Redirect /resources/ to /resources/docs/
export default function ResourcesPage() {
  redirect("/resources/docs/");
}
