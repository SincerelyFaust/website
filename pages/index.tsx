import { Variants, motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import useMediaQuery from "../utils/hooks/useMediaQuery";
import LetsWork from "../components/LetsWork";

const variantRight: Variants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 40, duration: 1 },
  },
  hidden: { x: -300, opacity: 0 },
};

const variantLeft: Variants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 40, duration: 1 },
  },
  hidden: { x: 300, opacity: 0 },
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

const Index: NextPage = () => {
  const isWindowSizeSmall = useMediaQuery("(max-width: 1075px)");

  return (
    <>
      <Head>
        <title>Marin Heđeš</title>
        <meta property="og:title" content="Marin Heđeš" />
      </Head>
      <div className="overflow-hidden">
        <div>
          <Intro />
        </div>
        <div className="flex flex-col gap-40">
          <motion.div
            id="about"
            variants={!isWindowSizeSmall ? variantRight : variantRightMobile}
            initial="hidden"
            whileInView="visible"
            viewport={
              !isWindowSizeSmall
                ? { once: true, amount: 0.3 }
                : { once: true, amount: 0.1 }
            }
          >
            <About />
          </motion.div>
          <motion.div
            id="skills"
            variants={!isWindowSizeSmall ? variantLeft : variantLeftMobile}
            initial="hidden"
            whileInView="visible"
            viewport={
              !isWindowSizeSmall
                ? { once: true, amount: 0.3 }
                : { once: true, amount: 0.1 }
            }
          >
            <Skills />
          </motion.div>
          <motion.div
            id="projects"
            variants={!isWindowSizeSmall ? variantRight : variantRightMobile}
            initial="hidden"
            whileInView="visible"
            viewport={
              !isWindowSizeSmall
                ? { once: true, amount: 0.3 }
                : { once: true, amount: 0.1 }
            }
          >
            <Projects />
          </motion.div>
          <motion.div
            id="experience"
            variants={!isWindowSizeSmall ? variantLeft : variantLeftMobile}
            initial="hidden"
            whileInView="visible"
            viewport={
              !isWindowSizeSmall
                ? { once: true, amount: 0.3 }
                : { once: true, amount: 0.1 }
            }
          >
            <Experience />
          </motion.div>
          <motion.div
            id="hire"
            variants={!isWindowSizeSmall ? variantRight : variantRightMobile}
            initial="hidden"
            whileInView="visible"
            viewport={
              !isWindowSizeSmall
                ? { once: true, amount: 0.3 }
                : { once: true, amount: 0.1 }
            }
          >
            <LetsWork />
          </motion.div>
          <motion.div
            variants={!isWindowSizeSmall ? footerVariant : footerVariantMobile}
            initial="hidden"
            whileInView="visible"
            viewport={
              !isWindowSizeSmall
                ? { once: true, amount: 0.3 }
                : { once: true, amount: 0.1 }
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
