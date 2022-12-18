import { ExpBlock } from "./ExpBlock";
import img1 from "../../public/img/undraw_virtual_reality_y5ig.svg";
import img2 from "../../public/img/undraw_modern_design_v3wv.svg";
import img3 from "../../public/img/undraw_teaching_f1cm.svg";

export const ImmersiveExperience: React.FC = () => {
  return (
    <section id="about">
      <h2 className="font-Dela uppercase text-[28px] lg:text-[40px] text-center mt-[3%] py-16">
        Immersive Experience
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:max-w-[1100px] mx-auto">
        <ExpBlock
          imgSrc={img1}
          title="IMMERSIVE PLATFORM"
          text="We build our AR platform using Unity game engine that allows us rapidly develop, test and deploy the most feasible soultions to a range of AR enviroments at once. We are focusing mostly on Microsoft HoloLens2, smartphones and tablet devices."
        />
        <ExpBlock
          imgSrc={img2}
          title="HUMAN-CENTERED DESIGN"
          text="As VR and AR interfaces are in their very core assistive technologies, we are putting a lot of emphasis on the users. We are developing our tools with the best practices and research regarding human-centered design. This allows for the wider and less uncertain prone adaptation of our tools by the practitioners and industry users."
        />
        <ExpBlock
          imgSrc={img3}
          title="RESEARCH"
          text="We base our work on the research results that use the analysis of physiological signals for the detection of changes of the affective conditions of the trainees."
        />
      </div>
    </section>
  );
};
