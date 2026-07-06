import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-brand-900 text-white hover:bg-brand-800 shadow-sm dark:bg-white dark:text-brand-900 dark:hover:bg-brand-50",
  secondary:
    "bg-white text-brand-900 border border-border hover:bg-muted shadow-sm dark:bg-brand-900 dark:text-white dark:border-brand-800 dark:hover:bg-brand-800",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-muted hover:border-brand-300",
  ghost: "text-muted-foreground hover:text-foreground hover:bg-muted",
  link: "text-brand-600 underline-offset-4 hover:underline p-0 h-auto dark:text-brand-400",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    variant !== "link" && sizes[size],
    className
  );

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return <button className={classes} {...props}>{children}</button>;
}
