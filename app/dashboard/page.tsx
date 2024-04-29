import { auth } from "@/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export const runtime = "edge";

export default async function page() {
  const session = await auth();
  if (!session) return redirect("/");
  return (
    <div>
      <p>dashboard</p>
      <Link href={"/"}>Top</Link>
    </div>
  );
}
