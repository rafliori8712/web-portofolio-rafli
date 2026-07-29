export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="text-xl font-bold tracking-wide">
          Rafli<span className="text-cyan-400">.</span>
        </a>

        <nav className="hidden gap-8 text-sm md:flex">
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#stack" className="hover:text-cyan-400">Stack</a>
          <a href="#experience" className="hover:text-cyan-400">Experience</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </nav>
      </div>
    </header>
  );
}