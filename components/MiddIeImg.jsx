import Image from "next/image";

const MiddleImg = () => {
  return (
    <div className="absolute left-[10%] bottom-[-20%] translate-x-[-50%] translate-y-[-50%] mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50 pointer-events-none select-none">
      <Image
        src="/middle-image.png"
        alt="middle cover bg"
        width={400}
        height={400}
      />
    </div>
  );
};

export default MiddleImg;
