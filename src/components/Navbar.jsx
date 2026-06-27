"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black/80 backdrop-blur-md border-b border-cyan-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-cyan-400">
          AMANNY STORE
        </h1>

        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/server">Servers</Link>
          <Link href="/packages">Packages</Link>
          <Link href="/history">Orders</Link>
          <Link href="/profile">Profile</Link>
        </div>

      </div>
    </nav>
  );
}
