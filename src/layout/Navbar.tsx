"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (item: string) => {
    setDropdownOpen(dropdownOpen === item ? null : item);
  };

  const slugify = (text: string) =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

  const navItems = [
    {
      name: "Home",
      subItems: [],
      route: "/",
      color: "#0B8FD6",
    },
    {
      name: "Services",
      subItems: [
        "ERP Consulting Service",
        "Business Consulting Process",
        "Application Development",
        "Transformation Service",
        "Maintenance and Development",
      ],
      route: "/services",
      color: "#1BCDC5",
    },
    {
      name: "USPs",
      subItems: ["BYOS", "BYBS", "BIBD", "RYRO"],
      route: "/usps",
      color: "#D6CE0B",
    },
    {
      name: "Innovations",
      subItems: ["ERP Bugs", "Hukehu", "BIBD Labs"],
      route: "/innovations",
      color: "#8B2121",
    },
    {
      name: "Methodology",
      subItems: [],
      route: "/methodology",
      color: "#0B8FD6",
    },
  ];

   return (
     <motion.nav
       initial={{ y: -100 }}
       animate={{ y: 0 }}
       transition={{ duration: 0.6, ease: "easeOut" }}
       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-gray-100/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg"
            : "bg-gray-200/90 backdrop-blur-sm border-b border-gray-200/30"
        }
        md:shadow-none md:border-b-0
        ${
          // Always white bg, no border, no shadow on mobile
          "bg-white border-none shadow-none backdrop-blur-none lg:bg-gray-200/90"
        }
      `}
     >
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
         <div className="flex justify-between items-center h-20">
           {/* Logo - Enhanced for better visibility */}
           <motion.div
             className="flex-shrink-0"
             whileHover={{ scale: 1.05 }}
             transition={{ type: "spring", stiffness: 300 }}
           >
             <Link href="/">
               <div className="relative">
                 <img
                   src="/logo.png"
                   alt="Power Solutions Logo"
                   className="h-16 w-auto transition-all duration-300 cursor-pointer drop-shadow-sm"
                 />
               </div>
             </Link>
           </motion.div>

           {/* Desktop Nav - Enhanced with colors and underline effects */}
           <div className="hidden lg:flex items-center space-x-1">
             {navItems.map((item, index) => (
               <motion.div
                 key={item.name}
                 className="relative"
                 initial={{ opacity: 0, y: -20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: index * 0.1, duration: 0.5 }}
                 onMouseEnter={() => setDropdownOpen(item.name)}
                 onMouseLeave={() => setDropdownOpen(null)}
               >
                 <Link href={item.route}>
                   <motion.button
                     className="relative px-6 py-3 text-gray-800 font-semibold text-md group flex items-center transition-all duration-300"
                     whileHover={{ y: -2 }}
                     whileTap={{ scale: 0.98 }}
                     transition={{ duration: 0.2 }}
                     onClick={(e) => {
                       if (item.subItems.length > 0) {
                         e.preventDefault();
                         toggleDropdown(item.name);
                       }
                     }}
                   >
                     <motion.span
                       className="relative z-10 transition-colors duration-300"
                       whileHover={{ color: item.color }}
                     >
                       {item.name}
                     </motion.span>
                     {item.subItems.length > 0 && (
                       <motion.div
                         animate={{
                           rotate: dropdownOpen === item.name ? 180 : 0,
                         }}
                         transition={{ duration: 0.3 }}
                         className="ml-2"
                       >
                         <ChevronDown className="h-4 w-4" />
                       </motion.div>
                     )}
                     <span
                       className="pointer-events-none absolute bottom-1 left-0 h-1 rounded-full w-0 group-hover:w-full transition-[width] duration-300"
                       style={{ backgroundColor: item.color }}
                     />
                   </motion.button>
                 </Link>

                 <AnimatePresence>
                   {dropdownOpen === item.name && item.subItems.length > 0 && (
                     <motion.div
                       initial={{ opacity: 0, y: -10, scale: 0.95 }}
                       animate={{ opacity: 1, y: 0, scale: 1 }}
                       exit={{ opacity: 0, y: -10, scale: 0.95 }}
                       transition={{ duration: 0.2, ease: "easeOut" }}
                       className="absolute top-full w-80 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden mt-2"
                       style={{
                         backdropFilter: "blur(20px)",
                         WebkitBackdropFilter: "blur(20px)",
                       }}
                     >
                       <div className="p-3">
                         {item.subItems.map((subItem, subIndex) => (
                           <motion.button
                             key={subItem}
                             onClick={() =>
                               router.push(`${item.route}/${slugify(subItem)}`)
                             }
                             className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-800 rounded-lg transition-all duration-300 relative overflow-hidden w-full text-left font-medium group cursor-pointer"
                             initial={{ opacity: 0, x: -10 }}
                             animate={{ opacity: 1, x: 0 }}
                             transition={{ delay: subIndex * 0.05 }}
                             whileHover={{ x: 8 }}
                           >
                             <span className="relative z-10">{subItem}</span>
                             <span
                               className="pointer-events-none absolute bottom-1 left-0 h-1 rounded-full w-0 group-hover:w-full transition-[width] duration-300"
                               style={{ backgroundColor: item.color }}
                             />
                           </motion.button>
                         ))}
                       </div>
                     </motion.div>
                   )}
                 </AnimatePresence>
               </motion.div>
             ))}
           </div>

           {/* Mobile Menu Button */}
           <motion.div
             className="lg:hidden"
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
           >
             <button
               onClick={() => setIsOpen(!isOpen)}
               className="p-2 text-gray-800 hover:text-blue-600 transition-colors duration-200"
             >
               <motion.div
                 animate={{ rotate: isOpen ? 180 : 0 }}
                 transition={{ duration: 0.3 }}
               >
                 {isOpen ? (
                   <X className="h-6 w-6" />
                 ) : (
                   <Menu className="h-6 w-6" />
                 )}
               </motion.div>
             </button>
           </motion.div>
         </div>

         {/* Mobile Nav - Enhanced with colors */}
         <AnimatePresence>
           {isOpen && (
             <motion.div
               initial={{ opacity: 0, height: 0 }}
               animate={{ opacity: 1, height: "auto" }}
               exit={{ opacity: 0, height: 0 }}
               transition={{ duration: 0.3, ease: "easeInOut" }}
               className="lg:hidden overflow-hidden"
             >
               <div
                 className="px-2 pt-4 pb-6 space-y-2 bg-white border-t border-gray-200"
                 style={{
                   backdropFilter: "blur(20px)",
                   WebkitBackdropFilter: "blur(20px)",
                 }}
               >
                 {navItems.map((item, index) => (
                   <motion.div
                     key={item.name}
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: index * 0.1 }}
                   >
                     {item.subItems.length === 0 ? (
                       <Link href={item.route}>
                         <motion.button
                           className="w-full text-left px-4 py-3 text-gray-700 rounded-lg font-semibold transition-all duration-300 flex items-center justify-between group relative overflow-hidden cursor-pointer"
                           whileHover={{ x: 4 }}
                         >
                           <motion.span
                             className="relative z-10"
                             whileHover={{ color: item.color }}
                           >
                             {item.name}
                           </motion.span>
                           <span
                             className="pointer-events-none absolute bottom-1 left-0 h-1 rounded-full w-0 group-hover:w-full transition-[width] duration-300"
                             style={{ backgroundColor: item.color }}
                           />
                         </motion.button>
                       </Link>
                     ) : (
                       <motion.button
                         onClick={() => toggleDropdown(item.name)}
                         className="w-full text-left px-4 py-3 text-gray-700 hover:text-gray-800 rounded-lg font-semibold transition-all duration-300 flex items-center justify-between group relative overflow-hidden"
                         whileHover={{ x: 4 }}
                       >
                         <span className="relative z-10">{item.name}</span>
                         <motion.div
                           animate={{
                             rotate: dropdownOpen === item.name ? 180 : 0,
                           }}
                           transition={{ duration: 0.3 }}
                           className="relative z-10"
                         >
                           <ChevronDown className="h-4 w-4" />
                         </motion.div>
                         {/* Underline effect for mobile - Fixed positioning */}
                         <motion.div
                           className="absolute bottom-1 left-0 h-1 rounded-full"
                           style={{ backgroundColor: item.color }}
                           initial={{ width: 0 }}
                           whileHover={{ width: "100%" }}
                           transition={{ duration: 0.3, ease: "easeOut" }}
                         />
                       </motion.button>
                     )}

                     <AnimatePresence>
                       {dropdownOpen === item.name &&
                         item.subItems.length > 0 && (
                           <motion.div
                             initial={{ opacity: 0, height: 0 }}
                             animate={{ opacity: 1, height: "auto" }}
                             exit={{ opacity: 0, height: 0 }}
                             transition={{ duration: 0.2 }}
                             className="ml-4 mt-2 space-y-1"
                           >
                             {item.subItems.map((subItem, subIndex) => (
                               <motion.button
                                 key={subItem}
                                 onClick={() =>
                                   router.push(
                                     `${item.route}/${slugify(subItem)}`
                                   )
                                 }
                                 className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-800 rounded-lg transition-all duration-300 relative overflow-hidden w-full text-left font-medium"
                                 initial={{ opacity: 0, x: -10 }}
                                 animate={{ opacity: 1, x: 0 }}
                                 transition={{ delay: subIndex * 0.05 }}
                                 whileHover={{ x: 8 }}
                               >
                                 <span className="relative z-10">
                                   {subItem}
                                 </span>
                                 {/* Underline effect for mobile dropdown - Fixed positioning */}
                                 <motion.div
                                   className="absolute bottom-1 left-0 h-1 rounded-full"
                                   style={{ backgroundColor: item.color }}
                                   initial={{ width: 0 }}
                                   whileHover={{ width: "100%" }}
                                   transition={{
                                     duration: 0.3,
                                     ease: "easeOut",
                                   }}
                                 />
                               </motion.button>
                             ))}
                           </motion.div>
                         )}
                     </AnimatePresence>
                   </motion.div>
                 ))}
               </div>
             </motion.div>
           )}
         </AnimatePresence>
       </div>
     </motion.nav>
   );
};

export default Navbar;
