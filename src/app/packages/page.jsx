"use client";

import { servers } from "@/data/packages";

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-5xl font-bold text-center text-cyan-400 mb-10">
        MLBB Packages
      </h1>

      {Object.entries(Packages).map(([key, server]) => (
        <div
          key={key}
          className="mb-10 bg-gray-900 p-6 rounded-2xl border border-cyan-500"
        >
          <h2 className="text-3xl font-bold text-cyan-300 mb-5">
            {server.name}
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {server.packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-black p-4 rounded-xl border border-gray-700"
              >
                <h3 className="font-bold">{pkg.product}</h3>
                <p className="text-green-400">{pkg.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
