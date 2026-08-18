type Props = {
  label: string;
  title: string;
};

export default function SectionTitle({
  label,
  title,
}: Props) {
  return (
    <>
      <p className="font-semibold uppercase tracking-[4px] text-cyan-400">
        {label}
      </p>

      <h2 className="mt-3 text-5xl font-bold">
        {title}
      </h2>
    </>
  );
}