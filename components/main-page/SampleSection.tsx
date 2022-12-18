import { Sample } from "./Sample";

export const SampleSection: React.FC = () => {
  return (
    <section className="max-w-[1100px] mx-auto pt-32">
      <p className="lg:text-[40px] text-[28px] font-Dela text-center pb-16 px-4">
        THE SAMPLE OF WHAT WE WORK ON
      </p>
      <div className="w-full sm:max-w-[640] px-4 md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:mx-w-[1536px] mx-auto max-lg:text-center">
        <Sample
          title="AR GOGGLES"
          paragraph1='The video shows how the "digital twinning" concept coupled
            with QR-based tagging and Augmented Reality (AR) interface can be
            used to aid the assembly task.'
          paragraph2="All the elements of the object being assembled are tagged with
            QR-codes. This tagging mechanism is used to help the user
            differentiate between the object's parts and aids the selection
            process."
          link="https://www.youtube.com/embed/2W3gtv_FznE"
        />
        <div className="mb-20 lg:mb-32" />
        <Sample
          title="MOBILE AR"
          paragraph1="We use mobile devices to support remote instruction, installation, and conservation of a given device."
          paragraph2="This support will takes the form of a mobile application connecting in real-time an expert working remotely with a person/employee physically present at the site (e.g. factory shop floor or in the field). By using a video stream coupled with a digital twin of a chosen device, we can extend and significantly improve cooperation between an expert and a non-expert user."
          link="https://www.youtube.com/embed/TprvKPtTz-o"
        />
        <p className="lg:px-10 font-Lexend font-medium indent-6 pt-10 px-6">
          The proposed multi-platform (iOS and Android) mobile application uses
          the AR interface to improve and significantly increase the information
          transfer between users. For this purpose, it will be possible to mark
          an object visible on the screen or to superimpose selected additional
          information such as, for example, the use of the concept of a digital
          twin, i.e. a 3D model of the serviced device combined with additional
          data.
        </p>
        <p className="lg:px-10 font-Lexend font-medium indent-6 pt-10 px-6">
          In addition, our application will allow you to create and save
          screenshots of the working screen during communication and remote
          work, as well as generate comprehensive reports on the implementation
          of remote diagnostics and support of repair processes, including user
          comments and screenshots.
        </p>
      </div>
    </section>
  );
};
