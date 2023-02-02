import Link from "next/link";
import useMediaQuery from "../utils/hooks/useMediaQuery";
import {
  GitHubLogo,
  InstagramLogo,
  LinkedInLogo,
  MailLogo,
  TwitterLogo,
} from "./Icons";
import { getTime } from "../utils/GetTime";
import { calculateHourDifference } from "../utils/CalculateHourDIfference";
import Image from "next/image";
import profilePicture from "../public/images/profile/profile-picture.webp";

const Intro = () => {
  const isWindowSizeSmall = useMediaQuery("(max-width: 1075px)");

  return (
    <div>
      <div
        className={
          !isWindowSizeSmall
            ? "flex flex-row flex-wrap w-screen h-screen px-48 py-16 items-center justify-start gap-x-32 xl:justify-center xl:px-28"
            : "flex flex-col w-screen h-screen px-16 items-center justify-center gap-y-5"
        }
      >
        <div className="relative">
          <Image
            src={profilePicture}
            width={!isWindowSizeSmall ? "360" : "140"}
            height={!isWindowSizeSmall ? "360" : "140"}
            className={
              !isWindowSizeSmall
                ? "border-dashed border-8 border-blue-600 rounded-[5rem]"
                : "border-dashed rounded-[2rem] border-8 border-blue-600"
            }
            alt="profile picture"
            priority
            quality={100}
            placeholder="blur"
          />
        </div>
        <div
          className={
            !isWindowSizeSmall
              ? "flex flex-1 flex-col text-left gap-7 xl:text-center xl:justify-center xl:items-center"
              : "flex flex-col text-center items-center justify-center gap-y-7"
          }
        >
          <h1
            className={
              !isWindowSizeSmall
                ? "text-9xl font-bold text-blue-600 xl:text-6xl"
                : "text-4xl font-bold text-blue-600"
            }
          >
            Marin Heđeš
          </h1>
          <p
            className={
              !isWindowSizeSmall
                ? "text-4xl font-medium"
                : "text-2xl font-medium"
            }
          >
            Graphic/motion designer & software developer
          </p>
          <div
            className={
              !isWindowSizeSmall
                ? "flex flex-row gap-3 flex-wrap xl:justify-center xl:items-center"
                : "flex flex-col gap-3 justify-center items-center"
            }
          >
            <div
              className={
                !isWindowSizeSmall
                  ? "h-10 w-fit rounded-full flex items-center justify-center text-center dark:bg-slate-800 bg-slate-200 px-4"
                  : "h-fit w-fit rounded-full flex items-center justify-center text-center dark:bg-slate-800 bg-slate-200 px-4 py-2"
              }
            >
              <p className="text-sm">
                <span className="text-2xl align-middle mr-2">🇭🇷</span>Croatia,
                Slavonski Brod
              </p>
            </div>
            <div
              className={
                !isWindowSizeSmall
                  ? "h-10 w-fit rounded-full flex items-center justify-center text-center dark:bg-slate-800 bg-slate-200 px-4"
                  : "h-fit w-fit rounded-full flex items-center justify-center text-center dark:bg-slate-800 bg-slate-200 px-4 py-2"
              }
            >
              <p className="text-sm">
                <span className="align-middle mr-2">⏰</span>
                {getTime()}{" "}
                <span className="dark:text-slate-400 text-slate-500">
                  {calculateHourDifference()}
                </span>
              </p>
            </div>
            <Link
              href={"#hire"}
              className={
                !isWindowSizeSmall
                  ? "h-10 w-fit rounded-full flex items-center justify-center text-center hover:dark:bg-slate-800 hover:bg-slate-200 outline-4 -outline-offset-2 outline-slate-200 dark:outline-slate-800 outline px-4 cursor-pointer"
                  : "h-fit w-fit rounded-full flex items-center justify-center text-center hover:dark:bg-slate-800 hover:bg-slate-200 outline-4 -outline-offset-2 outline-slate-200 dark:outline-slate-800 outline cursor-pointer px-4 py-2"
              }
            >
              <p className="text-sm">
                <span className="align-middle mr-2">🏢</span>Let&apos;s work
                (contractor, full/part-time, OSS etc.)
              </p>
            </Link>
          </div>
          <div className="flex flex-row gap-5">
            <Link
              href={"/twitter"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to the Twitter account"
            >
              <TwitterLogo className="hover:fill-blue-400 fill-blue-600" />
            </Link>
            <Link
              href={"/github"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to the GitHub account"
            >
              <GitHubLogo className="hover:fill-blue-400 fill-blue-600" />
            </Link>
            <Link
              href={"/linkedin"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to the LinkedIn account"
            >
              <LinkedInLogo className="hover:fill-blue-400 fill-blue-600" />
            </Link>
            <Link
              href={"/instagram"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to the Instagram account"
            >
              <InstagramLogo className="hover:fill-blue-400 fill-blue-600" />
            </Link>
            <Link
              href={"mailto:hedesmarin@gmail.com"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link for sending me a mail"
            >
              <MailLogo className="hover:fill-blue-400 fill-blue-600" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
