import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const Footer = () => {
  return (
    <div className="flex flex-row flex-wrap w-screen h-fit justify-between items-start px-40 gap-10 mb-40 lg:px-24">
      <div className="flex flex-col gap-2">
        <p className="text-2xl">💬 Get in touch</p>
        <Link
          href="/instagram"
          className="text-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          target="_blank"
        >
          Instagram
        </Link>
        <Link
          href="/twitter"
          className="text-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          target="_blank"
        >
          Twitter
        </Link>
        <Link
          href="/linkedin"
          className="text-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          target="_blank"
        >
          LinkedIn
        </Link>
        <Link
          href="/github"
          className="text-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          target="_blank"
        >
          GitHub
        </Link>
      </div>
      <ThemeSwitch />
    </div>
  );
};

export default Footer;
