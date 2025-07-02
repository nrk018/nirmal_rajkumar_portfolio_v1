"use client";

import { AppleHelloEnglishEffect } from "./ui/apple-hello-effect";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { BentoGrid } from "@/components/ui/bento-grid";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconCode, IconRocket } from "@tabler/icons-react";
import Typewriter from "typewriter-effect";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconDownload,
  IconBrandX,
  IconBrandReddit,
} from "@tabler/icons-react";

const sections = [
  {
    id: "about-me",
    title: "About Me",
    content: "bento-grid",
  },
  {
    id: "skills",
    title: "Skills",
    content: [
      { icon: <IconCode />, label: "React.js" },
      { icon: <IconCode />, label: "Node.js" },
      { icon: <IconCode />, label: "Python" },
      { icon: <IconCode />, label: "MongoDB" },
      { icon: <IconCode />, label: "Tailwind CSS" },
      { icon: <IconCode />, label: "TypeScript" },
    ],
  },
  {
    id: "projects",
    title: "Projects",
    content: [
      { icon: <IconRocket />, label: "CarbonMitra" },
      { icon: <IconRocket />, label: "HackX" },
      { icon: <IconRocket />, label: "Portfolio Website" },
    ],
  },
  {
    id: "experience",
    title: "Experience",
    content: "E-Cell Operations Head, Led several tech & community initiatives.",
  },
  {
    id: "education",
    title: "Education",
    content: "B.Tech CSE - Data Science, Manipal University Jaipur",
  },
  {
    id: "contact",
    title: "Contact",
    content: "nirmalrajkumarofficial@gmail.com",
  },
];

export default function HeroSection() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowContent(true), 2800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* Hero Section */}
      <section
        id="hero"
        className="snap-start h-screen relative z-10 w-full pt-20 text-white flex flex-col items-center justify-start px-4 md:px-12 lg:px-24"
      >
        <div className="flex flex-col md:flex-row w-full justify-center items-start gap-12">
          <motion.div
            className="flex flex-col items-start justify-start flex-1"
            initial={{ opacity: 1, y: 0 }}
            animate={{ y: showContent ? -40 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.div
              className="scale-[0.35] sm:scale-[0.4] md:scale-[0.45] lg:scale-[0.5] origin-left -ml-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: -10 }}
              transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
            >
              <AppleHelloEnglishEffect speed={1.1} />
            </motion.div>

            <AnimatePresence>
              {showContent && (
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2 }}
                  className="mt-[-2rem] sm:mt-[-2.5rem] lg:mt-[-3rem] text-[clamp(4.5rem,10vw,7rem)] font-semibold text-white"
                  style={{ fontFamily: `'SF Pro Display', 'Helvetica Neue', sans-serif` }}
                >
                  {"I'm Nirmal Rajkumar.".split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      className="inline-block"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: i * 0.15, duration: 0.5 }}
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.h1>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showContent && (
                <motion.div
                  className="text-lg text-muted-foreground mt-2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      const lines = [
                        "A passionate developer.",
                        "A lifelong student.",
                        "An innovative ideator.",
                        "A critical thinker.",
                        "A full-stack engineer.",
                        "Tech enthusiast.",
                        "Creative problem solver.",
                        "Community builder.",
                        "Visionary learner.",
                        "Explorer of possibilities.",
                      ];
                      lines.forEach((line) => {
                        typewriter.typeString(line).pauseFor(1000).deleteAll(40).pauseFor(100);
                      });
                      typewriter.start();
                    }}
                    options={{ loop: true, delay: 30, deleteSpeed: 40 }}
                  />

                  {/* Socials */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.5, duration: 1 }}
                    className="flex gap-4 mt-6 flex-wrap"
                  >
                    {[
                      {
                        href: "https://github.com/yourusername",
                        icon: <IconBrandGithub size={22} />,
                        label: "GitHub",
                      },
                      {
                        href: "https://linkedin.com/in/yourusername",
                        icon: <IconBrandLinkedin size={22} />,
                        label: "LinkedIn",
                      },
                      {
                        href: "https://instagram.com/yourusername",
                        icon: <IconBrandInstagram size={22} />,
                        label: "Instagram",
                      },
                      {
                        href: "https://wa.me/yourwhatsappphonenumber",
                        icon: <IconBrandWhatsapp size={22} />,
                        label: "WhatsApp",
                      },
                      {
                        href: "https://x.com/yourusername",
                        icon: <IconBrandX size={22} />,
                        label: "X",
                      },
                      {
                        href: "https://reddit.com/user/yourusername",
                        icon: <IconBrandReddit size={22} />,
                        label: "Reddit",
                      },
                      {
                        href: "/resume.pdf",
                        icon: <IconDownload size={22} />,
                        label: "Resume",
                        download: true,
                      },
                    ].map(({ href, icon, label, download }, i) => (
                      <a
                        key={i}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        download={download}
                        aria-label={label}
                        className="group bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-full p-3 transition-all duration-300"
                      >
                        <span className="text-white group-hover:text-white/90">{icon}</span>
                      </a>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Buttons */}
          <div className="flex flex-col items-start justify-start gap-4 flex-wrap">
            {showContent &&
              sections.map((section, i) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.15, duration: 0.6 }}
                >
                  <InteractiveHoverButton
                    className="w-40"
                    onClick={() => {
                      const el = document.getElementById(section.id);
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                  >
                    {section.title}
                  </InteractiveHoverButton>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Scrollable Sections */}
      {sections.map((section, i) => (
        <motion.section
          key={section.id}
          id={section.id}
          className="snap-start min-h-screen w-full px-6 md:px-24 py-20 flex flex-col justify-start items-center scroll-mt-24"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center w-full bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white">
            {section.title}
          </h2>

          {section.id === "about-me" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
              <div className="col-span-2 row-span-2 bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur text-white flex flex-col justify-between">
                <h3 className="text-xl font-bold mb-2">Who am I?</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel hendrerit
                  libero.
                </p>
              </div>
              <div className="col-span-1 bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur text-white flex flex-col justify-between">
                <h3 className="text-xl font-bold mb-2">My Passion</h3>
                <p>I love to build full-stack apps that solve real-world problems.</p>
              </div>
              <div className="col-span-1 bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur text-white flex flex-col justify-between">
                <h3 className="text-xl font-bold mb-2">Philosophy</h3>
                <p>Code should be clean, scalable and purposeful.</p>
              </div>
              <div className="col-span-2 bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur text-white flex flex-col justify-between">
                <h3 className="text-xl font-bold mb-2">Vision</h3>
                <p>To create and contribute to tech that empowers people and drives innovation.
                    <br />
                    I believe in the power of technology to transform lives and create a better future for all.
                </p>
              </div>
            </div>
          ) : Array.isArray(section.content) ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {section.content.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 border border-white/10 rounded-xl backdrop-blur-sm bg-white/5"
                >
                  <div className="text-xl text-white/90">{item.icon}</div>
                  <span className="text-white/80 text-base">{item.label}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-lg max-w-3xl leading-relaxed text-white/80">{section.content}</p>
          )}
        </motion.section>
      ))}
    </main>
  );
}