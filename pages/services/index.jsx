import { motion } from "framer-motion";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 overflow-y-auto relative">
      <Circles />

      {/* 
        FIXES:
        1. pt-40 (Mobile): Pushes content down below the logo.
        2. xl:pt-48 (Desktop): Pushes content further down as requested.
        3. pb-32: Ensures bottom space for scrolling above the nav bar.
      */}
      <div className="container mx-auto min-h-full flex flex-col pt-40 pb-32 xl:pt-48 xl:pb-0">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col items-center text-center mb-8 xl:mb-16 z-20">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-3xl xl:text-5xl mb-4"
          >
            My Premium <span className="text-accent">Services.</span>
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[600px] mx-auto text-white/70 text-sm md:text-base leading-relaxed px-4"
          >
            I build <span className="text-accent font-bold">Scalable</span> & <span className="text-accent font-bold">Secure</span> web applications. 
            Focused on performance, clean code, and user-centric design to scale your business.
          </motion.p>
        </div>

        {/* SLIDER SECTION */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full xl:max-w-[95%] mx-auto z-10"
        >
          <ServiceSlider />
        </motion.div>
      </div>
      
      <Bulb />
    </div>
  );
};

export default Services;