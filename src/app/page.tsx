import Image from "next/image";
import Navbar from "../layout/Navbar"; // Import the Navbar component
import Hero from "./minixomponents/home/Hero";
import Vision from "./minixomponents/home/Vision";
import Innovation from "./minixomponents/home/Innovation";
import Footer from "@/layout/Footer";
import Concept from "./minixomponents/home/Concept";
import Mission from "./minixomponents/home/Mission";
import Journey from "./minixomponents/home/Journey";

export default function Home() {
  return (
    <>
    
      <Hero />
      <Concept />
      <Vision />
      <Innovation />
      <Journey />
      <Mission />
   
    </>
  );
}