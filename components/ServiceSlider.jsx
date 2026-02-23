import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper";
import {
  RxDesktop,
  RxRocket,
  RxArrowTopRight,
  RxReader,
  RxPencil2
} from "react-icons/rx";
import { FaServer, FaShoppingCart, FaCode, FaDatabase } from "react-icons/fa";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    icon: <FaCode />,
    title: "API Integration",
    description: "Scalable RESTful API creation & third-party integration.",
  },
  {
    icon: <FaDatabase />,
    title: "Performance",
    description: "Database optimization, bug fixing, and code refactoring.",
  },
  {
    icon: <RxReader />,
    title: "LMS Systems",
    description: "Tailored Learning Management Systems & business tools.",
  },
  {
    icon: <FaShoppingCart />,
    title: "E-Commerce",
    description: "Multi-vendor marketplaces with secure payment gateways.",
  },
  {
    icon: <RxDesktop />,
    title: "SaaS Platforms",
    description: "Subscription-based software with user management.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      modules={[FreeMode, Pagination, Autoplay]}
      className="h-auto pb-12"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            {/* 
               CARD CONTAINER
               - Dark Background (Matches screenshot)
               - Rounded Corners
            */}
            <div className="group relative bg-[#0f0f1b] rounded-3xl p-6 md:p-8 h-[280px] md:h-[320px] flex flex-col justify-between border border-white/5 transition-all duration-500 cursor-pointer overflow-visible">
              
              {/* --- LIGHTING EFFECTS (MAGIC PARTS) --- */}
              
              {/* 1. Bottom Glow Bar (The line at the bottom in your screenshot) */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[60%] h-1 bg-accent blur-[8px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* 2. Soft Red Glow Shadow surrounding the card */}
              <div className="absolute inset-0 rounded-3xl transition-all duration-500 shadow-[0_10px_40px_-10px_rgba(241,48,36,0.3)]"></div>
              
              {/* 3. Border Color Change on Hover */}
              <div className="absolute inset-0 rounded-3xl border border-transparent border-accent/30 transition-all duration-500"></div>


              {/* --- CONTENT SECTION --- */}
              
              {/* Top Section: Icon Circle & Arrow */}
              <div className="flex justify-between items-start relative z-10">
                
                {/* Icon Inside Circle (Matches screenshot) */}
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center text-accent text-2xl bg-accent group-hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(241,48,36,0.2)]">
                  {item.icon}
                </div>
                
                {/* Arrow Icon */}
                <div className="text-2xl text-accent/50 group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <RxArrowTopRight />
                </div>
              </div>

              {/* Text Content */}
              <div className="relative z-10 mt-4">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {item.description}
                </p>
              </div>

            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;