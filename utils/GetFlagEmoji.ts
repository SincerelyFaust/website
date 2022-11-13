import { getCode } from "country-list";
import { siteConfig } from "../config";

export function getFlagEmoji() {
  const alphaToFlagAlpha = (a: string) =>
    String.fromCodePoint(0x1f1a5 + a.toUpperCase().codePointAt(0)!);
  return getCode(siteConfig.location.country)!
    .slice(0, 2)
    .split("")
    .map(alphaToFlagAlpha)
    .join("");
}
