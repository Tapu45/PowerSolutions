import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
  PanInfo,
  ResolvedValues,
} from "motion/react";
import { useRouter } from "next/navigation";
import { ExternalLink } from "lucide-react";

const IMGS: string[] = [
  "/assets/services/AEaas BG -N.png",
  "/assets/services/ATaas BG -N.png",
  "/assets/services/BAaas BG -N.png",
  "/assets/services/CMaas BG -N.png",
  "/assets/services/DMaas BG -N.png",
  "/assets/services/FAaas BG -N.png",
  "/assets/services/PAaas BG -N.png",
  "/assets/services/PMaas BG -N.png",
  "/assets/services/TMaas BG -N.png",
];

interface RollingGalleryProps {
  autoplay?: boolean;
  pauseOnHover?: boolean;
  images?: string[];
}

const RollingGallery: React.FC<RollingGalleryProps> = ({
  autoplay = false,
  pauseOnHover = false,
  images = [],
}) => {
  const galleryImages = images.length > 0 ? images : IMGS;
  const router = useRouter();

   const [isScreenSizeSm, setIsScreenSizeSm] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsScreenSizeSm(window.innerWidth <= 640); // Set initial value on client
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const cylinderWidth: number = isScreenSizeSm ? 1800 : 3200;
  const faceCount: number = galleryImages.length;
  const faceWidth: number = cylinderWidth / faceCount;
  const radius: number = cylinderWidth / (2 * Math.PI);

  const dragFactor: number = 0.015;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(
    rotation,
    (val: number) => `rotate3d(0,1,0,${val}deg)`
  );

  const startInfiniteSpin = (startAngle: number) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const handleUpdate = (latest: ResolvedValues) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

 const handleMouseEnter = (i: number): void => {
   if (autoplay && pauseOnHover) {
     controls.stop();
   }
   setHoveredIndex(i);
   // Center the hovered face
   const centerAngle = -(360 / faceCount) * i;
   controls
     .start({
       rotateY: centerAngle,
       transition: { duration: 0.5, ease: "easeOut" },
     })
     .then(() => {
       rotation.set(centerAngle); // Sync rotation value after animation
     });
 };

  const handleMouseLeave = (): void => {
    setHoveredIndex(null);
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  const handleExploreClick = (serviceName: string) => {
    router.push(`/services/${serviceName}`);
  };

  const getServiceName = (url: string): string => {
    const filename = url.split("/").pop() || "";
    return filename.split(" ")[0]; // e.g., "AEaas" from "AEaas BG -N.png"
  };

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <div className="absolute top-0 left-0 h-full w-[48px] z-10" />
      <div className="absolute top-0 right-0 h-full w-[48px] z-10" />
      <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {galleryImages.map((url, i) => {
            const serviceName = getServiceName(url);
            return (
              <div
                key={i}
                className="group absolute flex h-fit items-center justify-center p-[2%] [backface-visibility:hidden] md:p-[2%]"
                style={{
                  width: `${faceWidth}px`,
                  transform: `rotateY(${
                    (360 / faceCount) * i
                  }deg) translateZ(${radius}px)`,
                }}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative">
                  <img
                    src={url}
                    alt="gallery"
                    className={`pointer-events-none h-[500px] w-[900px] rounded-[18px] border-[3px] border-white object-cover transition-all duration-300 ease-out group-hover:scale-105 sm:h-[200px] sm:w-[400px] ${
                      hoveredIndex === i ? "blur-sm" : ""
                    }`}
                  />
                  {hoveredIndex === i && (
                    <button
                      onClick={() => handleExploreClick(serviceName)}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black px-0.5 py-0.5 rounded-lg font-normal hover:bg-gray-200 transition-opacity duration-300 flex items-center text-xs border border-teal-500 cursor-pointer"
                    >
                      Explore {serviceName} Service
                      <ExternalLink size={10} className="ml-1" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
