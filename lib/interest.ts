import { getDirectHireJob } from "@/lib/jobs";

export const pathNotes = [
  "Open to the public",
  "Veteran",
  "Military spouse",
  "Current or former federal employee",
  "Prefer not to say",
] as const;

export type PathNote = (typeof pathNotes)[number];

export type InterestInput = {
  name: string;
  email: string;
  phone: string;
  jobSlug: string;
  pathNote: string;
  message: string;
};

export type InterestErrors = Partial<Record<keyof InterestInput, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateInterest(input: InterestInput): InterestErrors {
  const errors: InterestErrors = {};
  const name = input.name.trim();
  const email = input.email.trim();
  const phoneDigits = input.phone.replace(/\D/g, "");
  const message = input.message.trim();

  if (name.length < 2 || name.length > 80) {
    errors.name = "Enter your name, between 2 and 80 characters.";
  }

  if (!emailPattern.test(email) || email.length > 120) {
    errors.email = "Enter an email address with a name and a domain.";
  }

  if (phoneDigits.length < 10 || phoneDigits.length > 15) {
    errors.phone = "Enter a phone number with at least 10 digits.";
  }

  if (!getDirectHireJob(input.jobSlug)) {
    errors.jobSlug = "That sample notice is not on this site.";
  }

  if (!pathNotes.includes(input.pathNote as PathNote)) {
    errors.pathNote = "Choose one of the listed answers.";
  }

  if (message.length > 800) {
    errors.message = "Keep the note to 800 characters or fewer.";
  }

  return errors;
}
