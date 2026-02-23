import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// PROFESSIONAL CLIENT REVIEWS
const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "James Anderson",
    position: "CEO, TechVision USA",
    message:
      "I have worked with many developers, but Romana is in a league of her own. She didn't just write code; she engineered a complete solution for our business. Her expertise in Laravel and automation saved us hundreds of hours. Simply outstanding work!",
  },
  {
    image: "/t-avt-2.png",
    name: "Sarah Jenkins",
    position: "Product Manager, Creative Agency",
    message:
      "Romana delivered a pixel-perfect platform that exceeded our expectations. The UI is sleek, the backend is secure, and the performance is lightning fast. Everyone, including our stakeholders, fell in love with the design immediately.",
  },
  {
    image: "/t-avt-3.png",
    name: "Michael Roberts",
    position: "Founder, E-Com Solutions",
    message:
      "Reliable, talented, and professional. Romana fixed complex database issues in our multi-vendor marketplace that others couldn't solve. If you need a Full Stack expert who truly understands Clean Architecture, hire her immediately.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-auto" // FIX: Removed fixed height, let it be auto
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          {/* FIX: Added padding top/bottom for mobile spacing */}
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-4 md:px-16 pt-4 pb-12">
            
            {/* Avatar, Name, Position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0 mb-6 md:mb-0">
              <div className="flex flex-col justify-center text-center">
                {/* Avatar */}
                <div className="mb-4 mx-auto border-2 border-accent rounded-full p-1">
                  <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt={person.name}
                    className="rounded-full"
                  />
                </div>

                {/* Name */}
                <div className="text-lg font-bold text-white">{person.name}</div>

                {/* Position */}
                <div className="text-[12px] uppercase font-bold tracking-widest text-accent mb-4 md:mb-0">
                  {person.position}
                </div>
              </div>
            </div>

            {/* Quote & Message */}
            {/* FIX: 'min-h' added to keep alignment consistent */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              
              {/* Quote Icon */}
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                  aria-hidden
                />
              </div>

              {/* Message */}
              <div className="text-sm md:text-base xl:text-lg text-center md:text-left text-white/80 italic leading-relaxed">
                "{person.message}"
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;