"use client";

import { useRouter } from "next/navigation";
import { indiaPackages } from "@/data/indiaPackages";

export default function Packages() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-cyan-400 text-center mb-8">
        Packages
      </h1>

      <div className="grid md:grid-cols-2 gap-4">
        {indiaPackages.map((pkg, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-cyan-500 rounded-xl p-4"
          >
            <h2 className="text-xl font-bold">
              {pkg.name}
            </h2>

            <p className="text-green-400 mt-2">
              {pkg.price}
            </p>

            <button
              onClick={() =>
                router.push(
                  `/checkout?package=${encodeURIComponent(
                    pkg.name
                  )}&price=${encodeURIComponent(pkg.price)}`
                )
              }
              className="w-full mt-4 bg-cyan-500 py-2 rounded-xl"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
