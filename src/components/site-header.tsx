"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GlassPanel } from "@/components/surface";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <GlassPanel className="mx-auto mt-4 flex h-14 w-[calc(100%-2rem)] max-w-[var(--container-content)] items-center justify-between rounded-full px-4 sm:px-5">
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-70"
        >
          <span className="grid size-6 place-items-center rounded-full bg-foreground font-mono text-[10px] font-medium text-background">
            TA
          </span>
          <span className="font-mono text-caption font-medium uppercase tracking-[0.14em] text-foreground">
            Triumph&nbsp;Anazia
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              className={cn(
                "rounded-full px-3 py-1.5 font-mono text-caption transition-colors hover:bg-muted hover:text-foreground",
                isActive(pathname, item.href)
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden h-9 rounded-full px-4 sm:inline-flex"
          >
            <Link href={siteConfig.links.mail}>Let&apos;s work together</Link>
          </Button>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="grid size-9 place-items-center rounded-full text-foreground transition-colors hover:bg-muted lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </GlassPanel>

      {open && (
        <GlassPanel
          strong
          className={cn(
            "mx-auto mt-2 w-[calc(100%-2rem)] max-w-[var(--container-content)] rounded-3xl p-2 lg:hidden",
          )}
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={
                  isActive(pathname, item.href) ? "page" : undefined
                }
                className={cn(
                  "rounded-xl px-4 py-3 font-mono text-meta transition-colors hover:bg-muted",
                  isActive(pathname, item.href)
                    ? "bg-muted text-foreground"
                    : "text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={siteConfig.links.mail}
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl bg-foreground px-4 py-3 text-center font-mono text-meta text-background transition-opacity hover:opacity-90"
            >
              Let&apos;s work together
            </Link>
          </nav>
        </GlassPanel>
      )}
    </header>
  );
}
