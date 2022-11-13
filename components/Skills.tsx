import useMediaQuery from "../utils/hooks/useMediaQuery";
import { siteConfig } from "../config";

const Skills = () => {
  const isWindowSizeSmall = useMediaQuery("(max-width: 1075px)");

  return (
    <div>
      {isWindowSizeSmall ? (
        <div className="flex flex-col px-20 w-screen h-fit items-center justify-center gap-20">
          <p className="text-5xl font-bold text-blue-600">💪 Skills</p>
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
      ) : (
        <div className="flex flex-col px-48 w-screen h-fit items-end justify-end gap-20">
          <p className="text-9xl font-bold text-blue-600">💪 Skills</p>
          <div className="flex flex-row-reverse flex-wrap justify-between gap-20 w-full items-start">
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
      )}
    </div>
  );
};

export default Skills;
