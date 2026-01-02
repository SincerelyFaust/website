"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

type TabKey =
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "work"
  | "contact";

const BIRTHDATE_DMY = "23/02/2001";

const PROFILE = {
  name: "Marin Heđeš",
  role: "Graphic/motion designer & software developer",
  location: "Croatia, Slavonski Brod",
  timezone: "Europe/Zagreb",
  email: "hedesmarin@gmail.com",
  avatar: "/images/profile/profile-picture.webp",
  footerAppName: "MarinHedes.exe",
};

const FAVORITES = {
  music: ["Rap", "Trap", "EDM", "Turbofolk", "Pop"],
  films: ["Psychological thriller", "Horror", "Neo-western"],
};

const SKILLS = {
  motion: ["Adobe After Effects", "Lottie"],
  graphic: ["Adobe Photoshop", "Figma"],
  frameworks: ["Flutter", "React", "Next.js", "Tauri", "React Native"],
  languages: ["Dart", "TypeScript", "JavaScript"],
  tools: ["Git", "Meta Business Suite", "Supabase", "CI/CD"],
};

const PROJECTS = [
  {
    name: "dahliaOS App Store",
    href: "https://github.com/dahliaOS/app_store",
    tags: ["Dart", "Flutter"],
    desc: "Curated marketplace for third-party applications on dahliaOS.",
  },
  {
    name: "dahliaOS Welcome",
    href: "https://github.com/dahliaOS/welcome",
    tags: ["Dart", "Flutter"],
    desc: "An application for getting started with dahliaOS.",
  },
  {
    name: "dahliaOS Website",
    href: "https://github.com/dahliaOS/website",
    tags: ["TypeScript", "Next.js", "Styled Components", "Emotion"],
    desc: "Website for dahliaOS.",
  },
  {
    name: "The Hateful Society",
    href: "https://github.com/thehatefulsociety/thehatefulsociety",
    tags: ["TypeScript", "Next.js", "Styled Components", "Medusa.js"],
    desc: "An upcoming hypewear brand.",
  },
  {
    name: "Personal website",
    href: "https://github.com/SincerelyFaust/website",
    tags: ["TypeScript", "Next.js"],
    desc: "The website you're reading this on.",
  },
  {
    name: "FSK Satellite website",
    href: "https://github.com/SincerelyFaust/fsksatellite",
    tags: ["TypeScript", "Next.js", "React Three Fiber"],
    desc: "Website for an Italian trap group.",
  },
  {
    name: "Cordhook",
    href: "https://github.com/SincerelyFaust/cordhook",
    tags: ["TypeScript", "Next.js", "Tauri", "Rust"],
    desc: "An application for sending webhooks to Discord.",
  },
  {
    name: "CDW",
    href: "https://github.com/SincerelyFaust/crowdin-discord-webhook",
    tags: ["TypeScript", "Cloudflare"],
    desc: "A Cloudflare worker for forwarding Crowdin events to Discord.",
  },
  {
    name: "Mad Science website",
    href: "https://github.com/faustatwork/mad-science-website",
    tags: ["TypeScript", "Next.js", "Supabase"],
    desc: "A website for a crypto/forex trading group.",
  },
] as const;

const EXPERIENCE = [
  {
    name: "dahliaOS",
    href: "https://dahliaos.io",
    role: "Co-Founder",
    start: "01/2020",
    end: "04/2023",
    summary:
      "Joined as a graphic designer; later moved into a managerial role covering brand, community, content, organization, and product execution. Also contributed to apps, desktop environment, and website.",
  },
  {
    name: "BlissLabs",
    href: "https://blisslabs.org",
    role: "Design Lead / PR Lead / Business Director",
    start: "02/2021",
    end: "06/2021",
    summary:
      "Led rebrand and improved org structure; supported recruiting, PR, business operations, and design across BlissLabs projects.",
  },
  {
    name: "Gith.app",
    href: "https://gith.app",
    role: "Founder",
    start: "02/2023",
    end: "",
    summary:
      "Gith is a cross-platform Git GUI client. The project is currently in an early development stage.",
  },
] as const;

const WORK = {
  availability:
    "Available for paid roles (full/part-time or contractor), and interested in joining FOSS/OSS projects with potential. Also available for quick gigs.",
  services: [
    "Designing logotypes and other visual content",
    "Developing websites and web applications",
    "Developing e-commerce websites (webshops)",
    "Developing mobile and desktop applications",
  ],
};

const SOCIAL = {
  instagram: "/instagram",
  twitter: "/twitter",
  github: "/github",
  linkedin: "/linkedin",
};

function calculateAge(birthDateString: string): number {
  const today = dayjs();
  const birth = dayjs(birthDateString, "DD/MM/YYYY");
  return today.diff(birth, "year");
}

function getZagrebTimeString(d: Date) {
  return new Intl.DateTimeFormat(["en-GB"], {
    timeZone: PROFILE.timezone,
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    weekday: "long",
  }).format(d);
}

function getTzOffsetMinutes(date: Date, timeZone: string) {
  try {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone,
      timeZoneName: "shortOffset",
      hour: "2-digit",
      minute: "2-digit",
    }).formatToParts(date);

    const tz = parts.find((p) => p.type === "timeZoneName")?.value ?? "";
    const m = tz.match(/([+-])(\d{1,2})(?::?(\d{2}))?/i);
    if (!m) return -date.getTimezoneOffset();

    const sign = m[1] === "-" ? -1 : 1;
    const hh = Number(m[2] ?? 0);
    const mm = Number(m[3] ?? 0);
    return sign * (hh * 60 + mm);
  } catch {
    return -date.getTimezoneOffset();
  }
}

function calculateHourDifferenceToViewer(now: Date) {
  const viewerOffset = -now.getTimezoneOffset();
  const zagrebOffset = getTzOffsetMinutes(now, PROFILE.timezone);
  const diffHours = Math.round((zagrebOffset - viewerOffset) / 60);

  if (diffHours < 0) return `(${String(Math.abs(diffHours))} hours behind you)`;
  if (diffHours === 0) return "(Same time as you)";
  return `(${diffHours} hours ahead of you)`;
}

function getDateRange(startDateString: string, endDateString: string): string {
  const start = dayjs(startDateString, "MM/YYYY");
  if (endDateString.length > 0) {
    const end = dayjs(endDateString, "MM/YYYY");
    return `${start.format("MMMM YYYY")} - ${end.format("MMMM YYYY")}`;
  }
  return `${start.format("MMMM YYYY")} - Present`;
}

function calculateDuration(
  startDateString: string,
  endDateString: string
): string {
  const start = dayjs(startDateString, "MM/YYYY");
  const end =
    endDateString.length > 0 ? dayjs(endDateString, "MM/YYYY") : dayjs();

  const yearsDiff = end.diff(start, "year");
  const monthsDiff = end.diff(start, "month");

  if (monthsDiff % 12 === 0 && yearsDiff !== 0) return `${yearsDiff} year/s`;
  if (monthsDiff % 12 !== 0 && yearsDiff === 0) return `${monthsDiff} month/s`;
  return `${yearsDiff} year/s, ${monthsDiff % 12} month/s`;
}

export default function Home() {
  const [tab, setTab] = useState<TabKey>("about");
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 10_000);
    return () => clearInterval(t);
  }, []);

  const age = useMemo(() => calculateAge(BIRTHDATE_DMY), []);
  const zagrebTime = getZagrebTimeString(now);
  const tzDiff = calculateHourDifferenceToViewer(now);

  return (
    <div className="min-h-svh flex justify-center items-start p-3 sm:p-6 overflow-auto">
      {/* Use a viewport-based HEIGHT so the title bar + welcome never get clipped on small devices */}
      <div className="window w-full max-w-3xl h-[94svh] sm:h-[90svh] flex flex-col">
        <div className="title-bar">
          <div className="title-bar-text">{PROFILE.name}</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>

        {/* Fixed layout zones: body grows, status stays visible */}
        <div className="window-body flex flex-col gap-4 flex-1 min-h-0 overflow-hidden">
          {/* MOBILE: this whole area scrolls (so Welcome never disappears).
              DESKTOP: internal panels scroll. */}
          <div className="flex flex-col gap-4 flex-1 min-h-0 overflow-auto lg:overflow-hidden lg:flex-row">
            {/* LEFT */}
            <aside className="w-full lg:w-70 flex flex-col gap-4 min-h-0">
              <fieldset>
                <legend>Welcome</legend>

                <div
                  className="field-row"
                  style={{ alignItems: "center", gap: 10 }}
                >
                  <Image
                    src={PROFILE.avatar}
                    alt="profile picture"
                    width={72}
                    height={72}
                    priority
                  />
                  <div className="field-row-stacked" style={{ width: "100%" }}>
                    <label>Name</label>
                    <input readOnly value={PROFILE.name} />
                  </div>
                </div>

                <div className="field-row-stacked">
                  <label>Role</label>
                  <input readOnly value={PROFILE.role} />
                </div>

                <div className="field-row-stacked">
                  <label>Location</label>
                  <input readOnly value={PROFILE.location} />
                </div>

                <div className="field-row-stacked">
                  <label>Local time ({PROFILE.timezone})</label>
                  <input readOnly value={`${zagrebTime} ${tzDiff}`} />
                </div>

                <div
                  className="field-row"
                  style={{ flexWrap: "wrap", gap: 8, marginTop: 6 }}
                >
                  <button onClick={() => setTab("work")}>
                    Let&apos;s work
                  </button>
                  <button onClick={() => setTab("projects")}>Projects</button>
                  <button onClick={() => setTab("contact")}>Contact</button>
                </div>
              </fieldset>

              {/* Desktop: this fills remaining height and scrolls with XP scrollbar */}
              <div className="sunken-panel p-3 lg:flex-1 lg:min-h-0 lg:overflow-auto">
                <ul className="tree-view">
                  <li>
                    <button
                      onClick={() => setTab("about")}
                      style={{ all: "unset", cursor: "pointer" }}
                    >
                      ▶ About
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setTab("skills")}
                      style={{ all: "unset", cursor: "pointer" }}
                    >
                      ▶ Skills
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setTab("projects")}
                      style={{ all: "unset", cursor: "pointer" }}
                    >
                      ▶ Projects
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setTab("experience")}
                      style={{ all: "unset", cursor: "pointer" }}
                    >
                      ▶ Experience
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setTab("work")}
                      style={{ all: "unset", cursor: "pointer" }}
                    >
                      ▶ Let&apos;s work
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setTab("contact")}
                      style={{ all: "unset", cursor: "pointer" }}
                    >
                      ▶ Get in touch
                    </button>
                  </li>
                </ul>
              </div>
            </aside>

            {/* RIGHT */}
            <main className="flex-1 min-w-0 min-h-0 lg:overflow-hidden">
              {/* XP.css tabs: menu + articles as direct children */}
              <section className="tabs h-full flex flex-col min-h-0 lg:overflow-hidden">
                {/* Keep tab bar visible; allow wrapping on tiny screens */}
                <menu
                  role="tablist"
                  aria-label="Portfolio tabs"
                  className="flex-wrap"
                  style={{ flexShrink: 0 }}
                >
                  <button
                    role="tab"
                    aria-selected={tab === "about"}
                    onClick={() => setTab("about")}
                  >
                    About
                  </button>
                  <button
                    role="tab"
                    aria-selected={tab === "skills"}
                    onClick={() => setTab("skills")}
                  >
                    Skills
                  </button>
                  <button
                    role="tab"
                    aria-selected={tab === "projects"}
                    onClick={() => setTab("projects")}
                  >
                    Projects
                  </button>
                  <button
                    role="tab"
                    aria-selected={tab === "experience"}
                    onClick={() => setTab("experience")}
                  >
                    Experience
                  </button>
                  <button
                    role="tab"
                    aria-selected={tab === "work"}
                    onClick={() => setTab("work")}
                  >
                    Let&apos;s work
                  </button>
                  <button
                    role="tab"
                    aria-selected={tab === "contact"}
                    onClick={() => setTab("contact")}
                  >
                    Contact
                  </button>
                </menu>

                {/* On mobile we let the OUTER stack scroll; on desktop each tab page scrolls */}
                <article
                  role="tabpanel"
                  hidden={tab !== "about"}
                  className="p-2 lg:flex-1 lg:min-h-0 lg:overflow-auto"
                >
                  <fieldset>
                    <legend>About</legend>
                    <div className="field-row">
                      <label style={{ width: 90 }}>Age:</label>
                      <input readOnly value={`${age}`} />
                    </div>

                    <div className="field-row-stacked">
                      <label>Bio</label>
                      <textarea
                        readOnly
                        rows={10}
                        value={`My name is ${PROFILE.name}, I'm a ${age} year old self-taught graphic designer and a developer based in ${PROFILE.location}.

I love learning and gathering new experiences which is what drives me to try something new every once in a while. Hate studying. Can't live without music. Aged 15, decided to skip on college and teach myself design and programming.

Got into open source back in 2020, started learning new skills and getting experience in various fields while building projects with great people and now I'm looking forward to where it'll take me next. I specialize in graphic design (branding, UI/UX, web design, photoshop, promo), building brands, marketing/advertising, project/product management, public relations, desktop/mobile/web app development and web development.`}
                      />
                    </div>
                  </fieldset>

                  <fieldset>
                    <legend>Favorites</legend>
                    <div className="field-row-stacked">
                      <label>Music genres</label>
                      <select disabled defaultValue={FAVORITES.music[0]}>
                        {FAVORITES.music.map((g) => (
                          <option key={g}>{g}</option>
                        ))}
                      </select>
                    </div>
                    <div className="field-row-stacked">
                      <label>Film genres</label>
                      <select disabled defaultValue={FAVORITES.films[0]}>
                        {FAVORITES.films.map((g) => (
                          <option key={g}>{g}</option>
                        ))}
                      </select>
                    </div>
                  </fieldset>
                </article>

                <article
                  role="tabpanel"
                  hidden={tab !== "skills"}
                  className="p-2 lg:flex-1 lg:min-h-0 lg:overflow-auto"
                >
                  <div className="flex flex-col gap-4">
                    <fieldset>
                      <legend>Motion design</legend>
                      <ul className="tree-view">
                        {SKILLS.motion.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                    </fieldset>
                    <fieldset>
                      <legend>Graphic design</legend>
                      <ul className="tree-view">
                        {SKILLS.graphic.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                    </fieldset>
                    <fieldset>
                      <legend>Frameworks</legend>
                      <ul className="tree-view">
                        {SKILLS.frameworks.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                    </fieldset>
                    <fieldset>
                      <legend>Languages</legend>
                      <ul className="tree-view">
                        {SKILLS.languages.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                    </fieldset>
                    <fieldset>
                      <legend>Tools</legend>
                      <ul className="tree-view">
                        {SKILLS.tools.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                    </fieldset>
                  </div>
                </article>

                <article
                  role="tabpanel"
                  hidden={tab !== "projects"}
                  className="p-2 lg:flex-1 lg:min-h-0 lg:overflow-auto"
                >
                  <fieldset>
                    <legend>Projects</legend>
                    <div className="sunken-panel p-3">
                      <ul className="tree-view">
                        {PROJECTS.map((p) => (
                          <li key={p.name} style={{ marginBottom: 8 }}>
                            <div
                              className="field-row"
                              style={{
                                justifyContent: "space-between",
                                gap: 12,
                              }}
                            >
                              <a
                                href={p.href}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <strong>{p.name}</strong>
                              </a>
                              <a
                                href={p.href}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <button>Open</button>
                              </a>
                            </div>

                            <div
                              className="field-row"
                              style={{ flexWrap: "wrap", gap: 6, marginTop: 6 }}
                            >
                              {p.tags.map((t) => (
                                <span
                                  key={`${p.name}-${t}`}
                                  className="status-bar"
                                >
                                  <p className="status-bar-field">{t}</p>
                                </span>
                              ))}
                            </div>

                            <div
                              className="field-row-stacked"
                              style={{ marginTop: 6 }}
                            >
                              <textarea readOnly rows={3} value={p.desc} />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </fieldset>
                </article>

                <article
                  role="tabpanel"
                  hidden={tab !== "experience"}
                  className="p-2 lg:flex-1 lg:min-h-0 lg:overflow-auto"
                >
                  <div className="flex flex-col gap-4">
                    {EXPERIENCE.map((e) => (
                      <fieldset key={e.name}>
                        <legend>
                          <a
                            href={e.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {e.name}
                          </a>
                        </legend>
                        <div className="field-row">
                          <label style={{ width: 120 }}>Dates:</label>
                          <input
                            readOnly
                            value={`${getDateRange(
                              e.start,
                              e.end
                            )} (${calculateDuration(e.start, e.end)})`}
                          />
                        </div>
                        <div className="field-row">
                          <label style={{ width: 120 }}>Role:</label>
                          <input readOnly value={e.role} />
                        </div>
                        <div className="field-row-stacked">
                          <label>Summary</label>
                          <textarea readOnly rows={6} value={e.summary} />
                        </div>
                      </fieldset>
                    ))}
                  </div>
                </article>

                <article
                  role="tabpanel"
                  hidden={tab !== "work"}
                  className="p-2 lg:flex-1 lg:min-h-0 lg:overflow-auto"
                >
                  <fieldset>
                    <legend>Let&apos;s work</legend>
                    <div className="field-row-stacked">
                      <label>Availability</label>
                      <textarea readOnly rows={6} value={WORK.availability} />
                    </div>

                    <fieldset>
                      <legend>Services I offer</legend>
                      <ul className="tree-view">
                        {WORK.services.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                    </fieldset>

                    <div
                      className="field-row"
                      style={{ marginTop: 8, flexWrap: "wrap", gap: 8 }}
                    >
                      <a href={`mailto:${PROFILE.email}`}>
                        <button>Email</button>
                      </a>
                      <button onClick={() => setTab("contact")}>
                        Get in touch
                      </button>
                    </div>
                  </fieldset>
                </article>

                <article
                  role="tabpanel"
                  hidden={tab !== "contact"}
                  className="p-2 lg:flex-1 lg:min-h-0 lg:overflow-auto"
                >
                  <fieldset>
                    <legend>Get in touch</legend>

                    <div
                      className="field-row"
                      style={{ flexWrap: "wrap", gap: 8 }}
                    >
                      <Link
                        href={SOCIAL.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button>Instagram</button>
                      </Link>
                      <Link
                        href={SOCIAL.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button>Twitter</button>
                      </Link>
                      <Link
                        href={SOCIAL.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button>LinkedIn</button>
                      </Link>
                      <Link
                        href={SOCIAL.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button>GitHub</button>
                      </Link>
                      <a href={`mailto:${PROFILE.email}`}>
                        <button>Email</button>
                      </a>
                    </div>

                    <div className="status-bar" style={{ marginTop: 10 }}>
                      <p className="status-bar-field">
                        {PROFILE.footerAppName}
                      </p>
                      <p className="status-bar-field">
                        {now.toLocaleTimeString("en-GB", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </fieldset>
                </article>
              </section>
            </main>
          </div>

          <div className="status-bar">
            <p className="status-bar-field">Ready</p>
            <p className="status-bar-field">Portfolio</p>
            <p className="status-bar-field">
              {now.toLocaleTimeString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
