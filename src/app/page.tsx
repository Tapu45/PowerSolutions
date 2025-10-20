import AboutUs from "./minixomponents/home/AboutUs";
import Compmetencies from "./minixomponents/home/Compmetencies";
import Contact from "./minixomponents/home/Contact";
import Hero from "./minixomponents/home/Hero";
import IndustryScope from "./minixomponents/home/industry-scope";
import Innovation from "./minixomponents/home/Innovation";
import Innovations from "./minixomponents/home/Innovations";
import Services from "./minixomponents/home/Services";
import Solutions from "./minixomponents/home/Solutions";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />

      <Solutions />
      <IndustryScope />
      <Compmetencies />
      <Innovations/>
      <Contact />
    </>
  );
}
