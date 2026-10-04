import Link from "next/link";
import { BasinHorizon } from "@/components/BasinHorizon";
import { ExternalLink } from "@/components/ExternalLink";
import { directHireSummaries } from "@/lib/jobs";
import { chamber, usajobsHome } from "@/lib/site";

const comparison = [
  {
    topic: "Where the words live",
    direct:
      "The full sample notice — duties, qualifications, pay, and closing date — is on this site.",
    federal:
      "The official announcement stays on USAJobs. This site does not copy it.",
  },
  {
    topic: "Where you apply",
    direct:
      "A sample interest form on the notice. It checks your entries and stores nothing. A real Direct Hire notice would name the agency’s application method.",
    federal:
      "Only on USAJobs, before 11:59 p.m. Eastern Time on the closing date.",
  },
  {
    topic: "Veterans’ preference",
    direct:
      "Does not apply to positions filled under Direct Hire Authority. Veterans who are qualified can still be hired.",
    federal:
      "Applies in competitive examining, when the announcement says it does.",
  },
  {
    topic: "Who hires",
    direct: "The Air Force. Not the Chamber.",
    federal: "The Air Force. Not the Chamber, and not USAJobs.",
  },
];

export default function HomePage() {
  const featured = directHireSummaries().slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-sand">
        <BasinHorizon />
        <div className="relative z-10 mx-auto max-w-6xl px-5 pt-16 pb-28 md:px-8 md:pt-24 md:pb-36">
          <p className="text-xs font-semibold tracking-[0.18em] text-gold-soft uppercase">
            Hub of Enchantment · Civilian careers
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.02] text-sand md:text-7xl">
            Civilian work at Holloman. A life in Alamogordo.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-sand/85">
            Holloman Air Force Base is the largest employer in Otero County,
            about six miles southwest of town on U.S. 70. This Chamber guide
            splits the civilian path in two, so you always know which document
            is the real one.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <Link
              href="/direct-hire"
              className="block bg-sand p-6 text-ink transition-colors hover:bg-dune"
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-clay uppercase">
                01 · Direct Hire
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight">
                The notice is written here.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Duties, qualifications, pay, and how to raise your hand. Six
                sample postings, marked as samples, so you can see the whole
                shape of a Direct Hire notice without leaving the Chamber site.
              </p>
              <p className="mt-5 text-sm font-medium text-clay">
                Read the Direct Hire notices
              </p>
            </Link>
            <Link
              href="/federal"
              className="block border border-white/15 bg-pine/80 p-6 text-sand hover:bg-pine"
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-gold-soft uppercase">
                02 · Federal hiring
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight">
                The notice stays on USAJobs.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-sand/80">
                Competitive announcements are not reprinted. We show you how to
                search Holloman, which documents to have ready, and when the
                Eastern Time deadline actually falls in New Mexico.
              </p>
              <p className="mt-5 text-sm font-medium text-gold-soft">
                Open the USAJobs guide
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-sand" aria-labelledby="split-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <h2 id="split-heading" className="font-serif text-3xl text-ink md:text-4xl">
            Two paths. Two places the words can live.
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft">
            On the real USAJobs board, Direct Hire and competitive announcements
            sit side by side. This sample splits them on purpose. If a notice is
            not on this site, do not treat a summary anywhere else as the
            announcement.
          </p>
          <div className="mt-8 hidden overflow-x-auto md:block">
            <table className="w-full border-collapse text-left text-sm">
              <caption className="sr-only">
                How Direct Hire on this site differs from federal hiring on USAJobs
              </caption>
              <thead>
                <tr className="border-b border-line text-xs tracking-wide text-muted uppercase">
                  <th scope="col" className="py-3 pr-4 font-medium">
                    Question
                  </th>
                  <th scope="col" className="py-3 pr-4 font-medium">
                    Direct Hire
                  </th>
                  <th scope="col" className="py-3 font-medium">
                    Federal hiring
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.topic} className="border-b border-line align-top">
                    <th scope="row" className="py-4 pr-4 font-medium text-ink">
                      {row.topic}
                    </th>
                    <td className="py-4 pr-6 text-ink-soft">{row.direct}</td>
                    <td className="py-4 text-ink-soft">{row.federal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="mt-8 space-y-6 md:hidden">
            {comparison.map((row) => (
              <li key={row.topic} className="border-t border-line pt-4">
                <h3 className="font-medium text-ink">{row.topic}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  <span className="font-medium text-ink">Direct Hire. </span>
                  {row.direct}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  <span className="font-medium text-ink">Federal. </span>
                  {row.federal}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20" aria-labelledby="open-notices">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-turquoise uppercase">
              Direct Hire
            </p>
            <h2 id="open-notices" className="mt-2 font-serif text-3xl text-ink md:text-4xl">
              Sample notices closing first
            </h2>
          </div>
          <Link href="/direct-hire" className="text-sm font-medium text-clay underline">
            All six sample notices
          </Link>
        </div>
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {featured.map((job) => (
            <li key={job.slug}>
              <Link
                href={`/direct-hire/${job.slug}`}
                className="grid gap-2 py-6 md:grid-cols-[11rem_minmax(0,1fr)_auto] md:items-baseline md:gap-6"
              >
                <span className="text-xs font-medium tracking-wide text-muted uppercase">
                  {job.seriesLine}
                  <span className="mt-1 block normal-case tracking-normal md:mt-1">
                    Closes {job.closeLabel}
                  </span>
                </span>
                <span>
                  <span className="block font-serif text-2xl text-ink">{job.title}</span>
                  <span className="mt-1 block text-sm text-ink-soft">{job.summary}</span>
                </span>
                <span className="text-sm font-medium text-ink">{job.payLabel}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-line bg-pine text-sand">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-[1fr_1fr] md:px-8 md:py-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-gold-soft uppercase">
              Why the town is part of the offer
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
              The base is a short drive. The Sacramento Mountains are the other direction.
            </h2>
          </div>
          <div className="text-sand/85">
            <p className="leading-relaxed">
              The Chamber’s community profile puts Holloman’s daytime population
              near 11,000 and describes the base as the anchor of the local
              economy. Its homepage puts the cost-of-living index at 87.5 and
              housing at 71.0, against a U.S. baseline of 100.
            </p>
            <p className="mt-4 leading-relaxed">
              White Sands is west. Cloudcroft and the Lincoln National Forest
              are up U.S. 82. The Chamber already sends relocation packets to
              incoming Airmen. This guide is the civilian companion to that
              habit.
            </p>
            <Link href="/live-here" className="mt-6 inline-block text-sm font-medium text-gold-soft underline">
              Read the living-here notes
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <h2 className="font-serif text-3xl text-ink">If you only remember two links</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          <li className="border border-line bg-dune p-5">
            <p className="text-sm text-muted">Direct Hire samples, on this site</p>
            <Link href="/direct-hire" className="mt-2 block font-serif text-2xl text-ink hover:text-clay">
              holloman jobs / direct hire
            </Link>
          </li>
          <li className="border border-line bg-dune p-5">
            <p className="text-sm text-muted">Every official federal announcement</p>
            <ExternalLink href={usajobsHome} className="mt-2 block font-serif text-2xl text-ink hover:text-clay">
              usajobs.gov
            </ExternalLink>
          </li>
        </ul>
        <p className="mt-6 text-sm text-muted">
          Questions about Alamogordo: {chamber.name},{" "}
          <a className="underline" href={chamber.phoneHref}>
            {chamber.phoneDisplay}
          </a>
          . Questions about a real Air Force announcement: the Total Force
          Service Center, 1-800-525-0102.
        </p>
      </section>
    </>
  );
}
