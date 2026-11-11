"use client";

import { type ReactNode, useEffect, useState } from "react";

import type { Route } from "next";

import Image from "next/image";
import Link from "next/link";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

import ThemeToggle from "@/components/theme/theme-toggle";
import ActionLink from "@/components/ui/action-link";

import { cn } from "@/lib/utils";

import type { GalleryImage } from "../types";
import PhotoGallery from "./photo-gallery";

dayjs.extend(customParseFormat);

type Profile = Readonly<{
  name: string;
  role: string;
  location: string;
  timezone: string;
  email: string;
  avatar: string;
  birthdate: string;
}>;

type SocialLink = Readonly<{
  label: string;
  href: string;
}>;

type NpmPackage = Readonly<{
  name: string;
  category: string;
  description: string;
  detail: string;
  install: string;
  github: string;
  npm: string;
  demo: string;
}>;

type Appearance = Readonly<{
  conference: string;
  track: string;
  panel: string;
  covered: readonly string[];
  images: readonly GalleryImage[];
}>;

const PROFILE: Profile = {
  name: "Marin Heđeš",
  role: "Front-End & Mobile Developer",
  location: "Slavonski Brod, Croatia",
  timezone: "Europe/Zagreb",
  email: "hedesmarin@gmail.com",
  avatar: "/images/profile/profile-picture.webp",
  birthdate: "23/02/2001",
};

const SOCIAL: readonly SocialLink[] = [
  { label: "GitHub", href: "/github" },
  { label: "LinkedIn", href: "/linkedin" },
  { label: "Twitter", href: "/twitter" },
  { label: "Instagram", href: "/instagram" },
];

const PACKAGES: readonly NpmPackage[] = [
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
];

const GITHUB_PROFILE = "https://github.com/SincerelyFaust";

const APPEARANCES: readonly Appearance[] = [
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
        caption: "Conference agenda showing the scheduled X-to-Earn Apps panel slot.",
      },
    ],
  },
];

function getLocalTime(now: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: PROFILE.timezone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(now);
}

function getTzOffsetMinutes(date: Date, timeZone: string): number {
  try {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone,
      timeZoneName: "shortOffset",
      hour: "2-digit",
    }).formatToParts(date);
    const match = (parts.find((part) => part.type === "timeZoneName")?.value ?? "").match(
      /([+-])(\d{1,2})(?::?(\d{2}))?/i,
    );
    if (!match) return -date.getTimezoneOffset();
    const minutes = Number(match[2]) * 60 + Number(match[3] ?? 0);
    return match[1] === "-" ? -minutes : minutes;
  } catch {
    return -date.getTimezoneOffset();
  }
}

function getTimezoneDifference(now: Date): string {
  const difference = Math.round(
    (getTzOffsetMinutes(now, PROFILE.timezone) + now.getTimezoneOffset()) / 60,
  );
  if (difference === 0) return "Same time as you";
  return `${Math.abs(difference)} hr ${difference > 0 ? "ahead of" : "behind"} you`;
}

type HomeSectionProps = Readonly<{
  id: string;
  headingId: string;
  children: ReactNode;
  variant?: "default" | "contact";
}>;

/** Shared structure for the four homepage sections. */
function HomeSection({ id, headingId, children, variant = "default" }: HomeSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "mx-auto grid w-[calc(100%-2.5rem)] max-w-280 grid-cols-1 border-t border-zinc-200 py-20 sm:w-[calc(100%-4rem)] lg:w-[calc(100%-6rem)] dark:border-zinc-800",
        variant === "contact"
          ? "gap-12 md:grid-cols-[1fr_.45fr] md:gap-10 md:py-28"
          : "gap-8 md:grid-cols-[.84fr_1.16fr] md:gap-x-[clamp(2.75rem,10vw,8.75rem)] md:py-24",
      )}
    >
      {children}
    </section>
  );
}

type SectionIntroProps = Readonly<{
  number: string;
  label: string;
  headingId: string;
  children: ReactNode;
  size?: "default" | "large";
}>;

/** Repeated homepage heading treatment, with a larger contact heading. */
function SectionIntro({ number, label, headingId, children, size = "default" }: SectionIntroProps) {
  return (
    <div>
      <p className="mb-6 flex items-center gap-3 font-mono text-[10px] font-semibold tracking-[.095em] text-zinc-600 dark:text-zinc-400">
        {number} <span className="inline-block h-px w-6 bg-zinc-300 dark:bg-zinc-700" /> {label}
      </p>
      <h2
        id={headingId}
        className={cn(
          "leading-[1.17] font-semibold tracking-[-0.048em]",
          size === "large"
            ? "text-[clamp(3rem,8vw,4.5rem)] md:text-[clamp(3rem,5vw,4.5rem)]"
            : "text-[clamp(2.25rem,3.4vw,3.125rem)]",
        )}
      >
        {children}
      </h2>
    </div>
  );
}

export default function Home() {
  const [now, setNow] = useState<Date | null>(null);
  const age = now ? dayjs(now).diff(dayjs(PROFILE.birthdate, "DD/MM/YYYY"), "year") : null;

  useEffect(() => {
    const updateTime = () => setNow(new Date());
    const initialTimer = window.setTimeout(updateTime, 0);
    const interval = window.setInterval(updateTime, 30_000);

    return () => {
      window.clearTimeout(initialTimer);
      window.clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-svh">
      <main id="main">
        <section
          className="relative mx-auto grid w-[calc(100%-2.5rem)] max-w-280 grid-cols-1 items-center gap-12 pt-28 pb-20 sm:w-[calc(100%-4rem)] md:grid-cols-[minmax(0,1.45fr)_minmax(0,.9fr)] md:gap-[clamp(2.5rem,8vw,7.25rem)] md:pt-36 md:pb-28 lg:w-[calc(100%-6rem)]"
          aria-labelledby="hero-title"
        >
          <div className="absolute top-7 right-0 md:top-10">
            <ThemeToggle />
          </div>
          <div>
            <p className="mb-7 flex items-center gap-3 font-mono text-[10px] font-semibold tracking-[.095em] text-zinc-600 dark:text-zinc-400">
              <span className="h-px w-5 bg-zinc-950 dark:bg-zinc-100" /> FRONT-END & MOBILE
              DEVELOPER
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
              I build production apps that feel fast, clean, and reliable—with an eye for thoughtful
              interfaces and a better developer experience.
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <ActionLink
                href={GITHUB_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Explore my GitHub profile"
              >
                GitHub
              </ActionLink>
              <ActionLink href="/cv">CV</ActionLink>
              <ActionLink href={`mailto:${PROFILE.email}`}>Email</ActionLink>
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

        <HomeSection id="about" headingId="about-title">
          <SectionIntro number="01" label="ABOUT" headingId="about-title">
            Good software is
            <br />
            in the details.
          </SectionIntro>
          <div>
            <p className="mb-6 text-[19px] leading-[1.65] font-medium tracking-[-0.015em]">
              I’m a front-end and mobile developer focused on building production apps that feel
              fast, clean, and reliable.
            </p>
            <p className="mb-5 text-sm leading-[1.95] text-zinc-600 dark:text-zinc-400">
              I’m most passionate about software development and developer experience (DX): reducing
              friction, keeping codebases maintainable, and making delivery predictable. I enjoy
              setting up solid foundations—shared UI patterns, reusable modules, automation scripts,
              and CI checks—so teams can move quickly without breaking things.
            </p>
            <p className="mb-5 text-sm leading-[1.95] text-zinc-600 dark:text-zinc-400">
              When I’m building, I care about performance, state management, realtime behavior, and
              clean UX. I like owning features end-to-end, from implementation to release, and I’m
              happiest when the product and the workflow both feel smooth.
            </p>
            <div
              className="mt-10 grid grid-cols-2 gap-x-5 gap-y-7 border-t border-zinc-200 pt-7 sm:gap-x-8 dark:border-zinc-800"
              aria-label="Personal details"
            >
              <div className="flex min-w-0 flex-col items-start gap-2">
                <span className="text-[11px] text-zinc-500">Location</span>
                <strong className="text-xs leading-normal font-semibold">{PROFILE.location}</strong>
              </div>
              <div className="flex min-w-0 flex-col items-start gap-2">
                <span className="text-[11px] text-zinc-500">Age</span>
                <strong className="text-xs leading-normal font-semibold">{age ?? "—"}</strong>
              </div>
              <div className="flex min-w-0 flex-col items-start gap-2">
                <span className="text-[11px] text-zinc-500">Local time · Zagreb</span>
                <strong className="text-xs leading-normal font-semibold">
                  {now ? getLocalTime(now) : "—"}
                </strong>
              </div>
              <div className="flex min-w-0 flex-col items-start gap-2">
                <span className="text-[11px] text-zinc-500">Time difference</span>
                <strong className="text-xs leading-normal font-semibold">
                  {now ? getTimezoneDifference(now) : "—"}
                </strong>
              </div>
            </div>
          </div>
        </HomeSection>

        <HomeSection id="open-source" headingId="open-source-title">
          <div>
            <SectionIntro number="02" label="OPEN SOURCE" headingId="open-source-title">
              Built to be
              <br />
              shared.
            </SectionIntro>
            <p className="mt-5 max-w-75 text-sm leading-[1.85] text-zinc-600 dark:text-zinc-400">
              Small, practical tools I build and share with other developers.
            </p>
            <ActionLink
              href={GITHUB_PROFILE}
              className="mt-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore my GitHub
            </ActionLink>
          </div>
          <div className="space-y-5">
            {PACKAGES.map((pkg, index) => (
              <article
                key={pkg.name}
                className="rounded-md border border-zinc-200 bg-white p-5 sm:p-7 dark:border-zinc-700 dark:bg-zinc-900"
              >
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] font-medium tracking-[.075em] text-zinc-500 dark:text-zinc-400">
                  <span>{pkg.category}</span>
                  <span>{String(index + 1).padStart(2, "0")} / NPM PACKAGE</span>
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
                  <ActionLink href={pkg.demo} target="_blank" rel="noopener noreferrer">
                    Live demo
                  </ActionLink>
                  <ActionLink href={pkg.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </ActionLink>
                  <ActionLink href={pkg.npm} target="_blank" rel="noopener noreferrer">
                    npm
                  </ActionLink>
                </div>
              </article>
            ))}
          </div>
        </HomeSection>

        <HomeSection id="appearances" headingId="appearances-title">
          <SectionIntro number="03" label="APPEARANCES" headingId="appearances-title">
            Sharing ideas
            <br />
            beyond the screen.
          </SectionIntro>
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
                <p className="text-[11px] leading-relaxed text-zinc-500">{appearance.track}</p>
                <div className="mt-6 border-t border-zinc-200 pt-5 pb-4 dark:border-zinc-700">
                  <h4 className="mb-3 text-[11px] font-semibold">What I covered</h4>
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
                <PhotoGallery conference={appearance.conference} images={appearance.images} />
              </article>
            ))}
          </div>
        </HomeSection>

        <HomeSection id="contact" headingId="contact-title" variant="contact">
          <div>
            <SectionIntro number="04" label="CONTACT" headingId="contact-title" size="large">
              Have something
              <br />
              in mind?
            </SectionIntro>
            <p className="my-6 max-w-105 text-sm leading-[1.8] text-zinc-600 dark:text-zinc-400">
              Whether it’s a project, an idea, or just a conversation—feel free to reach out.
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
                  href={social.href as Route}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border-b border-zinc-200 py-3 text-xs hover:text-zinc-500 dark:border-zinc-800"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </div>
        </HomeSection>
      </main>
    </div>
  );
}
