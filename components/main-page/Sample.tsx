interface SampleProps {
  title: string;
  paragraph1: string;
  paragraph2: string;
  link: string;
}

export const Sample: React.FC<SampleProps> = ({
  title,
  paragraph1,
  paragraph2,
  link,
}) => {
  return (
    <div className="flex flex-wrap indent-6 max-lg:px-6">
      <div className="basis-full lg:basis-1/3 lg:pl-10">
        <h2 dir="rtl" className="font-Dela text-lg max-lg:indent-0 rtl">{title}</h2>
        <p dir="rtl" className="font-Lexend py-4 font-medium rtl">{paragraph1}</p>
        <p dir="rtl" className="font-Lexend font-medium rtl">{paragraph2}</p>
      </div>
      <div className="basis-full lg:basis-2/3 flex items-center justify-center max-lg:mt-10">
        <iframe
          className="aspect-video w-full lg:max-w-[560px] lg:min-h-[315px]"
          src={link}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
};
