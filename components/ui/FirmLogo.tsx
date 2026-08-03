import Image from "next/image";
import { cn } from "@/lib/cn";
import { firmContent } from "@/lib/content/siteContent";

type FirmLogoProps = {
  className?: string;
  priority?: boolean;
  /** Kept for call-site compatibility; the brand mark is a fixed navy wordmark. */
  variant?: "light" | "dark";
};

/** Renders the firm logo mark for header and footer. */
export function FirmLogo({ className, priority = false }: FirmLogoProps) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src="/images/brand/logo-estudio-sr.png"
        alt={firmContent.name}
        width={484}
        height={72}
        className="h-8 w-auto md:h-9"
        priority={priority}
      />
    </span>
  );
}
