"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0b0e17]"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      {/* Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Main Cyan Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/[0.08]
          blur-[150px]
        "
      />

      {/* Small Ambient Glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[10%]
          top-[20%]
          z-0
          h-[300px]
          w-[300px]
          rounded-full
          bg-blue-500/[0.06]
          blur-[120px]
        "
      />

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-screen
          max-w-7xl
          items-center
          gap-16
          px-6
          py-24
          lg:grid-cols-[1fr_0.9fr]
          lg:px-10
        "
      >
        {/* =======================================================
            LEFT SIDE
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="relative z-10"
        >
          {/* Greeting */}
          <p className="mb-5 text-lg font-medium text-cyan-400">
            👋 Hello, I&apos;m
          </p>

          {/* Name */}
          <h1
            className="
              text-5xl
              font-black
              leading-[1.05]
              tracking-[-0.03em]
              sm:text-6xl
              lg:text-7xl
            "
          >
            Ahmad Rafli
            <br />
            Firman Rosyadi
          </h1>

          {/* Job */}
          <h2 className="mt-6 text-xl leading-relaxed text-gray-300 sm:text-2xl">
            Database Administrator
            <br />
            Infrastructure Engineer
          </h2>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            Building reliable database infrastructure, monitoring systems,
            automation, Linux servers and production-ready backend
            environments.
          </p>

          {/* =====================================================
              BUTTONS
          ===================================================== */}

          <div className="mt-10 flex flex-wrap gap-4">
            {/* View Projects */}
            <a
              href="#projects"
              className="
                group
                rounded-xl
                bg-cyan-500
                px-7
                py-3.5
                font-semibold
                text-black
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-cyan-400
                hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
              "
            >
              View Projects

              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* Download CV */}
            <a
              href="/CV-Ahmad-Rafli.pdf"
              download="CV-Ahmad-Rafli.pdf"
              className="
                group
                rounded-xl
                border
                border-white/15
                bg-white/[0.02]
                px-7
                py-3.5
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400
                hover:text-cyan-400
                hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
              "
            >
              Download CV

              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-y-1">
                ↓
              </span>
            </a>
          </div>

          {/* =====================================================
              STATS
          ===================================================== */}

          <div
            className="
              mt-14
              grid
              max-w-2xl
              grid-cols-3
              border-t
              border-white/10
              pt-7
            "
          >
            {/* Stat 1 */}
            <div className="pr-4">
              <p className="text-3xl font-bold text-white">
                5+
              </p>

              <p className="mt-1 text-sm leading-6 text-gray-500">
                Years
                <br />
                Experience
              </p>
            </div>

            {/* Stat 2 */}
            <div className="border-l border-white/10 px-6">
              <p className="text-xl font-semibold text-white">
                PostgreSQL
              </p>

              <p className="mt-1 text-sm leading-6 text-gray-500">
                Database Specialist
              </p>
            </div>

            {/* Stat 3 */}
            <div className="border-l border-white/10 px-6">
              <p className="text-xl font-semibold text-white">
                Infra
              </p>

              <p className="mt-1 text-sm leading-6 text-gray-500">
                &amp; Monitoring
              </p>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            RIGHT SIDE — TERMINAL
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="relative flex items-center justify-center -translate-y-15"
        >
          {/* Terminal Glow */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              z-0
              h-[450px]
              w-[450px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-cyan-500/[0.10]
              blur-[120px]
            "
          />

          {/* Decorative Circle */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              z-0
              h-[420px]
              w-[420px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-cyan-400/[0.08]
            "
          />

          {/* =====================================================
              FLOATING TERMINAL
          ===================================================== */}

          <motion.div
            animate={{
              y: [0, -10, 0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              z-10
              w-full
              max-w-xl
              overflow-hidden
              rounded-2xl
              border
              border-cyan-400/15
              bg-[#0d1117]
              shadow-[0_25px_80px_rgba(0,0,0,0.55)]
            "
          >
            {/* Terminal Header */}
            <div
              className="
                flex
                items-center
                border-b
                border-white/10
                bg-white/[0.025]
                px-5
                py-4
              "
            >
              {/* Traffic lights */}
              <div className="flex gap-2">
                <div className="h-3.5 w-3.5 rounded-full bg-red-500" />
                <div className="h-3.5 w-3.5 rounded-full bg-yellow-500" />
                <div className="h-3.5 w-3.5 rounded-full bg-green-500" />
              </div>

              {/* Terminal name */}
              <span className="ml-4 font-mono text-sm text-gray-500">
                ubuntu@portfolio
              </span>
            </div>

            {/* =================================================
                TERMINAL CONTENT
            ================================================= */}

            <div
              className="
                p-7
                font-mono
                text-sm
                leading-7
                sm:p-8
                sm:text-base
              "
            >
              {/* whoami */}
              <p className="text-green-400">
                $ whoami
              </p>

              <p className="mt-2 text-gray-200">
                Ahmad Rafli Firman Rosyadi
              </p>

              {/* skills */}
              <p className="mt-7 text-green-400">
                $ skills
              </p>

              <div className="mt-2 grid grid-cols-2 gap-x-8 text-gray-300">
                <p>
                  <span className="text-green-400">✓</span>{" "}
                  PostgreSQL
                </p>

                <p>
                  <span className="text-green-400">✓</span>{" "}
                  Grafana
                </p>

                <p>
                  <span className="text-green-400">✓</span>{" "}
                  ClickHouse
                </p>

                <p>
                  <span className="text-green-400">✓</span>{" "}
                  Automation
                </p>

                <p>
                  <span className="text-green-400">✓</span>{" "}
                  Linux
                </p>

                <p>
                  <span className="text-green-400">✓</span>{" "}
                  Monitoring
                </p>

                <p>
                  <span className="text-green-400">✓</span>{" "}
                  Docker
                </p>

                <p>
                  <span className="text-green-400">✓</span>{" "}
                  Infrastructure
                </p>
              </div>

              {/* status */}
              <p className="mt-7 text-green-400">
                $ status
              </p>

              <p className="mt-2 text-cyan-400">
                Open To Remote Work
              </p>

              {/* Cursor */}
              <span className="ml-1 animate-pulse text-green-400">
                █
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}