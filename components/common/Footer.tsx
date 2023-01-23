import Image from "next/image";
import logo from "../../public/img/logo.png";

export const Footer: React.FC = () => {
  return (
    <footer className="min-h-[20vh] bg-gradient-primary">
      <div className="w-full sm:max-w-[640] px-4 md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:mx-w-[1536px] mx-auto">
        <div className="flex flex-wrap p-[10%] text-white font-Lexend justify-center lg:items-center">
          <div className="px-4 text-center flex flex-col items-center lg:basis-1/2">
            <Image
              src={logo}
              alt="logo-immersive-toolbox"
              className="w-1/5 pb-[3%] align-middle"
            />
            <h4 className="font-medium text-[13px]">Immersive</h4>
          </div>
          <div dir="rtl" className="flex flex-col items-center text-[13px] font-medium text-center gap-1 pb-2 lg:basis-1/2">
            <h2 className="font-Dela text-3xl mb-2">اتصلوا بنا!</h2>
            <h4>شارع ياسنا (Jasna) 8/20</h4>
            <h4>مدينة وارسو، الرمز البريدي: 00-013</h4>
            <h4>بولندا</h4>
            <h4>الهاتف المحمول: +48 669 743 708</h4>
            <h4>الهاتف المحمول: </h4>
            <h4>البريد الالكتروني: office@immersivegroup.eu</h4>
            <h4>رقم السجل التجاري: 0000853876</h4>
            <h4>رقم تعريف الضرائب: 7272844253</h4>
            <h4>رقم التعريف الإحصائي: 38671569400000</h4>
          </div>
        </div>
      </div>
    </footer>
  );
};
