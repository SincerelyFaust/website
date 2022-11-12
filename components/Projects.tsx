import { siteConfig } from "../config";
import Link from "next/link";
import useMediaQuery from "../utils/hooks/useMediaQuery";

const Projects = () => {
  const isWindowSizeSmall = useMediaQuery("(max-width: 1075px)");

  return (
    <div>
      {isWindowSizeSmall ? (
        <div className="flex flex-col px-20 w-screen h-fit items-center justify-center gap-20">
          <h1 className="text-[2.8rem] font-bold text-blue-600">👨‍💻 Projects</h1>
          <div className="flex flex-col gap-10">
            {siteConfig.projects.map(allProjects => {
              return (
                <>
                  <div className="text-left flex flex-col gap-y-3">
                    <Link
                      href={allProjects.link}
                      className="text-2xl font-bold hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {allProjects.name} ↗
                    </Link>
                    <div className="flex flex-row flex-wrap gap-4">
                      {allProjects.technologies.map(allTechnologies => {
                        return (
                          <>
                            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
                              {allTechnologies}
                            </p>
                          </>
                        );
                      })}
                    </div>
                    <p className="text-xl font-light">
                      {allProjects.description}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex flex-col px-48 w-screen h-fit items-start justify-start gap-20">
          <h1 className="text-9xl font-bold text-blue-600">👨‍💻 Projects</h1>
          <div className="flex flex-row flex-wrap justify-between gap-10 w-full">
            {siteConfig.projects.map(allProjects => {
              return (
                <>
                  <div className="text-left flex flex-col gap-x-10 gap-y-5 w-96">
                    <Link
                      href={allProjects.link}
                      className="text-3xl font-bold hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {allProjects.name} ↗
                    </Link>
                    <div className="flex flex-row flex-wrap gap-4">
                      {allProjects.technologies.map(allTechnologies => {
                        return (
                          <>
                            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
                              {allTechnologies}
                            </p>
                          </>
                        );
                      })}
                    </div>
                    <p className="text-xl font-light">
                      {allProjects.description}
                    </p>
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

export default Projects;
