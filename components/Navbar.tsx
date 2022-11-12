import { Variants, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import useMediaQuery from "../utils/hooks/useMediaQuery";
import { HamburgerMenu } from "./Icons";

const navbarVariant: Variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 40, duration: 1 },
  },
  hidden: { y: -500, opacity: 0 },
};

const openedVariant: Variants = {
  visible: {
    opacity: 1,
    transition: { type: "spring", stiffness: 40, duration: 1 },
  },
  hidden: {
    opacity: 0,
  },
};

const Navbar = () => {
  const isWindowSizeSmall = useMediaQuery("(max-width: 1025px)");
  const [isClicked, setClicked] = useState(false);

  return (
    <div>
      {isWindowSizeSmall ? (
        <motion.nav
          className="flex w-full h-fit justify-start items-start"
          variants={navbarVariant}
          initial="hidden"
          animate="visible"
        >
          <button
            type="button"
            onClick={() => setClicked(!isClicked)}
            className="z-10 m-8 absolute text-black dark:text-white"
          >
            <HamburgerMenu width={50} height={50} />
          </button>
          {isClicked ? (
            <motion.div
              className="h-4/6 w-10/12 bg-blue-600 absolute z-0 flex flex-col rounded-xl justify-center items-center gap-20 text-white ml-4 mt-4 text-2xl"
              variants={openedVariant}
              initial="hidden"
              animate="visible"
            >
              <Link
                href="#about"
                className="dark:hover:text-blue-300 hover:text-blue-500 hover:outline-dashed hover:outline-4 hover:outline-offset-8 hover:rounded-sm"
              >
                🤷‍♂️ About
              </Link>
              <Link
                href="#skills"
                className="dark:hover:text-blue-300 hover:text-blue-500 hover:outline-dashed hover:outline-4 hover:outline-offset-8 hover:rounded-sm"
              >
                💪 Skills
              </Link>
              <Link
                href="#projects"
                className="dark:hover:text-blue-300 hover:text-blue-500 hover:outline-dashed hover:outline-4 hover:outline-offset-8 hover:rounded-sm"
              >
                👨‍💻 Projects
              </Link>
              <Link
                href="#experience"
                className="dark:hover:text-blue-300 hover:text-blue-500 hover:outline-dashed hover:outline-4 hover:outline-offset-8 hover:rounded-sm"
              >
                📈 Experience
              </Link>
            </motion.div>
          ) : null}
        </motion.nav>
      ) : (
        <motion.nav
          className="flex flex-row flex-wrap w-full h-fit py-14 px-16 justify-center items-center text-blue-600 gap-x-28 gap-y-10 text-xl font-semibold absolute bg-transparent"
          variants={navbarVariant}
          initial="hidden"
          animate="visible"
        >
          <Link
            href="#about"
            className="dark:hover:text-blue-300 hover:text-blue-500 hover:outline-dashed hover:outline-4 hover:outline-offset-8 hover:rounded-sm"
          >
            🤷‍♂️ About
          </Link>
          <Link
            href="#skills"
            className="dark:hover:text-blue-300 hover:text-blue-500 hover:outline-dashed hover:outline-4 hover:outline-offset-8 hover:rounded-sm"
          >
            💪 Skills
          </Link>
          <Link
            href="#projects"
            className="dark:hover:text-blue-300 hover:text-blue-500 hover:outline-dashed hover:outline-4 hover:outline-offset-8 hover:rounded-sm"
          >
            👨‍💻 Projects
          </Link>
          <Link
            href="#experience"
            className="dark:hover:text-blue-300 hover:text-blue-500 hover:outline-dashed hover:outline-4 hover:outline-offset-8 hover:rounded-sm"
          >
            📈 Experience
          </Link>
        </motion.nav>
      )}
    </div>
  );
};

export default Navbar;
