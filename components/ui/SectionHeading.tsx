import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  level?: "h1" | "h2";
};

/** Renders a consistent title and optional section description. */
export function SectionHeading({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  level = "h1",
}: SectionHeadingProps) {
  const TitleTag = level;

  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      <TitleTag
        className={cn(
          "text-balance font-serif text-3xl font-semibold tracking-tight text-navy md:text-4xl",
          titleClassName,
        )}
      >
        {title}
      </TitleTag>
      {description ? (
        <p
          className={cn(
            "mt-4 text-pretty text-base leading-7 text-ink-muted md:text-lg",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
