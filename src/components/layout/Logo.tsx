import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/content/site";
import { cn } from "@/lib/utils";

const sizes = {
  sm: { container: "h-8 w-8", image: 32, text: "text-base" },
  md: { container: "h-9 w-9", image: 36, text: "text-lg" },
  lg: { container: "h-10 w-10", image: 40, text: "text-xl" },
};

interface LogoProps {
  size?: keyof typeof sizes;
  showName?: boolean;
  className?: string;
  nameClassName?: string;
}

export function Logo({
  size = "md",
  showName = true,
  className,
  nameClassName,
}: LogoProps) {
  const s = sizes[size];

  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "relative shrink-0 overflow-hidden rounded-full",
          s.container
        )}
      >
        <Image
          src="/logo.png"
          alt={`${siteContent.company.name} logo`}
          width={s.image}
          height={s.image}
          className="h-full w-full object-contain"
          priority
        />
      </span>
      {showName && (
        <span
          className={cn(
            "font-bold tracking-tight text-foreground",
            s.text,
            nameClassName
          )}
        >
          {siteContent.company.name}
        </span>
      )}
    </span>
  );
}

interface LogoLinkProps extends LogoProps {
  href?: string;
}

export function LogoLink({
  href = "/",
  size = "md",
  showName = true,
  className,
  nameClassName,
}: LogoLinkProps) {
  return (
    <Link
      href={href}
      className={cn("inline-flex", className)}
      aria-label={`${siteContent.company.name} home`}
    >
      <Logo size={size} showName={showName} nameClassName={nameClassName} />
    </Link>
  );
}
