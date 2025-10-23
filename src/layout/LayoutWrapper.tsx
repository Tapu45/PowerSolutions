"use client";

import { usePathname } from "next/navigation";
import Footer from "@/layout/Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  return (
    <>
      {children}
      {!isAdminRoute && <Footer />}
    </>
  );
}
