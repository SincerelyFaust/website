import { calculateAge } from "../utils/CalculateAge";
import useMediaQuery from "../utils/hooks/useMediaQuery";

const About = () => {
  const isWindowSizeSmall = useMediaQuery("(max-width: 1075px)");
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
            <div
              className={
                !isWindowSizeSmall
                  ? "w-fit h-fit bg-slate-300 dark:bg-slate-600 px-2 py-0.5 rounded-full"
                  : "w-fit h-fit flex items-center bg-slate-300 dark:bg-slate-600 px-2 py-1 rounded-full"
              }
            >
              <p className={!isWindowSizeSmall ? "text-sm" : "text-xs"}>
                Neo-western
              </p>
            </div>
          </div>
        </div>
        <p
          className={
            !isWindowSizeSmall ? "text-2xl font-light" : "font-light text-sg"
          }
        >
          My name is Marin Heđeš, I&apos;m a {calculateAge("23/02/2001")} year
          old self-taught graphic designer and a developer based in 🇭🇷
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
