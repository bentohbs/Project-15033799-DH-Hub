interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignment} max-w-2xl ${align === "center" ? "" : ""}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] mb-3 ${
            light ? "text-accent-200" : "text-primary-600"
          }`}
        >
          <span className={`w-5 h-px ${light ? "bg-accent-200" : "bg-primary-500"}`}></span>
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-heading text-2xl md:text-4xl font-semibold leading-tight tracking-tight ${
          light ? "text-accent-50" : "text-foreground-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-sm md:text-base leading-relaxed ${light ? "text-accent-100/80" : "text-foreground-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}