import { getDirectHireJob } from "@/lib/jobs";

type RouteParams = {
  params: Promise<{ slug: string }>;
};

export async function GET(_request: Request, { params }: RouteParams) {
  const { slug } = await params;
  const job = getDirectHireJob(slug);
  if (!job) {
    return Response.json(
      { sample: true, error: "No sample notice with that slug." },
      { status: 404, headers: { "X-Robots-Tag": "noindex" } },
    );
  }

  return Response.json(
    { sample: true, directHire: job },
    { headers: { "X-Robots-Tag": "noindex" } },
  );
}
