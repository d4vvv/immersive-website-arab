import { ContributionItem } from './ContributionItem'

export const Contribution: React.FC = () => {
  return (
    <section className='max-w-[1100px] mx-auto pt-32'>
      <p
        dir='rtl'
        className='lg:text-[40px] text-[28px] font-Dela text-center pb-16 px-4 rtl'
      >
        مشاركتنا العلمية والبراعة
      </p>
      <div className='w-full sm:max-w-[640] px-4 md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:mx-w-[1536px] mx-auto max-lg:text-center flex flex-col gap-8'>
        <ContributionItem
          title='مارس'
          subTitle='نظام الواقع المعزز المحمول متعدد المنصات لتعليمات مشتركة عن بعد ودعم التثبيت باستخدام توأم رقمي.'
          description='يصف هذا المقال نظام الواقع المعزز المحمول متعدد المنصات والمستخدمين الذي يسمح بمشاركة فورية عن بعد في
          استخدام فكرة توأم رقمي. بفضل خدمات "كلاود" يستطيع المستخدمون تلاعب وتبادل المعلومات باستخدام فكرة توأم
          رقمي مطبّقة كنموذج ثلاثية الأبعاد التفصيلي ومتعدد المكونات. نناقش أيضًا التزامات المتعلقة بالتخطيط وتحليل
          الوظائف المأخوذة باستخدام منهجية تخطيط هندسي وفحص الاستفادة لدى نظامنا عن طريق التجارب.'
          authors='س.ك. تاديا، د. يانيك، ب. ستاهورا، م. توميتسكي، ك. كسيونشتاك وك. والاس، "مارس: نظام الواقع المعزز المحمول ومتعدد
          المنصات لتعليمات مشتركة عن بعد ودعم التثبيت باستخدام فكرة توأم رقمي"، 2022 مؤتمر IEEE في الواقع الافتراضي
          والملخصات والمشاغل المتعلقة بواجهة مستخدمي نمذجة ثلاثية الأبعاد (VRW)، 2022، الصفحات: 373-380، رقم doi:
          10.1109/VRW55335.2022.00083.'
          link='https://ieeexplore.ieee.org/document/9757630'
        />
        <ContributionItem
          title='تخطيط ARQ:'
          subTitle='نظام الواقع المعزز لتدريب التركيب المقوّى بترقيم "الاستجابة السريعة" وهندسة ثلاثية الأبعاد لنموذج القيمة.'
          description='تتمّ عملية تركيب الأغراض تكرارا إثناء طيلة القيمة. لمنع ضرر القيمة، ضروري القيام بتدريب مناسب لتوفير فاعلية
          العملية وإدارة القيمة بشكل صحيح. إذن، تبحث الصناعة باستمرار عن أحسن حلول التدريب لتقليل التكاليف وتكثير
          الفاعلية في تركيب الوظيفة. هنا، نعرض نظام الواقع المعزز لدعم هذه الجهود باستخدام ترقيم "الاستجابة السريعة"
          ونمذجة ثلاثية الأبعاد. وكذلك نصف تخطيط النظام باستخدام هندسة منهجية التخطيط.'
          authors='س.ك. تاديا، د. يانيك، ب. ستاهورا، م. توميتسكي وك. والاس، "تخطيط ARQ: نظام الواقع المعزز لتركيب التدريب

          4
          المقوّى بترقيم "الاستجابة السريعة" وهندسة ثلاثية الأبعاد لنموذج القيمة" 2022 مؤتمر IEEE في الواقع الافتراضي
          والملخصات والمشاغل المتعلقة بواجهة مستخدمي نموذجية ثلاثية الأبعاد (VRW)، 2022، الصفحات: 466-471،
          رقم doi: 10.1109/VRW55335.2022.00103.'
          link='https://ieeexplore.ieee.org/document/9757639'
        />
      </div>
    </section>
  )
}
