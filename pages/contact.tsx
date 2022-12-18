import { NextSeo } from "next-seo";
import { ContactPage } from "../components/contact/ContactPage";

export default function Home() {
  return (
    <>
      <NextSeo title="Contact" />
      <ContactPage />;
    </>
  );
}
