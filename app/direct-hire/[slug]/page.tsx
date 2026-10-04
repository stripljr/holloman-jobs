import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "@/components/ExternalLink";
import { InterestForm } from "@/components/InterestForm";
import { formatLongDate, formatUsd, isSampleOpen, seriesLine } from "@/lib/format";
import {
  directHireJobs,
  familyLabel,
  getDirectHireJob,
  toSummary,
} from "@/lib/jobs";
import {
  chamber,
  directHireApplySteps,
  opmQualificationStandards,
  opmRusPayTable,
  payNote,
  tfsc,
} from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return directHireJobs.map((job) => ({ slug: job.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getDirectHireJob(slug);
  if (!job) return { title: "Notice not found" };
  return {
    title: `${job.title} (sample)`,
    description: `Sample Direct Hire notice ${job.announcementNumber} for a ${seriesLine(job)} ${job.title} at Holloman AFB. Not an official vacancy.`,
  };
}

export default async function DirectHireNoticePage({ params }: PageProps) {
  const { slug } = await params;
  const job = getDirectHireJob(slug);
  if (!job) notFound();

  const open = isSampleOpen(job.closeDate);
  const others = directHireJobs
    .filter((item) => item.slug !== job.slug)
    .slice(0, 3)
    .map(toSummary);

  return (
    <article className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
      <p className="text-xs font-semibold tracking-[0.16em] text-turquoise uppercase">
        <Link href="/direct-hire" className="underline decoration-turquoise/40">
          Direct Hire
        </Link>
        <span className="text-muted"> · {familyLabel(job.family)} · Sample</span>
      </p>
      <p className="mt-4 text-sm font-medium text-muted">{job.announcementNumber}</p>
      <h1 className="mt-2 max-w-3xl font-serif text-4xl leading-[1.08] text-ink md:text-6xl">
        {job.title}
      </h1>
      <p className="mt-4 text-lg text-ink-soft">{seriesLine(job)} · {job.location}</p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink">{job.summary}</p>

      <div className="mt-8 border-l-4 border-gold bg-sand px-5 py-4 text-sm leading-relaxed text-ink-soft">
        Sample announcement. Not a vacancy. The Alamogordo Chamber of Commerce
        is not the hiring agency. Veterans’ preference does not apply under
        Direct Hire Authority. Confirm any real opening with the Air Force or
        on USAJobs before you act on it.
      </div>

      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
        <div>
          <dl className="grid gap-px border border-line bg-line sm:grid-cols-2">
            <Fact label="Opens" value={formatLongDate(job.openDate)} />
            <Fact
              label="Closes"
              value={`${formatLongDate(job.closeDate)}, 11:59 p.m. Mountain Time · ${open ? "sample window open" : "sample window closed"}`}
            />
            <Fact label="Organization" value={job.organization} />
            <Fact label="Appointment" value={job.appointment} />
            <Fact label="Work schedule" value={job.workSchedule} />
            <Fact label="Promotion potential" value={job.promotionPotential} />
            <Fact label="Clearance" value={job.clearance} />
            <Fact label="Work site" value={job.telework} />
          </dl>

          <section className="mt-12">
            <h2 className="font-serif text-3xl text-ink">Who may apply</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">{job.whoMayApply}</p>
          </section>

          <section className="mt-12">
            <h2 className="font-serif text-3xl text-ink">Duties</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed text-ink-soft">
              {job.duties.map((duty) => (
                <li key={duty}>{duty}</li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="font-serif text-3xl text-ink">Qualifications</h2>
            <h3 className="mt-6 text-sm font-semibold tracking-wide text-muted uppercase">
              Specialized experience
            </h3>
            <p className="mt-3 leading-relaxed text-ink-soft">
              {job.specializedExperience}
            </p>
            <h3 className="mt-6 text-sm font-semibold tracking-wide text-muted uppercase">
              Education
            </h3>
            <p className="mt-3 leading-relaxed text-ink-soft">{job.education}</p>
            <p className="mt-3 text-sm">
              <ExternalLink href={opmQualificationStandards} className="text-turquoise underline">
                OPM General Schedule qualification standards
              </ExternalLink>
            </p>
          </section>

          <section className="mt-12">
            <h2 className="font-serif text-3xl text-ink">Conditions of employment</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed text-ink-soft">
              {job.conditions.map((condition) => (
                <li key={condition}>{condition}</li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="font-serif text-3xl text-ink">Pay</h2>
            <p className="mt-4 font-serif text-4xl text-ink">
              {formatUsd(job.salaryMin)}–{formatUsd(job.salaryMax)}
            </p>
            <p className="mt-2 text-sm text-muted">per year, illustrative</p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">{payNote}</p>
            <p className="mt-3 text-sm">
              <ExternalLink href={opmRusPayTable} className="text-turquoise underline">
                OPM Salary Table 2026-RUS
              </ExternalLink>
            </p>
          </section>

          <section className="mt-12">
            <h2 className="font-serif text-3xl text-ink">How to raise your hand</h2>
            <ol className="mt-4 list-decimal space-y-3 pl-5 leading-relaxed text-ink-soft">
              {directHireApplySteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Questions about a real Holloman civilian announcement: {tfsc.name},{" "}
              <a className="text-turquoise underline" href={tfsc.phoneHref}>
                {tfsc.phoneDisplay}
              </a>
              . {tfsc.note} Questions about Alamogordo: {chamber.name},{" "}
              <a className="text-turquoise underline" href={chamber.phoneHref}>
                {chamber.phoneDisplay}
              </a>
              , {chamber.street}, {chamber.locality}.
            </p>
          </section>
        </div>

        <aside className="no-print lg:sticky lg:top-28">
          <InterestForm
            jobSlug={job.slug}
            jobTitle={job.title}
            announcementNumber={job.announcementNumber}
          />
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Competitive federal announcements are a different path.{" "}
            <Link href="/federal" className="text-turquoise underline">
              Use the USAJobs guide
            </Link>{" "}
            instead of this form.
          </p>
        </aside>
      </div>

      <section className="mt-16 border-t border-line pt-10">
        <h2 className="font-serif text-2xl text-ink">Other sample notices</h2>
        <ul className="mt-4 divide-y divide-line">
          {others.map((other) => (
            <li key={other.slug} className="py-3">
              <Link href={`/direct-hire/${other.slug}`} className="text-ink hover:text-clay">
                <span className="font-medium">{other.title}</span>
                <span className="text-muted"> · {other.seriesLine}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-dune px-4 py-3">
      <dt className="text-xs font-semibold tracking-wide text-muted uppercase">{label}</dt>
      <dd className="mt-1 text-sm leading-relaxed text-ink">{value}</dd>
    </div>
  );
}
