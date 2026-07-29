export default function Hero() {
  return (
    <section className="flex min-h-screen items-center bg-[#050816] px-6">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">

        <div>
          <p className="mb-4 text-cyan-400">
            Database Administrator • Infrastructure Engineer
          </p>

          <h1 className="text-6xl font-extrabold leading-tight md:text-7xl">
            Ahmad Rafli
          </h1>

          <p className="mt-8 max-w-xl text-lg text-gray-400">
            I build reliable database infrastructure, monitoring systems,
            automation, and production-ready backend environments.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400">
              View Projects
            </button>

            <button className="rounded-xl border border-gray-600 px-6 py-3 transition hover:border-cyan-400">
              Download CV
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#111827] p-6 font-mono text-sm text-green-400 shadow-xl">
{`$ whoami

Ahmad Rafli

$ skills

PostgreSQL
ClickHouse
Linux
Docker
Grafana
Automation

█`}
        </div>

      </div>
    </section>
  );
}