import useMediaQuery from "../utils/hooks/useMediaQuery";

const Skills = () => {
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
              : "text-5xl font-bold text-blue-600"
          }
        >
          💪 Skills
        </p>
        <div
          className={
            !isWindowSizeSmall
              ? "flex flex-row-reverse flex-wrap justify-between gap-20 w-full items-start"
              : "flex flex-col-reverse gap-20 w-full justify-center items-center text-center"
          }
        >
          <div
            className={
              !isWindowSizeSmall
                ? "text-center flex flex-col gap-x-10 gap-y-5 justify-start items-start"
                : "text-center w-60 flex flex-col gap-2 justify-center items-start"
            }
          >
            <p
              className={
                !isWindowSizeSmall ? "text-3xl font-bold" : "text-2xl font-bold"
              }
            >
              Motion design
            </p>
            <p
              className={
                !isWindowSizeSmall
                  ? "text-2xl text-left font-light"
                  : "text-xl text-left font-light"
              }
            >
              Adobe After Effects
            </p>
            <p
              className={
                !isWindowSizeSmall
                  ? "text-2xl text-left font-light"
                  : "text-xl text-left font-light"
              }
            >
              Lottie
            </p>
          </div>
          <div
            className={
              !isWindowSizeSmall
                ? "text-center flex flex-col gap-x-10 gap-y-5 justify-start items-start"
                : "text-center w-60 flex flex-col gap-2 justify-center items-start"
            }
          >
            <p
              className={
                !isWindowSizeSmall ? "text-3xl font-bold" : "text-2xl font-bold"
              }
            >
              Tools
            </p>
            <p
              className={
                !isWindowSizeSmall
                  ? "text-2xl text-left font-light"
                  : "text-xl text-left font-light"
              }
            >
              Git
            </p>
            <p
              className={
                !isWindowSizeSmall
                  ? "text-2xl text-left font-light"
                  : "text-xl text-left font-light"
              }
            >
              Meta Business Suite
            </p>
            <p
              className={
                !isWindowSizeSmall
                  ? "text-2xl text-left font-light"
                  : "text-xl text-left font-light"
              }
            >
              CI/CD
            </p>
          </div>
          <div
            className={
              !isWindowSizeSmall
                ? "text-center flex flex-col gap-x-10 gap-y-5 justify-start items-start"
                : "text-center w-60 flex flex-col gap-2 justify-center items-start"
            }
          >
            <p
              className={
                !isWindowSizeSmall ? "text-3xl font-bold" : "text-2xl font-bold"
              }
            >
              Graphic design
            </p>
            <p
              className={
                !isWindowSizeSmall
                  ? "text-2xl text-left font-light"
                  : "text-xl text-left font-light"
              }
            >
              Adobe Photoshop
            </p>
            <p
              className={
                !isWindowSizeSmall
                  ? "text-2xl text-left font-light"
                  : "text-xl text-left font-light"
              }
            >
              Adobe Illustrator
            </p>
            <p
              className={
                !isWindowSizeSmall
                  ? "text-2xl text-left font-light"
                  : "text-xl text-left font-light"
              }
            >
              Figma
            </p>
          </div>
          <div
            className={
              !isWindowSizeSmall
                ? "text-center flex flex-col gap-x-10 gap-y-5 justify-start items-start"
                : "text-center w-60 flex flex-col gap-2 justify-center items-start"
            }
          >
            <p
              className={
                !isWindowSizeSmall ? "text-3xl font-bold" : "text-2xl font-bold"
              }
            >
              Non-languages
            </p>
            <p
              className={
                !isWindowSizeSmall
                  ? "text-2xl text-left font-light"
                  : "text-xl text-left font-light"
              }
            >
              HTML
            </p>
            <p
              className={
                !isWindowSizeSmall
                  ? "text-2xl text-left font-light"
                  : "text-xl text-left font-light"
              }
            >
              CSS
            </p>
          </div>
          <div
            className={
              !isWindowSizeSmall
                ? "text-center flex flex-col gap-x-10 gap-y-5 justify-start items-start"
                : "text-center w-60 flex flex-col gap-2 justify-center items-start"
            }
          >
            <p
              className={
                !isWindowSizeSmall ? "text-3xl font-bold" : "text-2xl font-bold"
              }
            >
              Frameworks
            </p>
            <p
              className={
                !isWindowSizeSmall
                  ? "text-2xl text-left font-light"
                  : "text-xl text-left font-light"
              }
            >
              Flutter
            </p>
            <p
              className={
                !isWindowSizeSmall
                  ? "text-2xl text-left font-light"
                  : "text-xl text-left font-light"
              }
            >
              React
            </p>
            <p
              className={
                !isWindowSizeSmall
                  ? "text-2xl text-left font-light"
                  : "text-xl text-left font-light"
              }
            >
              Next.js
            </p>
          </div>
          <div
            className={
              !isWindowSizeSmall
                ? "text-center flex flex-col gap-x-10 gap-y-5 justify-start items-start"
                : "text-center w-60 flex flex-col gap-2 justify-center items-start"
            }
          >
            <p
              className={
                !isWindowSizeSmall ? "text-3xl font-bold" : "text-2xl font-bold"
              }
            >
              Languages
            </p>
            <p
              className={
                !isWindowSizeSmall
                  ? "text-2xl text-left font-light"
                  : "text-xl text-left font-light"
              }
            >
              Dart
            </p>
            <p
              className={
                !isWindowSizeSmall
                  ? "text-2xl text-left font-light"
                  : "text-xl text-left font-light"
              }
            >
              TypeScript
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
