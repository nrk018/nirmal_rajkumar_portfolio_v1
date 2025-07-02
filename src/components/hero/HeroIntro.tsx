import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import SocialLinks from "./SocialLinks";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

export default function HeroIntro() {
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
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="mt-[-2rem] text-[clamp(4.5rem,10vw,7rem)] font-semibold"
        style={{ fontFamily: "'SF Pro Display','Helvetica Neue',sans-serif" }}
      >
        {"I'm Nirmal Rajkumar.".split(" ").map((word, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.12, duration: 0.45 }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>

      {/* ── Typewriter lines ── */}
      <motion.div
        className="text-lg text-muted-foreground mt-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.35, ease: "easeOut" }}
      >
        <Typewriter
          onInit={(tw) => {
            lines.forEach((l) => {
              tw.typeString(l).pauseFor(900).deleteAll(40).pauseFor(80);
            });
            tw.start();
          }}
          options={{ loop: true, delay: 30, deleteSpeed: 40 }}
        />
      </motion.div>

      <SocialLinks />
    </>
  );
}