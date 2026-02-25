import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full px-5 md:px-10 xl:px-0 xl:absolute bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 xl:bg-transparent xl:border-none transition-all duration-300 h-[70px] xl:h-[90px] flex items-center">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo - Adjusted sizes for Mobile vs Desktop */}
          <Link href="/">
            <div className="relative w-[100px] h-[22px] md:w-[140px] md:h-[30px] xl:w-[160px] xl:h-[35px]">
                <Image
                src="/logo.png"
                alt="logo"
                fill
                className="object-contain"
                priority
                />
            </div>
          </Link>

          {/* Socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;