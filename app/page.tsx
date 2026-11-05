"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import ThemeToggle from "./components/theme-toggle";

dayjs.extend(customParseFormat);

const PROFILE = {
  name: "Marin Heđeš",
  role: "Front-End & Mobile Developer",
  location: "Slavonski Brod, Croatia",
  timezone: "Europe/Zagreb",
  email: "hedesmarin@gmail.com",
  avatar: "/images/profile/profile-picture.webp",
  birthdate: "23/02/2001",
};

const SOCIAL = [
  { label: "GitHub", href: "/github" },
  { label: "LinkedIn", href: "/linkedin" },
  { label: "Twitter", href: "/twitter" },
  { label: "Instagram", href: "/instagram" },
] as const;

const PACKAGES = [
  {
    name: "react-fit-list",
    category: "REACT / TYPESCRIPT",
    description:
      "A headless React utility for responsive lists that collapses overflowing items into a customizable disclosure.",
    detail:
      "Use the ready-to-use component or the headless hook when you want full control over the UI.",
    install: "npm install react-fit-list",
    github: "https://github.com/SincerelyFaust/react-fit-list",
    npm: "https://www.npmjs.com/package/react-fit-list",
    demo: "https://sincerelyfaust.github.io/react-fit-list/",
  },
] as const;

const GITHUB_PROFILE = "https://github.com/SincerelyFaust";

const APPEARANCES = [
  {
    conference: "Game Changer",
    track: "WEB3 / The Road to Mainstream Adoption",
    panel: "X-TO-EARN APPS: BLOCKCHAIN MODELS OF SUCCESS",
    covered: [
      "X-to-earn app models and how they translate into real product flows",
      "Practical implementation in modern apps: components, UX patterns, and state handling",
      "Guiding users through complex processes with clear steps, feedback, and context",
    ],
    images: [
      {
        src: "/images/appearances/gamechanger/x-to-earn-1.jpeg",
        caption: "Speaker profile card on the Game Changer website.",
      },
      {
        src: "/images/appearances/gamechanger/x-to-earn-2.jpeg",
        caption:
          "On stage during the panel discussion (Web3 track: The Road to Mainstream Adoption).",
      },
      {
        src: "/images/appearances/gamechanger/x-to-earn-3.jpeg",
        caption:
          "Conference agenda showing the scheduled X-to-Earn Apps panel slot.",
      },
    ],
  },
] as const;

type GalleryImage = { src: string; caption: string };

function getLocalTime(now: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: PROFILE.timezone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(now);
}

function getTzOffsetMinutes(date: Date, timeZone: string) {
  try {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone,
      timeZoneName: "shortOffset",
      hour: "2-digit",
    }).formatToParts(date);
    const match = (
      parts.find((part) => part.type === "timeZoneName")?.value ?? ""
    ).match(/([+-])(\d{1,2})(?::?(\d{2}))?/i);
    if (!match) return -date.getTimezoneOffset();
    const minutes = Number(match[2]) * 60 + Number(match[3] ?? 0);
    return match[1] === "-" ? -minutes : minutes;
  } catch {
    return -date.getTimezoneOffset();
  }
}

function getTimezoneDifference(now: Date) {
  const difference = Math.round(
    (getTzOffsetMinutes(now, PROFILE.timezone) + now.getTimezoneOffset()) / 60,
  );
  if (difference === 0) return "Same time as you";
  return `${Math.abs(difference)} hr ${difference > 0 ? "ahead of" : "behind"} you`;
}

const container =
  "mx-auto w-[calc(100%-2.5rem)] max-w-[1120px] sm:w-[calc(100%-4rem)] lg:w-[calc(100%-6rem)]";
const sectionLabel =
  "mb-6 flex items-center gap-3 font-mono text-[10px] font-semibold tracking-[.095em] text-zinc-600 dark:text-zinc-400";
const labelRule = "inline-block h-px w-6 bg-zinc-300 dark:bg-zinc-700";
const sectionHeading =
  "text-[clamp(2.25rem,3.4vw,3.125rem)] leading-[1.17] font-semibold tracking-[-0.048em]";
const bodyCopy = "mb-5 text-sm leading-[1.95] text-zinc-600 dark:text-zinc-400";
const actionLink =
  "inline-flex min-h-11 items-center border-b border-zinc-400 px-0.5 text-sm font-medium tracking-[-0.02em] transition-colors hover:border-zinc-950 hover:text-zinc-600 focus-visible:outline-2 focus-visible:outline-offset-4 dark:border-zinc-600 dark:hover:border-zinc-100 dark:hover:text-zinc-300";

export default function Home() {
  const [now, setNow] = useState<Date | null>(null);
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const age = dayjs().diff(dayjs(PROFILE.birthdate, "DD/MM/YYYY"), "year");

  useEffect(() => {
    setNow(new Date());
    const timer = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!activeImage) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", onKeyDown);
      opener.current?.focus();
    };
  }, [activeImage]);

  function openImage(image: GalleryImage, element: HTMLElement) {
    opener.current = element;
    setActiveImage(image);
  }

  return (
    <div className="min-h-svh">
      <main id="main">
        <section
          className={`${container} relative grid grid-cols-1 items-center gap-12 pt-28 pb-20 md:grid-cols-[minmax(0,1.45fr)_minmax(0,.9fr)] md:gap-[clamp(2.5rem,8vw,7.25rem)] md:pt-36 md:pb-28`}
          aria-labelledby="hero-title"
        >
          <div className="absolute right-0 top-7 md:top-10">
            <ThemeToggle />
          </div>
          <div>
            <p className="mb-7 flex items-center gap-3 font-mono text-[10px] font-semibold tracking-[.095em] text-zinc-600 dark:text-zinc-400">
              <span className="h-px w-5 bg-zinc-950 dark:bg-zinc-100" />{" "}
              FRONT-END & MOBILE DEVELOPER
            </p>
            <h1
              id="hero-title"
              className="mb-7 text-[clamp(2.5rem,7.5vw,4.375rem)] leading-[1.09] font-semibold tracking-[-0.055em] md:text-[clamp(2.5rem,4.85vw,4.375rem)]"
            >
              Hi, I’m Marin.
              <br />
              <span className="text-zinc-500 dark:text-zinc-400">
                I build for the web and beyond.
              </span>
            </h1>
            <p className="mb-8 max-w-127.5 text-[15px] leading-[1.9] text-zinc-600 sm:text-base dark:text-zinc-400">
              I build production apps that feel fast, clean, and reliable—with
              an eye for thoughtful interfaces and a better developer
              experience.
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <a
                href={GITHUB_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className={actionLink}
                aria-label="Explore my GitHub profile"
              >
                GitHub
              </a>
              <Link href="/cv" className={actionLink}>
                CV
              </Link>
              <a href={`mailto:${PROFILE.email}`} className={actionLink}>
                Email
              </a>
            </div>
          </div>
          <figure className="m-0 w-full max-w-105 justify-self-start md:max-w-97.5 md:justify-self-end">
            <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-zinc-200 md:aspect-[0.83] dark:bg-zinc-800">
              <Image
                src={PROFILE.avatar}
                alt="Portrait of Marin Heđeš"
                fill
                priority
                sizes="(max-width: 800px) 100vw, 420px"
                className="object-cover object-center grayscale"
              />
            </div>
          </figure>
        </section>

        <section
          id="about"
          className={`${container} grid grid-cols-1 gap-8 border-t border-zinc-200 py-20 md:grid-cols-[.84fr_1.16fr] md:gap-x-[clamp(2.75rem,10vw,8.75rem)] md:py-24 dark:border-zinc-800`}
          aria-labelledby="about-title"
        >
          <div>
            <p className={sectionLabel}>
              01 <span className={labelRule} /> ABOUT
            </p>
            <h2 id="about-title" className={sectionHeading}>
              Good software is
              <br />
              in the details.
            </h2>
          </div>
          <div>
            <p className="mb-6 text-[19px] leading-[1.65] font-medium tracking-[-0.015em]">
              I’m a front-end and mobile developer focused on building
              production apps that feel fast, clean, and reliable.
            </p>
            <p className={bodyCopy}>
              I’m most passionate about software development and developer
              experience (DX): reducing friction, keeping codebases
              maintainable, and making delivery predictable. I enjoy setting up
              solid foundations—shared UI patterns, reusable modules, automation
              scripts, and CI checks—so teams can move quickly without breaking
              things.
            </p>
            <p className={bodyCopy}>
              When I’m building, I care about performance, state management,
              realtime behavior, and clean UX. I like owning features
              end-to-end, from implementation to release, and I’m happiest when
              the product and the workflow both feel smooth.
            </p>
            <div
              className="mt-10 grid grid-cols-2 gap-x-5 gap-y-7 border-t border-zinc-200 pt-7 sm:gap-x-8 dark:border-zinc-800"
              aria-label="Personal details"
            >
              <div className="flex min-w-0 flex-col items-start gap-2">
                <span className="text-[11px] text-zinc-500">Location</span>
                <strong className="text-xs leading-normal font-semibold">
                  {PROFILE.location}
                </strong>
              </div>
              <div className="flex min-w-0 flex-col items-start gap-2">
                <span className="text-[11px] text-zinc-500">Age</span>
                <strong className="text-xs leading-normal font-semibold">
                  {age}
                </strong>
              </div>
              <div className="flex min-w-0 flex-col items-start gap-2">
                <span className="text-[11px] text-zinc-500">
                  Local time · Zagreb
                </span>
                <strong className="text-xs leading-normal font-semibold">
                  {now ? getLocalTime(now) : "—"}
                </strong>
              </div>
              <div className="flex min-w-0 flex-col items-start gap-2">
                <span className="text-[11px] text-zinc-500">
                  Time difference
                </span>
                <strong className="text-xs leading-normal font-semibold">
                  {now ? getTimezoneDifference(now) : "—"}
                </strong>
              </div>
            </div>
          </div>
        </section>

        <section
          id="open-source"
          className={`${container} grid grid-cols-1 gap-8 border-t border-zinc-200 py-20 md:grid-cols-[.84fr_1.16fr] md:gap-x-[clamp(2.75rem,10vw,8.75rem)] md:py-24 dark:border-zinc-800`}
          aria-labelledby="open-source-title"
        >
          <div>
            <p className={sectionLabel}>
              02 <span className={labelRule} /> OPEN SOURCE
            </p>
            <h2 id="open-source-title" className={sectionHeading}>
              Built to be
              <br />
              shared.
            </h2>
            <p className="mt-5 max-w-75 text-sm leading-[1.85] text-zinc-600 dark:text-zinc-400">
              Small, practical tools I build and share with other developers.
            </p>
            <a
              href={GITHUB_PROFILE}
              className={`${actionLink} mt-4`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore my GitHub
            </a>
          </div>
          <div className="space-y-5">
            {PACKAGES.map((pkg, index) => (
              <article
                key={pkg.name}
                className="rounded-md border border-zinc-200 bg-white p-5 sm:p-7 dark:border-zinc-700 dark:bg-zinc-900"
              >
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] font-medium tracking-[.075em] text-zinc-500 dark:text-zinc-400">
                  <span>{pkg.category}</span>
                  <span>
                    {String(index + 1).padStart(2, "0")} / NPM PACKAGE
                  </span>
                </div>
                <h3 className="mb-4 text-[clamp(1.5rem,2.6vw,2rem)] leading-tight font-semibold tracking-[-0.045em]">
                  {pkg.name}
                </h3>
                <p className="text-sm leading-[1.85] text-zinc-700 dark:text-zinc-300">
                  {pkg.description}
                </p>
                <p className="mt-3 text-xs leading-[1.8] text-zinc-500 dark:text-zinc-400">
                  {pkg.detail}
                </p>
                <div className="mt-7 border-y border-zinc-200 py-5 dark:border-zinc-700">
                  <p className="mb-3 font-mono text-[10px] font-medium tracking-[.075em] text-zinc-500 dark:text-zinc-400">
                    INSTALL
                  </p>
                  <code className="block overflow-x-auto font-mono text-xs leading-6 text-zinc-950 dark:text-zinc-100">
                    {pkg.install}
                  </code>
                </div>
                <div className="flex flex-wrap items-center gap-x-7 gap-y-2 pt-3">
                  <a
                    href={pkg.demo}
                    className={actionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live demo
                  </a>
                  <a
                    href={pkg.github}
                    className={actionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={pkg.npm}
                    className={actionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    npm
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="appearances"
          className={`${container} grid grid-cols-1 gap-8 border-t border-zinc-200 py-20 md:grid-cols-[.84fr_1.16fr] md:gap-x-[clamp(2.75rem,10vw,8.75rem)] md:py-24 dark:border-zinc-800`}
          aria-labelledby="appearances-title"
        >
          <div>
            <p className={sectionLabel}>
              03 <span className={labelRule} /> APPEARANCES
            </p>
            <h2 id="appearances-title" className={sectionHeading}>
              Sharing ideas
              <br />
              beyond the screen.
            </h2>
          </div>
          <div>
            {APPEARANCES.map((appearance) => (
              <article
                className="rounded-md border border-zinc-200 bg-white p-4 sm:p-7 dark:border-zinc-700 dark:bg-zinc-900"
                key={appearance.panel}
              >
                <div className="mb-6 flex items-center justify-between gap-4 font-mono text-[10px] tracking-wider">
                  <span className="font-semibold">{appearance.conference}</span>
                  <span className="hidden text-[9px] text-zinc-500 min-[401px]:inline">
                    CONFERENCE / PANEL
                  </span>
                </div>
                <h3 className="mb-2.5 max-w-120 text-[clamp(1.25rem,2.1vw,1.5rem)] leading-[1.3] font-semibold tracking-[-0.035em]">
                  {appearance.panel}
                </h3>
                <p className="text-[11px] leading-relaxed text-zinc-500">
                  {appearance.track}
                </p>
                <div className="mt-6 border-t border-zinc-200 pt-5 pb-4 dark:border-zinc-700">
                  <h4 className="mb-3 text-[11px] font-semibold">
                    What I covered
                  </h4>
                  <ul className="space-y-2 text-xs leading-[1.7] text-zinc-600 dark:text-zinc-400">
                    {appearance.covered.map((item) => (
                      <li className="flex items-start gap-2" key={item}>
                        <span
                          aria-hidden="true"
                          className="shrink-0 text-zinc-950 dark:text-zinc-100"
                        >
                          —
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="grid grid-cols-3 gap-1.5 sm:gap-2"
                  aria-label={`${appearance.conference} photos`}
                >
                  {appearance.images.map((photo, index) => (
                    <button
                      className="group relative aspect-[1.35] cursor-pointer overflow-hidden rounded-sm bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-2 dark:bg-zinc-800"
                      key={photo.src}
                      type="button"
                      aria-label={`View photo ${index + 1}: ${photo.caption}`}
                      onClick={(event) => openImage(photo, event.currentTarget)}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.caption}
                        fill
                        sizes="(max-width: 600px) 33vw, 230px"
                        className="object-cover grayscale group-hover:opacity-85"
                      />
                    </button>
                  ))}
                </div>
                <p className="mt-3 text-[10px] text-zinc-500">
                  Select a photo to view it larger.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className={`${container} grid grid-cols-1 gap-12 border-t border-zinc-200 py-20 md:grid-cols-[1fr_.45fr] md:gap-10 md:py-28 dark:border-zinc-800`}
          aria-labelledby="contact-title"
        >
          <div>
            <p className={sectionLabel}>
              04 <span className={labelRule} /> CONTACT
            </p>
            <h2
              id="contact-title"
              className="text-[clamp(3rem,8vw,4.5rem)] leading-[1.17] font-semibold tracking-[-0.048em] md:text-[clamp(3rem,5vw,4.5rem)]"
            >
              Have something
              <br />
              in mind?
            </h2>
            <p className="my-6 max-w-105 text-sm leading-[1.8] text-zinc-600 dark:text-zinc-400">
              Whether it’s a project, an idea, or just a conversation—feel free
              to reach out.
            </p>
            <a
              className="inline-flex items-center gap-4 border-b border-zinc-950 pb-2 text-[clamp(1.063rem,2.1vw,1.563rem)] font-medium tracking-[-0.04em] hover:text-zinc-500 dark:border-zinc-100"
              href={`mailto:${PROFILE.email}`}
            >
              {PROFILE.email}
            </a>
          </div>
          <div className="w-full max-w-85 md:max-w-55 md:self-end md:justify-self-end">
            <span className="mb-5 flex items-center gap-3 font-mono text-[10px] font-semibold tracking-[.095em] text-zinc-500">
              FIND ME ELSEWHERE
            </span>
            <div className="border-t border-zinc-200 dark:border-zinc-800">
              {SOCIAL.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border-b border-zinc-200 py-3 text-xs hover:text-zinc-500 dark:border-zinc-800"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {activeImage && (
        <div
          className="fixed inset-0 z-20 flex items-center justify-center bg-black/80 p-4 sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveImage(null);
          }}
        >
          <div
            className="w-full max-w-225 rounded-md border border-zinc-200 bg-white p-4 shadow-2xl dark:border-zinc-700 dark:bg-zinc-900"
            role="dialog"
            aria-modal="true"
            aria-label="Appearance photo preview"
          >
            <div className="flex items-center justify-between gap-4 pb-3 font-mono text-[10px] font-semibold tracking-[.07em] text-zinc-500">
              <span>PHOTO PREVIEW</span>
              <button
                ref={closeButton}
                className="flex size-8 cursor-pointer items-center justify-center rounded border border-zinc-300 text-sm text-zinc-950 hover:bg-zinc-100 focus-visible:outline-2 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
                type="button"
                onClick={() => setActiveImage(null)}
                aria-label="Close photo preview"
              >
                ✕
              </button>
            </div>
            <div className="relative h-[min(64svh,630px)] w-full bg-zinc-200 dark:bg-zinc-800">
              <Image
                src={activeImage.src}
                alt={activeImage.caption}
                fill
                sizes="(max-width: 900px) 90vw, 850px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-start justify-between gap-3 pt-4 sm:flex-row sm:items-center">
              <p className="text-[11px] leading-normal text-zinc-600 dark:text-zinc-400">
                {activeImage.caption}
              </p>
              <a
                className="shrink-0 border-b border-current pb-1 text-[11px] hover:text-zinc-500"
                href={activeImage.src}
                target="_blank"
                rel="noopener noreferrer"
              >
                View full image
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
