import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "brand" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" && "bg-muted text-muted-foreground",
        variant === "brand" &&
          "bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300",
        variant === "outline" &&
          "border border-border text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
