import { signIn } from "@/auth";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <button className="border p-2 bg-black text-white rounded" type="submit">
        SignIn
      </button>
    </form>
  );
}
