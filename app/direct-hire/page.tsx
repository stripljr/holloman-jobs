import type { Metadata } from "next";
import { DirectHireBrowser } from "@/components/DirectHireBrowser";
import { PageHeader } from "@/components/PageHeader";
import { directHireSummaries } from "@/lib/jobs";

export const metadata: Metadata = {
  title: "Direct Hire",
  description:
    "Sample Direct Hire notices for civilian work at Holloman AFB, published in full by the Alamogordo Chamber of Commerce. These are illustrations, not vacancy announcements.",
};

export default function DirectHirePage() {
  const jobs = directHireSummaries();

  return (
    <>
      <PageHeader
        kicker="Direct Hire Authority · Sample notices"
        title="The posting lives on this page."
        lede="Direct Hire Authority lets an agency hire a qualified person without competitive ranking and without applying veterans’ preference, when the Office of Personnel Management has approved that authority for a shortage or a critical need. Public notice still happens. In this sample, that notice is written out here."
      />
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <div className="mb-10 max-w-3xl border-l-4 border-gold bg-sand px-5 py-4 text-sm leading-relaxed text-ink-soft">
          <p>
            These six notices are illustrations. Announcement numbers begin with
            SAMPLE. The Air Force is the hiring agency. The Alamogordo Chamber
            of Commerce does not rate applications and cannot make an offer.
            Many real Direct Hire announcements are also posted on USAJobs. If
            a real announcement exists, USAJobs — not this page — is the one
            you apply through.
          </p>
        </div>
        <DirectHireBrowser jobs={jobs} />
      </div>
    </>
  );
}
