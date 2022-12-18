import { ContactForm } from "./ContactForm";

export const ContactPage: React.FC = () => {
  return (
    <div id="contact" className="mt-20 mb-20 lg:mb-40">
      <p className="font-Dela text-[30px] lg:text-[40px] text-center">
        QUESTIONS OR IDEAS?
      </p>
      <p className="font-Lexend font-medium pt-2 lg:pt-4 text-center">
        Contact us!
      </p>
      <ContactForm />
    </div>
  );
};
