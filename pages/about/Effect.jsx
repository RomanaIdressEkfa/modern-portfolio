import Image from "next/image";

const Effect = () => {
  return (
    <div className="w-[200px] xl:w-[350px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10">
      <Image
        src="/heart.png"
        alt="circles"
        width={460}
        height={400}
        className="w-full h-full"
      />
    </div>
  );
};

export default Effect;