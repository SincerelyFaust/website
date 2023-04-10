import Link from "next/link";
import { calculateDuration } from "../utils/CalculateDuration";
import { getDate } from "../utils/GetDate";
import useMediaQuery from "../utils/hooks/useMediaQuery";

const Experience = () => {
  const isWindowSizeSmall = useMediaQuery("(max-width: 1075px)");

  return (
    <div>
      <div
        className={
          !isWindowSizeSmall
            ? "flex flex-col px-48 w-screen h-fit items-end justify-end gap-20"
            : "flex flex-col px-20 w-screen h-fit items-center justify-center gap-20"
        }
      >
        <p
          className={
            !isWindowSizeSmall
              ? "text-9xl font-bold text-blue-600"
              : "text-[2.3rem] font-bold text-blue-600"
          }
        >
          📈 Experience
        </p>
        <ol className="items-baseline flex flex-row justify-end flex-wrap gap-y-10">
          <li
            className={
              !isWindowSizeSmall
                ? "relative mb-0 w-4/12 xl:w-full"
                : "relative mb-0 w-full"
            }
          >
            <div className="flex items-center">
              <div className="flex z-10 justify-center items-center w-8 h-8 bg-blue-600 rounded-full ring-[#f3f3f3] ring-8 dark:ring-[#0c0c0c] shrink-0">
                🔴
              </div>
              <div className="flex w-full bg-gray-300 h-0.5 dark:bg-gray-600"></div>
            </div>
            <div className="mt-3 pr-8 flex flex-col gap-y-3">
              <Link
                href="https://dahliaos.io"
                className={
                  !isWindowSizeSmall
                    ? "text-3xl font-bold hover:underline"
                    : "text-2xl font-bold hover:underline"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                dahliaOS ↗
              </Link>
              <p
                className={
                  !isWindowSizeSmall
                    ? "font-light text-2xl text-gray-400"
                    : "font-light text-xl text-gray-400"
                }
              >
                {getDate("01/2020", "04/2023")} ({calculateDuration("01/2020", "04/2023")})
              </p>
              <p
                className={
                  !isWindowSizeSmall
                    ? "text-2xl font-medium"
                    : "text-xl font-medium"
                }
              >
                Founder
              </p>
              <p
                className={
                  !isWindowSizeSmall
                    ? "text-lg font-light"
                    : "text-base font-light"
                }
              >
                Joining dahliaOS through Camden Bruce, I started as a graphic
                designer designing various promotional/marketing material, user
                interfaces, logos, wallpapers and more. After a few months, I
                moved onto a more managerial role where I took on the challenge
                to spread the word about dahliaOS, improve our presence and
                expand our horizons. I overlooked almost every aspect of the
                project making sure that our work is consistent and of good
                quality, that the team is productive, communicative and
                well-guided. I helped the team get more organized by introducing
                a few tools and guidelines that helped boost our productivity
                and improve task management. On the side, I also did some
                community management, wrote and designed most of the posts,
                engaged with our community, ran ads for the project on platforms
                such as Facebook and Instagram. Software development-wise,
                worked on various applications, the desktop enviroment and our
                website.
              </p>
            </div>
          </li>
          <li
            className={
              !isWindowSizeSmall
                ? "relative mb-0 w-4/12 xl:w-full"
                : "relative mb-0 w-full"
            }
          >
            <div className="flex items-center">
              <div className="flex z-10 justify-center items-center w-8 h-8 bg-blue-600 rounded-full ring-[#f3f3f3] ring-8 dark:ring-[#0c0c0c] shrink-0">
                🔴
              </div>
              <div className="flex w-full bg-gray-300 h-0.5 dark:bg-gray-600"></div>
            </div>
            <div className="mt-3 pr-8 flex flex-col gap-y-3">
              <Link
                href="https://blisslabs.org"
                className={
                  !isWindowSizeSmall
                    ? "text-3xl font-bold hover:underline"
                    : "text-2xl font-bold hover:underline"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                BlissLabs ↗
              </Link>
              <p
                className={
                  !isWindowSizeSmall
                    ? "font-light text-2xl text-gray-400"
                    : "font-light text-xl text-gray-400"
                }
              >
                {getDate("02/2021", "06/2021")} (
                {calculateDuration("02/2021", "06/2021")})
              </p>
              <p
                className={
                  !isWindowSizeSmall
                    ? "text-2xl font-medium"
                    : "text-xl font-medium"
                }
              >
                Design Lead / PR Lead / Business Director
              </p>
              <p
                className={
                  !isWindowSizeSmall
                    ? "text-lg font-light"
                    : "text-base font-light"
                }
              >
                I was invited to join the BlissLabs non-profit organization by
                Jon West to help them progress further and get the team back on
                its feet. Aside from the BlissLabs organization, I also chose to
                work on Bliss OS, Bliss ROM and Android-Generic projects to help
                them grow, too. Shortly after I joined, I was picked for the new
                design and PR lead. I&apos;ve led BlissLabs through a rebrand
                where we changed the logo and the name from Bliss Family of ROMS
                to BlissLabs. Consulted the team leads on project sustainability
                and management. I also took part in the negotiations between
                Astian and BlissLabs regarding joining the forces in creating a
                cloud suite. Design-wise, I designed various
                promotional/marketing content. In general, helped with
                recruiting (HR), business management, PR (social media).
                Introduced them to a few tools that helped boost productivity
                and improve task management.
              </p>
            </div>
          </li>
          <li
            className={
              !isWindowSizeSmall
                ? "relative mb-0 w-4/12 xl:w-full"
                : "relative mb-0 w-full"
            }
          >
            <div className="flex items-center">
              <div className="flex z-10 justify-center items-center w-8 h-8 bg-blue-600 rounded-full ring-[#f3f3f3] ring-8 dark:ring-[#0c0c0c] shrink-0">
                🟢
              </div>
              <div className="flex w-full bg-gray-300 h-0.5 dark:bg-gray-600"></div>
            </div>
            <div className="mt-3 pr-8 flex flex-col gap-y-3">
              <Link
                href="https://gith.app"
                className={
                  !isWindowSizeSmall
                    ? "text-3xl font-bold hover:underline"
                    : "text-2xl font-bold hover:underline"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Gith.app ↗
              </Link>
              <p
                className={
                  !isWindowSizeSmall
                    ? "font-light text-2xl text-gray-400"
                    : "font-light text-xl text-gray-400"
                }
              >
                {getDate("02/2023", "")} ({calculateDuration("02/2023", "")})
              </p>
              <p
                className={
                  !isWindowSizeSmall
                    ? "text-2xl font-medium"
                    : "text-xl font-medium"
                }
              >
                Founder
              </p>
              <p
                className={
                  !isWindowSizeSmall
                    ? "text-lg font-light"
                    : "text-base font-light"
                }
              >
                Gith is a cross-platform Git GUI client I founded in February of
                2023.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Experience;
