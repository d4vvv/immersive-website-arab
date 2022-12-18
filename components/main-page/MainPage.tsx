import { ContactUs } from "./ContactUs";
import { ImmersiveExperience } from "./ImmersiveExperience";
import { SampleSection } from "./SampleSection";

export const MainPage: React.FC = () => {
  return (
    <div>
      <ImmersiveExperience />
      <SampleSection />
      <ContactUs />
    </div>
  );
};
