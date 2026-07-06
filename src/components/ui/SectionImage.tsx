import Image from "next/image";
import { cn } from "@/lib/utils";

interface SectionImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  aspect?: "video" | "square" | "wide" | "auto";
}

const aspectClasses = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[16/10]",
  auto: "aspect-auto min-h-[240px]",
};

export function SectionImage({
  src,
  alt,
  caption,
  className,
  imageClassName,
  priority = false,
  aspect = "wide",
}: SectionImageProps) {
  return (
    <figure className={cn("overflow-hidden", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-border bg-muted shadow-lg shadow-brand-900/5",
          aspectClasses[aspect],
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={cn("object-cover", imageClassName)}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-muted-foreground">{caption}</figcaption>
      )}
    </figure>
  );
}
