"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site, type NavItem } from "@/lib/site";
import { SocialLinks } from "./SocialLinks";
import { cn } from "@/lib/cn";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

// One desktop dropdown group ("Community" / "Survive & Thrive").
function NavGroup({
  label,
  items,
  pathname,
}: {
  label: string;
  items: NavItem[];
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const groupActive = items.some((i) => isActive(pathname, i.href));

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative" onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        className={cn(
          "rounded-lg px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          groupActive ? "text-primary" : "text-foreground hover:text-primary",
        )}
      >
        {label}
        <span aria-hidden className="ml-1 text-xs">
          ▾
        </span>
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 min-w-56 rounded-xl border border-border bg-surface p-2 shadow-lg">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block rounded-lg px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isActive(pathname, item.href)
                  ? "bg-surface-muted font-semibold text-primary"
                  : "text-foreground hover:bg-surface-muted",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close the mobile panel whenever the route changes — the React-recommended
  // "adjust state during render" pattern, no effect needed.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg text-lg font-bold tracking-tight text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span aria-hidden>🐾</span>
          <span>{site.shortName}</span>
          <span className="hidden text-foreground sm:inline">@ Texas State</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          <NavGroup label="🏠 Community" items={nav.community} pathname={pathname} />
          <NavGroup
            label="🧭 Survive & Thrive"
            items={nav.resources}
            pathname={pathname}
          />
          <div className="ml-3 border-l border-border pl-3">
            <SocialLinks />
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
          className="rounded-lg p-2 text-foreground hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
        >
          <span aria-hidden className="text-xl">
            {mobileOpen ? "✕" : "☰"}
          </span>
        </button>
      </nav>

      {/* Mobile panel */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-surface lg:hidden"
        >
          <div className="mx-auto max-w-6xl space-y-6 px-4 py-5 sm:px-6">
            <MobileGroup title="🏠 Community" items={nav.community} pathname={pathname} />
            <MobileGroup
              title="🧭 Survive & Thrive"
              items={nav.resources}
              pathname={pathname}
            />
            <div className="border-t border-border pt-4">
              <SocialLinks />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function MobileGroup({
  title,
  items,
  pathname,
}: {
  title: string;
  items: NavItem[];
  pathname: string;
}) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
        {title}
      </p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={cn(
                "block rounded-lg px-3 py-2 text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isActive(pathname, item.href)
                  ? "bg-surface-muted font-semibold text-primary"
                  : "text-foreground hover:bg-surface-muted",
              )}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
