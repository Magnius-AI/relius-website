import { redirect } from "next/navigation";

export function generateStaticParams() {
      return [];
      }

export default function GroupDetailRedirect() {
    redirect("/resources/docs/groups/");
}
