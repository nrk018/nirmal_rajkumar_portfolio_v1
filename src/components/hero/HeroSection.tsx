"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { sections } from "@/data/sections";
import HeroIntro from "./HeroIntro";
import SectionNavigator from "./SectionNavigator";
import SectionsScroller from "../sections/SectionsScroller";
import { AppleHelloEnglishEffect } from "../ui/apple-hello-effect";



export default function HeroSection() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const to = setTimeout(() => setShowContent(true), 2800);
    return () => clearTimeout(to);
  }, []);

  /** stable scroll handler to avoid re-creates */
  const handleNavClick = useCallback((id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* ───────────────── Hero ───────────────── */}
      <section
        id="hero"
        className="snap-start h-screen relative z-10 w-full pt-20 text-white flex flex-col items-center justify-start px-4 md:px-12 lg:px-24"
      >
        <motion.div
          className="flex flex-col md:flex-row w-full justify-center items-start gap-12"
          initial={{ opacity: 1, y: 0 }}
          animate={{ y: showContent ? -40 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Left column */}
          <div className="flex flex-col flex-1">
            <motion.div
              className="scale-[0.4] origin-left -ml-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: -10 }}
              transition={{ duration: 1.6, delay: 0.1, ease: "easeInOut" }}
            >
              <AppleHelloEnglishEffect speed={1.1} />
            </motion.div>

            <AnimatePresence>{showContent && <HeroIntro />}</AnimatePresence>
          </div>

          {/* Right column – navigation */}
          {showContent && (
            <SectionNavigator sections={sections} onClick={handleNavClick} />
          )}
        </motion.div>
      </section>

      {/* ────────────── Scrollable sections ────────────── */}
      <SectionsScroller sections={sections} />
    </main>
  );
}