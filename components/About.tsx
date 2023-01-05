import { calculateAge } from "../utils/CalculateAge";
import useMediaQuery from "../utils/hooks/useMediaQuery";
import NowPlaying from "./SpotifyNowPlaying";
import Tracks from "./SpotifyTopTracks";
import React, { useState } from "react";

const About = () => {
  const isWindowSizeSmall = useMediaQuery("(max-width: 1075px)");
  const [isNowPlayingHovered, setIsNowPlayingHovered] = useState(false);
  const [isTopTracksHovered, setIsTopTracksHovered] = useState(false);

  return (
    <div>
      <div
        className={
          !isWindowSizeSmall
            ? "flex flex-col px-48 w-screen h-fit items-start justify-start gap-10"
            : "flex flex-col px-20 w-screen h-fit items-center justify-center gap-10"
        }
      >
        <p
          className={
            !isWindowSizeSmall
              ? "text-9xl font-bold text-blue-600"
              : "text-5xl font-bold text-blue-600"
          }
        >
          🤷‍♂️ About
        </p>
        <div className="flex flex-row flex-wrap gap-5">
          <div
            className={
              !isWindowSizeSmall
                ? "h-10 w-fit rounded-full flex items-center justify-center text-center gap-2 dark:bg-slate-800 bg-slate-200 px-4"
                : "h-fit w-fit rounded-full flex items-center justify-center flex-row text-center gap-x-2 dark:bg-slate-800 bg-slate-200 px-4 py-2"
            }
          >
            <p className="text-sm">⏳</p>
            <p className="text-sm">Age:</p>
            <div
              className={
                !isWindowSizeSmall
                  ? "w-fit h-fit bg-slate-300 dark:bg-slate-600 px-2 py-0.5 rounded-full"
                  : "w-fit h-fit flex items-center bg-slate-300 dark:bg-slate-600 px-2 py-1 rounded-full"
              }
            >
              <p className={!isWindowSizeSmall ? "text-sm" : "text-xs"}>
                {calculateAge("23/02/2001")}
              </p>
            </div>
          </div>
          <div
            className={
              !isWindowSizeSmall
                ? "h-10 w-fit rounded-full flex items-center justify-center text-center gap-2 dark:bg-slate-800 bg-slate-200 px-4"
                : "h-fit w-fit rounded-full flex items-center justify-center flex-row flex-wrap text-center gap-x-2 gap-y-3 dark:bg-slate-800 bg-slate-200 px-4 py-2"
            }
          >
            <p className="text-sm">🎶</p>
            <p className="text-sm">Fav music genres:</p>
            <div
              className={
                !isWindowSizeSmall
                  ? "w-fit h-fit bg-slate-300 dark:bg-slate-600 px-2 py-0.5 rounded-full"
                  : "w-fit h-fit flex items-center bg-slate-300 dark:bg-slate-600 px-2 py-1 rounded-full"
              }
            >
              <p className={!isWindowSizeSmall ? "text-sm" : "text-xs"}>Rap</p>
            </div>
            <div
              className={
                !isWindowSizeSmall
                  ? "w-fit h-fit bg-slate-300 dark:bg-slate-600 px-2 py-0.5 rounded-full"
                  : "w-fit h-fit flex items-center bg-slate-300 dark:bg-slate-600 px-2 py-1 rounded-full"
              }
            >
              <p className={!isWindowSizeSmall ? "text-sm" : "text-xs"}>Trap</p>
            </div>
            <div
              className={
                !isWindowSizeSmall
                  ? "w-fit h-fit bg-slate-300 dark:bg-slate-600 px-2 py-0.5 rounded-full"
                  : "w-fit h-fit flex items-center bg-slate-300 dark:bg-slate-600 px-2 py-1 rounded-full"
              }
            >
              <p className={!isWindowSizeSmall ? "text-sm" : "text-xs"}>EDM</p>
            </div>
            <div
              className={
                !isWindowSizeSmall
                  ? "w-fit h-fit bg-slate-300 dark:bg-slate-600 px-2 py-0.5 rounded-full"
                  : "w-fit h-fit flex items-center bg-slate-300 dark:bg-slate-600 px-2 py-1 rounded-full"
              }
            >
              <p className={!isWindowSizeSmall ? "text-sm" : "text-xs"}>
                Turbofolk
              </p>
            </div>
            <div
              className={
                !isWindowSizeSmall
                  ? "w-fit h-fit bg-slate-300 dark:bg-slate-600 px-2 py-0.5 rounded-full"
                  : "w-fit h-fit flex items-center bg-slate-300 dark:bg-slate-600 px-2 py-1 rounded-full"
              }
            >
              <p className={!isWindowSizeSmall ? "text-sm" : "text-xs"}>Pop</p>
            </div>
          </div>
          <div
            className={
              !isWindowSizeSmall
                ? "h-10 w-fit rounded-full flex items-center justify-center text-center gap-2 dark:bg-slate-800 bg-slate-200 px-4"
                : "h-fit w-fit rounded-full flex items-center justify-center flex-row flex-wrap text-center gap-x-2 gap-y-3 dark:bg-slate-800 bg-slate-200 px-4 py-2"
            }
          >
            <p className="text-sm">🍿</p>
            <p className="text-sm">Fav film genres:</p>
            <div
              className={
                !isWindowSizeSmall
                  ? "w-fit h-fit bg-slate-300 dark:bg-slate-600 px-2 py-0.5 rounded-full"
                  : "w-fit h-fit flex items-center bg-slate-300 dark:bg-slate-600 px-2 py-1 rounded-full"
              }
            >
              <p className={!isWindowSizeSmall ? "text-sm" : "text-xs"}>
                Psychological thriller
              </p>
            </div>
            <div
              className={
                !isWindowSizeSmall
                  ? "w-fit h-fit bg-slate-300 dark:bg-slate-600 px-2 py-0.5 rounded-full"
                  : "w-fit h-fit flex items-center bg-slate-300 dark:bg-slate-600 px-2 py-1 rounded-full"
              }
            >
              <p className={!isWindowSizeSmall ? "text-sm" : "text-xs"}>
                Horror
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-5">
          <div
            className="h-10 w-fit rounded-full flex items-center justify-center text-center gap-2 dark:bg-slate-800 bg-slate-200 px-4 cursor-pointer hover:bg-green-500 hover:dark:bg-green-500 dark:text-[#1ED760] text-[#1aa54b] hover:text-white dark:hover:text-white"
            onMouseEnter={() => setIsNowPlayingHovered(true)}
            onMouseLeave={() => setIsNowPlayingHovered(false)}
          >
            <svg className="h-6 w-6" viewBox="0 0 168 168">
              <path
                fill="currentColor"
                d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
              />
            </svg>
            <p className="text-sm">Now playing</p>
          </div>
          <div
            className="h-10 w-fit rounded-full flex items-center justify-center text-center gap-2 dark:bg-slate-800 bg-slate-200 px-4 cursor-pointer hover:bg-green-500 hover:dark:bg-green-500 dark:text-[#1ED760] text-[#1aa54b] hover:text-white dark:hover:text-white"
            onMouseEnter={() => setIsTopTracksHovered(true)}
            onMouseLeave={() => setIsTopTracksHovered(false)}
          >
            <svg className="h-6 w-6" viewBox="0 0 168 168">
              <path
                fill="currentColor"
                d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
              />
            </svg>
            <p className="text-sm">Top tracks</p>
          </div>
        </div>
        {isTopTracksHovered ? <Tracks /> : null}
        {isNowPlayingHovered ? <NowPlaying /> : null}
        <p
          className={
            !isWindowSizeSmall ? "text-2xl font-light" : "font-light text-sg"
          }
        >
          My name is Marin Heđeš, I&apos;m a {calculateAge("23/02/2001")} year
          old self-taught graphic/motion designer and a developer based in 🇭🇷
          Slavonski Brod, Croatia. I love learning and gathering new experiences
          which is what drives me to try something new every once in a while.
          Hate studying. Can&apos;t live without music. Aged 15, decided to skip
          on college and teach myself design and programming. Got into open
          source back in 2020, started learning new skills and getting
          experience in various fields while building projects with great people
          and now I&apos;m looking forward to where it&apos;ll take me next. I
          specialize in graphic/motion design (branding, UI/UX, web design,
          photoshop, promo), building brands, marketing/advertising,
          project/product/community management, public relations,
          desktop/mobile/web app development and web development.
        </p>
      </div>
    </div>
  );
};

export default About;
