import { motion } from "framer-motion";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    // FIX 1: 'pt-40' for mobile (pushes content down below logo)
    // 'lg:pt-0' for desktop (keeps it centered)
    <div className="h-full bg-primary/30 pt-40 pb-10 lg:py-32 flex flex-col items-center overflow-hidden relative">
      <Circles />
      
      {/* 
        FIX 2: 'justify-start' for mobile (stacks from top)
        'lg:justify-center' for desktop (centers vertically)
      */}
      <div className="container mx-auto px-4 z-20 flex flex-col justify-start lg:justify-center h-full">
        
        {/* ---------------- TEXT SECTION ---------------- */}
        {/* FIX 3: Reduced 'mb-4' to remove the big gap in the middle */}
        <div className="text-center mb-6 lg:mb-12">
          <motion.h2
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-2xl md:text-3xl xl:text-5xl"
          >
            My <span className="text-accent">Projects</span>
          </motion.h2>
          
          <motion.p
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[600px] mx-auto text-white/70 text-xs md:text-sm lg:text-base px-2 leading-relaxed"
          >
             Showcasing a collection of high-performance websites.
             <br className="hidden md:block" />
             <span className="text-accent font-bold">20+ Projects</span> built with modern technologies.
          </motion.p>
        </div>

        {/* ---------------- SLIDER SECTION ---------------- */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full xl:max-w-[90%] flex-1 flex items-start lg:items-center justify-center relative z-10"
        >
           <WorkSlider />
        </motion.div>
      </div>
      
      <Bulb />
    </div>
  );
};

export default Work;