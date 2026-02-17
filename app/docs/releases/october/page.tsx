import { redirect } from "next/navigation";

// Redirect /docs/releases/october/ to /blog/
export default function DocsReleasesOctoberRedirect() {
  redirect("/blog/");
}
