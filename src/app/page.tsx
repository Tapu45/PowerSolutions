import Image from "next/image";
import Navbar from "../layout/Navbar"; // Import the Navbar component
import Hero from "./minixomponents/home/Hero";

export default function Home() {
  return (
   <>
      <Navbar /> {/* Add the Navbar at the top */}
      <Hero/>
   </>
  );
}