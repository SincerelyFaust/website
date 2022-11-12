import Link from "next/link";
import { siteConfig } from "../config";
import ThemeSwitch from "./ThemeSwitch";

const Footer = () => {
  return (
    <div className="flex flex-row flex-wrap w-screen h-fit justify-between items-baseline px-40 gap-10 mb-40 lg:px-24">
      {siteConfig.footer.map(categories => {
        return (
          <div className="flex flex-col gap-2" key={"footerDivKey"}>
            <p className="text-2xl">{categories.category}</p>
            {categories.links.map(allLinks => {
              return (
                <Link href={allLinks.url} key={"footerLinkKey"}>
                  <a
                    className="text-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                    target="_blank"
                  >
                    {allLinks.name}
                  </a>
                </Link>
              );
            })}
          </div>
        );
      })}
      <ThemeSwitch />
    </div>
  );
};

export default Footer;
