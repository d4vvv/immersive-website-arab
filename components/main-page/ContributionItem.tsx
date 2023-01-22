import Link from "next/link";

interface ContributionItemProps {
  title: string;
  subTitle: string;
  description: string;
  authors: string;
  link: string;
}

export const ContributionItem: React.FC<ContributionItemProps> = ({
  title,
  subTitle,
  description,
  authors,
  link,
}) => {
  return (
    <div className="px-8 py-12 lg:py-8 shadow-[2px_2px_12px_rgba(0,0,0,0.3)] flex gap-6 lg:gap-8 flex-col lg:flex-row">
      <div className="flex flex-col gap-8 lg:gap-4 lg:basis-[30%]">
        <p dir="rtl" className="font-Dela text-3xl uppercase rtl">{title}</p>
        <p dir="rtl" className="font-Lexend font-semibold text-justify lg:text-left rtl">
          {subTitle}
        </p>
        <hr className="border-[#796c91] border-4 w-1/2 my-4 lg:mt-4"></hr>
      </div>
      <div className="flex flex-col gap-8 lg:gap-4 lg:basis-[70%]">
        <p dir="rtl" className="font-Lexend text-justify">{description}</p>
        <p dir="rtl" className="font-Lexend text-xs text-justify">{authors}</p>
        <p dir="rtl" className="font-Lexend text-sm text-right">
        موجود النص الكامل{" "}
          <span className="text-[#796c91]">
            <Link href={link}>هنا</Link>
          </span>
        </p>
      </div>
    </div>
  );
};
