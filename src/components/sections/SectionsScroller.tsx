import { motion } from "framer-motion";
import SectionBlock from "./SectionBlock";
import { sections } from "@/data/sections";

type SectionsScrollerProps = {
  sections: typeof sections;
};

export default function SectionsScroller({ sections }: SectionsScrollerProps) {
  return (
    <>
      {sections.map((section, i) => (
        <motion.section
          key={section.id}
          id={section.id}
          className="snap-start min-h-screen w-full px-6 md:px-24 py-20 flex flex-col items-center scroll-mt-24"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: i * 0.08 }}
          viewport={{ once: true }}
        >
          <SectionBlock section={section} />
        </motion.section>
      ))}
    </>
  );
}