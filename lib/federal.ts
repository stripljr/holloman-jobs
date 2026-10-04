import { usajobsSearch } from "@/lib/site";

export type FederalLane = {
  id: string;
  title: string;
  series: string;
  summary: string;
  keyword?: string;
};

export const federalLanes: FederalLane[] = [
  {
    id: "all",
    title: "Everything at Holloman",
    series: "All series",
    summary:
      "The full public search for the installation. Competitive announcements and Direct Hire announcements are mixed together on USAJobs. Read “Who may apply” on each one.",
  },
  {
    id: "engineering",
    title: "Engineering and test support",
    series: "Often 0801, 0802, 0830, 0850, 0855",
    keyword: "engineer",
    summary:
      "Civil, mechanical, electrical, and general engineering tied to the flight line, the test track, and base infrastructure. Read the series. “Engineer” in a title is not always an 0801 professional engineering job.",
  },
  {
    id: "technology",
    title: "Information technology",
    series: "Often 2210",
    keyword: "2210",
    summary:
      "Systems administration, customer support, and network work for base organizations. The parenthetical in the title — SYSADMIN, CUSTSPT, INFOSEC — tells you which kind. Match your resume to that parenthetical.",
  },
  {
    id: "medical",
    title: "Medical and clinical",
    series: "Varies. 0610 nursing, 0602 physician, and others",
    keyword: "medical",
    summary:
      "The 49th Medical Group hires clinicians and clinic support. Many of these are Direct Hire or excepted-service notices with their own pay rules. The announcement on USAJobs is the only version that counts.",
  },
  {
    id: "trades",
    title: "Trades and maintenance",
    series: "Often wage grade: WG, WL, WS. Not GS.",
    keyword: "maintenance",
    summary:
      "Electricians, equipment operators, and maintenance mechanics are often paid under the Federal Wage System for this locality, not the General Schedule. The announcement states the wage schedule. This site does not reprint it.",
  },
  {
    id: "safety",
    title: "Fire and security",
    series: "Often 0081 and 0080, plus guard positions",
    keyword: "firefighter",
    summary:
      "Firefighter announcements carry age, medical, and physical requirements and sometimes a special salary rate. A second search for “security” is worth running. One keyword will not catch both.",
  },
  {
    id: "admin",
    title: "Administration and finance",
    series: "Often 0301, 0343, 0560, 0201",
    keyword: "budget",
    summary:
      "Budget, program analysis, and human resources support to squadrons and the wing staff. These postings are easy to miss if you only search job titles you used in private industry.",
  },
  {
    id: "naf",
    title: "Child care, recreation, and clubs",
    series: "Non-appropriated fund. Often NF or CY",
    keyword: "child and youth",
    summary:
      "The Force Support Squadron hires child and youth program assistants, recreation staff, and club workers with non-appropriated funds. They are real jobs listed on USAJobs, and they are not General Schedule jobs. Benefits and application rules differ. Read the announcement.",
  },
];

export function laneHref(lane: FederalLane) {
  return usajobsSearch(lane.keyword);
}

export const federalSteps = [
  {
    title: "Create the account",
    body: "Go to USAJobs and sign in with login.gov. One account is enough. Build the profile before you fall for a closing date that is three days away.",
  },
  {
    title: "Write the resume USAJobs actually scores",
    body: "A federal resume states each job with month and year, hours per week, and a supervisor’s name and phone. If you have been a federal employee, include the series and grade. A one-page private-sector resume usually leaves out the facts a staffing specialist uses to credit experience.",
  },
  {
    title: "Search the installation, then read who may apply",
    body: "Search the location Holloman AFB, New Mexico. USAJobs draws a radius around a place, and a location search can also include remote jobs unless you turn those off. Open an announcement and read “Who may apply” first. If you are outside that group, the rest of the posting is not for you.",
  },
  {
    title: "Watch the clock",
    body: "Applications on USAJobs are due by 11:59 p.m. Eastern Time on the closing date. Alamogordo is on Mountain Time, so the local clock is two hours earlier for most of the year and one hour earlier when the East is on standard time. Submit before the Eastern deadline, not at the end of the Mountain workday.",
  },
  {
    title: "Answer the questionnaire from the announcement",
    body: "The occupational questionnaire is part of the application. Answer it from the announcement in front of you, not from memory of a similar job. Upload every required document before you submit. USAJobs will not chase a missing transcript after the close.",
  },
  {
    title: "Keep the announcement number",
    body: "Status updates show in your USAJobs account. “Received” means the package arrived. “Referred” means your name went to the selecting official. Neither one is a job offer. The Air Force, not the Chamber and not USAJobs, makes the offer.",
  },
] as const;

export const federalDocuments = [
  {
    name: "Federal resume",
    detail:
      "Built in USAJobs or uploaded. Hours per week, dates, and duties that match the specialized experience in that announcement.",
  },
  {
    name: "Transcripts",
    detail:
      "If you qualify by education, or the announcement asks for a degree. Unofficial transcripts are often accepted for the application. The announcement says which.",
  },
  {
    name: "Veterans’ documents",
    detail:
      "For competitive announcements where you claim preference: a DD-214 that shows character of service, and a VA disability letter if you claim a service-connected disability. Direct Hire Authority does not apply veterans’ preference. The announcement will say which rules it is using.",
  },
  {
    name: "SF-50",
    detail:
      "If you are a current or former federal employee applying under a merit-promotion or reinstatement announcement. Use the SF-50 that shows the grade the announcement asks for.",
  },
  {
    name: "License or certificate",
    detail:
      "When the announcement names one. Examples that show up around a flying wing and a test base: nursing license, firefighter credentials, or an FAA airframe and powerplant certificate for some contractor and wage-grade work. Do not send a certificate the announcement did not ask for in place of one it did.",
  },
] as const;

export const hiringPaths = [
  {
    name: "Open to the public",
    detail:
      "U.S. citizens. This is the path most people mean by “a federal job.” Veterans’ preference applies in competitive examining. It does not apply under Direct Hire Authority.",
  },
  {
    name: "Veterans",
    detail:
      "Preference in competitive hiring, and separate authorities such as Veterans Recruitment Appointment, depend on your dates of service, disability rating, and the announcement. USAJobs explains the paths. The announcement says whether it uses them.",
  },
  {
    name: "Military spouses",
    detail:
      "Some announcements are open to military spouses under a specific appointing authority, often tied to a permanent change of station. Eligibility is narrower than “my spouse is stationed here.” Read the definition on that announcement.",
  },
  {
    name: "Current and former federal employees",
    detail:
      "Merit promotion and reinstatement announcements are not open to the public. If you have never held a competitive-service appointment, those postings are not your path.",
  },
  {
    name: "Students and recent graduates",
    detail:
      "Internships and recent-graduate announcements are separate notices with their own academic windows. A general engineering announcement is not an internship.",
  },
  {
    name: "Individuals with disabilities",
    detail:
      "Schedule A is a hiring authority, not a guarantee. It still requires that you meet the qualifications and that the agency has a job to fill. Start with the USAJobs explanation of the unique hiring paths, then read the announcement.",
  },
] as const;
