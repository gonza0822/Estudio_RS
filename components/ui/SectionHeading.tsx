import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  title: string;
  description?: string;
  className?: string;
};

/** Renders a consistent title and optional section description. */
export function SectionHeading({
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 text-pretty text-base leading-7 text-slate-600 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
