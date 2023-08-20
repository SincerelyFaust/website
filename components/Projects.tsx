import Link from "next/link";

const Projects = () => {
  return (
    <div className="flex flex-col px-48 w-screen h-fit items-start justify-start gap-20 lg:justify-center lg:items-center lg:px-20">
      <p className="text-9xl font-bold text-blue-600 lg:text-[2.8rem]">
        👨‍💻 Projects
      </p>
      <div className="flex flex-row flex-wrap justify-between gap-10 lg:flex-col lg:justify-center lg:items-center">
        <div className="text-left flex flex-col gap-x-10 gap-y-5 w-3/12 lg:w-full lg:gap-y-3 ">
          <Link
            href="https://github.com/dahliaOS/app_store"
            className="text-3xl font-bold hover:underline lg:text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            dahliaOS App Store
          </Link>
          <div className="flex flex-row flex-wrap gap-4 lg:items-center max-w-xs">
            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
              Dart
            </p>
            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
              Flutter
            </p>
          </div>
          <p className="text-xl font-light max-w-xs">
            Curated marketplace for third-party applications on dahliaOS.
          </p>
        </div>
        <div className="text-left flex flex-col gap-x-10 gap-y-5 w-3/12 lg:w-full lg:gap-y-3 ">
          <Link
            href="https://github.com/dahliaOS/welcome"
            className="text-3xl font-bold hover:underline lg:text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            dahliaOS Welcome
          </Link>
          <div className="flex flex-row flex-wrap gap-4 lg:items-center max-w-xs">
            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
              Dart
            </p>
            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
              Flutter
            </p>
          </div>
          <p className="text-xl font-light max-w-xs">
            An application for getting started with dahliaOS.
          </p>
        </div>
        <div className="text-left flex flex-col gap-x-10 gap-y-5 w-3/12 lg:w-full lg:gap-y-3 ">
          <Link
            href="https://github.com/dahliaOS/website"
            className="text-3xl font-bold hover:underline lg:text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            dahliaOS Website
          </Link>
          <div className="flex flex-row flex-wrap gap-4 lg:items-center max-w-xs">
            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
              TypeScript
            </p>
            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
              Next.js
            </p>
            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
              Styled Components
            </p>
            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
              Emotion
            </p>
          </div>
          <p className="text-xl font-light max-w-xs">Website for dahliaOS.</p>
        </div>
        <div className="text-left flex flex-col gap-x-10 gap-y-5 w-3/12 lg:w-full lg:gap-y-3 ">
          <Link
            href="https://github.com/thehatefulsociety/thehatefulsociety"
            className="text-3xl font-bold hover:underline lg:text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Hateful Society
          </Link>
          <div className="flex flex-row flex-wrap gap-4 lg:items-center max-w-xs">
            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
              TypeScript
            </p>
            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
              Next.js
            </p>
            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
              Styled Components
            </p>
            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
              Medusa.js
            </p>
          </div>
          <p className="text-xl font-light max-w-xs">
            An upcoming hypewear brand.
          </p>
        </div>
        <div className="text-left flex flex-col gap-x-10 gap-y-5 w-3/12 lg:w-full lg:gap-y-3 ">
          <Link
            href="https://github.com/SincerelyFaust/website"
            className="text-3xl font-bold hover:underline lg:text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Personal website
          </Link>
          <div className="flex flex-row flex-wrap gap-4 lg:items-center max-w-xs">
            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
              TypeScript
            </p>
            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
              Next.js
            </p>
            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
              Tailwind
            </p>
          </div>
          <p className="text-xl font-light max-w-xs">
            The website you&apos;re reading this on.
          </p>
        </div>
        <div className="text-left flex flex-col gap-x-10 gap-y-5 w-3/12 lg:w-full lg:gap-y-3 ">
          <Link
            href="https://github.com/SincerelyFaust/fsksatellite"
            className="text-3xl font-bold hover:underline lg:text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            FSK Satellite website
          </Link>
          <div className="flex flex-row flex-wrap gap-4 lg:items-center max-w-xs">
            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
              TypeScript
            </p>
            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
              Next.js
            </p>
            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
              Tailwind
            </p>
            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
              React Three Fiber (Three.js)
            </p>
          </div>
          <p className="text-xl font-light max-w-xs">
            Website for an Italian trap group.
          </p>
        </div>
        <div className="text-left flex flex-col gap-x-10 gap-y-5 w-3/12 lg:w-full lg:gap-y-3 ">
          <Link
            href="https://github.com/SincerelyFaust/cordhook"
            className="text-3xl font-bold hover:underline lg:text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cordhook
          </Link>
          <div className="flex flex-row flex-wrap gap-4 lg:items-center max-w-xs">
            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
              TypeScript
            </p>
            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
              Next.js
            </p>
            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
              Styled Components
            </p>
            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
              Tauri
            </p>
            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
              Rust
            </p>
            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
              React + Vite
            </p>
            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
              React Native
            </p>
          </div>
          <p className="text-xl font-light max-w-xs">
            An application for sending webhooks to Discord.
          </p>
        </div>
        <div className="text-left flex flex-col gap-x-10 gap-y-5 w-3/12 lg:w-full lg:gap-y-3 ">
          <Link
            href="https://github.com/SincerelyFaust/crowdin-discord-webhook"
            className="text-3xl font-bold hover:underline lg:text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            CDW
          </Link>
          <div className="flex flex-row flex-wrap gap-4 lg:items-center max-w-xs">
            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
              TypeScript
            </p>
            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
              Cloudflare
            </p>
          </div>
          <p className="text-xl font-light max-w-xs">
            CDW is a Cloudflare worker for forwarding Crowdin events to Discord.
          </p>
        </div>
        <div className="text-left flex flex-col gap-x-10 gap-y-5 w-3/12 lg:w-full lg:gap-y-3 ">
          <Link
            href="https://github.com/faustatwork/mad-science-website"
            className="text-3xl font-bold hover:underline lg:text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mad Science website
          </Link>
          <div className="flex flex-row flex-wrap gap-4 lg:items-center max-w-xs">
            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
              TypeScript
            </p>
            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
              Next.js
            </p>
            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
              Supabase
            </p>
            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
              Tailwind
            </p>
            <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
              Radix UI
            </p>
          </div>
          <p className="text-xl font-light max-w-xs">
            A website for a crypto/forex trading group.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
