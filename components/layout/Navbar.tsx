export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <h1 className="text-3xl font-black">
          Rafli<span className="text-cyan-400">.</span>
        </h1>

        <nav className="hidden gap-10 text-sm md:flex">

          <a href="#about" className="hover:text-cyan-400">
            About
          </a>

          <a href="#stack" className="hover:text-cyan-400">
            Tech Stack
          </a>

          <a href="#experience" className="hover:text-cyan-400">
            Experience
          </a>

          <a href="#projects" className="hover:text-cyan-400">
            Projects
          </a>

          <a href="#contact" className="hover:text-cyan-400">
            Contact
          </a>

        </nav>

      </div>

    </header>
  );
}