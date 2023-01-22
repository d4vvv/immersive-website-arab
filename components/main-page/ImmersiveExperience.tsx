import { ExpBlock } from "./ExpBlock";
import img1 from "../../public/img/undraw_virtual_reality_y5ig.svg";
import img2 from "../../public/img/undraw_modern_design_v3wv.svg";
import img3 from "../../public/img/undraw_teaching_f1cm.svg";

export const ImmersiveExperience: React.FC = () => {
  return (
    <section id="about">
      <h2 dir='rtl' className="font-Dela uppercase text-[28px] lg:text-[40px] text-center mt-[3%] py-16 rtl">
        IMMERSIVE تجربة 
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:max-w-[1100px] mx-auto">
        <ExpBlock
          imgSrc={img1}
          title="IMMERSIVE منصة"
          text="ننشئ منصتنا لتكنولوجيا الواقع المعزز باستخدام محرك ألعاب &quot;يونيتي&quot; الذي يسمح لنا بالتطوير، فحوصات وتطبيق
          حلول ممكنة أكثر على مستوى هيئات الواقع المعزز في نفس الوقت. نركّز في الغالب على مايكروسوفت هولولينس
          2، هواتف ذكية وحواسب لوحية."
        />
        <ExpBlock
          imgSrc={img2}
          title="تخطيط مركّز على الإنسان"
          text="واجهة تكنولوجيا الواقع الافتراضي والمعزز هي أساس التقنيات المساعِدة. لذلك نركّز كثيراّ على المستخدمين. نطوّر
          أجهزتنا عن طريق أفضل ممارسات وبحوث وفقًا للتخطيط المركّز على الإنسان وذلك ما يسمح لنا بتكيّف أجهزتنا
          بصورة أوسع وأقل إشكالية من قبل ممارسين ومستخدمين صناعيين."
        />
        <ExpBlock
          imgSrc={img3}
          title="البحث"
          text="يعتمد عملنا على نتائج البحوث التي تستخدم لتحليل إشارات فيزيولوجية لاكتشاف التغيرات في ظروف المؤثرة لدى
          المتدربين."
        />
      </div>
    </section>
  );
};
