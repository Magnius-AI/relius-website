import { redirect } from "next/navigation";

export function generateStaticParams() {
  return [];
  }

  export default function PersonRedirect() {
    redirect("/resources/docs/people/");
    }