import SectionTitle from "@/components/ui/SectionTitle";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <SectionTitle
        label="CAREER"
        title="Professional Experience"
      />

      <div className="mt-20 space-y-10">

        {experiences.map((job) => (

          <div
            key={job.company}
            className="rounded-2xl border border-white/10 bg-[#0d1117] p-8 transition hover:border-cyan-400 hover:-translate-y-1"
          >

            <div className="flex flex-wrap items-center justify-between">

              <div>

                <h3 className="text-2xl font-bold">
                  {job.position}
                </h3>

                <p className="mt-1 text-cyan-400">
                  {job.company}
                </p>

              </div>

              <span className="text-gray-400">
                {job.period}
              </span>

            </div>

            <p className="mt-6 leading-8 text-gray-400">
              {job.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              {job.tech.map((tech) => (

                <span
                  key={tech}
                  className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                >
                  {tech}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>
    </section>
  );
}