"use client";

import { motion } from "framer-motion";
import {
  Database,
  Server,
  Activity,
  Network,
  ArrowUpRight,
} from "lucide-react";

import { projects } from "@/data/projects";

const icons = [
  Activity,
  Database,
  Network,
  Server,
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-semibold tracking-wider text-cyan-400">
          PROJECTS
        </p>

        <h2 className="mt-3 text-4xl font-bold md:text-5xl">
           Technical Projects
        </h2>

        <p className="mt-5 max-w-3xl leading-8 text-gray-400">
          Technical projects and production work involving
          database administration, infrastructure monitoring,
          automation, and enterprise data integration.
        </p>
      </motion.div>

      {/* PROJECT GRID */}
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = icons[index % icons.length];

          return (
            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] p-7 transition duration-300 hover:border-cyan-400/40"
            >
              {/* Background Glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl transition duration-500 group-hover:bg-cyan-400/20" />

              <div className="relative">
                {/* TOP */}
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                    <Icon
                      size={24}
                      className="text-cyan-400"
                    />
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="text-gray-600 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                  />
                </div>

                {/* CATEGORY */}
                <p className="mt-6 text-sm font-semibold text-cyan-400">
                  {project.category}
                </p>

                {/* TITLE */}
                <h3 className="mt-2 text-2xl font-bold">
                  {project.title}
                </h3>

                {/* COMPANY */}
                <div className="mt-3 flex flex-wrap gap-2 text-sm">
                  <span className="text-gray-300">
                    {project.company}
                  </span>

                  <span className="text-gray-600">
                    •
                  </span>

                  <span className="text-gray-500">
                    {project.period}
                  </span>
                </div>

                {/* DESCRIPTION */}
                <p className="mt-5 leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* HIGHLIGHTS */}
                <div className="mt-7 space-y-3">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />

                      <span>
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                {/* TECHNOLOGIES */}
                <div className="mt-7 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300 transition hover:border-cyan-400/30 hover:text-cyan-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}