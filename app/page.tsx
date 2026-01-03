"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const BIRTHDATE_DMY = "23/02/2001";

const PROFILE = {
  name: "Marin Heđeš",
  role: "Front-End & Mobile Developer",
  location: "Croatia, Slavonski Brod",
  timezone: "Europe/Zagreb",
  email: "hedesmarin@gmail.com",
  avatar: "/images/profile/profile-picture.webp",
  footerAppName: "MarinHedes.exe",
};

const SOCIAL = [
  { label: "LinkedIn", href: "/linkedin" },
  { label: "GitHub", href: "/github" },
  { label: "Twitter", href: "/twitter" },
  { label: "Instagram", href: "/instagram" },
] as const;

const APPEARANCES = [
  {
    conference: "Game Changer",
    track: "WEB3 / The Road to Mainstream Adoption",
    panel: "X-TO-EARN APPS: BLOCKCHAIN MODELS OF SUCCESS",
    what_i_covered: `• X-to-earn app models and how they translate into real product flows
• Practical implementation in modern apps (components, UX patterns, and state handling)
• How to guide users through complex processes with clear steps, feedback, and helpful context`,
    images: [
      {
        thumb: "/images/appearances/gamechanger/x-to-earn-1.jpeg",
        full: "/images/appearances/gamechanger/x-to-earn-1.jpeg",
        caption: "Speaker profile card on the Game Changer website.",
      },
      {
        thumb: "/images/appearances/gamechanger/x-to-earn-2.jpeg",
        full: "/images/appearances/gamechanger/x-to-earn-2.jpeg",
        caption:
          "On stage during the panel discussion (Web3 track: The Road to Mainstream Adoption).",
      },
      {
        thumb: "/images/appearances/gamechanger/x-to-earn-3.jpeg",
        full: "/images/appearances/gamechanger/x-to-earn-3.jpeg",
        caption:
          "Conference agenda showing the scheduled “X-to-Earn Apps” panel slot.",
      },
    ],
  },
] as const;

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

function ReadonlyField({ label, value }: { label: string; value: string }) {
  return (
    <div className="field-row-stacked">
      <label className="font-bold">{label}</label>
      <input readOnly value={value} className="font-mono!" />
    </div>
  );
}

export default function Home() {
  const [now, setNow] = useState<Date>(() => new Date());
  const [activeImage, setActiveImage] = useState<{
    src: string;
    caption?: string;
  } | null>(null);

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 10_000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (!activeImage) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeImage]);

  const age = useMemo(() => calculateAge(BIRTHDATE_DMY), []);
  const zagrebTime = getZagrebTimeString(now);
  const tzDiff = calculateHourDifferenceToViewer(now);

  return (
    <div className="min-h-svh flex items-center justify-center p-3 sm:p-6 overflow-auto bg-[url('/images/bg/image.webp')] bg-cover bg-center bg-no-repeat">
      <div className="window w-full max-w-2xl">
        <div className="title-bar">
          <div className="title-bar-text">{PROFILE.name}</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>

        <div className="window-body flex flex-col gap-4">
          <fieldset>
            <legend>Profile</legend>

            <div className="field-row items-center gap-2.5">
              <Image
                src={PROFILE.avatar}
                alt="profile picture"
                width={72}
                height={72}
                priority
              />

              <div className="field-row-stacked w-full">
                <label className="font-bold">Name</label>
                <input readOnly value={PROFILE.name} className="font-mono!" />
              </div>
            </div>

            <ReadonlyField label="Role" value={PROFILE.role} />
            <ReadonlyField label="Location" value={PROFILE.location} />
            <ReadonlyField
              label={`Local time (${PROFILE.timezone})`}
              value={`${zagrebTime} ${tzDiff}`}
            />

            <div className="field-row flex-wrap gap-2">
              <Link href="/cv">
                <button>View CV</button>
              </Link>
              <a href={`mailto:${PROFILE.email}`}>
                <button>Email</button>
              </a>
            </div>

            <div className="mt-3 flex flex-col gap-2">
              <div className="status-bar">
                <p className="status-bar-field">
                  Want to see code? Browse my{" "}
                  <Link
                    href="/github"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    GitHub
                  </Link>
                  .
                </p>
              </div>
              <div className="status-bar">
                <p className="status-bar-field">
                  Looking for experience & project history? See my{" "}
                  <Link href="/cv" className="underline">
                    CV
                  </Link>{" "}
                  or{" "}
                  <Link
                    href="/linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    LinkedIn
                  </Link>
                  .
                </p>
              </div>
            </div>
          </fieldset>

          {/* About */}
          <fieldset>
            <legend>About</legend>

            <ReadonlyField label="Age" value={`${age}`} />

            <div className="field-row-stacked">
              <label className="font-bold">What I do</label>
              <textarea
                readOnly
                rows={10}
                className="font-mono!"
                value={`I’m a front-end and mobile developer focused on building production apps that feel fast, clean, and reliable.

I’m most passionate about software development and developer experience (DX): reducing friction, keeping codebases maintainable, and making delivery predictable. I enjoy setting up solid foundations—shared UI patterns, reusable modules, automation scripts, and CI checks—so teams can move quickly without breaking things.

When I’m building, I care about the details: performance, state management, realtime behavior, and clean UX. I like owning features end-to-end, from implementation to release, and I’m happiest when the product and the workflow both feel “smooth.”`}
              />
            </div>
          </fieldset>

          {/* Appearances */}
          <fieldset>
            <legend>Appearances</legend>

            <div className="flex flex-col gap-3">
              {APPEARANCES.map((a) => (
                <div key={`${a.conference}-${a.panel}`}>
                  <div className="font-bold">{a.conference}</div>
                  <div className="mt-1">
                    <div className="font-bold">{a.panel}</div>
                    <div className="mt-1">{a.track}</div>
                  </div>

                  <div className="field-row-stacked mt-2">
                    <label className="font-bold">What I covered</label>
                    <textarea
                      readOnly
                      rows={4}
                      className="font-mono!"
                      value={a.what_i_covered}
                    />
                  </div>

                  <div className="field-row flex-wrap gap-2 mt-2">
                    {a.images.map((img) => (
                      <button
                        key={img.thumb}
                        onClick={() =>
                          setActiveImage({
                            src: img.full,
                            caption: img.caption,
                          })
                        }
                        className="p-0 border-none bg-transparent"
                      >
                        <img
                          src={img.thumb}
                          alt={img.caption}
                          loading="lazy"
                          className="w-24 h-16 object-cover border"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </fieldset>

          {/* Links */}
          <fieldset>
            <legend>Links</legend>

            <div className="field-row flex-wrap gap-2">
              {SOCIAL.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>{s.label}</button>
                </Link>
              ))}
            </div>
          </fieldset>

          <div className="status-bar">
            <p className="status-bar-field">Ready</p>
            <p className="status-bar-field">{PROFILE.footerAppName}</p>
            <p className="status-bar-field">
              {now.toLocaleTimeString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Image modal */}
      {activeImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="window w-[92vw] max-w-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="title-bar">
              <div className="title-bar-text">Appearance preview</div>
              <div className="title-bar-controls">
                <button
                  aria-label="Close"
                  onClick={() => setActiveImage(null)}
                />
              </div>
            </div>

            <div className="window-body flex flex-col gap-2">
              <img
                src={activeImage.src}
                alt=""
                className="w-full max-h-[60svh] object-contain"
              />

              {activeImage.caption && (
                <div className="status-bar">
                  <p className="status-bar-field">{activeImage.caption}</p>
                </div>
              )}

              <div className="field-row">
                <a
                  href={activeImage.src}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Open original</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
