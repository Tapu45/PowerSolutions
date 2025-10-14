import AboutUs from "./minixomponents/home/AboutUs";
import Contact from "./minixomponents/home/Contact";
import Hero from "./minixomponents/home/Hero";
import IndustryScope from "./minixomponents/home/industry-scope";
import Services from "./minixomponents/home/Services";
import Solutions from "./minixomponents/home/Solutions";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Contact/>
      <Solutions />
      <IndustryScope />
    </>
  );
}
