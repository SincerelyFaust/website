import { useEffect, useState } from "react";
import { siteConfig } from "../config";

const Skills = () => {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  return (
    <div>
      {windowSize >= 1075 ? (
        <div className="flex flex-col px-48 w-screen h-fit items-end justify-end gap-20 md:items-center lg:px-20 md:justify-center">
          <h1 className="text-9xl font-bold text-blue-600 md:text-6xl">
            💪 Skills
          </h1>
          <div className="flex flex-row-reverse flex-wrap justify-between gap-20 w-full items-start md:gap-10 md:flex-col md:items-center md:justify-center">
            {siteConfig.skills.map(allSkills => {
              return (
                <>
                  <div className="text-center flex flex-col gap-x-10 gap-y-5 justify-start items-start">
                    <>
                      <p className="text-3xl font-bold">{allSkills.name}</p>
                      {allSkills.description.map(allItems => {
                        return (
                          <>
                            <p className="text-2xl text-left font-light">
                              {allItems}
                            </p>
                          </>
                        );
                      })}
                    </>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex flex-col px-20 w-screen h-fit items-center justify-center gap-20">
          <h1 className="text-5xl font-bold text-blue-600">💪 Skills</h1>
          <div className="flex flex-col-reverse gap-20 w-full justify-center items-center text-center">
            {siteConfig.skills.map(allSkills => {
              return (
                <>
                  <div className="text-center w-60 flex flex-col gap-2 justify-center items-start">
                    <>
                      <p className="text-2xl font-bold">{allSkills.name}</p>
                      {allSkills.description.map(allItems => {
                        return (
                          <>
                            <p className="text-xl text-left font-light">
                              {allItems}
                            </p>
                          </>
                        );
                      })}
                    </>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
