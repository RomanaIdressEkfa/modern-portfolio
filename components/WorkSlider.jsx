import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const projectData = [
  { title: "UBSL Enterprise", tech: "Laravel • ERPNext", path: "/pp.png", link: "https://www.ubsbd.com.bd/" },
  { title: "Pickarro BD", tech: "Multi-vendor E-com", path: "/Screenshot 2025-11-05 113832.png", link: "https://pickarrobd.com/" },
  { title: "Urban Mart", tech: "Single Vendor Store", path: "/Screenshot 2025-11-05 113655.png", link: "https://urbanmartcn.com/" },
  { title: "Alfurqaan LMS", tech: "Live Class & Quiz", path: "/Screenshot 2025-11-05 113915.png", link: "https://alfurqaan.academy/" },
  { title: "Troubleshoot", tech: "Service Marketplace", path: "/images.jpg", link: "https://troubleshoot.com.bd" },
  { title: "Metro Express", tech: "Logistics System", path: "/metro.jpg", link: "https://metroexpress.so/" },
  { title: "BD School Jalan", tech: "School Management", path: "/school.jpg", link: "https://bsjalan.com/" },
  { title: "Prime Lucid", tech: "Mobile-First Store", path: "/thumb8.jpg", link: "https://romanaidress.primelucid.com/" },
  { title: "Surma Tech", tech: "IT Portfolio", path: "/thumb9.jpg", link: "http://surmatechzone.com/" },
  { title: "Raadiall", tech: "Online Ticket System", path: "/raadiall.jpg", link: "https://raadiall.com/" },
  { title: "So Express", tech: "Online Ticket System", path: "/Screenshot 2026-02-23 115450.png", link: "https://www.contextser.online/" },
  { title: "SWR", tech: "Full Stack", path: "/screencapture-swrbd-2026-02-23-12_05_24.png", link: "https://swrbd.com/" },
  { title: "Logically Debate", tech: "Online Debate Website", path: "/screencapture-logicallydebate-debates-2026-02-23-12_24_04.png", link: "https://logicallydebate.com/" },
  { title: "PicBazar", tech: "React E-commerce", path: "/still-71bbfb345821aed5d5463f7f6f3c5a9a.webp", link: "https://pickbazar-react-rest.vercel.app/" },
  { title: "Fast Food", tech: "Food Landing Page", path: "/Screenshot 2026-02-23 121455.png", link: "https://bespoke-hotteok-f14a79.netlify.app/" },
  { title: "Wedding Booking", tech: "Booking System", path: "/Screenshot 2026-02-23 121726.png", link: "https://eloquent-paletas-d3492f.netlify.app/" },
];

const slides = [...projectData, ...projectData];

const WorkSlider = () => {
  return (
    <div className="relative w-full flex items-center justify-center">
      
      <style jsx>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left { animation: scrollLeft 120s linear infinite; }
        .animate-scroll-right { animation: scrollRight 120s linear infinite; }
        
        @media (max-width: 768px) {
           .animate-scroll-left { animation-duration: 70s; }
           .animate-scroll-right { animation-duration: 70s; }
        }
      `}</style>
      <div className="flex flex-col gap-3 md:gap-8 w-full -rotate-2 md:-rotate-6 scale-100 md:scale-105 origin-center py-2 md:py-8">
        
        {/* ROW 1 */}
        <div className="flex w-max gap-3 md:gap-8 animate-scroll-left hover:[animation-play-state:paused]">
          {slides.map((project, index) => (
            <ProjectCard key={`row1-${index}`} project={project} />
          ))}
        </div>

        {/* ROW 2 */}
        <div className="flex w-max gap-3 md:gap-8 animate-scroll-right hover:[animation-play-state:paused]">
          {slides.map((project, index) => (
            <ProjectCard key={`row2-${index}`} project={project} />
          ))}
        </div>

      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="relative w-[180px] h-[110px] md:w-[350px] md:h-[200px] xl:w-[450px] xl:h-[260px] flex-shrink-0 rounded-lg md:rounded-xl overflow-hidden shadow-2xl group border border-white/10 bg-gray-900 cursor-pointer">
      
      <Image
        src={project.path}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/80 transition-all duration-500" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-2 md:px-4">
        <h3 className="text-white text-sm md:text-xl font-bold mb-1">{project.title}</h3>
        <p className="text-accent text-[10px] md:text-sm uppercase tracking-widest mb-2 md:mb-4">{project.tech}</p>
        
        <Link
          href={project.link}
          target="_blank"
          className="px-3 py-1 md:px-6 md:py-2 bg-accent text-white rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-accent transition-all flex items-center gap-1 md:gap-2"
        >
          View Live <BsArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default WorkSlider;