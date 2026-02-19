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
          path: "/thumb1.jpg", // Replace with UBSL screenshot
          link: "https://www.ubsbd.com.bd/",
        },
        {
          title: "Troubleshoot",
          tech: "Service Marketplace",
          path: "/thumb2.jpg", // Replace with Troubleshoot screenshot
          link: "https://troubleshoot.com.bd",
        },
        {
          title: "Pickarro BD",
          tech: "Multi-vendor E-com",
          path: "/thumb3.jpg", // Replace with Pickarro screenshot
          link: "https://pickarrobd.com/",
        },
        {
          title: "Alfurqaan LMS",
          tech: "Live Class & Quiz",
          path: "/thumb4.jpg", // Replace with Alfurqaan screenshot
          link: "https://alfurqaan.academy/",
        },
      ],
    },
    {
      images: [
        {
          title: "Urban Mart",
          tech: "Single Vendor Store",
          path: "/thumb5.jpg", 
          link: "https://urbanmartcn.com/",
        },
        {
          title: "Metro Express",
          tech: "Logistics System",
          path: "/thumb6.jpg", 
          link: "https://metroexpress.so/",
        },
        {
          title: "BD School Jalan",
          tech: "School Management",
          path: "/thumb7.jpg", 
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
          title: "Sentiment Analysis",
          tech: "Research Paper (2025)",
          path: "/thumb10.jpg", 
          link: "https://www.techscience.com/",
        },
        {
          title: "Cyber Home (USA)",
          tech: "Remote Dev",
          path: "/thumb3.jpg", 
          link: "#",
        },
        {
          title: "Open Soft Ltd",
          tech: "Full Stack",
          path: "/thumb4.jpg", 
          link: "#",
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