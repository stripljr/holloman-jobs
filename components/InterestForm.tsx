"use client";

import { useState, type FormEvent } from "react";
import { pathNotes, validateInterest, type InterestErrors } from "@/lib/interest";

type InterestFormProps = {
  jobSlug: string;
  jobTitle: string;
  announcementNumber: string;
};

type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "checked" }
  | { state: "failed"; message: string };

export function InterestForm({
  jobSlug,
  jobTitle,
  announcementNumber,
}: InterestFormProps) {
  const [errors, setErrors] = useState<InterestErrors>({});
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const input = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      jobSlug,
      pathNote: String(data.get("pathNote") ?? ""),
      message: String(data.get("message") ?? ""),
    };
    const nextErrors = validateInterest(input);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus({ state: "idle" });
      return;
    }

    setStatus({ state: "submitting" });
    try {
      const response = await fetch("/api/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      const payload = (await response.json()) as {
        ok?: boolean;
        message?: string;
        errors?: InterestErrors;
      };
      if (!response.ok || !payload.ok) {
        setErrors(payload.errors ?? {});
        setStatus({
          state: "failed",
          message: payload.message ?? "The sample form could not check that entry.",
        });
        return;
      }
      setStatus({ state: "checked" });
      form.reset();
    } catch {
      setStatus({
        state: "failed",
        message: "The sample form could not be reached. Nothing was sent.",
      });
    }
  }

  if (status.state === "checked") {
    return (
      <div className="border-l-4 border-turquoise bg-dune p-5" role="status">
        <h2 className="font-serif text-2xl text-ink">Checked. Not sent.</h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          The form accepted the shape of an interest note for {jobTitle} (
          {announcementNumber}) and then stopped. Nothing was emailed, saved, or
          forwarded to the Air Force or the Chamber.
        </p>
        <button
          type="button"
          className="mt-4 text-sm font-medium text-turquoise underline"
          onClick={() => setStatus({ state: "idle" })}
        >
          Try the form again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="border border-line bg-dune p-5">
      <h2 className="font-serif text-2xl text-ink">Sample interest form</h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        For {announcementNumber}. This demonstrates the fields. It does not
        apply you to a job.
      </p>
      <div className="mt-5 space-y-4">
        <Field
          id="name"
          label="Name"
          error={errors.name}
          autoComplete="name"
        />
        <Field
          id="email"
          label="Email"
          type="email"
          error={errors.email}
          autoComplete="email"
        />
        <Field
          id="phone"
          label="Phone"
          type="tel"
          error={errors.phone}
          autoComplete="tel"
        />
        <div>
          <label htmlFor="pathNote" className="text-sm font-medium text-ink">
            Which description is closest?
          </label>
          <select
            id="pathNote"
            name="pathNote"
            defaultValue=""
            aria-invalid={errors.pathNote ? true : undefined}
            aria-describedby={errors.pathNote ? "pathNote-error" : undefined}
            className="mt-1 w-full border border-line bg-paper px-3 py-2 text-sm"
          >
            <option value="" disabled>
              Select one
            </option>
            {pathNotes.map((note) => (
              <option key={note} value={note}>
                {note}
              </option>
            ))}
          </select>
          {errors.pathNote ? (
            <p id="pathNote-error" className="mt-1 text-sm text-clay">
              {errors.pathNote}
            </p>
          ) : (
            <p className="mt-1 text-xs text-muted">
              This is not an eligibility decision. A real announcement decides that.
            </p>
          )}
        </div>
        <div>
          <label htmlFor="message" className="text-sm font-medium text-ink">
            Note <span className="font-normal text-muted">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            maxLength={800}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="mt-1 w-full border border-line bg-paper px-3 py-2 text-sm"
          />
          {errors.message ? (
            <p id="message-error" className="mt-1 text-sm text-clay">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>
      {status.state === "failed" ? (
        <p className="mt-4 text-sm text-clay" role="alert">
          {status.message}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status.state === "submitting"}
        className="mt-5 bg-clay px-4 py-2 text-sm font-medium text-dune disabled:opacity-60"
      >
        {status.state === "submitting" ? "Checking…" : "Check this sample note"}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-1 w-full border border-line bg-paper px-3 py-2 text-sm"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1 text-sm text-clay">
          {error}
        </p>
      ) : null}
    </div>
  );
}
