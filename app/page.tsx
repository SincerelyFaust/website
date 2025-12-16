"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type TabKey =
  | "intro"
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "work"
  | "contact";

function parseDMY(dmy: string) {
  const [dd, mm, yyyy] = dmy.split("/").map(Number);
  return { dd, mm, yyyy };
}

function calculateAge(birthDateString: string): number {
  const { dd, mm, yyyy } = parseDMY(birthDateString);
  const birth = new Date(yyyy, mm - 1, dd);
  const now = new Date();

  let age = now.getFullYear() - birth.getFullYear();
  const m = now.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) age -= 1;
  return age;
}

function getZagrebTimeString(d: Date) {
  return new Intl.DateTimeFormat(["en-GB"], {
    timeZone: "Europe/Zagreb",
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
  const viewerOffset = -now.getTimezoneOffset(); // minutes east of UTC
  const zagrebOffset = getTzOffsetMinutes(now, "Europe/Zagreb");
  const diffHours = Math.round((zagrebOffset - viewerOffset) / 60);

  if (diffHours < 0) return `(${String(Math.abs(diffHours))} hours behind you)`;
  if (diffHours === 0) return "(Same time as you)";
  return `(${diffHours} hours ahead of you)`;
}

function parseMY(my: string) {
  const [mm, yyyy] = my.split("/").map(Number);
  return { mm, yyyy };
}

function monthIndex(date: Date) {
  return date.getFullYear() * 12 + date.getMonth();
}

function formatMonthYear(date: Date) {
  return date.toLocaleString("en-GB", { month: "long", year: "numeric" });
}

function getDateRange(startDateString: string, endDateString: string): string {
  const { mm: sm, yyyy: sy } = parseMY(startDateString);
  const start = new Date(sy, sm - 1, 1);

  if (endDateString.length > 0) {
    const { mm: em, yyyy: ey } = parseMY(endDateString);
    const end = new Date(ey, em - 1, 1);
    return `${formatMonthYear(start)} - ${formatMonthYear(end)}`;
  }

  return `${formatMonthYear(start)} - Present`;
}

function calculateDuration(
  startDateString: string,
  endDateString: string
): string {
  const { mm: sm, yyyy: sy } = parseMY(startDateString);
  const start = new Date(sy, sm - 1, 1);

  const end =
    endDateString.length > 0
      ? (() => {
          const { mm: em, yyyy: ey } = parseMY(endDateString);
          return new Date(ey, em - 1, 1);
        })()
      : new Date();

  const totalMonths = Math.max(0, monthIndex(end) - monthIndex(start));
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (months === 0 && years !== 0) return `${years} year/s`;
  if (years === 0) return `${months} month/s`;
  return `${years} year/s, ${months} month/s`;
}

export default function Home() {
  const [tab, setTab] = useState<TabKey>("intro");
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 10_000);
    return () => clearInterval(t);
  }, []);

  const age = useMemo(() => calculateAge("23/02/2001"), []);
  const zagrebTime = getZagrebTimeString(now);
  const tzDiff = calculateHourDifferenceToViewer(now);

  const projects = useMemo(
    () => [
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
    ],
    []
  );

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="window w-full max-w-6xl">
        <div className="title-bar">
          <div className="title-bar-text">Marin Heđeš</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>

        <div className="window-body flex flex-col gap-4">
          <div className="flex flex-col gap-4 lg:flex-row">
            {/* SIDEBAR */}
            <aside className="w-full lg:w-70 flex flex-col gap-4">
              <div className="sunken-panel p-3">
                <ul className="tree-view">
                  <li>
                    <button
                      onClick={() => setTab("intro")}
                      style={{ all: "unset", cursor: "pointer" }}
                    >
                      ▶ Home
                    </button>
                  </li>
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

              <fieldset>
                <legend>Status</legend>
                <div className="status-bar">
                  <p className="status-bar-field">🇭🇷 Croatia, Slavonski Brod</p>
                </div>
                <div className="status-bar">
                  <p className="status-bar-field">
                    ⏰ {zagrebTime} {tzDiff}
                  </p>
                </div>
              </fieldset>

              <fieldset>
                <legend>Quick links</legend>
                <div
                  className="field-row"
                  style={{ justifyContent: "space-between" }}
                >
                  <Link
                    href="/instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>Instagram</button>
                  </Link>
                  <Link
                    href="/twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>Twitter</button>
                  </Link>
                </div>
                <div
                  className="field-row"
                  style={{ justifyContent: "space-between" }}
                >
                  <Link
                    href="/github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>GitHub</button>
                  </Link>
                  <Link
                    href="/linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>LinkedIn</button>
                  </Link>
                </div>
              </fieldset>
            </aside>

            {/* MAIN */}
            <main className="flex-1 min-w-0">
              <section className="tabs">
                <menu role="tablist" aria-label="Portfolio tabs">
                  <button
                    role="tab"
                    aria-selected={tab === "intro"}
                    onClick={() => setTab("intro")}
                  >
                    Home
                  </button>
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

                {/* INTRO */}
                <article
                  role="tabpanel"
                  hidden={tab !== "intro"}
                  className="p-2"
                >
                  <fieldset>
                    <legend>Welcome</legend>
                    <div className="field-row-stacked">
                      <label>Name</label>
                      <input readOnly value="Marin Heđeš" />
                    </div>

                    <div className="field-row-stacked">
                      <label>Role</label>
                      <input
                        readOnly
                        value="Graphic/motion designer & software developer"
                      />
                    </div>

                    <div className="field-row-stacked">
                      <label>Location</label>
                      <input readOnly value="Croatia, Slavonski Brod" />
                    </div>

                    <div className="field-row-stacked">
                      <label>Local time (Europe/Zagreb)</label>
                      <input readOnly value={`${zagrebTime} ${tzDiff}`} />
                    </div>

                    <div
                      className="field-row"
                      style={{ marginTop: 8, alignItems: "center", gap: 12 }}
                    >
                      <Image
                        src="/images/profile/profile-picture.webp"
                        alt="profile picture"
                        width={120}
                        height={120}
                        priority
                      />
                      <div
                        className="field-row"
                        style={{ gap: 8, flexWrap: "wrap" }}
                      >
                        <a href="mailto:hedesmarin@gmail.com">
                          <button>Email me</button>
                        </a>
                        <button onClick={() => setTab("work")}>
                          Let&apos;s work
                        </button>
                        <button onClick={() => setTab("projects")}>
                          View projects
                        </button>
                      </div>
                    </div>
                  </fieldset>

                  <fieldset>
                    <legend>Links</legend>
                    <div
                      className="field-row"
                      style={{ flexWrap: "wrap", gap: 8 }}
                    >
                      <Link
                        href="/instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button>Instagram</button>
                      </Link>
                      <Link
                        href="/twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button>Twitter</button>
                      </Link>
                      <Link
                        href="/linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button>LinkedIn</button>
                      </Link>
                      <Link
                        href="/github"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button>GitHub</button>
                      </Link>
                    </div>
                  </fieldset>
                </article>

                {/* ABOUT */}
                <article
                  role="tabpanel"
                  hidden={tab !== "about"}
                  className="p-2"
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
                        value={`My name is Marin Heđeš, I'm a ${age} year old self-taught graphic designer and a developer based in Slavonski Brod, Croatia.

I love learning and gathering new experiences which is what drives me to try something new every once in a while. Hate studying. Can't live without music. Aged 15, decided to skip on college and teach myself design and programming.

Got into open source back in 2020, started learning new skills and getting experience in various fields while building projects with great people and now I'm looking forward to where it'll take me next. I specialize in graphic design (branding, UI/UX, web design, photoshop, promo), building brands, marketing/advertising, project/product management, public relations, desktop/mobile/web app development and web development.`}
                      />
                    </div>
                  </fieldset>

                  <fieldset>
                    <legend>Favorites</legend>
                    <div className="field-row-stacked">
                      <label>Music genres</label>
                      <select disabled defaultValue="Rap">
                        <option>Rap</option>
                        <option>Trap</option>
                        <option>EDM</option>
                        <option>Turbofolk</option>
                        <option>Pop</option>
                      </select>
                    </div>
                    <div className="field-row-stacked">
                      <label>Film genres</label>
                      <select disabled defaultValue="Psychological thriller">
                        <option>Psychological thriller</option>
                        <option>Horror</option>
                        <option>Neo-western</option>
                      </select>
                    </div>
                  </fieldset>
                </article>

                {/* SKILLS */}
                <article
                  role="tabpanel"
                  hidden={tab !== "skills"}
                  className="p-2"
                >
                  <div className="flex flex-col gap-4">
                    <fieldset>
                      <legend>Motion design</legend>
                      <ul className="tree-view">
                        <li>Adobe After Effects</li>
                        <li>Lottie</li>
                      </ul>
                    </fieldset>

                    <fieldset>
                      <legend>Graphic design</legend>
                      <ul className="tree-view">
                        <li>Adobe Photoshop</li>
                        <li>Figma</li>
                      </ul>
                    </fieldset>

                    <fieldset>
                      <legend>Frameworks</legend>
                      <ul className="tree-view">
                        <li>Flutter</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Tauri</li>
                        <li>React Native</li>
                      </ul>
                    </fieldset>

                    <fieldset>
                      <legend>Languages</legend>
                      <ul className="tree-view">
                        <li>Dart</li>
                        <li>TypeScript</li>
                        <li>JavaScript</li>
                      </ul>
                    </fieldset>

                    <fieldset>
                      <legend>Tools</legend>
                      <ul className="tree-view">
                        <li>Git</li>
                        <li>Meta Business Suite</li>
                        <li>Supabase</li>
                        <li>CI/CD</li>
                      </ul>
                    </fieldset>
                  </div>
                </article>

                {/* PROJECTS */}
                <article
                  role="tabpanel"
                  hidden={tab !== "projects"}
                  className="p-2"
                >
                  <fieldset>
                    <legend>Projects</legend>
                    <div className="sunken-panel p-3">
                      <ul className="tree-view">
                        {projects.map((p) => (
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

                {/* EXPERIENCE */}
                <article
                  role="tabpanel"
                  hidden={tab !== "experience"}
                  className="p-2"
                >
                  <div className="flex flex-col gap-4">
                    <fieldset>
                      <legend>
                        <a
                          href="https://dahliaos.io"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          dahliaOS
                        </a>
                      </legend>
                      <div className="field-row">
                        <label style={{ width: 120 }}>Dates:</label>
                        <input
                          readOnly
                          value={`${getDateRange(
                            "01/2020",
                            "04/2023"
                          )} (${calculateDuration("01/2020", "04/2023")})`}
                        />
                      </div>
                      <div className="field-row">
                        <label style={{ width: 120 }}>Role:</label>
                        <input readOnly value="Co-Founder" />
                      </div>
                      <div className="field-row-stacked">
                        <label>Summary</label>
                        <textarea
                          readOnly
                          rows={6}
                          value="Joined as a graphic designer; later moved into a managerial role covering brand, community, content, organization, and product execution. Also contributed to apps, desktop environment, and website."
                        />
                      </div>
                    </fieldset>

                    <fieldset>
                      <legend>
                        <a
                          href="https://blisslabs.org"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          BlissLabs
                        </a>
                      </legend>
                      <div className="field-row">
                        <label style={{ width: 120 }}>Dates:</label>
                        <input
                          readOnly
                          value={`${getDateRange(
                            "02/2021",
                            "06/2021"
                          )} (${calculateDuration("02/2021", "06/2021")})`}
                        />
                      </div>
                      <div className="field-row">
                        <label style={{ width: 120 }}>Role:</label>
                        <input
                          readOnly
                          value="Design Lead / PR Lead / Business Director"
                        />
                      </div>
                      <div className="field-row-stacked">
                        <label>Summary</label>
                        <textarea
                          readOnly
                          rows={6}
                          value="Led rebrand and improved org structure; supported recruiting, PR, business operations, and design across BlissLabs projects."
                        />
                      </div>
                    </fieldset>

                    <fieldset>
                      <legend>
                        <a
                          href="https://gith.app"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Gith.app
                        </a>
                      </legend>
                      <div className="field-row">
                        <label style={{ width: 120 }}>Dates:</label>
                        <input
                          readOnly
                          value={`${getDateRange(
                            "02/2023",
                            ""
                          )} (${calculateDuration("02/2023", "")})`}
                        />
                      </div>
                      <div className="field-row">
                        <label style={{ width: 120 }}>Role:</label>
                        <input readOnly value="Founder" />
                      </div>
                      <div className="field-row-stacked">
                        <label>Summary</label>
                        <textarea
                          readOnly
                          rows={3}
                          value="Gith is a cross-platform Git GUI client. The project is currently in an early development stage."
                        />
                      </div>
                    </fieldset>
                  </div>
                </article>

                {/* WORK */}
                <article
                  role="tabpanel"
                  hidden={tab !== "work"}
                  className="p-2"
                >
                  <fieldset>
                    <legend>Let&apos;s work</legend>
                    <div className="field-row-stacked">
                      <label>Availability</label>
                      <textarea
                        readOnly
                        rows={6}
                        value="Available for paid roles (full/part-time or contractor), and interested in joining FOSS/OSS projects with potential. Also available for quick gigs."
                      />
                    </div>

                    <fieldset>
                      <legend>Services I offer</legend>
                      <ul className="tree-view">
                        <li>Designing logotypes and other visual content</li>
                        <li>Developing websites and web applications</li>
                        <li>Developing e-commerce websites (webshops)</li>
                        <li>Developing mobile and desktop applications</li>
                      </ul>
                    </fieldset>

                    <div
                      className="field-row"
                      style={{ marginTop: 8, flexWrap: "wrap", gap: 8 }}
                    >
                      <a href="mailto:hedesmarin@gmail.com">
                        <button>Email</button>
                      </a>
                      <button onClick={() => setTab("contact")}>
                        Get in touch
                      </button>
                    </div>
                  </fieldset>
                </article>

                {/* CONTACT */}
                <article
                  role="tabpanel"
                  hidden={tab !== "contact"}
                  className="p-2"
                >
                  <fieldset>
                    <legend>Get in touch</legend>

                    <div
                      className="field-row"
                      style={{ flexWrap: "wrap", gap: 8 }}
                    >
                      <Link
                        href="/instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button>Instagram</button>
                      </Link>
                      <Link
                        href="/twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button>Twitter</button>
                      </Link>
                      <Link
                        href="/linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button>LinkedIn</button>
                      </Link>
                      <Link
                        href="/github"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button>GitHub</button>
                      </Link>
                      <a href="mailto:hedesmarin@gmail.com">
                        <button>Email</button>
                      </a>
                    </div>

                    <div className="status-bar" style={{ marginTop: 10 }}>
                      <p className="status-bar-field">MarinHedes.exe</p>
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
