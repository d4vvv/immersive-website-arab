import { ContactForm } from "./ContactForm";

export const ContactPage: React.FC = () => {
  return (
    <div id="contact" className="mt-20 mb-20 lg:mb-40 rtl">
      <p className="font-Dela text-[30px] lg:text-[40px] text-center">
      أسئلة أو أفكار؟
      </p>
      <p className="font-Lexend font-medium pt-2 lg:pt-4 text-center">
      اتصلوا بنا!
      </p>
      <ContactForm />
    </div>
  );
};
