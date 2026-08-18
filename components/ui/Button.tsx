type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      className={`rounded-xl px-7 py-3 font-semibold transition-all duration-300 ${
        variant === "primary"
          ? "bg-cyan-400 text-black hover:scale-105 hover:bg-cyan-300"
          : "border border-white/20 hover:border-cyan-400"
      }`}
    >
      {children}
    </button>
  );
}