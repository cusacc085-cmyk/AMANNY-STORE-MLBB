import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center text-white py-24">
      <h1 className="text-5xl font-bold text-cyan-400">
        MOBILE LEGENDS RECHARGE
      </h1>

      <p className="mt-4 text-gray-300">
        Fast & Secure Diamond Topup
      </p>

      <Link
        href="/server"
        className="inline-block mt-6 bg-cyan-500 px-6 py-3 rounded-xl font-bold"
      >
        Recharge Now
      </Link>
    </section>
  );
}
