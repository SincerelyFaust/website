import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import ActionLink from "../components/action-link";
import ThemeToggle from "../components/theme-toggle";

export const metadata: Metadata = {
  title: "CV — Marin Heđeš",
  description:
    "Marin Heđeš — front-end and mobile developer. Experience, projects, skills, and background.",
};

const pdfPath = "/cv/cv.pdf";

type Experience = Readonly<{
  role: string;
  organization: string;
  period: string;
  description?: string;
  highlights: readonly string[];
}>;

type CVProject = Readonly<{
  name: string;
  highlights: readonly string[];
}>;

type SkillGroup = Readonly<{
  title: string;
  values: string;
}>;

type CVSectionProps = Readonly<{
  number: string;
  title: string;
  children: ReactNode;
}>;

const experiences: readonly Experience[] = [
  {
    role: "Freelance Software Developer",
    organization: "Self-employed",
    period: "Dec 2025 — Present",
    description:
      "Independent software developer specializing in modern web applications, frontend architecture, and end-to-end feature development. Working with clients on scalable, maintainable solutions, from user-facing interfaces to complex business workflows and third-party integrations.",
    highlights: [
      "Selected Project — SerpDomains: Developed three interconnected React and TypeScript applications covering a domain marketplace, administrative backoffice, and domain landing platform.",
      "Integrated Stripe, PayPal, cryptocurrency, and wallet-based payments, implementing checkout workflows, payment verification, transaction handling, and error recovery.",
      "Built customer, seller, and administrative dashboards supporting domain management, bulk uploads, DNS verification, order processing, and domain transfers.",
      "Implemented affiliate systems, real-time customer support, content management, marketing tools, and operational analytics.",
      "Developed reusable UI components and scalable frontend architecture using TanStack Query, TanStack Router, Zustand, Tailwind CSS, and typed REST APIs.",
      "Built SEO-optimized domain landing pages with dynamic pricing, discounts, analytics, and marketplace integrations.",
    ],
  },
  {
    role: "Seasonal Worker",
    organization: "Seasonal Employment",
    period: "22 Jul 2026 — 9 Oct 2026",
    highlights: [],
  },
  {
    role: "Lead Front-end & Mobile Developer",
    organization: "Beyondi d.o.o.",
    period: "Oct 2023 — Nov 2025",
    description:
      "Led the development of production web and mobile applications using Angular and Flutter, overseeing architecture, engineering delivery, and application releases.",
    highlights: [
      "Led frontend and mobile development, coordinating engineering tasks, reviewing code, establishing standards, and guiding architectural decisions.",
      "Contributed to project planning by breaking down epics into tasks, writing user stories and acceptance criteria, and supporting technical estimation.",
      "Developed and released cross-platform Flutter applications to the Apple App Store and Google Play Store.",
      "Integrated Apple Pay, Google Pay, Stripe, and cryptocurrency payments, including transaction handling and digital asset workflows.",
      "Developed Web3 wallet functionality including wallet creation, mnemonic recovery, token transfers, and secure wallet management.",
      "Implemented authentication and security workflows, biometric authentication, KYC verification, real-time communication, and push notifications.",
      "Built marketplace functionality supporting listings, buying and renting workflows, location-based services, and multilingual interfaces.",
      "Improved engineering workflows through technical documentation, Git conventions, linting standards, and monorepo architecture proposals.",
    ],
  },
  {
    role: "Assistant worker in production",
    organization: "Vitafoam Croatia",
    period: "Mar 2021 — Jul 2023",
    description: "Assisted production operations and supported manufacturing workflows.",
    highlights: [],
  },
  {
    role: "Construction worker",
    organization: "Vertex Inženjering",
    period: "Sep 2019 — Oct 2019",
    description:
      "Supported day-to-day on-site operations and assisted the team with assigned tasks.",
    highlights: [],
  },
];

const projects: readonly CVProject[] = [
  {
    name: "dahliaOS (Open Source)",
    highlights: [
      "Co-founded the open-source operating system project; helped get it included in the Open Invention Network (OIN).",
    ],
  },
  {
    name: "SerpDomains",
    highlights: [
      "Developed a domain marketplace, administrative backoffice, and standalone domain landing application using React, TypeScript, Vite, and TanStack.",
      "Implemented multi-provider checkout integrations, domain management workflows, administrative tools, and customer-facing features.",
    ],
  },
  {
    name: "iVault",
    highlights: [
      "Developed and released a cross-platform Flutter application for iOS and Android, combining marketplace, community, and Web3 functionality.",
      "Implemented native Apple Pay and Google Pay integrations, cryptocurrency wallet functionality, biometric authentication, real-time messaging, and push notifications.",
    ],
  },
];

const skillGroups: readonly SkillGroup[] = [
  {
    title: "Frontend",
    values:
      "React (Next.js, Vite), Angular, TypeScript, JavaScript, HTML, CSS, TanStack Query, TanStack Router, TanStack Table, Zustand, Tailwind CSS, Radix UI, React Hook Form, Zod",
  },
  {
    title: "Mobile",
    values: "Flutter, Dart, GetX, GoRouter, iOS & Android Development",
  },
  {
    title: "Payments & Integrations",
    values:
      "Stripe, PayPal, Apple Pay, Google Pay, Cryptocurrency Payments, REST APIs, WebSockets, Firebase, Supabase",
  },
  {
    title: "Web3 & Security",
    values:
      "web3dart, Cryptocurrency Wallets, Authentication & Authorization, Biometric Authentication, Secure Storage, KYC",
  },
  {
    title: "Tools & Practices",
    values:
      "Git, CI/CD, GitHub Actions, pnpm Workspaces, Monorepos, i18n, Location-Based Services, Agile Development",
  },
  {
    title: "Testing & Monitoring",
    values: "Vitest, Playwright, Firebase Crashlytics, Instabug, Adjust SDK",
  },
  {
    title: "Product & Design",
    values: "Figma, Adobe Suite",
  },
];

function CVSection({ number, title, children }: CVSectionProps) {
  return (
    <section
      className="grid grid-cols-1 gap-7 border-t border-zinc-200 py-11 sm:py-14 md:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] md:gap-12 dark:border-zinc-800"
      aria-labelledby={`section-${number}`}
    >
      <div>
        <p className="mb-4 flex items-center gap-3 font-mono text-[10px] font-semibold tracking-[0.095em] text-zinc-600 dark:text-zinc-400">
          {number}
          <span className="h-px w-6 bg-zinc-300 dark:bg-zinc-700" />
          {title.toUpperCase()}
        </p>
        <h2
          id={`section-${number}`}
          className="text-[clamp(1.75rem,3vw,2.25rem)] leading-[1.2] font-semibold tracking-[-0.045em]"
        >
          {title}
        </h2>
      </div>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

export default function CVPage() {
  return (
    <div className="min-h-svh">
      <main
        id="main"
        className="relative mx-auto w-[calc(100%-2.5rem)] max-w-280 pt-11 pb-24 sm:w-[calc(100%-4rem)] lg:w-[calc(100%-6rem)]"
      >
        <div className="absolute top-7 right-0">
          <ThemeToggle />
        </div>
        <Link
          href="/"
          className="inline-flex min-h-8 items-center text-xs text-zinc-600 transition-colors hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-4 dark:text-zinc-400 dark:hover:text-white"
        >
          Home
        </Link>

        <header className="pt-12 pb-12 sm:pt-16 sm:pb-16">
          <p className="mb-7 flex items-center gap-3 font-mono text-[10px] font-semibold tracking-[0.095em] text-zinc-600 dark:text-zinc-400">
            <span className="h-px w-5 bg-zinc-950 dark:bg-zinc-100" />
            CURRICULUM VITAE
          </p>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end md:gap-12">
            <div className="max-w-170">
              <h1 className="text-[clamp(3rem,7vw,5.25rem)] leading-[1.06] font-semibold tracking-[-0.055em]">
                Marin Heđeš<span className="text-zinc-500">.</span>
              </h1>
              <p className="mt-4 text-lg tracking-tight text-zinc-600 dark:text-zinc-400">
                Front-End &amp; Mobile Developer
              </p>
              <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-500">
                Slavonski Brod, Croatia
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap items-center gap-x-8 gap-y-2">
              <ActionLink
                href={pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open the original CV PDF in a new tab"
              >
                Open PDF
              </ActionLink>
              <ActionLink href={pdfPath} download aria-label="Download the original CV PDF">
                Download PDF
              </ActionLink>
            </div>
          </div>
        </header>

        <CVSection number="01" title="Profile">
          <div className="max-w-165 space-y-3 text-[17px] leading-[1.85] tracking-[-0.015em] sm:text-lg">
            <p>
              Front-end &amp; mobile developer building production web and mobile apps with React
              (Next.js/Vite), Angular, and Flutter.
            </p>
            <p>
              I focus on clean UI, performance, and maintainable architecture, and I&apos;m
              comfortable owning features end-to-end—from implementation to release.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm">
            <ActionLink href="mailto:hedesmarin@gmail.com">Email</ActionLink>
            <ActionLink
              href="https://github.com/sincerelyfaust"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </ActionLink>
            <ActionLink
              href="https://linkedin.com/in/marinhedes"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </ActionLink>
            <ActionLink href="tel:+385957756683">+385 95 775 6683</ActionLink>
          </div>
        </CVSection>

        <CVSection number="02" title="Experience">
          <div className="space-y-10">
            {experiences.map((experience) => (
              <article
                key={`${experience.organization}-${experience.period}`}
                className="border-b border-zinc-200 pb-10 last:border-0 last:pb-0 dark:border-zinc-800"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-5">
                  <h3 className="text-lg leading-snug font-semibold tracking-[-0.03em]">
                    {experience.role}
                  </h3>
                  <p className="shrink-0 font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                    {experience.period}
                  </p>
                </div>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {experience.organization}
                </p>
                {experience.description && (
                  <p className="mt-5 text-sm leading-[1.9] text-zinc-600 dark:text-zinc-400">
                    {experience.description}
                  </p>
                )}
                {experience.highlights.length > 0 && (
                  <ul className="mt-4 list-disc space-y-2.5 pl-4 text-sm leading-[1.85] text-zinc-600 marker:text-zinc-400 dark:text-zinc-400 dark:marker:text-zinc-600">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="pl-1">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </CVSection>

        <CVSection number="03" title="Projects">
          <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {projects.map((project) => (
              <article key={project.name} className="py-6 first:pt-0 last:pb-0">
                <h3 className="text-lg font-semibold tracking-[-0.03em]">{project.name}</h3>
                <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-[1.9] text-zinc-600 marker:text-zinc-400 dark:text-zinc-400 dark:marker:text-zinc-600">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="pl-1">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </CVSection>

        <CVSection number="04" title="Skills">
          <dl className="grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <dt className="mb-2 text-sm font-semibold tracking-[-0.015em]">{group.title}</dt>
                <dd className="text-sm leading-[1.8] text-zinc-600 dark:text-zinc-400">
                  {group.values}
                </dd>
              </div>
            ))}
          </dl>
        </CVSection>

        <CVSection number="05" title="Background">
          <div className="space-y-9">
            <div>
              <p className="mb-3 font-mono text-[10px] font-semibold tracking-[0.095em] text-zinc-600 dark:text-zinc-400">
                EDUCATION
              </p>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="font-semibold tracking-[-0.02em]">
                  Industrijsko-obrtnička škola, Slavonski Brod
                </h3>
                <p className="shrink-0 font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                  Sep 2016 — Jun 2019
                </p>
              </div>
              <p className="mt-2 text-sm leading-[1.8] text-zinc-600 dark:text-zinc-400">
                High School — Computer Numerically Controlled (CNC) Machinist
              </p>
              <p className="mt-1 text-sm leading-[1.8] text-zinc-600 dark:text-zinc-400">
                High school diploma program focused on CNC machining.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <p className="mb-3 font-mono text-[10px] font-semibold tracking-[0.095em] text-zinc-600 dark:text-zinc-400">
                  CERTIFICATES
                </p>
                <a
                  href="https://www.freecodecamp.org/certification/SincerelyFaust/responsive-web-design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex border-b border-zinc-400 pb-1 text-sm font-medium transition-colors hover:border-zinc-950 dark:border-zinc-600 dark:hover:border-zinc-100"
                >
                  Responsive Web Design (freeCodeCamp)
                </a>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">2023</p>
              </div>
              <div>
                <p className="mb-3 font-mono text-[10px] font-semibold tracking-[0.095em] text-zinc-600 dark:text-zinc-400">
                  LANGUAGES
                </p>
                <p className="text-sm leading-[1.8] text-zinc-600 dark:text-zinc-400">
                  English — Native or Bilingual Proficiency
                  <br />
                  Croatian — Native or Bilingual Proficiency
                </p>
              </div>
              <div>
                <p className="mb-3 font-mono text-[10px] font-semibold tracking-[0.095em] text-zinc-600 dark:text-zinc-400">
                  ADDITIONAL INFORMATION
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Driving Licence: Category B
                </p>
              </div>
            </div>
          </div>
        </CVSection>
      </main>
    </div>
  );
}
