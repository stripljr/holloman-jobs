import type { Metadata } from "next";
import { ExternalLink } from "@/components/ExternalLink";
import { PageHeader } from "@/components/PageHeader";
import { federalDocuments, federalLanes, federalSteps, hiringPaths, laneHref } from "@/lib/federal";
import {
  tfsc,
  usajobsHiringPaths,
  usajobsHome,
  usajobsResumeHelp,
  usajobsSearch,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Federal hiring",
  description:
    "How to find competitive federal jobs at Holloman AFB on USAJobs. The Alamogordo Chamber of Commerce does not reprint those announcements.",
};

export default function FederalPage() {
  return (
    <>
      <PageHeader
        kicker="Competitive federal hiring"
        title="The announcement lives on USAJobs."
        lede="For ordinary federal hiring, the official text, the questionnaire, and the apply button are on USAJobs.gov. This page tells you how to search Holloman and what to have ready. It does not republish vacancy announcements."
      />
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <div className="flex flex-col gap-4 border border-line bg-sand p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-clay uppercase">
              System of record
            </p>
            <p className="mt-2 max-w-xl text-ink-soft">
              Start with every public announcement the installation has open.
              Results change daily and include both competitive notices and
              Direct Hire notices.
            </p>
          </div>
          <ExternalLink
            href={usajobsSearch()}
            className="inline-block shrink-0 bg-clay px-4 py-3 text-center text-sm font-medium text-dune"
          >
            Search Holloman on USAJobs
          </ExternalLink>
        </div>

        <section className="mt-14" aria-labelledby="steps-heading">
          <h2 id="steps-heading" className="font-serif text-3xl text-ink md:text-4xl">
            What to do, in order
          </h2>
          <ol className="mt-8 space-y-8">
            {federalSteps.map((step, index) => (
              <li key={step.title} className="grid gap-3 border-t border-line pt-6 md:grid-cols-[4rem_minmax(0,1fr)]">
                <span className="font-serif text-3xl text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-2xl text-ink">{step.title}</h3>
                  <p className="mt-2 max-w-2xl leading-relaxed text-ink-soft">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm">
            <ExternalLink href={usajobsHome} className="text-turquoise underline">
              USAJobs home
            </ExternalLink>
            <span className="text-muted"> · </span>
            <ExternalLink href={usajobsResumeHelp} className="text-turquoise underline">
              What a USAJobs resume should include
            </ExternalLink>
          </p>
        </section>

        <section className="mt-16" aria-labelledby="docs-heading">
          <h2 id="docs-heading" className="font-serif text-3xl text-ink md:text-4xl">
            Documents people get asked for
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft">
            Only the announcement in front of you can say which of these are
            required. Bring the ones it names. Extra certificates do not repair
            a missing one.
          </p>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {federalDocuments.map((document) => (
              <li key={document.name} className="grid gap-2 py-5 md:grid-cols-[16rem_minmax(0,1fr)]">
                <h3 className="font-medium text-ink">{document.name}</h3>
                <p className="text-ink-soft">{document.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16" aria-labelledby="lanes-heading">
          <h2 id="lanes-heading" className="font-serif text-3xl text-ink md:text-4xl">
            Searches worth saving
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft">
            Each link opens USAJobs with a location of Holloman AFB, New Mexico,
            and a keyword where one helps. These are doors, not job descriptions.
            A keyword will miss announcements that use a different title.
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {federalLanes.map((lane) => (
              <li key={lane.id} className="flex flex-col border border-line bg-dune p-5">
                <h3 className="font-serif text-2xl text-ink">{lane.title}</h3>
                <p className="mt-1 text-xs font-medium tracking-wide text-muted uppercase">
                  {lane.series}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                  {lane.summary}
                </p>
                <ExternalLink
                  href={laneHref(lane)}
                  className="mt-4 text-sm font-medium text-clay underline"
                >
                  Open this search on USAJobs
                </ExternalLink>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16" aria-labelledby="paths-heading">
          <h2 id="paths-heading" className="font-serif text-3xl text-ink md:text-4xl">
            Hiring paths, in plain language
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft">
            “Who may apply” is a gate, not a suggestion. USAJobs keeps the
            definitions. The short versions below are so you know which
            definition to go read.
          </p>
          <ul className="mt-8 space-y-6">
            {hiringPaths.map((path) => (
              <li key={path.name}>
                <h3 className="font-medium text-ink">{path.name}</h3>
                <p className="mt-1 max-w-2xl text-ink-soft">{path.detail}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm">
            <ExternalLink href={usajobsHiringPaths} className="text-turquoise underline">
              USAJobs unique hiring paths
            </ExternalLink>
          </p>
        </section>

        <section className="mt-16 border border-line bg-pine p-6 text-sand md:p-8">
          <h2 className="font-serif text-3xl">When you are stuck</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-sand/85">
            A real Holloman announcement from the Air Force lists the {tfsc.name}{" "}
            at{" "}
            <a className="underline" href={tfsc.phoneHref}>
              {tfsc.phoneDisplay}
            </a>
            . {tfsc.note} The Chamber can tell you about Alamogordo. It cannot
            see your application, change a questionnaire answer, or tell you
            why you were not referred.
          </p>
        </section>
      </div>
    </>
  );
}
