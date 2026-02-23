import { motion } from "framer-motion";
import TestimonialSlider from "../../components/TestimonialSlider";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    // FIX: 'h-full overflow-y-auto' enables scrolling
    <div className="h-full bg-primary/30 text-center overflow-y-auto relative">
      
      {/* 
         FIX:
         - 'min-h-full' ensures the container covers the scroll area
         - 'pt-36 pb-24' creates safe space for mobile header/nav
         - 'xl:justify-center' keeps desktop vertically centered
      */}
      <div className="container mx-auto min-h-full flex flex-col justify-center pt-36 pb-24 xl:pt-32 xl:pb-0">
        
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          What clients <span className="text-accent">say.</span>
        </motion.h2>

        {/* slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;