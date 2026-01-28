import { motion } from "framer-motion";

// FIX: 'RxShield' does not exist in this library. 
// Replaced with 'RxLockClosed' (Security) which definitely exists.
import { RxCheck, RxRocket, RxLockClosed } from "react-icons/rx";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-28 xl:py-36 flex items-center overflow-y-auto xl:overflow-hidden relative">
      <Circles />

      <div className="container mx-auto h-full flex flex-col justify-center">
        
        <div className="flex flex-col xl:flex-row gap-x-8 gap-y-8 items-center xl:items-start justify-center h-max xl:h-full pb-24 xl:pb-0">
          
          {/* TEXT SECTION (Left Side) */}
          <div className="text-center flex flex-col lg:text-left xl:w-[35%] z-20 xl:justify-center">
            
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full max-w-[500px] mx-auto lg:mx-0"
            >
               {/* Royal Glass Border */}
               <div className="royal-glass rounded-xl p-1">
                 {/* Inner Fire Glass Box */}
                 <div className="fire-glass rounded-xl p-6 md:p-8 text-white/80 leading-relaxed text-base relative overflow-hidden group text-left">
                   
                   {/* Background Glow */}
                   <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[40px] -mr-16 -mt-16 pointer-events-none"></div>

                   {/* HEADING */}
                   <h2 className="h2 mb-4 leading-tight text-white relative z-10 text-center md:text-left text-3xl md:text-4xl">
                      My Premium <br /> 
                      <span className="text-accent fire-glow">Services.</span>
                   </h2>

                   {/* Description */}
                   <p className="relative z-10 text-sm md:text-base mb-6">
                     I craft <span className="fire-gold-gradient font-bold">High-Performance</span> digital experiences. 
                     From complex <span className="text-accent font-semibold">SaaS Platforms</span> to custom <span className="text-accent font-semibold">E-commerce</span> solutions, my expertise in Laravel & React ensures your business scales securely.
                   </p>

                   {/* Key Features List (Why Choose Me) */}
                   <div className="relative z-10 space-y-3 border-t border-white/10 pt-4 mt-2">
                      <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Why Choose Me?</p>
                      
                      {/* Feature 1: Clean Architecture */}
                      <div className="flex items-center gap-x-3 group/item">
                        <RxCheck className="text-accent text-xl min-w-[20px] font-bold" />
                        <span className="text-sm font-light text-white/90">Clean, Scalable & Maintainable Architecture</span>
                      </div>
                      
                      {/* Feature 2: Security (Updated Icon to RxLockClosed) */}
                      <div className="flex items-center gap-x-3 group/item">
                        <RxLockClosed className="text-accent text-xl min-w-[20px]" />
                        <span className="text-sm font-light text-white/90">Enterprise-grade Security & Performance</span>
                      </div>

                      {/* Feature 3: Support */}
                      <div className="flex items-center gap-x-3 group/item">
                        <RxRocket className="text-accent text-xl min-w-[20px]" />
                        <span className="text-sm font-light text-white/90">On-time Delivery with Post-Launch Support</span>
                      </div>
                   </div>

                 </div>
              </div>
            </motion.div>
          </div>

          {/* SLIDER SECTION (Right Side) */}
          <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:w-[65%] z-10 px-2 md:px-0"
          >
            <ServiceSlider />
          </motion.div>
          
        </div>
      </div>
      
      <Bulb />
    </div>
  );
};

export default Services;