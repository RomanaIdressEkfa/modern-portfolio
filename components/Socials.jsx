import Link from "next/link";

import {
  RiLinkedinLine, // Fixed typo (was RiLinkedInLine)
  RiBehanceLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/romanaidressekfa/",
    Icon: RiLinkedinLine,
  },
  {
    name: "Behance",
    link: "https://www.behance.net/romanaidress",
    Icon: RiBehanceLine,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/romanaidressekfa",
    Icon: RiFacebookLine,
  },
  {
    name: "Dribbble",
    link: "https://dribbble.com/romanaidressekfa",
    Icon: RiDribbbleLine,
  },
  // {
  //   name: "Pinterest",
  //   link: "https://pinterest.com",
  //   Icon: RiPinterestLine,
  // },
  {
    name: "Github",
    link: "https://github.com/RomanaIdressEkfa/modern-portfolio",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
