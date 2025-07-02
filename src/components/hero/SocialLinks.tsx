import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconDownload,
  IconBrandX,
  IconBrandReddit,
} from "@tabler/icons-react";
import React from "react";

const items = [
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
  // … etc
];

function SocialLinks() {
  return (
    <div className="flex gap-4 mt-6 flex-wrap">
      {items.map(({ href, icon, label }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-full p-3 transition-all duration-300"
        >
          <span className="text-white group-hover:text-white/90">{icon}</span>
        </a>
      ))}
    </div>
  );
}

export default React.memo(SocialLinks);