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
import { useEffect, useState } from "react";

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
  hidden: { y: 75, opacity: 0 },
};

const Index: NextPage = () => {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>
        <meta property="og:title" content={siteConfig.title} key="title" />
      </Head>
      <div className="overflow-hidden">
        <div>
          <Navbar />
        </div>
        <div>
          <Intro />
        </div>
        <div className="flex flex-col gap-40">
          {windowSize >= 1025 ? (
            <>
              <motion.div
                id="about"
                variants={variantRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <About />
              </motion.div>
              <motion.div
                id="skills"
                variants={variantLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <Skills />
              </motion.div>
              <motion.div
                id="projects"
                variants={variantRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <Projects />
              </motion.div>
              <motion.div
                id="experience"
                variants={variantLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
              >
                <Experience />
              </motion.div>
              <motion.div
                variants={footerVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <Footer />
              </motion.div>
            </>
          ) : (
            <>
              <motion.div
                id="about"
                variants={variantRightMobile}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <About />
              </motion.div>
              <motion.div
                id="skills"
                variants={variantLeftMobile}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <Skills />
              </motion.div>
              <motion.div
                id="projects"
                variants={variantRightMobile}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
              >
                <Projects />
              </motion.div>
              <motion.div
                id="experience"
                variants={variantLeftMobile}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.18 }}
              >
                <Experience />
              </motion.div>
              <motion.div
                variants={footerVariantMobile}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <Footer />
              </motion.div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Index;
