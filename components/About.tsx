import { useEffect, useState } from "react";
import { siteConfig } from "../config";

const About = () => {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  return (
    <div>
      {windowSize >= 1075 ? (
        <div className="flex flex-col px-48 w-screen h-fit items-start justify-start md:justify-center md:items-center gap-10 lg:px-20">
          <h1 className="text-9xl font-bold text-blue-600 md:text-6xl">
            🤷‍♂️ About
          </h1>
          {siteConfig.infoChips.length > 0 ? (
            <div className="flex flex-row flex-wrap gap-5">
              {siteConfig.infoChips.map(allInformationChips => {
                return (
                  <div
                    className="h-10 w-fit rounded-full flex items-center justify-center text-center gap-1 dark:bg-slate-800 bg-slate-200 px-4"
                    key={"infoChipsDivKey"}
                  >
                    <p className="text-sm">{allInformationChips.name}:</p>{" "}
                    {allInformationChips.description.map(allItems => {
                      return (
                        <>
                          <div className="w-fit h-fit bg-slate-300 dark:bg-slate-600 px-2 py-0.5 rounded-full">
                            <p className="text-sm">{allItems}</p>
                          </div>
                        </>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="mt-10"></div>
          )}
          <p className="text-2xl font-light md:text-xl">
            {siteConfig.longDescription}
          </p>
        </div>
      ) : (
        <div className="flex flex-col px-20 w-screen h-fit items-center justify-center gap-10">
          <h1 className="text-5xl font-bold text-blue-600">🤷‍♂️ About</h1>
          {siteConfig.infoChips.length > 0 ? (
            <div className="flex flex-row flex-wrap gap-5">
              {siteConfig.infoChips.map(allInformationChips => {
                return (
                  <div
                    className="h-fit w-fit rounded-full flex items-center justify-center flex-row flex-wrap text-center gap-x-1 gap-y-2 dark:bg-slate-800 bg-slate-200 px-4 py-2"
                    key={"infoChipsDivKey"}
                  >
                    <p className="text-sm">{allInformationChips.name}:</p>{" "}
                    {allInformationChips.description.map(allItems => {
                      return (
                        <>
                          <div className="w-fit h-fit flex items-center bg-slate-600 px-2 py-1 rounded-full">
                            <p className="text-xs">{allItems}</p>
                          </div>
                        </>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="mt-10"></div>
          )}
          <p className="font-light text-sg">{siteConfig.longDescription}</p>
        </div>
      )}
    </div>
  );
};

export default About;
