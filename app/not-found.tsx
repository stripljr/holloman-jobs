import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <p className="text-xs font-semibold tracking-[0.16em] text-turquoise uppercase">
        Not on this site
      </p>
      <h1 className="mt-3 font-serif text-5xl text-ink">That page is not a notice.</h1>
      <p className="mt-4 max-w-xl text-ink-soft">
        If you were looking for an official federal announcement, it was never
        going to be here. Search Holloman on USAJobs. If you were looking for a
        sample Direct Hire notice, it has a different address.
      </p>
      <ul className="mt-8 space-y-2 text-sm">
        <li>
          <Link href="/direct-hire" className="text-turquoise underline">
            Direct Hire samples
          </Link>
        </li>
        <li>
          <Link href="/federal" className="text-turquoise underline">
            Federal hiring guide
          </Link>
        </li>
        <li>
          <Link href="/" className="text-turquoise underline">
            Overview
          </Link>
        </li>
      </ul>
    </div>
  );
}
