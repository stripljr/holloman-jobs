import { federalLanes, laneHref } from "@/lib/federal";
import { directHireSummaries } from "@/lib/jobs";

export function GET() {
  return Response.json(
    {
      sample: true,
      disclaimer:
        "Direct Hire entries are illustrations, not vacancy announcements. Competitive federal announcements are not included. Search USAJobs for those.",
      directHire: directHireSummaries(),
      federalSearches: federalLanes.map((lane) => ({
        id: lane.id,
        title: lane.title,
        series: lane.series,
        summary: lane.summary,
        usajobsUrl: laneHref(lane),
      })),
    },
    {
      headers: {
        "Cache-Control": "public, max-age=300",
        "X-Robots-Tag": "noindex",
      },
    },
  );
}
