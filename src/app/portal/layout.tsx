import { siteContent } from "@/content/site";
import { LogoLink } from "@/components/layout/Logo";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="border-b border-border bg-background px-4 py-3">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <LogoLink size="sm" />
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
            Portal Preview - Auth Required
          </span>
        </div>
      </div>
      {children}
    </div>
  );
}
