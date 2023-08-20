import { calculateAge } from "../utils/CalculateAge";

const About = () => {
  return (
    <div className="flex flex-col px-48 w-screen h-fit items-start justify-start gap-20 lg:justify-center lg:items-center lg:px-20 sm:mt-40">
      <p className="text-9xl font-bold text-blue-600 lg:text-5xl">🤷‍♂️ About</p>
      <div className="flex flex-col gap-10">
        <div className="flex flex-row flex-wrap gap-5">
          <div className="h-10 w-fit rounded-full flex items-center justify-center text-center gap-2 dark:bg-slate-800 bg-slate-200 px-4 lg:h-fit lg:w-fit lg:flex-row lg:gap-x-2 lg:py-2">
            <p className="text-sm">⏳</p>
            <p className="text-sm">Age:</p>
            <div className="w-fit h-fit bg-slate-300 dark:bg-slate-600 px-2 py-0.5 rounded-full lg:py-1">
              <p className="text-sm lg:text-xs">{calculateAge("23/02/2001")}</p>
            </div>
          </div>
          <div className="h-10 w-fit rounded-full flex items-center justify-center text-center gap-2 dark:bg-slate-800 bg-slate-200 px-4 lg:h-fit lg:w-fit lg:flex-row lg:flex-wrap lg:gap-x-2 lg:gap-y-3 lg:py-2">
            <p className="text-sm">🎶</p>
            <p className="text-sm">Fav music genres:</p>
            <div className="w-fit h-fit bg-slate-300 dark:bg-slate-600 px-2 py-0.5 rounded-full lg:py-1">
              <p className="text-sm lg:text-xs">Rap</p>
            </div>
            <div className="w-fit h-fit bg-slate-300 dark:bg-slate-600 px-2 py-0.5 rounded-full lg:py-1">
              <p className="text-sm lg:text-xs">Trap</p>
            </div>
            <div className="w-fit h-fit bg-slate-300 dark:bg-slate-600 px-2 py-0.5 rounded-full lg:py-1">
              <p className="text-sm lg:text-xs">EDM</p>
            </div>
            <div className="w-fit h-fit bg-slate-300 dark:bg-slate-600 px-2 py-0.5 rounded-full lg:py-1">
              <p className="text-sm lg:text-xs">Turbofolk</p>
            </div>
            <div className="w-fit h-fit bg-slate-300 dark:bg-slate-600 px-2 py-0.5 rounded-full lg:py-1">
              <p className="text-sm lg:text-xs">Pop</p>
            </div>
          </div>
          <div className="h-10 w-fit rounded-full flex items-center justify-center text-center gap-2 dark:bg-slate-800 bg-slate-200 px-4 lg:h-fit lg:w-fit lg:flex-row lg:flex-wrap lg:gap-x-2 lg:gap-y-3 lg:py-2">
            <p className="text-sm">🍿</p>
            <p className="text-sm">Fav film genres:</p>
            <div className="w-fit h-fit bg-slate-300 dark:bg-slate-600 px-2 py-0.5 rounded-full lg:py-1">
              <p className="text-sm lg:text-xs">Psychological thriller</p>
            </div>
            <div className="w-fit h-fit bg-slate-300 dark:bg-slate-600 px-2 py-0.5 rounded-full lg:py-1">
              <p className="text-sm lg:text-xs">Horror</p>
            </div>
            <div className="w-fit h-fit bg-slate-300 dark:bg-slate-600 px-2 py-0.5 rounded-full lg:py-1">
              <p className="text-sm lg:text-xs">Neo-western</p>
            </div>
          </div>
        </div>
        <p className="text-2xl font-light lg:text-lg">
          My name is Marin Heđeš, I&apos;m a {calculateAge("23/02/2001")} year
          old self-taught graphic designer and a developer based in 🇭🇷 Slavonski
          Brod, Croatia. I love learning and gathering new experiences which is
          what drives me to try something new every once in a while. Hate
          studying. Can&apos;t live without music. Aged 15, decided to skip on
          college and teach myself design and programming. Got into open source
          back in 2020, started learning new skills and getting experience in
          various fields while building projects with great people and now
          I&apos;m looking forward to where it&apos;ll take me next. I
          specialize in graphic design (branding, UI/UX, web design, photoshop,
          promo), building brands, marketing/advertising, project/product
          management, public relations, desktop/mobile/web app development and
          web development.
        </p>
      </div>
    </div>
  );
};

export default About;
