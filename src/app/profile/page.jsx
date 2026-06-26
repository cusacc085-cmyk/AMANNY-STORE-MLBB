import { cookies } from "next/headers";

export default async function ProfilePage() {
  const cookieStore =
    await cookies();

  const email =
    cookieStore.get("user")?.value;

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#030712]">

      <div className="bg-[#08111f] border border-cyan-500/20 rounded-3xl p-10">

        <h1 className="text-4xl font-black text-cyan-400">
          My Account
        </h1>

        <p className="mt-6 text-gray-400">
          Logged in as
        </p>

        <p className="text-xl font-bold mt-2">
          {email}
        </p>

      </div>

    </main>
  );
}
