import { auth } from "@/auth";
import Link from "next/link";
import { SignIn } from "./components/auth/signin-button";
import { SignOut } from "./components/auth/signout-button";
import { UserAvatar } from "./components/auth/user-avatar";

export const runtime = "edge";

export default async function Home() {
  const session = await auth();
  if (!session)
    return (
      <div>
        <p>サインインしていません</p>
        <Link href={"/dashboard"}>Dashboard</Link>
        <SignIn />
      </div>
    );
  return (
    <main className="">
      <p>{session.user?.name}</p>
      <p>{session.user?.email}</p>
      <UserAvatar />
      <Link href={"/dashboard"}>Dashboard</Link>
      <SignOut />
    </main>
  );
}
