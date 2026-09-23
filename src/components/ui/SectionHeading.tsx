import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  overline?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  overline,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {overline && (
        <p className="text-[12px] font-semibold uppercase tracking-wider text-accent mb-5">
          {overline}
        </p>
      )}
      <h2 className="text-[1.75rem] font-bold tracking-tight text-text sm:text-[2rem] lg:text-[2.5rem] lg:leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className={cn(
          "mt-4 text-[17px] text-text-secondary leading-[1.65]",
          align === "center" ? "max-w-xl mx-auto" : "max-w-2xl"
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
