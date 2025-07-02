import { sections } from "@/data/sections";

type Props = { section: (typeof sections)[number] };

export default function SectionBlock({ section }: Props) {
  /* 1️⃣  Special layout for “about-me” (unchanged) */
  if (section.id === "about-me") {
    // … your bento-grid code
    return null; // remove when you paste bento code back in
  }

  /* 2️⃣  Skills / Projects: content is an array of { icon, label } */
  if (Array.isArray(section.content)) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {section.content.map((item) => {
          const Icon = item.icon; // ⚑ component itself

          return (
            <div
              key={item.label}
              className="flex items-center gap-4 p-4 border border-white/10 rounded-xl backdrop-blur-sm bg-white/5"
            >
              {/* create the element here */}
              <Icon size={20} stroke={1.5} className="text-white/90" />
              <span className="text-white/80 text-base">{item.label}</span>
            </div>
          );
        })}
      </div>
    );
  }

  /* 3️⃣  Everything else: plain string content */
  return (
    <p className="text-lg max-w-3xl leading-relaxed text-white/80">
      {section.content}
    </p>
  );
}