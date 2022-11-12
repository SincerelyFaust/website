import Link from "next/link";
import { siteConfig } from "../config";
import { calculateDuration } from "../utils/CalculateDuration";
import { getDate } from "../utils/GetDate";
import { useEffect, useState } from "react";

const Experience = () => {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  return (
    <div>
      {windowSize >= 1075 ? (
        <div className="flex flex-col px-48 w-screen h-fit items-end justify-end gap-20 md:items-center lg:px-20 md:justify-center">
          <h1 className="text-9xl font-bold text-blue-600 md:text-6xl">
            📈 Experience
          </h1>
          <ol
            className="items-baseline flex flex-row justify-end flex-wrap gap-y-10"
            key="{ExperienceListKey}"
          >
            {siteConfig.experience.map(allCompanies => {
              return (
                <>
                  <li
                    className="relative mb-0 w-4/12 xl:w-full"
                    key="{ExperienceListItemKey}"
                  >
                    <div className="flex items-center">
                      <div className="flex z-10 justify-center items-center w-8 h-8 bg-blue-600 rounded-full ring-[#f3f3f3] ring-8 dark:ring-[#0c0c0c] shrink-0">
                        {allCompanies.duration.end.length > 0 ? "🔴" : "🟢"}
                      </div>
                      <div className="flex w-full bg-gray-300 h-0.5 dark:bg-gray-600"></div>
                    </div>
                    <div className="mt-3 pr-8 flex flex-col gap-y-3">
                      <Link href={allCompanies.link} passHref>
                        <a
                          className="text-3xl font-bold hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {allCompanies.name} ↗
                        </a>
                      </Link>
                      <p className="font-light text-2xl text-gray-400">
                        {getDate(
                          `${allCompanies.duration.start}`,
                          `${allCompanies.duration.end}`,
                        )}{" "}
                        (
                        {calculateDuration(
                          `${allCompanies.duration.start}`,
                          `${allCompanies.duration.end}`,
                        )}
                        )
                      </p>
                      <p className="text-2xl font-medium">
                        {allCompanies.position}
                      </p>
                      <p className="text-lg font-light">
                        {allCompanies.description}
                      </p>
                    </div>
                  </li>
                </>
              );
            })}
          </ol>
        </div>
      ) : (
        <div className="flex flex-col px-20 w-screen h-fit items-center justify-center gap-20">
          <h1 className="text-[2.3rem] font-bold text-blue-600">
            📈 Experience
          </h1>
          <ol
            className="items-baseline flex flex-row justify-end flex-wrap gap-y-10"
            key="{ExperienceListKey}"
          >
            {siteConfig.experience.map(allCompanies => {
              return (
                <>
                  <li
                    className="relative mb-0 w-full"
                    key="{ExperienceListItemKey}"
                  >
                    <div className="flex items-center">
                      <div className="flex z-10 justify-center items-center w-8 h-8 bg-blue-600 rounded-full ring-[#f3f3f3] ring-8 dark:ring-[#0c0c0c] shrink-0">
                        {allCompanies.duration.end.length > 0 ? "🔴" : "🟢"}
                      </div>
                      <div className="flex w-full bg-gray-300 h-0.5 dark:bg-gray-600"></div>
                    </div>
                    <div className="mt-3 pr-8 flex flex-col gap-y-3">
                      <Link href={allCompanies.link} passHref>
                        <a
                          className="text-2xl font-bold hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {allCompanies.name} ↗
                        </a>
                      </Link>
                      <p className="font-light text-xl text-gray-400">
                        {getDate(
                          `${allCompanies.duration.start}`,
                          `${allCompanies.duration.end}`,
                        )}{" "}
                        (
                        {calculateDuration(
                          `${allCompanies.duration.start}`,
                          `${allCompanies.duration.end}`,
                        )}
                        )
                      </p>
                      <p className="text-xl font-medium">
                        {allCompanies.position}
                      </p>
                      <p className="text-md font-light">
                        {allCompanies.description}
                      </p>
                    </div>
                  </li>
                </>
              );
            })}
          </ol>
        </div>
      )}
    </div>
  );
};

export default Experience;
