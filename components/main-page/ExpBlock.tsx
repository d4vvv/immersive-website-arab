import Image, { StaticImageData } from "next/image";

interface ExpBlockProps {
  imgSrc: StaticImageData;
  title: string;
  text: string;
}

export const ExpBlock: React.FC<ExpBlockProps> = ({ imgSrc, title, text }) => {
  return (
    <div className="text-center mb-[5%] p-[2%] mx-4 shadow-[2px_2px_12px_rgba(0,0,0,0.3)] pb-20" dir="rtl">
      <Image
        src={imgSrc}
        alt="vr-img"
        className="w-3/5 mx-auto mb-[8%] py-[10%] px-[3%] lg:max-h-[160px]"
      />
      <h2 dir="rtl" className="font-Dela text-[28px] leading-8 lg:min-h-[100px] rtl">
        {title}
      </h2>
      <p dir="rtl" className="font-Lexend pt-[10%] px-[15%] font-medium rtl">{text}</p>
    </div>
  );
};
