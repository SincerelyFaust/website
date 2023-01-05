import Link from "next/link";
import useMediaQuery from "../utils/hooks/useMediaQuery";

const Projects = () => {
  const isWindowSizeSmall = useMediaQuery("(max-width: 1075px)");

  return (
    <div>
      <div
        className={
          !isWindowSizeSmall
            ? "flex flex-col px-48 w-screen h-fit items-start justify-start gap-20"
            : "flex flex-col px-20 w-screen h-fit items-center justify-center gap-20"
        }
      >
        <p
          className={
            !isWindowSizeSmall
              ? "text-9xl font-bold text-blue-600"
              : "text-[2.8rem] font-bold text-blue-600"
          }
        >
          👨‍💻 Projects
        </p>
        <div
          className={
            !isWindowSizeSmall
              ? "flex flex-row flex-wrap justify-between gap-10 w-full"
              : "flex flex-col gap-10"
          }
        >
          <div
            className={
              !isWindowSizeSmall
                ? "text-left flex flex-col gap-x-10 gap-y-5 w-96"
                : "text-left flex flex-col  gap-y-3"
            }
          >
            <Link
              href="https://github.com/dahliaOS/app_store"
              className={
                !isWindowSizeSmall
                  ? "text-3xl font-bold hover:underline"
                  : "text-2xl font-bold hover:underline"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              dahliaOS App Store ↗
            </Link>
            <div className="flex flex-row flex-wrap gap-4">
              <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
                Dart
              </p>
              <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
                Flutter
              </p>
            </div>
            <p className="text-xl font-light">
              Curated marketplace for third-party applications on dahliaOS.
            </p>
          </div>
          <div
            className={
              !isWindowSizeSmall
                ? "text-left flex flex-col gap-x-10 gap-y-5 w-96"
                : "text-left flex flex-col gap-y-3"
            }
          >
            <Link
              href="https://github.com/dahliaOS/welcome"
              className={
                !isWindowSizeSmall
                  ? "text-3xl font-bold hover:underline"
                  : "text-2xl font-bold hover:underline"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              dahliaOS Welcome ↗
            </Link>
            <div className="flex flex-row flex-wrap gap-4">
              <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
                Dart
              </p>
              <p className="px-3 py-1 text-center bg-blue-600 font-normal text-white text-xs rounded-xl">
                Flutter
              </p>
            </div>
            <p className="text-xl font-light">
              An application for getting started with dahliaOS.
            </p>
          </div>
          <div
            className={
              !isWindowSizeSmall
                ? "text-left flex flex-col gap-x-10 gap-y-5 w-96"
                : "text-left flex flex-col gap-y-3"
            }
          >
            <Link
              href="https://github.com/dahliaOS/website"
              className={
                !isWindowSizeSmall
                  ? "text-3xl font-bold hover:underline"
                  : "text-2xl font-bold hover:underline"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              dahliaOS Website ↗
            </Link>
            <div className="flex flex-row flex-wrap gap-4">
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
            <p className="text-xl font-light">Website for dahliaOS.</p>
          </div>
          <div
            className={
              !isWindowSizeSmall
                ? "text-left flex flex-col gap-x-10 gap-y-5 w-96"
                : "text-left flex flex-col gap-y-3"
            }
          >
            <Link
              href="https://github.com/thehatefulsociety/thehatefulsociety"
              className={
                !isWindowSizeSmall
                  ? "text-3xl font-bold hover:underline"
                  : "text-2xl font-bold hover:underline"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              The Hateful Society ↗
            </Link>
            <div className="flex flex-row flex-wrap gap-4">
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
            <p className="text-xl font-light">An upcoming hypewear brand.</p>
          </div>
          <div
            className={
              !isWindowSizeSmall
                ? "text-left flex flex-col gap-x-10 gap-y-5 w-96"
                : "text-left flex flex-col gap-y-3"
            }
          >
            <Link
              href="https://github.com/SincerelyFaust/website"
              className={
                !isWindowSizeSmall
                  ? "text-3xl font-bold hover:underline"
                  : "text-2xl font-bold hover:underline"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Personal website ↗
            </Link>
            <div className="flex flex-row flex-wrap gap-4">
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
            <p className="text-xl font-light">
              The website you&apos;re reading this on.
            </p>
          </div>
          <div
            className={
              !isWindowSizeSmall
                ? "text-left flex flex-col gap-x-10 gap-y-5 w-96"
                : "text-left flex flex-col gap-y-3"
            }
          >
            <Link
              href="https://github.com/SincerelyFaust/fsksatellite"
              className={
                !isWindowSizeSmall
                  ? "text-3xl font-bold hover:underline"
                  : "text-2xl font-bold hover:underline"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              FSK Satellite website ↗
            </Link>
            <div className="flex flex-row flex-wrap gap-4">
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
            <p className="text-xl font-light">
              Website for an Italian trap group.
            </p>
          </div>
          <div
            className={
              !isWindowSizeSmall
                ? "text-left flex flex-col gap-x-10 gap-y-5 w-96"
                : "text-left flex flex-col gap-y-3"
            }
          >
            <Link
              href="https://github.com/SincerelyFaust/cordhook"
              className={
                !isWindowSizeSmall
                  ? "text-3xl font-bold hover:underline"
                  : "text-2xl font-bold hover:underline"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Cordhook ↗
            </Link>
            <div className="flex flex-row flex-wrap gap-4">
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
            <p className="text-xl font-light">
              An application for sending webhooks to Discord.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
