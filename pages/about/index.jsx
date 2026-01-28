import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";

// Icons Imports
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaPhp,
  FaLaravel,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiMysql,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiVisualstudiocode,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";
import Effect from "./Effect";

export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Backend & Database",
        icons: [FaPhp, FaLaravel, SiMysql],
      },
      {
        title: "Frontend Development",
        icons: [FaHtml5, FaCss3, FaJs, FaReact, SiNextdotjs, SiFramer],
      },
      {
        title: "Tools & Design",
        icons: [
          SiVisualstudiocode,
          FaFigma,
          SiAdobephotoshop,
          SiAdobeillustrator,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Full Stack Laravel Developer - UBS Limited.",
        stage: "Feb 2025 - Present",
      },
      {
        title: "Software Developer - Cyber Home & Agency (USA)",
        stage: "2023 - Present",
      },
      {
        title: "Full Stack Developer - Open Soft Limited",
        stage: "Jan 2024 - July 2024",
      },
      {
        title: "Freelance Web Developer - Upwork & Fiverr",
        stage: "2020 - Present",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "B.Sc. in CSE - Uttara University (CGPA 3.92)",
        stage: "2020 - 2023",
      },
      {
        title: "PHP with Laravel Framework - Pondit",
        stage: "2023",
      },
      {
        title: "MERN Stack Development - Programming Hero",
        stage: "2022",
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Dean's Award - Uttara University",
        stage: "2020 - 2023",
      },
      {
        title: "Academic Excellence - HSC & SSC (GPA 4.5 & 5.0)",
        stage: "2016 - 2018",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary py-32 text-center xl:text-left overflow-y-auto xl:overflow-hidden relative">
      <Circles />

      {/* FIXED: Effect Position (Full Page Right Side) */}
      <div className="absolute top-0 right-0 h-full w-full z-0 pointer-events-none mix-blend-color-dodge">
        <Effect />
      </div>

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-[-230px] -left-[180px] w-[600px] h-full pointer-events-none z-10"
      >
        <div className="w-full h-full relative">
          <Avatar />
        </div>
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 relative z-20">
        <div className="flex-1 flex flex-col justify-center xl:ml-[80px]">
          {/* Headline with Fire Gradient */}
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mt-8 xl:mt-0"
          >
            Scalable{" "}
            <span className="fire-gold-gradient fire-glow font-bold">
              Solutions
            </span>{" "}
            with Clean Architecture.
          </motion.h2>

          {/* Description Wrapped in Royal/Fire Glass (Same as Home) */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            <span className="royal-glass inline-block rounded-2xl p-1">
              <span className="fire-glass inline-block rounded-2xl px-6 py-5 text-white/85 leading-relaxed">
                Full Stack Laravel Developer with{" "}
                <span className="fire-gold-gradient fire-shimmer font-semibold">
                  3+ years
                </span>{" "}
                experience building scalable, high-performance web apps — e-commerce,
                service marketplaces, and LMS — using{" "}
                <span className="fire-gold-gradient fire-shimmer font-semibold">
                  Laravel, PHP, MySQL
                </span>
                .
              </span>
            </span>
          </motion.div>

          {/* Counters with Fire Gradient */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* Experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold fire-gold-gradient fire-shimmer mb-2">
                  <CountUp start={0} end={3.5} duration={5} decimals={1} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>

              {/* Projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold fire-gold-gradient fire-shimmer mb-2">
                  <CountUp start={0} end={100} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>

              {/* Clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold fire-gold-gradient fire-shimmer mb-2">
                  <CountUp start={0} end={30} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>

              {/* Awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold fire-gold-gradient fire-shimmer mb-2">
                  <CountUp start={0} end={6} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Info / Tabs Section */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          {/* Tabs Title */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 flex-wrap justify-center xl:justify-start">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-[#FF2124] fire-glow after:w-[100%] after:bg-[#FF2124] after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 mb-2 xl:mb-0 transition-all duration-300 hover:text-[#FF2124]`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* Tab Content */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start bg-white/5 p-4 rounded-lg xl:bg-transparent xl:p-0">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60 mb-2 xl:mb-0"
              >
                {/* Title & Stage */}
                <div className="font-light mb-1 md:mb-0 text-white">
                  {item.title}
                </div>
                <div className="hidden md:flex text-[#FF2124]">-</div>
                <div className="text-sm md:text-base">{item.stage}</div>

                {/* Icons Loop */}
                <div className="flex gap-x-4 mt-2 md:mt-0">
                  {item.icons?.map((Icon, iconI) => (
                    <div
                      key={iconI}
                      className="text-2xl text-white hover:text-[#FF2124] hover:scale-110 transition-all duration-300"
                    >
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;