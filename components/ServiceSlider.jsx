import {
  RxDesktop,
  RxReader,
  RxArrowTopRight,
  RxCode,
  RxLayers,
  RxLightningBolt,
  RxLapTimer
} from "react-icons/rx";
import { FreeMode, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Service Data
const serviceData = [
  {
    Icon: RxDesktop,
    title: "Full Stack Dev",
    description: "Robust web apps using Laravel, PHP, MySQL, React & Next.js.",
  },
  {
    Icon: RxLayers,
    title: "E-commerce",
    description: "Multi-vendor marketplaces, shopping carts & payment gateways.",
  },
  {
    Icon: RxCode,
    title: "API Integration",
    description: "Scalable RESTful API creation & third-party integration.",
  },
  {
    Icon: RxLightningBolt,
    title: "Performance",
    description: "Database optimization, bug fixing, and code refactoring.",
  },
  {
    Icon: RxReader,
    title: "LMS Systems",
    description: "Tailored Learning Management Systems & business tools.",
  },
  {
    Icon: RxLapTimer,
    title: "SaaS Platforms",
    description: "Building scalable SaaS platforms with subscription models.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3, // Desktop e 3 ta card show korbe
          spaceBetween: 30,
        },
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination, Autoplay]}
      freeMode={true}
      // HEIGHT CONTROL: Height komano hoyeche jate card wide mone hoy
      className="h-[300px] sm:h-[340px] py-4"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          {/* 
             CARD DESIGN (Always Active State):
             - border-accent/20: Subtle permanent border
             - shadow: Permanent glow
          */}
          <div className="relative h-full bg-[#1c1c2e]/80 backdrop-blur-md rounded-xl p-6 group cursor-pointer border border-accent/20 shadow-[0_4px_20px_rgba(255,87,34,0.15)] overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,87,34,0.3)]">
            
            {/* Permanent Fire Gradient Overlay (Light) */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-100"></div>
            
            {/* Permanent Bottom Fire Line */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-accent to-transparent scale-x-100"></div>

            <div className="relative z-10 flex flex-col h-full">
                {/* Header: Icon + Arrow */}
                <div className="flex justify-between items-start mb-4">
                    {/* Icon Box (Always Active Color) */}
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-[0_0_15px_rgba(255,87,34,0.6)]">
                        <div className="text-2xl text-white">
                            <item.Icon aria-hidden />
                        </div>
                    </div>

                    {/* Arrow (Always Rotated & Colored) */}
                    <div className="text-2xl text-accent rotate-45">
                        <RxArrowTopRight />
                    </div>
                </div>

                {/* Title (Always Colored) */}
                <div className="mb-3">
                    <h3 className="text-xl font-bold text-white tracking-wide">
                        {item.title}
                    </h3>
                </div>

                {/* Description */}
                <p className="text-white/70 leading-relaxed text-[14px]">
                    {item.description}
                </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;