import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none relative">
      <Image
        src="/avatar.png"
        alt="avatar"
        width={1200}
        height={800}
        className="translate-z-0 w-full h-full object-contain"
      />
      {/* Shadow overlay to blend bottom of avatar into the dark bg */}
      <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default Avatar;