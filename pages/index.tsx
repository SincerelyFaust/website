import { Variants, motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { siteConfig } from "../config";
import useMediaQuery from "../utils/hooks/useMediaQuery";

const variantRight: Variants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 40, duration: 1 },
  },
  hidden: { x: -1000, opacity: 0 },
};

const variantLeft: Variants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 40, duration: 1 },
  },
  hidden: { x: 1000, opacity: 0 },
};

const footerVariant: Variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 40, duration: 1 },
  },
  hidden: { y: 75, opacity: 0 },
};

const variantRightMobile: Variants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 40, duration: 1 },
  },
  hidden: { x: -100, opacity: 0 },
};

const variantLeftMobile: Variants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 40, duration: 1 },
  },
  hidden: { x: 100, opacity: 0 },
};

const footerVariantMobile: Variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 40, duration: 1 },
  },
  hidden: { y: 100, opacity: 0 },
};

const navbarVariant: Variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 40, duration: 1 },
  },
  hidden: { y: -500, opacity: 0 },
};

const Index: NextPage = () => {
  const isWindowSizeSmall = useMediaQuery("(max-width: 1075px)");

  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>
        <meta property="og:title" content={siteConfig.title} key="title" />
      </Head>
      <div className="overflow-hidden">
        <motion.div variants={navbarVariant} initial="hidden" animate="visible">
          <Navbar />
        </motion.div>
        <div>
          <Intro />
        </div>
        <div className="flex flex-col gap-40">
          <motion.div
            id="about"
            variants={isWindowSizeSmall ? variantRightMobile : variantRight}
            initial="hidden"
            whileInView="visible"
            viewport={
              isWindowSizeSmall
                ? { once: true, amount: 0.1 }
                : { once: true, amount: 0.5 }
            }
          >
            <About />
          </motion.div>
          <motion.div
            id="skills"
            variants={isWindowSizeSmall ? variantLeftMobile : variantLeft}
            initial="hidden"
            whileInView="visible"
            viewport={
              isWindowSizeSmall
                ? { once: true, amount: 0.1 }
                : { once: true, amount: 0.5 }
            }
          >
            <Skills />
          </motion.div>
          <motion.div
            id="projects"
            variants={isWindowSizeSmall ? variantRightMobile : variantRight}
            initial="hidden"
            whileInView="visible"
            viewport={
              isWindowSizeSmall
                ? { once: true, amount: 0.1 }
                : { once: true, amount: 0.5 }
            }
          >
            <Projects />
          </motion.div>
          <motion.div
            id="experience"
            variants={isWindowSizeSmall ? variantLeftMobile : variantLeft}
            initial="hidden"
            whileInView="visible"
            viewport={
              isWindowSizeSmall
                ? { once: true, amount: 0.1 }
                : { once: true, amount: 0.5 }
            }
          >
            <Experience />
          </motion.div>
          <motion.div
            variants={isWindowSizeSmall ? footerVariantMobile : footerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={
              isWindowSizeSmall
                ? { once: true, amount: 0.1 }
                : { once: true, amount: 0.5 }
            }
          >
            <Footer />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Index;
