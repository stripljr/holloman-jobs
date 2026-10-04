"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { chamber, sampleBanner } from "@/lib/site";

const links = [
  { href: "/", label: "Overview" },
  { href: "/direct-hire", label: "Direct Hire" },
  { href: "/federal", label: "Federal / USAJobs" },
  { href: "/live-here", label: "Living here" },
];

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  return (
    <header className="no-print sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="bg-ink text-sand">
        <div className="mx-auto flex max-w-6xl flex-wrap items-start justify-between gap-x-4 gap-y-1 px-5 py-2 text-xs leading-relaxed md:px-8">
          <p className="min-w-0 flex-1">{sampleBanner}</p>
          <a href={chamber.url} className="shrink-0 underline decoration-white/40 underline-offset-2">
            alamogordo.com
            <span className="sr-only"> (Chamber website)</span>
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link href="/" className="group block">
          <span className="block text-[0.68rem] font-semibold tracking-[0.18em] text-turquoise uppercase">
            Alamogordo Chamber
          </span>
          <span className="block font-serif text-xl leading-none text-ink group-hover:text-clay">
            Holloman Jobs
          </span>
        </Link>
        <button
          type="button"
          className="shrink-0 border border-line px-3 py-2 text-sm text-ink md:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpenPath(open ? null : pathname)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav
          id="site-nav"
          aria-label="Primary"
          className={`${open ? "absolute inset-x-0 top-full grid border-b border-line bg-paper p-4" : "hidden"} gap-1 md:static md:flex md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0`}
        >
          {links.map((link) => {
            const current = isCurrent(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={current ? "page" : undefined}
                className={`px-1 py-2 text-sm ${current ? "text-clay underline decoration-gold decoration-2 underline-offset-8" : "text-ink-soft hover:text-ink"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
