"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { isSampleOpen } from "@/lib/format";
import { families, type DirectHireSummary, type FamilyId } from "@/lib/jobs";

type DirectHireBrowserProps = {
  jobs: DirectHireSummary[];
};

export function DirectHireBrowser({ jobs }: DirectHireBrowserProps) {
  const [query, setQuery] = useState("");
  const [family, setFamily] = useState<FamilyId | "all">("all");

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return jobs.filter((job) => {
      const familyOk = family === "all" || job.family === family;
      if (!familyOk) return false;
      if (!needle) return true;
      return (
        job.title.toLowerCase().includes(needle) ||
        job.seriesLine.toLowerCase().includes(needle) ||
        job.announcementNumber.toLowerCase().includes(needle) ||
        job.summary.toLowerCase().includes(needle)
      );
    });
  }, [family, jobs, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-line pb-6">
        <label className="block max-w-md text-sm">
          <span className="font-medium text-ink">Search the sample notices</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="search"
            placeholder="Title, series, or announcement number"
            className="mt-2 w-full border border-line bg-dune px-3 py-2 text-ink"
          />
        </label>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by occupation">
          <FilterChip
            pressed={family === "all"}
            onClick={() => setFamily("all")}
            label="All"
          />
          {families.map((item) => (
            <FilterChip
              key={item.id}
              pressed={family === item.id}
              onClick={() => setFamily(item.id)}
              label={item.label}
            />
          ))}
        </div>
        <p className="text-sm text-muted" aria-live="polite">
          Showing {visible.length} of {jobs.length} sample notices.
        </p>
      </div>
      {visible.length === 0 ? (
        <p className="py-12 text-ink-soft">
          No sample notice matches that filter. Clear the search or choose All.
        </p>
      ) : (
        <ul className="divide-y divide-line">
          {visible.map((job) => {
            const open = isSampleOpen(job.closeDate);
            return (
              <li key={job.slug} className="py-7">
                <article className="grid gap-4 md:grid-cols-[minmax(0,1fr)_14rem] md:gap-8">
                  <div>
                    <p className="text-xs font-medium tracking-wide text-muted uppercase">
                      {job.announcementNumber} · {job.seriesLine} · {job.familyLabel}
                    </p>
                    <h2 className="mt-1 font-serif text-3xl leading-tight text-ink">
                      <Link
                        href={`/direct-hire/${job.slug}`}
                        className="underline decoration-transparent underline-offset-4 hover:decoration-gold"
                      >
                        {job.title}
                      </Link>
                    </h2>
                    <p className="mt-3 max-w-2xl text-ink-soft">{job.summary}</p>
                    <p className="mt-3 text-sm text-muted">{job.organization}</p>
                  </div>
                  <dl className="text-sm leading-relaxed md:text-right">
                    <div>
                      <dt className="sr-only">Pay range</dt>
                      <dd className="font-medium text-ink">{job.payLabel} a year</dd>
                    </div>
                    <div>
                      <dt className="sr-only">Sample closing date</dt>
                      <dd className="text-ink-soft">Closes {job.closeLabel}</dd>
                    </div>
                    <div>
                      <dt className="sr-only">Sample status</dt>
                      <dd className={open ? "text-turquoise" : "text-clay"}>
                        {open ? "Sample window open" : "Sample window closed"}
                      </dd>
                    </div>
                    <div className="mt-3">
                      <Link
                        href={`/direct-hire/${job.slug}`}
                        className="inline-block bg-clay px-3 py-2 text-sm font-medium text-dune"
                      >
                        Read the notice
                      </Link>
                    </div>
                  </dl>
                </article>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function FilterChip({
  pressed,
  onClick,
  label,
}: {
  pressed: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`border px-3 py-1.5 text-sm ${pressed ? "border-ink bg-ink text-sand" : "border-line bg-dune text-ink-soft hover:border-ink"}`}
    >
      {label}
    </button>
  );
}
