"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();

  const [user, setUser] =
    useState(null);

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem("user")
    );

    if (!data) {
      router.push("/login");
      return;
    }

    setUser(data);
  }, []);

  const logout = () => {
    localStorage.removeItem("loggedIn");

    router.push("/login");
  };

  if (!user) return null;

  return (
    <main
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('/profile-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 w-full max-w-md bg-black/60 backdrop-blur-md border border-cyan-500 rounded-3xl p-8 text-white">

        <div className="text-center">

          <img
            src="/avatar.png"
            alt="Profile"
            className="w-28 h-28 rounded-full mx-auto border-4 border-cyan-500"
          />

          <h1 className="text-3xl font-bold mt-4">
            {user.username}
          </h1>

          <p className="text-gray-400">
            {user.email}
          </p>

        </div>

        <div className="mt-8 space-y-4">

          <div className="bg-gray-900 p-4 rounded-xl">
            <p className="text-gray-400">
              Username
            </p>

            <p className="font-bold">
              {user.username}
            </p>
          </div>

          <div className="bg-gray-900 p-4 rounded-xl">
            <p className="text-gray-400">
              Email
            </p>

            <p className="font-bold">
              {user.email}
            </p>
          </div>

        </div>

        <button
          onClick={logout}
          className="w-full mt-6 bg-red-500 hover:bg-red-600 py-3 rounded-xl font-bold"
        >
          Logout
        </button>

      </div>
    </main>
  );
}
