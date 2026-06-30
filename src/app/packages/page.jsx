import Link from "next/link";
import { servers } from "@/data/packages";

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-black text-center">
          All MLBB Servers
        </h1>

        <p className="text-center text-gray-400 mt-3">
          Select your server to view packages
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          {servers.map((server) => (

            <Link
              key={server.slug}
              href={`/server/${server.slug}`}
              className="
                bg-[#08111f]
                border
                border-cyan-500/20
                rounded-3xl
                p-8
                hover:border-cyan-400
                transition
              "
            >

              <h2 className="text-2xl font-bold">
                {server.name}
              </h2>

              <p className="text-gray-400 mt-3">
                {server.packages.length} Packages Available
              </p>

              <button
                className="
                  mt-6
                  bg-cyan-500
                  text-black
                  px-6
                  py-3
                  rounded-xl
                  font-bold
                "
              >
                View Packages
              </button>

            </Link>

          ))}

        </div>

      </div>

    </main>
  );
}
