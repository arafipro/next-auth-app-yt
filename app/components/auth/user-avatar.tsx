import { auth } from "@/auth";
import Image from "next/image";

export async function UserAvatar() {
  const session = await auth();
  if (!session?.user) return null;
  return (
    <div>
      <Image
        width={40}
        height={40}
        src={session.user.image!}
        alt="User Avatar"
      />
    </div>
  );
}
