import { servers } from "@/data/packages";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ServerPage({
  params,
}) {
  const server = servers.find(
    (s) => s.slug === params.slug
  );

  if (!server) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#030712] text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <Link
          href="/"
          className="text-cyan-400"
        >
          ← Back Home
        </Link>

        <h1 className="text-5xl font-black mt-6">
          {server.name}
        </h1>

        <p className="text-gray-400 mt-3">
          Select a package
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">

          {server.packages.map(
            (item, index) => (
              <Link
                key={index}
                href={`/checkout?server=${server.slug}&product=${encodeURIComponent(
                  item.product
                )}&price=${encodeURIComponent(
                  item.price
                )}`}
                className="glow-card rounded-2xl p-5"
              >
                <h3 className="text-xl font-bold">
                  {item.product}
                </h3>

                <p className="text-cyan-400 text-2xl mt-3">
                  {item.price}
                </p>

                <button className="w-full mt-5 bg-cyan-500 text-black py-3 rounded-xl font-bold">
                  Buy Now
                </button>

              </Link>
            )
          )}

        </div>

      </div>

    </main>
  );
}
