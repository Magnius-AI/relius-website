import { redirect } from "next/navigation";

// Redirect /resources/staff-communication-template/ to blog post
export default function StaffCommunicationTemplateRedirect() {
  redirect("/blog/streamline-church-communications/");
}
