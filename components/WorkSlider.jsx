import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// YOUR REAL CV DATA
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "UBSL Enterprise",
          tech: "Laravel • ERPNext",
          path: "/pp.png", // Replace with UBSL screenshot
          link: "https://www.ubsbd.com.bd/",
        },
        {
          title: "Pickarro BD",
          tech: "Multi-vendor E-com",
          path: "/Screenshot 2025-11-05 113832.png", // Replace with Pickarro screenshot
          link: "https://pickarrobd.com/",
        },
         {
          title: "Urban Mart",
          tech: "Single Vendor Store",
          path: "/Screenshot 2025-11-05 113655.png", 
          link: "https://urbanmartcn.com/",
        },
        {
          title: "Alfurqaan LMS",
          tech: "Live Class & Quiz",
          path: "/Screenshot 2025-11-05 113915.png", // Replace with Alfurqaan screenshot
          link: "https://alfurqaan.academy/",
        },
      ],
    },
    {
      images: [
        {
          title: "Troubleshoot",
          tech: "Service Marketplace",
          path: "/images.jpg", // Replace with Troubleshoot screenshot
          link: "https://troubleshoot.com.bd",
        },
       
        {
          title: "Metro Express",
          tech: "Logistics System",
          path: "/metro.jpg", 
          link: "https://metroexpress.so/",
        },
        {
          title: "BD School Jalan",
          tech: "School Management",
          path: "/school.jpg", 
          link: "https://bsjalan.com/",
        },
        {
          title: "Prime Lucid",
          tech: "Mobile-First Store",
          path: "/thumb8.jpg", 
          link: "https://romanaidress.primelucid.com/",
        },
      ],
    },
    {
      images: [
        {
          title: "Surma Tech",
          tech: "IT Portfolio",
          path: "/thumb9.jpg", 
          link: "http://surmatechzone.com/",
        },
        {
          title: "Raadiall",
          tech: "Online Ticket System",
          path: "/raadiall.jpg", 
          link: "https://raadiall.com/",
        },
        {
          title: "So Express",
          tech: "Online Ticket System",
          path: "/Screenshot 2026-02-23 115450.png", 
          link: "https://www.contextser.online/",
        },
        {
          title: "SWR",
          tech: "Full Stack",
          path: "/screencapture-swrbd-2026-02-23-12_05_24.png", 
          link: "https://swrbd.com/",
        },
      ],
    },
    {
      images: [
        {
          title: "Logically Debate",
          tech: "Online Debate Website",
          path: "/screencapture-logicallydebate-debates-2026-02-23-12_24_04.png", 
          link: "https://logicallydebate.com/",
        },
        {
          title: "PicBazar",
          tech: "React E-commerce",
          path: "/still-71bbfb345821aed5d5463f7f6f3c5a9a.webp", 
          link: "https://pickbazar-react-rest.vercel.app/",
        },
        {
          title: "Fast Food",
          tech: "Online Landing Page Food System",
          path: "/Screenshot 2026-02-23 121455.png", 
          link: "https://bespoke-hotteok-f14a79.netlify.app/",
        },
        {
          title: "Wedding Booking",
          tech: "Online Wedding Booking System",
          path: "/Screenshot 2026-02-23 121726.png", 
          link: "https://eloquent-paletas-d3492f.netlify.app/",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          {/* Responsive Grid: 1 col on mobile, 2 cols on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-4 h-full">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={imageI}
              >
                <div className="flex items-center justify-center relative overflow-hidden group w-full h-full">
                  {/* image */}
                  <Image
                    src={image.path}
                    alt={image.title}
                    fill // Ensure image covers the whole box
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  {/* overlay gradient (YOUR ORIGINAL DESIGN) */}
                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                  />

                  {/* content container */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 px-4 text-center">
                    
                    {/* Project Title (NEW: Shows Project Name) */}
                    <div className="text-white text-lg font-bold tracking-wider mb-1 delay-75 transition-all duration-300 translate-y-[500%] group-hover:translate-y-0">
                        {image.title}
                    </div>

                    {/* Tech Stack (NEW: Shows Technologies) */}
                    <div className="text-accent text-[11px] font-semibold tracking-widest uppercase mb-4 delay-100 transition-all duration-300 translate-y-[500%] group-hover:translate-y-0">
                        {image.tech}
                    </div>

                    <Link
                      href={image.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center justify-center gap-x-2 text-[13px] tracking-[0.2em]"
                    >
                      {/* title part 1 */}
                      <div className="delay-100 text-white font-medium">LIVE</div>
                      {/* title part 2 */}
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 font-bold text-white">
                        PROJECT
                      </div>
                      {/* icon */}
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        <BsArrowRight className="text-white" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;