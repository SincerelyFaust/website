import Link from "next/link";
import ThemeToggle from "../components/theme-toggle";

const pdfPath = "/cv/cv.pdf";
const buttonBase =
  "inline-flex min-h-[46px] items-center justify-center gap-6 whitespace-nowrap rounded-[5px] border px-4 py-3 text-xs font-semibold focus-visible:outline-2 focus-visible:outline-offset-4";

export default function CVPage() {
  return (
    <div className="min-h-svh">
      <main
        id="main"
        className="relative mx-auto w-[calc(100%-2.5rem)] max-w-280 pt-11 pb-20 sm:w-[calc(100%-4rem)] lg:w-[calc(100%-6rem)]"
      >
        <div className="absolute right-0 top-7">
          <ThemeToggle />
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 text-xs text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
        >
          <span aria-hidden="true">←</span> Back to home
        </Link>
        <div className="flex flex-col items-start justify-between gap-7 pt-12 pb-10 md:flex-row md:items-end md:gap-9">
          <div>
            <p className="mb-5 flex items-center gap-3 font-mono text-[10px] font-semibold tracking-[.095em] text-zinc-500">
              CURRICULUM VITAE{" "}
              <span className="h-px w-6 bg-zinc-300 dark:bg-zinc-700" /> PDF
            </p>
            <h1 className="mb-3 text-[clamp(3.125rem,6.3vw,5rem)] leading-[1.05] font-semibold tracking-[-0.055em]">
              My CV<span className="text-zinc-500">.</span>
            </h1>
            <p className="text-[13px] text-zinc-600 dark:text-zinc-400">
              Experience, projects, and background—all in one place.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <a
              href={pdfPath}
              className={`${buttonBase} border-zinc-300 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open PDF ↗
            </a>
            <a
              href={pdfPath}
              className={`${buttonBase} border-zinc-950 bg-zinc-950 text-white hover:bg-zinc-700 dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-300`}
              download
            >
              Download PDF ↓
            </a>
          </div>
        </div>
        <div className="h-[65svh] min-h-190 rounded-md border border-zinc-200 bg-white p-2.5 dark:border-zinc-700 dark:bg-zinc-900">
          <object
            data={pdfPath}
            type="application/pdf"
            aria-label="Marin Heđeš curriculum vitae"
            className="block h-full w-full bg-white"
          >
            <div className="p-10 text-[13px]">
              <p>Your browser can’t display PDFs here.</p>
              <a
                className="mt-3 block underline"
                href={pdfPath}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open the CV in a new tab ↗
              </a>
              <a className="mt-3 block underline" href={pdfPath} download>
                Download the CV ↓
              </a>
            </div>
          </object>
        </div>
      </main>
    </div>
  );
}
