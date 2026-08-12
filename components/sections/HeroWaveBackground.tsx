"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

type WaveLine = {
  baseYRatio: number;
  amp1: number;
  amp2: number;
  freq1: number;
  freq2: number;
  speed: number;
  phase: number;
  color: string;
  width: number;
};

const LINE_COUNT = 16;
const STEP = 8;
const LINE_GROUPS = [
  { color: "61,90,128", min: 0.05, max: 0.16 },
  { color: "82,112,153", min: 0.03, max: 0.1 },
] as const;

/** Builds the sine-wave path string for one line at a given time. */
function buildWavePath(
  line: WaveLine,
  width: number,
  height: number,
  time: number,
  parallax: number,
) {
  const baseY = height * line.baseYRatio + parallax;
  let path = "";

  for (let x = 0; x <= width; x += STEP) {
    const y =
      baseY +
      line.amp1 * Math.sin(x * line.freq1 + time * line.speed + line.phase) +
      line.amp2 * Math.sin(x * line.freq2 - time * line.speed * 1.4 + line.phase * 1.7);

    path += x === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
  }

  return path;
}

/** Creates the wave line config used by the hero background. */
function createWaveLines() {
  return Array.from({ length: LINE_COUNT }, (_, index) => {
    const group = LINE_GROUPS[index % LINE_GROUPS.length];
    const t = index / (LINE_COUNT - 1);
    const alpha = group.min + Math.random() * (group.max - group.min);

    return {
      baseYRatio: 0.15 + t * 0.7 + (Math.random() - 0.5) * 0.04,
      amp1: 26 + Math.random() * 46,
      amp2: 10 + Math.random() * 22,
      freq1: 0.0016 + Math.random() * 0.0022,
      freq2: 0.004 + Math.random() * 0.004,
      speed: 0.15 + Math.random() * 0.35,
      phase: Math.random() * Math.PI * 2,
      color: `rgba(${group.color},${alpha.toFixed(3)})`,
      width: 1 + Math.random() * 1.1,
    } satisfies WaveLine;
  });
}

/** Animated navy wave field for the home hero, driven by Framer Motion. */
export function HeroWaveBackground() {
  const reduceMotion = useReducedMotion();
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRefs = useRef<Array<SVGPathElement | null>>([]);
  const sizeRef = useRef({ width: 0, height: 0 });
  const mouseY = useMotionValue(0.5);
  const springY = useSpring(mouseY, { stiffness: 40, damping: 22, mass: 0.6 });
  const [lines, setLines] = useState<WaveLine[]>([]);

  useEffect(() => {
    setLines(createWaveLines());
  }, []);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) {
      return;
    }

    /** Keeps wave geometry in sync with the hero size. */
    const syncSize = () => {
      const { width, height } = svg.getBoundingClientRect();
      sizeRef.current = { width, height };

      lines.forEach((line, index) => {
        const path = pathRefs.current[index];
        if (!path || !width || !height) {
          return;
        }

        path.setAttribute("d", buildWavePath(line, width, height, 0, 0));
      });
    };

    syncSize();
    const observer = new ResizeObserver(syncSize);
    observer.observe(svg);

    return () => observer.disconnect();
  }, [lines]);

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    /** Maps pointer position to a gentle vertical parallax. */
    const onPointerMove = (event: PointerEvent) => {
      mouseY.set(event.clientY / window.innerHeight);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [mouseY, reduceMotion]);

  useAnimationFrame((timestamp) => {
    if (reduceMotion) {
      return;
    }

    const { width, height } = sizeRef.current;
    if (!width || !height) {
      return;
    }

    const time = timestamp / 1000;
    const parallax = (springY.get() - 0.5) * 18;

    lines.forEach((line, index) => {
      const path = pathRefs.current[index];
      if (!path) {
        return;
      }

      path.setAttribute("d", buildWavePath(line, width, height, time, parallax));
    });
  });

  return (
    <motion.svg
      ref={svgRef}
      className="pointer-events-none absolute inset-0 h-full w-full blur-[1.5px]"
      aria-hidden="true"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 0.42 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {lines.map((line, index) => (
        <motion.path
          key={`wave-${index}`}
          ref={(node) => {
            pathRefs.current[index] = node;
          }}
          fill="none"
          stroke={line.color}
          strokeWidth={line.width}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </motion.svg>
  );
}
