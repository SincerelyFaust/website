import Link from "next/link";
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
  return (
    <div className="flex flex-row w-screen h-screen px-48 py-16 items-center justify-start gap-x-32 lg:flex-col lg:px-16 lg:gap-y-5 xl:justify-center xl:px-28">
      <Image
        src={profilePicture}
        className="border-dashed border-8 border-blue-600 rounded-[5rem] lg:rounded-4xl max-w-85 lg:max-w-35"
        alt="profile picture"
        priority
        quality={100}
        placeholder="blur"
      />
      <div className="flex flex-col text-left gap-5 xl:text-center xl:justify-center xl:items-center">
        <h1 className="text-8xl font-bold text-blue-600 lg:text-4xl">
          Marin Heđeš
        </h1>
        <h2 className="text-4xl font-medium lg:text-xl">
          Graphic/motion designer & software developer
        </h2>
        <div className="flex flex-row gap-3 flex-wrap lg:flex-col xl:justify-center xl:items-center">
          <div className="h-10 w-fit rounded-full flex items-center justify-center text-center dark:bg-slate-800 bg-slate-200 px-4 lg:h-fit lg:w-fit lg:py-2">
            <p className="text-sm sm:text-xs">
              <span className="text-2xl align-middle mr-2">🇭🇷</span>Croatia,
              Slavonski Brod
            </p>
          </div>
          <div className="h-10 w-fit rounded-full flex items-center justify-center text-center dark:bg-slate-800 bg-slate-200 px-4 lg:h-fit lg:w-fit lg:py-2">
            <p className="text-sm sm:text-xs">
              <span className="align-middle mr-2">⏰</span>
              {getTime()}{" "}
              <span className="dark:text-slate-400 text-slate-500">
                {calculateHourDifference()}
              </span>
            </p>
          </div>
          <Link
            href={"#letswork"}
            className="h-10 w-fit rounded-full flex items-center justify-center text-center hover:dark:bg-slate-800 hover:bg-slate-200 border-4 border-solid border-slate-200 dark:border-slate-800 px-4 cursor-pointer lg:h-fit lg:w-fit lg:py-2"
          >
            <p className="text-sm sm:text-xs">
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
  );
};

export default Intro;
