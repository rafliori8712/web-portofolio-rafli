export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <div className="grid items-center gap-16 md:grid-cols-2">

        {/* LEFT */}

        <div>

          <p className="text-cyan-400 font-semibold">
            ABOUT ME
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            Building Reliable
            Infrastructure.
          </h2>

          <p className="mt-8 leading-8 text-gray-400">

            I am a Database Administrator and
            Infrastructure Engineer with experience
            managing PostgreSQL, ClickHouse,
            Linux Servers, Docker,
            monitoring systems and production
            environments.

            <br /><br />

            I enjoy solving complex infrastructure
            problems and building reliable,
            scalable systems.

          </p>

        </div>

        {/* RIGHT */}

        <div className="grid grid-cols-2 gap-6">

          <div className="rounded-2xl border border-white/10 bg-[#0d1117] p-8">

            <h3 className="text-5xl font-bold text-cyan-400">
              5+
            </h3>

            <p className="mt-3 text-gray-400">
              Years Experience
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0d1117] p-8">

            <h3 className="text-5xl font-bold text-cyan-400">
              15+
            </h3>

            <p className="mt-3 text-gray-400">
              Projects
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0d1117] p-8">

            <h3 className="text-5xl font-bold text-cyan-400">
              99%
            </h3>

            <p className="mt-3 text-gray-400">
              Availability
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0d1117] p-8">

            <h3 className="text-5xl font-bold text-cyan-400">
              24/7
            </h3>

            <p className="mt-3 text-gray-400">
              Monitoring
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}