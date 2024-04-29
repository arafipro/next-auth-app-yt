import { signOut } from "@/auth";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button className="border p-2 bg-black text-white rounded" type="submit">
        SignOut
      </button>
    </form>
  );
}
