import Link from "next/link";

const servers = [
  { name: "🇮🇳 India Server", link: "/india" },
  { name: "🇺🇸 USA Server", link: "/usa" },
  { name: "🇸🇬 Singapore Server", link: "/singapore" },
  { name: "🇮🇩 Indonesia Server", link: "/indonesia" },
  { name: "🇲🇾 Malaysia Server", link: "/malaysia" },
  { name: "🇵🇭 Philippines Server", link: "/philippines" },
  { name: "🇧🇷 Brazil Server", link: "/brazil" },
];

export default function Home() {
  return (
    <main
      className="relative min-h-screen bg-[#030712] text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00e5ff20,transparent_60%)]" />

      {/* Navbar */}
      <nav className="relative z-10 max-w-7xl mx-auto flex justify-between items-center px-6 py-6">
        <h1 className="text-3xl font-black text-cyan-400">
          🔥 AMANNY STORE
        </h1>

        <div className="flex gap-4">
          <Link
            href="/profile"
            className="border border-cyan-500 px-5 py-2 rounded-xl"
          >
            Profile
          </Link>

          <Link
            href="/orders"
            className="bg-cyan-500 text-black px-5 py-2 rounded-xl font-bold"
          >
            My Orders
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-cyan-400 uppercase tracking-[6px] text-sm">
              AMANNY STORE MLBB TOP-UP
            </p>

            <h1 className="text-6xl md:text-7xl font-black mt-5 leading-none">
              Recharge
              <br />
              MLBB Diamonds
              <br />
              <span className="text-cyan-400">
                in 60 Seconds
              </span>
            </h1>

            <p className="text-gray-400 mt-6 max-w-xl">
              Fast, secure and trusted Mobile Legends
              diamond recharge. Instant delivery after
              payment verification.
            </p>

          </div>

          <div className="relative flex justify-center">

            <div className="w-96 h-96 rounded-full border border-cyan-500/30 absolute animate-pulse" />

            <div className="w-72 h-72 rounded-full border border-cyan-500/20 absolute" />

            <div className="w-40 h-40 border-4 border-cyan-400 rotate-45 rounded-3xl shadow-[0_0_50px_#00e5ff]" />

          </div>

        </div>

      </section>

      {/* Servers */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          SELECT SERVER
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {servers.map((server) => (

            <Link
              key={server.name}
              href={server.link}
              className="
                bg-[#08111f]
                border
                border-cyan-500/20
                p-8
                rounded-3xl
                hover:border-cyan-400
                transition
              "
            >

              <h3 className="text-2xl font-bold text-center">
                {server.name}
              </h3>

              <button
                className="
                  w-full
                  mt-6
                  bg-cyan-500
                  text-black
                  py-3
                  rounded-xl
                  font-bold
                "
              >
                Open Server
              </button>

            </Link>

          ))}

        </div>

      </section>

    </main>
  );
}
