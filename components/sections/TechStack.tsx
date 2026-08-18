import {
  SiPostgresql,
  SiDocker,
  SiLinux,
  SiGrafana,
  SiGit,
  SiClickhouse,
  SiNextdotjs,
  SiReact,
} from "react-icons/si";

const skills = [
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    level: "95%",
    width: "w-[95%]",
  },
  {
    name: "ClickHouse",
    icon: SiClickhouse,
    level: "90%",
    width: "w-[90%]",
  },
  {
    name: "Linux",
    icon: SiLinux,
    level: "95%",
    width: "w-[95%]",
  },
  {
    name: "Docker",
    icon: SiDocker,
    level: "90%",
    width: "w-[90%]",
  },
  {
    name: "Grafana",
    icon: SiGrafana,
    level: "85%",
    width: "w-[85%]",
  },
  {
    name: "Git",
    icon: SiGit,
    level: "90%",
    width: "w-[90%]",
  },
  {
    name: "React",
    icon: SiReact,
    level: "80%",
    width: "w-[80%]",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    level: "80%",
    width: "w-[80%]",
  },
];

export default function TechStack() {
  return (
    <section
      id="stack"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <p className="text-cyan-400 font-semibold">
        TECH STACK
      </p>

      <h2 className="mt-3 text-5xl font-bold">
        Technologies I Work With
      </h2>

      <div className="mt-16 grid gap-6 md:grid-cols-2">

        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              className="rounded-2xl border border-white/10 bg-[#0d1117] p-6 transition hover:-translate-y-1 hover:border-cyan-400"
            >
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <Icon
                    size={32}
                    className="text-cyan-400"
                  />

                  <span className="text-lg font-semibold">
                    {skill.name}
                  </span>

                </div>

                <span className="text-cyan-400">
                  {skill.level}
                </span>

              </div>

              <div className="mt-5 h-2 rounded-full bg-white/10">

                <div
                  className={`h-2 rounded-full bg-cyan-400 ${skill.width}`}
                />

              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}