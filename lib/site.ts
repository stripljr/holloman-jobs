export const chamber = {
  name: "Alamogordo Chamber of Commerce",
  url: "https://www.alamogordo.com/",
  phoneDisplay: "(575) 437-6120",
  phoneHref: "tel:+15754376120",
  street: "1301 N. White Sands Blvd.",
  locality: "Alamogordo, NM 88310",
  mapsHref:
    "https://maps.google.com/?q=1301+N+White+Sands+Blvd+Alamogordo+NM+88310",
} as const;

export const tfsc = {
  name: "Total Force Service Center",
  phoneDisplay: "1-800-525-0102",
  phoneHref: "tel:+18005250102",
  note: "This is the phone number printed on Air Force civilian announcements for Holloman AFB. Those announcements tell applicants not to email.",
} as const;

export const opmRusPayTable =
  "https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/salary-tables/26Tables/pdf/RUS.pdf";

export const opmQualificationStandards =
  "https://www.opm.gov/policy-data-oversight/classification-qualifications/general-schedule-qualification-standards/";

export const usajobsHome = "https://www.usajobs.gov/";

export const usajobsResumeHelp =
  "https://www.usajobs.gov/help/faq/application/documents/resume/what-to-include/";

export const usajobsHiringPaths =
  "https://www.usajobs.gov/Help/working-in-government/unique-hiring-paths/";

export const payNote =
  "Illustrative annual range from the 2026 Rest of U.S. General Schedule, step 1 through step 10, including the 17.06% locality payment (OPM Salary Table 2026-RUS). Confirm the duty station against OPM’s locality-area definitions before relying on a figure. Special rates, overtime, night differential, and firefighter schedules are not included.";

export const sampleBanner =
  "Sample guide. Direct Hire notices here are illustrations, not Air Force vacancy announcements.";

export function usajobsSearch(keyword?: string) {
  const query = new URLSearchParams();
  if (keyword) query.set("k", keyword);
  query.set("l", "Holloman AFB, New Mexico");
  return `https://www.usajobs.gov/search/results?${query.toString()}`;
}

export const directHireApplySteps = [
  "Read the whole sample notice, including who may apply and the specialized experience.",
  "Write a federal-style resume that covers that experience: month and year for each job, hours per week, and a supervisor’s name and phone.",
  "Use the interest form on the notice. It checks that the fields are filled in, then stops. It does not email the Chamber or the Air Force, and it does not store what you typed.",
  "On a production version of this page, replace that form with the hiring agency’s real application method.",
] as const;
