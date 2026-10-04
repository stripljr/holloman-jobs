import Link from "next/link";
import { ExternalLink } from "@/components/ExternalLink";
import { chamber, opmRusPayTable, tfsc } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer id="about-this-sample" className="no-print border-t border-line bg-ink text-sand">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-gold-soft uppercase">
            About this sample
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-sand/85">
            Holloman Jobs is a sample published for the Alamogordo Chamber of
            Commerce. Direct Hire notices on this site are illustrations. The
            Chamber does not hire for the Air Force, does not rate applicants,
            and cannot make a job offer. Competitive federal announcements are
            not reprinted here. USAJobs is the system of record.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-gold-soft uppercase">
            Chamber
          </p>
          <address className="mt-3 text-sm leading-relaxed not-italic text-sand/85">
            {chamber.name}
            <br />
            {chamber.street}
            <br />
            {chamber.locality}
            <br />
            <a className="underline decoration-white/30 underline-offset-2" href={chamber.phoneHref}>
              {chamber.phoneDisplay}
            </a>
            <br />
            <ExternalLink
              href={chamber.url}
              className="underline decoration-white/30 underline-offset-2"
            >
              alamogordo.com
            </ExternalLink>
          </address>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-gold-soft uppercase">
            On this site
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link className="underline decoration-white/30 underline-offset-2" href="/direct-hire">
                Direct Hire notices
              </Link>
            </li>
            <li>
              <Link className="underline decoration-white/30 underline-offset-2" href="/federal">
                Federal hiring on USAJobs
              </Link>
            </li>
            <li>
              <Link className="underline decoration-white/30 underline-offset-2" href="/live-here">
                Living in Alamogordo
              </Link>
            </li>
            <li>
              <a className="underline decoration-white/30 underline-offset-2" href={tfsc.phoneHref}>
                {tfsc.name}: {tfsc.phoneDisplay}
              </a>
            </li>
            <li>
              <ExternalLink
                href={opmRusPayTable}
                className="underline decoration-white/30 underline-offset-2"
              >
                OPM 2026 Rest of U.S. pay table
              </ExternalLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-4 text-xs leading-relaxed text-sand/70 md:px-8">
          <p>
            Figures for cost of living (index 87.5), housing (index 71.0), a
            daytime population of about 11,000, and an economic-impact estimate
            of $411,743,040 are the Chamber’s own published descriptions on
            alamogordo.com, consulted October 4, 2026. The Chamber notes that
            source agencies revise them. Pay figures are OPM Salary Table
            2026-RUS. Reviewed October 4, 2026.
          </p>
          <p className="mt-2">
            Search engines are asked not to index this sample so the
            illustrations are not mistaken for open vacancies.
          </p>
        </div>
      </div>
    </footer>
  );
}
