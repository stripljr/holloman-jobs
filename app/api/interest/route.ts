import { validateInterest, type InterestInput } from "@/lib/interest";
import { getDirectHireJob } from "@/lib/jobs";

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return Response.json(
      { ok: false, message: "Send JSON." },
      { status: 415 },
    );
  }

  const length = Number(request.headers.get("content-length") ?? "0");
  if (length > 10_000) {
    return Response.json(
      { ok: false, message: "That note is too large." },
      { status: 413 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { ok: false, message: "The body was not valid JSON." },
      { status: 400 },
    );
  }

  if (!body || typeof body !== "object") {
    return Response.json(
      { ok: false, message: "The body was empty." },
      { status: 400 },
    );
  }

  const record = body as Partial<Record<keyof InterestInput, unknown>>;
  const input: InterestInput = {
    name: typeof record.name === "string" ? record.name : "",
    email: typeof record.email === "string" ? record.email : "",
    phone: typeof record.phone === "string" ? record.phone : "",
    jobSlug: typeof record.jobSlug === "string" ? record.jobSlug : "",
    pathNote: typeof record.pathNote === "string" ? record.pathNote : "",
    message: typeof record.message === "string" ? record.message : "",
  };

  const errors = validateInterest(input);
  if (Object.keys(errors).length > 0) {
    return Response.json(
      { ok: false, message: "Fix the highlighted fields.", errors },
      { status: 400 },
    );
  }

  const job = getDirectHireJob(input.jobSlug);
  return Response.json({
    ok: true,
    stored: false,
    transmitted: false,
    sample: true,
    announcementNumber: job?.announcementNumber,
    message:
      "Checked only. Nothing was saved, emailed, or sent to the Air Force or the Chamber.",
  });
}
