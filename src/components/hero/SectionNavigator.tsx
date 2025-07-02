import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { sections } from "@/data/sections";

type Props = {
  sections: typeof sections;
  onClick: (id: string) => void;
};

export default function SectionNavigator({ sections, onClick }: Props) {
  return (
    <div className="flex flex-col items-start gap-4">
      {sections.map(({ id, title }, i) => (
        <motion.div
          key={id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.55 + i * 0.14, duration: 0.55 }}
        >
          <Button className="w-40" onClick={() => onClick(id)}>
            {title}
          </Button>
        </motion.div>
      ))}
    </div>
  );
}