import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-cyan-500/20">

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link
          href="/"
          className="text-2xl font-black text-cyan-400"
        >
          💎 AMANNY STORE
        </Link>

        <div className="flex gap-4">

          <a
            href="#servers"
            className="text-gray-300 hover:text-cyan-400"
          >
            Servers
          </a>

          <a
            href="#payment"
            className="text-gray-300 hover:text-cyan-400"
          >
            Payment
          </a>

          <Link
            href="/profile"
            className="bg-cyan-500 px-4 py-2 rounded-xl text-black font-bold"
          >
            Account
          </Link>

        </div>

      </div>

    </nav>
  );
}
