import { Reveal } from "@/components/ui/Reveal";

type BackgroundRevealProps = {
  line: string;
};

/** Transparent band that lets the pinned hero background show through while scrolling. */
export function BackgroundReveal({ line }: BackgroundRevealProps) {
  return (
    <section className="relative flex min-h-[11rem] items-center justify-center px-6 py-14 md:min-h-[15rem] md:py-20">
      <Reveal>
        <p className="max-w-xl rounded-2xl border border-border-soft bg-cream px-6 py-4 text-center font-serif text-xl font-medium tracking-tight text-ink md:px-8 md:py-5 md:text-2xl">
          {line}
        </p>
      </Reveal>
    </section>
  );
}
