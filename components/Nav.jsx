import Link from "next/link";
import { usePathname } from "next/navigation";

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", Icon: HiHome },
  { name: "about", path: "/about", Icon: HiUser },
  { name: "services", path: "/services", Icon: HiRectangleGroup },
  { name: "work", path: "/work", Icon: HiViewColumns },
  {
    name: "testimonials",
    path: "/testimonials",
    Icon: HiChatBubbleBottomCenterText,
  },
  {
    name: "contact",
    path: "/contact",
    Icon: HiEnvelope,
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen pointer-events-none xl:pointer-events-auto">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-6 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl text-3xl xl:text-xl xl:rounded-full pointer-events-auto">
        
        {navData.map((link, i) => {
          const isActive = link.path === pathname;

          return (
            <Link
              className={`${
                isActive ? "text-accent" : "text-white/70"
              } relative flex items-center group hover:text-accent transition-all duration-300`}
              href={link.path}
              key={i}
            >
              {/* Tooltip (Premium Look) */}
              <div
                role="tooltip"
                className="absolute pr-14 right-0 hidden xl:group-hover:flex animate-fadeIn"
              >
                <div className="bg-white/90 backdrop-blur-md relative flex text-primary items-center p-[8px] px-4 rounded-[6px] shadow-lg">
                  <div className="text-[12px] leading-none font-bold uppercase tracking-[2px]">
                    {link.name}
                  </div>
                  
                  {/* Tooltip Arrow */}
                  <div className="border-solid border-l-white/90 border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Icon Container with Glow & Scale Effect */}
              <div className="relative flex items-center justify-center">
                
                {/* Active Indicator Background */}
                {isActive && (
                  <span className="absolute w-10 h-10 bg-accent/20 rounded-full blur-[8px] -z-10 animate-pulse"></span>
                )}
                
                {/* The Icon */}
                <div className={`transition-transform duration-300 group-hover:scale-110 ${isActive ? 'drop-shadow-[0_0_10px_rgba(255,87,34,0.6)]' : ''}`}>
                  <link.Icon aria-hidden />
                </div>

                {/* Active Dot Indicator */}
                {isActive && (
                   <div className="absolute -right-4 w-1.5 h-1.5 bg-accent rounded-full hidden xl:block shadow-[0_0_10px_#ff5722]"></div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;