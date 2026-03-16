import { redirect } from "next/navigation";

export function generateStaticParams() {
      return [];
      }

export default function GroupMembersRedirect() {
    redirect("/resources/docs/groups/");
}
