import { redirect } from "next/navigation";

// Redirect /docs/ to the actual documentation at /resources/docs/
export default function DocsPage() {
  redirect("/resources/docs/");
}
