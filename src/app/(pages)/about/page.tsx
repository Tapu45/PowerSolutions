import Concept from "@/app/minixomponents/home/Concept";
import Vision from "@/app/minixomponents/home/Vision";
import Innovation from "@/app/minixomponents/home/Innovation";
import Journey from "@/app/minixomponents/home/Journey";
import Mission from "@/app/minixomponents/home/Mission";
import AboutUs from "@/app/minixomponents/home/AboutUs";

export default function About() {
  return (
    <>
      {/* Hero Video Banner */}
      <div className="relative w-full h-[340px] md:h-[580px] overflow-hidden flex items-center justify-center pt-20 md:pt-20">
        <video
          className="w-full h-full object-cover"
          src="/Contact-Us.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <AboutUs />
      <Concept />
      <Vision />
      <Innovation />
      <Journey />
      <Mission />
    </>
  );
}
