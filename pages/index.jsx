import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";
import MiddleImg from "../components/MiddIeImg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-black/65 via-black/35 to-black/65">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto"
        >
          {/* Title */}
          <motion.h1 variants={item} className="h1 tracking-tight">
            <span className="block text-white/95">
              Romana Idress Ekfa
            </span>

            {/* Role */}
            <motion.span
              variants={item}
              className="block mt-2 font-extrabold tracking-wide royal-gradient royal-glow royal-shimmer royal-pulse"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
             <div className="relative inline-block">
              <span className="fire-gold-gradient fire-shimmer fire-glow fire-pulse font-extrabold">
                Full Stack Developer
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#FF2124]/70 blur-sm"></span>
            </div>
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            <motion.span
              className="royal-glass inline-block rounded-2xl px-6 py-5 text-white/80 leading-relaxed"
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -2 }}
            >
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
                . Focused on clean architecture, performance optimization, APIs & payment integrations.
              </span>

            </motion.span>
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>

          <motion.div
            variants={item}
            className="hidden xl:flex"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 240, damping: 18 }}
          >
            <ProjectsBtn />
          </motion.div>
        </motion.div>
      </div>

      {/* image */}
      <div className="w-[1280px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div
          role="img"
          className="bg-none xl:bg-explosion -top-[150px]  right-[20px] xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* particles */}
        <ParticlesContainer />

        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
      <div>
          <MiddleImg  />
      </div>
    </div>
    
  );
};

export default Home;
