import { formatLongDate, formatUsd, seriesLine } from "@/lib/format";

export const families = [
  { id: "engineering", label: "Engineering" },
  { id: "information-technology", label: "Information technology" },
  { id: "public-safety", label: "Public safety" },
  { id: "communications", label: "Communications" },
  { id: "budget", label: "Budget" },
  { id: "security", label: "Security" },
] as const;

export type FamilyId = (typeof families)[number]["id"];

export type DirectHireJob = {
  slug: string;
  announcementNumber: string;
  title: string;
  family: FamilyId;
  payPlan: "GS";
  series: string;
  grade: string;
  salaryMin: number;
  salaryMax: number;
  organization: string;
  location: string;
  workSchedule: string;
  appointment: string;
  openDate: string;
  closeDate: string;
  clearance: string;
  telework: string;
  promotionPotential: string;
  summary: string;
  duties: string[];
  specializedExperience: string;
  education: string;
  conditions: string[];
  whoMayApply: string;
};

export const directHireJobs: DirectHireJob[] = [
  {
    slug: "general-engineer",
    announcementNumber: "SAMPLE-DHA-26-0801",
    title: "General Engineer",
    family: "engineering",
    payPlan: "GS",
    series: "0801",
    grade: "12",
    salaryMin: 89508,
    salaryMax: 116362,
    organization:
      "Illustrative host: an engineering office supporting test infrastructure at Holloman AFB",
    location: "Holloman AFB, New Mexico",
    workSchedule: "Full-time",
    appointment: "Permanent. Direct Hire Authority. Sample only.",
    openDate: "2026-09-28",
    closeDate: "2026-10-30",
    clearance:
      "This sample assumes the selectee must be able to obtain and keep a Secret clearance. It does not describe classified work.",
    telework:
      "Duty station is the installation. Occasional situational telework for writing and review. Site walks are in person.",
    promotionPotential: "None in this sample. The full performance level shown is GS-12.",
    summary:
      "Support the people who keep a high-speed test range ready to run. This sample asks for a GS-12 engineer who can review a design, walk the site, and write a recommendation a scheduler can use.",
    duties: [
      "Review drawings and specifications for trackside utilities, instrumentation pads, and mechanical or civil repairs, and mark the gaps before work is accepted.",
      "Walk the site with operators and write down what the drawings missed: access, drainage, power, and anything that would stop a scheduled test.",
      "Estimate cost and calendar time for small facility jobs and say, in writing, what is not included.",
      "Coordinate outages with the test schedule so maintenance does not land on a mission day.",
      "Prepare short technical memoranda a supervisor who is not an engineer can use to make a go or no-go call.",
      "Keep a record of accepted waivers so the next project does not rediscover them.",
    ],
    specializedExperience:
      "One year of specialized experience equivalent to GS-11 professional engineering work. That means you independently applied engineering principles to facility or test-infrastructure problems, documented the analysis, and coordinated the result with the people who operate the site. Coursework alone does not meet this sample’s experience requirement.",
    education:
      "A professional engineering degree, or a combination of education and experience that meets the current OPM individual occupational requirements for the 0801 series. This sample does not restate that standard.",
    conditions: [
      "U.S. citizenship.",
      "Suitability for federal employment and a background investigation.",
      "Able to obtain and maintain the clearance stated above.",
      "Able to walk uneven ground, climb short industrial stairs, and wear required personal protective equipment on a test site.",
      "Male applicants born after December 31, 1959, must be registered with Selective Service, if that law applies to them.",
      "This notice does not offer relocation incentive, recruitment incentive, or student loan repayment.",
    ],
    whoMayApply:
      "United States citizens. Written as an open Direct Hire notice. Veterans’ preference is not applied under Direct Hire Authority. Veterans who meet the qualifications are welcome. This sample does not make anyone eligible for a real announcement.",
  },
  {
    slug: "it-specialist-sysadmin",
    announcementNumber: "SAMPLE-DHA-26-2210",
    title: "Information Technology Specialist (Systems Administration)",
    family: "information-technology",
    payPlan: "GS",
    series: "2210",
    grade: "11",
    salaryMin: 74678,
    salaryMax: 97087,
    organization:
      "Illustrative host: a base communications squadron, unclassified systems",
    location: "Holloman AFB, New Mexico",
    workSchedule: "Full-time. Occasional after-hours maintenance windows.",
    appointment: "Permanent. Direct Hire Authority. Sample only.",
    openDate: "2026-09-21",
    closeDate: "2026-11-06",
    clearance:
      "This sample assumes the selectee must be able to obtain and keep a Secret clearance. Day-to-day duties in the sample are unclassified system administration.",
    telework:
      "Most work is on the installation, at the console or in the equipment room. Telework is rare and only when the change can be made remotely under local rules.",
    promotionPotential: "GS-12. Promotion is not automatic and is not part of this sample’s offer.",
    summary:
      "Keep unclassified servers patched, monitored, and recoverable. This sample is a GS-11 systems job. It is not a cyber-offense role and it is not a password-reset desk.",
    duties: [
      "Administer Windows or Linux servers that host unclassified base services, including accounts, patching, and backups.",
      "Follow a published baseline. Document every change that departs from it and why.",
      "Watch monitoring alerts, decide which ones are real, and restore service from a known backup when a restore is the right fix.",
      "Provision and remove accounts using the unit’s access process. Do not invent a side process.",
      "Write a short outage note: what failed, who was affected, what was restored, and what is still open.",
      "Hand a tested system back to the day shift with the runbook updated.",
    ],
    specializedExperience:
      "One year of specialized experience equivalent to GS-9 information technology work. You independently administered servers, accounts, and backups, and you can point to systems you personally changed. Watching a ticket queue, or only imaging laptops, does not meet this sample.",
    education:
      "No specific degree is required for this sample if the specialized experience is met. Education may substitute only as the current OPM 2210 standard allows. This page does not restate that standard.",
    conditions: [
      "U.S. citizenship.",
      "Suitability for federal employment and a background investigation.",
      "Able to obtain and maintain the clearance stated above.",
      "Able to work scheduled maintenance windows outside the duty day.",
      "Male applicants born after December 31, 1959, must be registered with Selective Service, if that law applies to them.",
      "This notice does not require Security+ or any named vendor certification. A real announcement might. Read that announcement.",
    ],
    whoMayApply:
      "United States citizens. Written as an open Direct Hire notice. Veterans’ preference is not applied under Direct Hire Authority. This sample does not make anyone eligible for a real announcement.",
  },
  {
    slug: "firefighter-hazmat",
    announcementNumber: "SAMPLE-DHA-26-0081",
    title: "Firefighter (Hazardous Materials Operations)",
    family: "public-safety",
    payPlan: "GS",
    series: "0081",
    grade: "07",
    salaryMin: 50460,
    salaryMax: 65599,
    organization: "Illustrative host: the installation fire department",
    location: "Holloman AFB, New Mexico",
    workSchedule:
      "Full-time rotating shifts, including nights, weekends, and holidays. This sample does not set the shift pattern.",
    appointment: "Permanent. Direct Hire Authority. Sample only.",
    openDate: "2026-10-01",
    closeDate: "2026-11-20",
    clearance:
      "This sample requires a favorable suitability determination and installation access. It does not require a security clearance.",
    telework: "None. Emergency response is on duty, on the installation.",
    promotionPotential: "None shown. The grade in this sample is GS-7.",
    summary:
      "Structural fire, aircraft incidents, and hazardous-materials operations on an installation. This sample is a GS-7 firefighter notice with shift work. It deliberately does not invent a fitness test or a special pay rate.",
    duties: [
      "Respond as assigned to structural, aircraft, and wildland-interface incidents on the installation.",
      "Perform hazardous-materials operations tasks under the incident command system. This sample is an operations-level notice, not a technician or incident-commander notice.",
      "Drive and operate apparatus only after local certification. Maintain the apparatus and the protective equipment assigned to you.",
      "Stand a rotating shift and cover recall when the department orders it.",
      "Complete the medical evaluation and physical-ability requirements the real hiring agency publishes. This sample does not publish a protocol.",
      "Write a clear incident note before the end of the shift.",
    ],
    specializedExperience:
      "One year of specialized experience equivalent to GS-6 firefighter work: responding to incidents, operating as part of a crew, and using apparatus or equipment under supervision that was headed toward independent operation. Training academy time may count only to the extent a real OPM or Department of Defense standard allows. This sample does not stretch that rule.",
    education:
      "No substitution of education for the specialized experience is claimed here. Real federal firefighter jobs also impose age, medical, and physical requirements this page does not set.",
    conditions: [
      "U.S. citizenship.",
      "Must meet the age, medical, and physical requirements of the real announcement. They are not restated here because inventing them would be worse than omitting them.",
      "Willing to work nights, weekends, holidays, and recall.",
      "Able to wear structural firefighting protective equipment and a respirator, subject to medical clearance.",
      "Favorable suitability determination and able to access the installation.",
      "Male applicants born after December 31, 1959, must be registered with Selective Service, if that law applies to them.",
      "Pay on a real firefighter job is often a special salary rate, not the ordinary GS-7 range shown below.",
    ],
    whoMayApply:
      "United States citizens who would also meet the medical and physical conditions of a real announcement. Veterans’ preference is not applied under Direct Hire Authority. This sample does not make anyone eligible for a real announcement.",
  },
  {
    slug: "telecommunications-specialist",
    announcementNumber: "SAMPLE-DHA-26-0391",
    title: "Telecommunications Specialist",
    family: "communications",
    payPlan: "GS",
    series: "0391",
    grade: "11",
    salaryMin: 74678,
    salaryMax: 97087,
    organization:
      "Illustrative host: a base communications squadron, circuit and cable shop",
    location: "Holloman AFB, New Mexico",
    workSchedule: "Full-time. Outage calls outside the duty day when a circuit is down.",
    appointment: "Permanent. Direct Hire Authority. Sample only.",
    openDate: "2026-09-15",
    closeDate: "2026-11-13",
    clearance:
      "This sample assumes the selectee must be able to obtain and keep a Secret clearance. The described work is installation and restoration of base circuits.",
    telework:
      "Field work is on the installation. Record-keeping may be done at a desk on base. This is not a remote position.",
    promotionPotential: "None in this sample. The full performance level shown is GS-11.",
    summary:
      "Voice and data circuits, cable records, and carrier tickets. This sample is for someone who has already owned a circuit from the install through the restore, not only pulled cable under direction.",
    duties: [
      "Install, test, and restore copper and fiber circuits used by organizations on the installation.",
      "Read cable records and correct them when the field does not match the drawing.",
      "Open, track, and close tickets with commercial carriers. Write down what the carrier promised and what actually happened.",
      "Support land-mobile radio at a basic level: programming a cache, swapping a failed unit, and escalating what you cannot repair.",
      "Tell the customer, before the window starts, what will be down and for how long.",
      "Leave the next shift a note that says which pairs are spare and which are not.",
    ],
    specializedExperience:
      "One year of specialized experience equivalent to GS-9 telecommunications work. You independently installed or restored circuits, kept records that matched the plant, and dealt with a carrier or a distant end without someone standing over you. Pulling cable as a helper, by itself, does not meet this sample.",
    education:
      "No specific degree is required for this sample if the specialized experience is met. See the current OPM standard for the 0391 series before using education as a substitute.",
    conditions: [
      "U.S. citizenship.",
      "Suitability for federal employment and a background investigation.",
      "Able to obtain and maintain the clearance stated above.",
      "Able to work in equipment rooms, manholes only when trained and permitted, and outdoor plant in desert heat and winter wind.",
      "Valid driver’s license and able to operate a government vehicle on the installation.",
      "Male applicants born after December 31, 1959, must be registered with Selective Service, if that law applies to them.",
    ],
    whoMayApply:
      "United States citizens. Written as an open Direct Hire notice. Veterans’ preference is not applied under Direct Hire Authority. This sample does not make anyone eligible for a real announcement.",
  },
  {
    slug: "budget-analyst",
    announcementNumber: "SAMPLE-DHA-26-0560",
    title: "Budget Analyst",
    family: "budget",
    payPlan: "GS",
    series: "0560",
    grade: "09",
    salaryMin: 61722,
    salaryMax: 80243,
    organization: "Illustrative host: a wing staff finance office",
    location: "Holloman AFB, New Mexico",
    workSchedule: "Full-time. Year-end close and budget drills can run past the duty day.",
    appointment: "Permanent. Direct Hire Authority. Sample only.",
    openDate: "2026-10-01",
    closeDate: "2026-12-04",
    clearance:
      "This sample requires a favorable suitability determination. It does not require a security clearance. The work described is unclassified budget execution.",
    telework:
      "A mix of on-base desk work and limited situational telework. Execution questions from a squadron are often same-day and in person.",
    promotionPotential: "GS-11. Promotion is not automatic and is not part of this sample’s offer.",
    summary:
      "Build a squadron’s operating budget and explain a variance without hiding the number. This sample is aimed at people who have already reconciled commitments, not only typed them into a system.",
    duties: [
      "Build and track an annual operating budget for one or more organizations, using the categories the wing actually funds.",
      "Reconcile commitments, obligations, and expenses against the finance system. Find the difference and name it.",
      "Explain a variance to a commander in plain language: what changed, what it costs, and what decision you need.",
      "Prepare short justifications for unfunded requirements. Separate a must-pay bill from a wish.",
      "Keep an audit trail of every adjustment you make, including who asked and when.",
      "Help a resource advisor who is new to the squadron learn the calendar: close, drills, and the dates that actually matter.",
    ],
    specializedExperience:
      "One year of specialized experience equivalent to GS-7 budget or accounting work. You reconciled a budget you did not merely post to, you explained variances to someone who could spend the money, and you can describe the system you used. Coursework in accounting, by itself, does not meet this sample.",
    education:
      "A degree in accounting, finance, business, or a related field may substitute for some general experience under the current OPM 0560 standard. This sample still requires the specialized experience described above for the GS-9 level. Read the current standard before you rely on a transcript.",
    conditions: [
      "U.S. citizenship.",
      "Suitability for federal employment and a background investigation.",
      "Able to protect controlled budget data. This sample does not involve classified material.",
      "Male applicants born after December 31, 1959, must be registered with Selective Service, if that law applies to them.",
      "This notice does not require a CPA or a DoD financial-management certification.",
    ],
    whoMayApply:
      "United States citizens. Written as an open Direct Hire notice. Veterans’ preference is not applied under Direct Hire Authority. This sample does not make anyone eligible for a real announcement.",
  },
  {
    slug: "security-specialist",
    announcementNumber: "SAMPLE-DHA-26-0080",
    title: "Security Specialist",
    family: "security",
    payPlan: "GS",
    series: "0080",
    grade: "11",
    salaryMin: 74678,
    salaryMax: 97087,
    organization: "Illustrative host: an installation security office",
    location: "Holloman AFB, New Mexico",
    workSchedule: "Full-time",
    appointment: "Permanent. Direct Hire Authority. Sample only.",
    openDate: "2026-09-28",
    closeDate: "2026-12-11",
    clearance:
      "This sample assumes the selectee must be able to obtain and keep a Secret clearance. The duties below are the unclassified program work: paperwork, briefings, and inspections.",
    telework:
      "Customer work is on the installation. Some writing can be done on situational telework. Inspections are in person.",
    promotionPotential: "None in this sample. The full performance level shown is GS-11.",
    summary:
      "Personnel-security paperwork, visit requests, and self-inspections. This sample does not describe classified procedures, and reading it does not grant a clearance or installation access.",
    duties: [
      "Help members of the organization complete personnel-security paperwork and send it to the office that actually adjudicates it. You do not adjudicate it.",
      "Process visit requests against the published procedure and track what is still missing.",
      "Teach a short annual security briefing and keep a roster of who attended.",
      "Run self-inspections from a checklist, write the finding in plain language, and track the corrective action to a close.",
      "Answer a “can this visitor come on Thursday” question by pointing at the rule, not by inventing an exception.",
      "Escalate anything that looks like a reportable incident. This sample does not tell you how classified incidents are reported.",
    ],
    specializedExperience:
      "One year of specialized experience equivalent to GS-9 security program work. You independently ran pieces of a personnel, information, or industrial security program: visit control, briefings, or self-inspections, with records someone else could audit. Gate-guard experience, by itself, does not meet this sample. Neither does a clearance you happen to hold.",
    education:
      "No specific degree is required for this sample if the specialized experience is met. See the current OPM standard for the 0080 series before using education as a substitute.",
    conditions: [
      "U.S. citizenship.",
      "Suitability for federal employment and a background investigation.",
      "Able to obtain and maintain the clearance stated above.",
      "Able to keep a confidence. The sample work is unclassified, and it is still not for publication.",
      "Male applicants born after December 31, 1959, must be registered with Selective Service, if that law applies to them.",
    ],
    whoMayApply:
      "United States citizens. Written as an open Direct Hire notice. Veterans’ preference is not applied under Direct Hire Authority. Holding a clearance is not, by itself, a qualification. This sample does not make anyone eligible for a real announcement.",
  },
];

export function familyLabel(id: FamilyId) {
  return families.find((family) => family.id === id)?.label ?? id;
}

export function getDirectHireJob(slug: string) {
  return directHireJobs.find((job) => job.slug === slug);
}

export type DirectHireSummary = {
  slug: string;
  announcementNumber: string;
  title: string;
  family: FamilyId;
  familyLabel: string;
  seriesLine: string;
  payLabel: string;
  organization: string;
  location: string;
  closeDate: string;
  closeLabel: string;
  summary: string;
};

export function toSummary(job: DirectHireJob): DirectHireSummary {
  return {
    slug: job.slug,
    announcementNumber: job.announcementNumber,
    title: job.title,
    family: job.family,
    familyLabel: familyLabel(job.family),
    seriesLine: seriesLine(job),
    payLabel: `${formatUsd(job.salaryMin)}–${formatUsd(job.salaryMax)}`,
    organization: job.organization,
    location: job.location,
    closeDate: job.closeDate,
    closeLabel: formatLongDate(job.closeDate),
    summary: job.summary,
  };
}

export function directHireSummaries() {
  return [...directHireJobs]
    .sort((a, b) => a.closeDate.localeCompare(b.closeDate))
    .map(toSummary);
}
