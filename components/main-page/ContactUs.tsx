import Link from "next/link";

export const ContactUs: React.FC = () => {
  return (
    <div className="w-full bg-[#796c91]">
      <section className="w-full sm:max-w-[640] px-4 md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:mx-w-[1536px] mx-auto max-lg:text-center text-white min-h-[200px] flex flex-col justify-center items-center gap-2 py-8 lg:py-12 lg:gap-3 mt-20 lg:mt-32">
        <p className="font-Dela uppercase text-3xl">Ready to contact us?</p>
        <p className="font-Lexend mb-2">Send us an email.</p>
        <Link href="/contact#contact">
          <button className="border-white border-4 rounded-full font-bold font-Lexend px-10 py-1 max-w-[200px] lg:max-w-[350px] lg:px-20 hover:bg-white hover:text-[#796c91] transition-all duration-300">
            Contact
          </button>
        </Link>
      </section>
    </div>
  );
};
