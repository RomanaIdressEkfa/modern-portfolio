import { motion } from "framer-motion";
import Image from "next/image"; 
import CountUp from "react-countup";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { fadeIn } from "../variants";
import MiddleImg from "../components/MiddIeImg";

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
};

// Tech Stack Data
const techStack = [
  "Laravel", "React", "Next.js", "MySQL", "AWS", "Docker"
];

const Home = () => {
  return (
    <div className="bg-black h-full overflow-y-auto overflow-x-hidden xl:overflow-hidden relative font-sans">
      
      {/* --- BACKGROUND SECTION --- */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
       
       {/* Fire Explosion Background */}
       <div 
        className="bg-explosion bg-cover bg-center bg-no-repeat w-full h-full absolute translate-z-0"
        style={{ 
            filter: "hue-rotate(330deg) saturate(200%) contrast(110%) brightness(0.7)",
            opacity: 1.9,
            mixBlendMode: "screen"
        }} 
        />
        
        {/* Dark Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-red-900/10 to-black opacity-90 mix-blend-multiply"></div>
        
        {/* Ambient Red Glow (Responsive) */}
        <div className="absolute top-[-10%] left-[-20%] xl:top-[-20%] xl:left-[-10%] w-[250px] h-[250px] xl:w-[600px] xl:h-[600px] bg-[#FF1D1E]/20 rounded-full blur-[80px] xl:blur-[120px] mix-blend-screen animate-pulse"></div>
        
        <ParticlesContainer />
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="w-full min-h-full relative z-10">
        
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col justify-start xl:justify-center h-full container mx-auto px-4 relative z-10 pt-[110px] pb-32 xl:pt-40 xl:pb-0 text-center xl:text-left"
        >

          {/* Mobile Avatar (Floating Ring Effect) */}
          <motion.div 
            variants={item}
            className="xl:hidden relative w-[260px] h-[260px] mx-auto mb-6 rounded-full overflow-hidden border-[2px] border-[#FF1D1E]/60 shadow-[0_0_40px_rgba(255,29,30,0.3)] group"
          >
             <Image 
                src="/avatar.png" 
                fill 
                alt="mobile-avatar" 
                className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
             />
             <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </motion.div>

          {/* Text Container with Subtle Glass Effect */}
          <div className="xl:max-w-[60%] z-20 relative">
            
            {/* Name */}
            <motion.h1 variants={item} className="h1 tracking-tight mb-2 mt-0 xl:mt-16">
              <span className="block text-white text-3xl md:text-5xl xl:text-7xl font-bold drop-shadow-2xl">
                Romana Idress Ekfa
              </span>

              {/* Fire Text Title */}
              <motion.span
                className="block mt-2 font-extrabold tracking-wide"
                whileHover={{ scale: 1.02 }}
              >
               <div className="relative inline-block pb-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FF5733] to-[#FF1D1E] font-black text-2xl md:text-4xl xl:text-6xl uppercase tracking-widest filter drop-shadow-[0_2px_10px_rgba(255,87,51,0.5)]">
                  Full Stack Developer
                </span>
                
                {/* Glowing Line */}
                <span className="hidden xl:block absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#FF1D1E] to-transparent shadow-[0_0_20px_#FF1D1E] rounded-full"></span>
              </div>
              </motion.span>
            </motion.h1>

            {/* NEW: Tech Stack Badges */}
            <motion.div variants={item} className="flex flex-wrap justify-center xl:justify-start gap-2 my-4 xl:my-6">
              {techStack.map((tech, index) => (
                <span key={index} className="px-3 py-1 rounded-full border border-[#FF1D1E]/30 bg-[#FF1D1E]/10 text-white/80 text-[10px] md:text-xs tracking-wider uppercase hover:bg-[#FF1D1E] hover:text-white transition-all duration-300 cursor-default shadow-[0_0_10px_rgba(255,29,30,0.1)]">
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={item}
              className="max-w-sm md:max-w-xl xl:max-w-2xl mx-auto xl:mx-0 mb-8 text-white/70 text-sm md:text-base leading-relaxed font-light backdrop-blur-sm"
            >
              Expert in architecting robust, scalable enterprise-grade solutions. I specialize in fusing high-performance backends (<span className="text-[#FF1D1E] font-semibold">Laravel, PHP</span>) with dynamic frontends (<span className="text-[#FF1D1E] font-semibold">React, Next.js</span>). Focused on secure API development and crafting seamless digital ecosystems.
            </motion.p>

            {/* Stats Section with Vertical Separators */}
            <motion.div 
               variants={item}
               className="flex justify-center xl:justify-start items-center gap-4 md:gap-8 mb-8"
            >
               {[
                 { count: 3, label: "Years Exp." },
                 { count: 60, label: "Projects" },
                 { count: 30, label: "Happy Clients" }
               ].map((stat, idx) => (
                 <div key={idx} className="flex items-center">
                    <div className="flex flex-col items-center xl:items-start group cursor-default">
                        <div className="text-2xl xl:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#FF1D1E] to-[#a60f0f] flex group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                        <CountUp start={0} end={stat.count} duration={4} /> +
                        </div>
                        <div className="text-[10px] md:text-xs uppercase tracking-[2px] text-white/50 mt-1 font-medium group-hover:text-white transition-colors">{stat.label}</div>
                    </div>
                    {/* Add divider except for the last item */}
                    {idx !== 2 && (
                        <div className="w-[1px] h-[30px] bg-white/10 ml-4 md:ml-8 hidden md:block"></div>
                    )}
                 </div>
               ))}
            </motion.div>

            {/* Button */}
            <motion.div variants={item} className="flex justify-center xl:justify-start relative z-20">
              <ProjectsBtn />
            </motion.div>
          </div>

        </motion.div>
      </div>

       {/* --- DESKTOP AVATAR --- */}
       <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full h-full absolute -bottom-0 lg:right-[5%] hidden xl:flex pointer-events-none z-10 overflow-hidden"
      >
        <div className="absolute bottom-0 right-0 w-[750px] h-[800px] mix-blend-lighten">
            <Avatar />
        </div>
      </motion.div>

      {/* Middle Background Element */}
      <div className="hidden xl:block absolute left-[10%] -bottom-[18%] z-0 mix-blend-screen opacity-50 pointer-events-none">
          <div style={{ filter: "hue-rotate(330deg) saturate(200%)" }}>
             <MiddleImg  />
          </div>
      </div>
    </div>
  );
};

export default Home;