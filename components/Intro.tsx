import Link from "next/link";
import useMediaQuery from "../utils/hooks/useMediaQuery";
import { siteConfig } from "../config";
import {
  GitHubLogo,
  InstagramLogo,
  LinkedInLogo,
  MailLogo,
  TwitterLogo,
} from "./Icons";
import { getTime } from "../utils/GetTime";
import { getFlagEmoji } from "../utils/GetFlagEmoji";
import { calculateHourDifference } from "../utils/CalculateHourDIfference";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const variantRight: Variants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 40, duration: 1.5 },
  },
  hidden: { x: -500, opacity: 0 },
};

const variantLeft: Variants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 40, duration: 4 },
  },
  hidden: { x: 1000, opacity: 0 },
};

const Intro = () => {
  const isWindowSizeSmall = useMediaQuery("(max-width: 1075px)");

  return (
    <div>
      {isWindowSizeSmall ? (
        <div className="flex flex-col w-screen h-screen px-16 items-center justify-center gap-y-5">
          <motion.div
            variants={variantRight}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <Image
              src="/images/profile/profile-picture.webp"
              width="140"
              height="140"
              className="border-dashed rounded-3xl border-8 border-blue-600"
              alt="profile picture"
            />
          </motion.div>
          <motion.div
            className="flex flex-col text-center items-center justify-center gap-y-7"
            variants={variantLeft}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl font-bold text-blue-600">
              {siteConfig.name}
            </h1>
            <p className="text-2xl font-medium">
              {siteConfig.shortDescription}
            </p>
            <div className="flex flex-col gap-3 justify-center items-center">
              {siteConfig.location.country.length > 0 ? (
                <>
                  <div className="h-fit w-fit rounded-full flex items-center justify-center text-center gap-x-1 dark:bg-slate-800 bg-slate-200 px-4 py-2">
                    <p className="text-2xl">{getFlagEmoji()}</p>
                    <p className="text-sm">
                      {siteConfig.location.country}
                      {siteConfig.location.city.length > 0
                        ? ", " + siteConfig.location.city
                        : null}
                    </p>
                  </div>
                  <div className="h-fit w-fit rounded-full flex items-center justify-center text-center gap-x-1 dark:bg-slate-800 bg-slate-200 px-4 py-2">
                    <p className="text-sm">
                      ⏰ {getTime()}{" "}
                      <span className="text-slate-500">
                        {calculateHourDifference()}
                      </span>
                    </p>
                  </div>
                </>
              ) : null}
              {siteConfig.availability === true ? (
                <div className="h-fit w-fit rounded-full flex items-center justify-center text-center gap-x-1 dark:bg-slate-800 bg-slate-200 px-4 py-2">
                  <p className="text-sm">🏢 Available for hire</p>
                </div>
              ) : null}
            </div>
            <div className="flex flex-row gap-5">
              {siteConfig.twitter.length > 0 ? (
                <Link
                  href={`https://twitter.com/${siteConfig.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterLogo className="hover:fill-blue-400 fill-blue-600" />
                </Link>
              ) : null}
              {siteConfig.github.length > 0 ? (
                <Link
                  href={`https://github.com/${siteConfig.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubLogo className="hover:fill-blue-400 fill-blue-600" />
                </Link>
              ) : null}
              {siteConfig.linkedin.length > 0 ? (
                <Link
                  href={`https://www.linkedin.com/in/${siteConfig.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInLogo className="hover:fill-blue-400 fill-blue-600" />
                </Link>
              ) : null}
              {siteConfig.instagram.length > 0 ? (
                <Link
                  href={`https://instagram.com/${siteConfig.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramLogo className="hover:fill-blue-400 fill-blue-600" />
                </Link>
              ) : null}
              {siteConfig.mail.length > 0 ? (
                <Link
                  href={`mailto:${siteConfig.mail}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MailLogo className="hover:fill-blue-400 fill-blue-600" />
                </Link>
              ) : null}
            </div>
          </motion.div>
        </div>
      ) : (
        <div className="flex flex-row flex-wrap w-screen h-screen px-48 py-16 items-center justify-start gap-x-32 xl:justify-center xl:px-28">
          <motion.div
            variants={variantRight}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <Image
              src="/images/profile/profile-picture.webp"
              width="360"
              height="360"
              className="border-dashed border-8 border-blue-600 rounded-4xl"
              alt="profile picture"
            />
          </motion.div>
          <motion.div
            className="flex flex-1 flex-col text-left gap-7 xl:text-center xl:justify-center xl:items-center"
            variants={variantLeft}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-9xl font-bold text-blue-600 xl:text-6xl">
              {siteConfig.name}
            </h1>
            <p className="text-4xl font-medium">
              {siteConfig.shortDescription}
            </p>
            <div className="flex flex-row gap-3 flex-wrap xl:justify-center xl:items-center">
              {siteConfig.location.country.length > 0 ? (
                <>
                  <div className="h-10 w-fit rounded-full flex items-center justify-center text-center gap-x-1 dark:bg-slate-800 bg-slate-200 px-4">
                    <p className="text-2xl">{getFlagEmoji()}</p>
                    <p className="text-sm">
                      {siteConfig.location.country}
                      {siteConfig.location.city.length > 0
                        ? ", " + siteConfig.location.city
                        : null}
                    </p>
                  </div>
                  <div className="h-10 w-fit rounded-full flex items-center justify-center text-center gap-x-1 dark:bg-slate-800 bg-slate-200 px-4">
                    <p className="text-sm">
                      ⏰ {getTime()}{" "}
                      <span className="text-slate-500">
                        {calculateHourDifference()}
                      </span>
                    </p>
                  </div>
                </>
              ) : null}
              {siteConfig.availability === true ? (
                <div className="h-10 w-fit rounded-full flex items-center justify-center text-center gap-x-1 dark:bg-slate-800 bg-slate-200 px-4">
                  <p className="text-sm">🏢 Available for hire</p>
                </div>
              ) : null}
            </div>
            <div className="flex flex-row gap-5">
              {siteConfig.twitter.length > 0 ? (
                <Link
                  href={`https://twitter.com/${siteConfig.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterLogo className="hover:fill-blue-400 fill-blue-600" />
                </Link>
              ) : null}
              {siteConfig.github.length > 0 ? (
                <Link
                  href={`https://github.com/${siteConfig.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubLogo className="hover:fill-blue-400 fill-blue-600" />
                </Link>
              ) : null}
              {siteConfig.linkedin.length > 0 ? (
                <Link
                  href={`https://www.linkedin.com/in/${siteConfig.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInLogo className="hover:fill-blue-400 fill-blue-600" />
                </Link>
              ) : null}
              {siteConfig.instagram.length > 0 ? (
                <Link
                  href={`https://instagram.com/${siteConfig.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramLogo className="hover:fill-blue-400 fill-blue-600" />
                </Link>
              ) : null}
              {siteConfig.mail.length > 0 ? (
                <Link
                  href={`mailto:${siteConfig.mail}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MailLogo className="hover:fill-blue-400 fill-blue-600" />
                </Link>
              ) : null}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Intro;
