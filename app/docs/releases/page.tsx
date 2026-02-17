import { redirect } from "next/navigation";

// Redirect /docs/releases/ to /blog/
export default function DocsReleasesRedirect() {
  redirect("/blog/");
}
