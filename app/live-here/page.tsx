import type { Metadata } from "next";
import { ExternalLink } from "@/components/ExternalLink";
import { PageHeader } from "@/components/PageHeader";
import { chamber } from "@/lib/site";

export const metadata: Metadata = {
  title: "Living here",
  description:
    "What the Alamogordo Chamber of Commerce tells people who are considering civilian work at Holloman AFB: distance, cost, schools, and care.",
};

const facts = [
  {
    figure: "6 miles",
    label: "Holloman to Alamogordo on U.S. 70",
    detail:
      "The Chamber’s community profile places the base just southwest of town. It is a commute, not a relocation to another city.",
  },
  {
    figure: "87.5",
    label: "Cost-of-living index",
    detail:
      "Published on the Chamber homepage against a U.S. baseline of 100. Lower is less expensive. Source agencies revise the index.",
  },
  {
    figure: "71.0",
    label: "Housing index",
    detail:
      "The same Chamber homepage, same baseline. Housing is the line that usually decides whether a GS salary feels workable.",
  },
  {
    figure: "19.5 min",
    label: "Mean commute",
    detail:
      "The figure the Chamber prints on its community profile. Shift work at the fire department will not look like that average.",
  },
];

export default function LiveHerePage() {
  return (
    <>
      <PageHeader
        kicker="Alamogordo and Otero County"
        title="The job is on the base. The life is in town."
        lede="People take a Holloman job and then discover the question was never only the grade. It was housing, a school, a clinic, and whether the mountains are close enough to matter on a Saturday."
      />
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <li key={fact.label} className="bg-dune p-5">
              <p className="font-serif text-4xl text-ink">{fact.figure}</p>
              <h2 className="mt-2 text-sm font-medium text-ink">{fact.label}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{fact.detail}</p>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-muted">
          Indexes and the commute are the Chamber’s published figures, consulted
          October 4, 2026, not a new survey for this sample.
        </p>

        <div className="mt-14 grid gap-12 md:grid-cols-2">
          <section>
            <h2 className="font-serif text-3xl text-ink">The work around the work</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
              <p>
                The Chamber describes Holloman as home of the 49th Wing, which
                trains F-16 and MQ-9 aircrew, and of the 704th Test Group and
                the high-speed test track. It also describes a daytime
                population on base of about 11,000, and an economic-impact
                estimate of $411,743,040 through payroll, jobs, and contracts.
                Those are the Chamber’s numbers. They move when the mission moves.
              </p>
              <p>
                Off base, the Chamber names CHRISTUS Southern New Mexico as the
                largest non-government employer, a hospital that has shared the
                community’s medical care with the base for years. A spouse’s job
                is often there, in the schools, or with a contractor — not in a
                second federal announcement.
              </p>
            </div>
          </section>
          <section>
            <h2 className="font-serif text-3xl text-ink">Schools, sand, and the ridge</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
              <p>
                Alamogordo Public Schools serve the town. Holloman has its own
                elementary and middle schools. The New Mexico School for the
                Blind and Visually Impaired is in Alamogordo. Ask the district,
                not a job announcement, which building a given address feeds.
              </p>
              <p>
                White Sands National Park is west of town. U.S. 82 climbs east
                into Cloudcroft and the Sacramento Mountains, inside the Lincoln
                National Forest. The basin is high desert: hard light, a real
                winter at elevation, and summers that make a shift worker plan
                the grocery run before noon.
              </p>
            </div>
          </section>
        </div>

        <section className="mt-14 border border-line bg-sand p-6 md:p-8">
          <h2 className="font-serif text-3xl text-ink">Ask the Chamber before you ship a household</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
            The Chamber already sends relocation packets to incoming Airmen and
            answers the same questions from civilians: who to call about housing,
            what is actually open, which weekend is worth driving up the
            mountain. This website does not replace that conversation.
          </p>
          <address className="mt-6 text-sm leading-relaxed not-italic text-ink">
            {chamber.name}
            <br />
            {chamber.street}, {chamber.locality}
            <br />
            <a className="text-turquoise underline" href={chamber.phoneHref}>
              {chamber.phoneDisplay}
            </a>
            <br />
            <ExternalLink href={chamber.url} className="text-turquoise underline">
              alamogordo.com
            </ExternalLink>
            <span className="text-muted"> · </span>
            <ExternalLink href={chamber.mapsHref} className="text-turquoise underline">
              Map
            </ExternalLink>
          </address>
          <p className="mt-4 text-sm text-muted">
            Weekday hours are posted on the Chamber site. Call ahead rather than
            trusting a directory that disagrees with the last one you opened.
          </p>
        </section>
      </div>
    </>
  );
}
