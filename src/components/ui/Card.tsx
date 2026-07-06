import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-6 shadow-sm",
        hover &&
          "transition-all duration-300 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-500/10 dark:hover:border-brand-700",
        className
      )}
    >
      {children}
    </div>
  );
}
