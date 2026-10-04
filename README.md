# Holloman Jobs

A sample website for the [Alamogordo Chamber of Commerce](https://www.alamogordo.com/) that explains civilian work at Holloman Air Force Base.

Direct Hire notices are written out on this site. Competitive federal announcements are not. Those stay on [USAJobs](https://www.usajobs.gov/), and this site only shows how to search and what to prepare.

The six Direct Hire notices are illustrations. Announcement numbers start with `SAMPLE`. The Chamber does not hire for the Air Force and cannot make a job offer. Pages send `noindex` so the samples are not mistaken for open vacancies.

## Why this stack, not MERN

[alamogordo.com](https://www.alamogordo.com/) is a content site: a masthead, a few paths through the community, and phone numbers a person can call. This guide is the same kind of thing. People arrive from a search, read a notice, and either stay on the page or leave for USAJobs.

| | MERN | This project |
| --- | --- | --- |
| What you run | MongoDB, Express, a React client, and a second build step | One Next.js app |
| How a notice is rendered | Usually in the browser, after JavaScript | As HTML, on the server |
| Where the copy lives | A database you have to back up | Typed data in `lib/jobs.ts` |
| What Render has to keep awake | An API and a database, or you accept a cold start on both | One web service |

MongoDB would earn its place if Chamber staff needed to draft, approve, and expire notices all day without a developer. That is a later problem. The fix then is a small editor or a hosted CMS in front of the same pages, not a database chosen on the first day.

React stays, because the filters and the interest form are interactive. The API is a pair of route handlers (`/api/jobs`, `/api/interest`) instead of a separate Express server. The interest form checks the submission and then discards it. Nothing is stored.

## Pages

- `/` — the split between Direct Hire and USAJobs
- `/direct-hire` — the six sample notices, with search and occupation filters
- `/direct-hire/[slug]` — a full notice and a sample interest form
- `/federal` — how to search Holloman on USAJobs, documents, and hiring paths
- `/live-here` — Alamogordo, using figures the Chamber already publishes
- `GET /api/jobs` and `GET /api/jobs/[slug]` — the same Direct Hire data as JSON
- `POST /api/interest` — validates a sample note and returns without saving it

## Local development

Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
npm start
```

## Deploy on Render

The repo includes a [Render Blueprint](https://render.com/docs/blueprint-spec) at `render.yaml`.

1. Push this repository to GitHub.
2. In the Render dashboard, choose **New**, then **Blueprint**, and select the repo.
3. Apply the blueprint. The web service builds with `npm ci --include=dev && npm run build` and starts with `npm start`.
4. `npm start` binds `0.0.0.0` and listens on the `PORT` Render sets.

`--include=dev` matters because Render sets `NODE_ENV=production` during the build, and Next.js needs the TypeScript and Tailwind packages that live in `devDependencies`.

The free instance sleeps when it is idle. Move the plan to `starter` in `render.yaml` if the Chamber wants it awake.

No environment variables are required. Do not add a database for this sample.

## Replacing the sample notices

Edit `lib/jobs.ts`. Keep the `SAMPLE-` announcement numbers until a notice is a real one, and remove the `noindex` rules in `app/layout.tsx` and `app/robots.ts` only when every notice on the site is real. Real competitive announcements still should not be copied onto this site. Link to USAJobs.

The interest form is intentionally a dead end. Point it at the hiring agency’s application before you invite anyone to use it.

## Sources

Consulted October 4, 2026.

- Alamogordo Chamber of Commerce pages for the homepage indicators, community profile, industry, and healthcare: [alamogordo.com](https://www.alamogordo.com/)
- OPM Salary Table 2026-RUS (Rest of U.S., 17.06% locality)
- USAJobs, including the public phone number printed on Air Force announcements for Holloman: Total Force Service Center, 1-800-525-0102

Pay figures on the sample notices are ordinary 2026 Rest of U.S. General Schedule rates, step 1 through step 10. They are not special rates. Confirm the duty station’s locality table before quoting a salary.
