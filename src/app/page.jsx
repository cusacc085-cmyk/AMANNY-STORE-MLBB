import Link from "next/link";

const servers = [
  {
    name: "🇮🇳 India Server",
    link: "/india",
  },
  {
    name: "🇺🇸 USA Server",
    link: "/usa",
  },
  {
    name: "🇸🇬 Singapore Server",
    link: "/singapore",
  },
  {
    name: "🇮🇩 Indonesia Server",
    link: "/indonesia",
  },
  {
    name: "🇲🇾 Malaysia Server",
    link: "/malaysia",
  },
  {
    name: "🇵🇭 Philippines Server",
    link: "/philippines",
  },
  {
    name: "🇧🇷 Brazil Server",
    link: "/brazil",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen p-6">
      <h1 className="text-5xl font-bold text-center mb-10">
        🔥 AMANNY STORE 🔥
      </h1>

      <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {servers.map((server) => (
          <Link
            key={server.name}
            href={server.link}
            className="bg-gray-900 p-6 rounded-xl border border-cyan-500"
          >
            <h2 className="text-2xl font-bold">
              {server.name}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
