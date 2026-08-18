"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 bg-[#050816] py-28"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Main Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -z-10
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/[0.07]
          blur-[150px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-cyan-400">
            CONTACT
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Let&apos;s Work
            <span className="text-cyan-400"> Together.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Interested in working together, discussing a technical project,
            or exploring opportunities? Feel free to reach out.
          </p>
        </motion.div>

        {/* CONTACT CARDS */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">

          {/* EMAIL */}
          <motion.a
            href="mailto:ahmadrapli70@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              group
              rounded-2xl
              border
              border-white/10
              bg-white/[0.02]
              p-7
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-cyan-400/30
              hover:bg-cyan-400/[0.03]
            "
          >
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                border
                border-cyan-400/20
                bg-cyan-400/10
                text-xl
                text-cyan-400
              "
            >
              @
            </div>

            <h3 className="mt-6 text-lg font-semibold text-white">
              Email
            </h3>

            <p className="mt-2 break-all text-sm text-gray-500 transition-colors group-hover:text-cyan-400">
              ahmadrapli70@gmail.com
            </p>
          </motion.a>

          {/* LINKEDIN */}
          <motion.a
            href="https://www.linkedin.com/in/ahmad-rafli-firman-rosyadi-384377145/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="
              group
              rounded-2xl
              border
              border-white/10
              bg-white/[0.02]
              p-7
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-cyan-400/30
              hover:bg-cyan-400/[0.03]
            "
          >
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                border
                border-cyan-400/20
                bg-cyan-400/10
                text-lg
                font-bold
                text-cyan-400
              "
            >
              in
            </div>

            <h3 className="mt-6 text-lg font-semibold text-white">
              LinkedIn
            </h3>

            <p className="mt-2 text-sm text-gray-500 transition-colors group-hover:text-cyan-400">
              Connect with me
            </p>
          </motion.a>

          {/* GITHUB */}
          <motion.a
            href="https://github.com/rafliori8712"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="
              group
              rounded-2xl
              border
              border-white/10
              bg-white/[0.02]
              p-7
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-cyan-400/30
              hover:bg-cyan-400/[0.03]
            "
          >
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                border
                border-cyan-400/20
                bg-cyan-400/10
                text-lg
                font-bold
                text-cyan-400
              "
            >
              &lt;/&gt;
            </div>

            <h3 className="mt-6 text-lg font-semibold text-white">
              GitHub
            </h3>

            <p className="mt-2 text-sm text-gray-500 transition-colors group-hover:text-cyan-400">
              View my projects
            </p>
          </motion.a>

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="mailto:ahmadrapli70@gmail.com"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-xl
              bg-cyan-500
              px-8
              py-4
              font-semibold
              text-black
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-cyan-400
              hover:shadow-[0_0_35px_rgba(34,211,238,0.30)]
            "
          >
            Send Me an Email

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>

        {/* FOOTER */}
        <div className="mt-24 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Ahmad Rafli Firman Rosyadi.
            All rights reserved.
          </p>
        </div>

      </div>
    </section>
  );
}
