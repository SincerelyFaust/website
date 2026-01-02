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

export default function Home() {
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 10_000);
    return () => clearInterval(t);
  }, []);

  const age = useMemo(() => calculateAge(BIRTHDATE_DMY), []);
  const zagrebTime = getZagrebTimeString(now);
  const tzDiff = calculateHourDifferenceToViewer(now);

  return (
    <div className="min-h-svh flex justify-center items-start p-3 sm:p-6">
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

            <div className="field-row" style={{ flexWrap: "wrap", gap: 8 }}>
              <Link href="/cv">
                <button>View CV</button>
              </Link>

              <a href={`mailto:${PROFILE.email}`}>
                <button>Email</button>
              </a>
            </div>
          </fieldset>

          <fieldset>
            <legend>About</legend>

            <div className="field-row">
              <label style={{ width: 90 }}>Age</label>
              <input readOnly value={`${age}`} />
            </div>

            <div className="field-row-stacked">
              <label>What I do</label>
              <textarea
                readOnly
                rows={10}
                value={`I’m a front-end and mobile developer focused on building production apps that feel fast, clean, and reliable.

I’m most passionate about software development and developer experience (DX): reducing friction, keeping codebases maintainable, and making delivery predictable. I enjoy setting up solid foundations—shared UI patterns, reusable modules, automation scripts, and CI checks—so teams can move quickly without breaking things.

When I’m building, I care about the details: performance, state management, realtime behavior, and clean UX. I like owning features end-to-end, from implementation to release, and I’m happiest when the product and the workflow both feel “smooth.”`}
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Links</legend>

            <div className="field-row" style={{ flexWrap: "wrap", gap: 8 }}>
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
    </div>
  );
}
