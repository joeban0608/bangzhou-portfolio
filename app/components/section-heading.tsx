export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="text-xs font-medium uppercase tracking-[0.32em] text-[var(--color-accent-soft)]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}
