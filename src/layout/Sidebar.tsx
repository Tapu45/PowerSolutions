"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  FileText,
  Mail,
  Briefcase,
  LogOut,
  ChevronLeft,
  ChevronRight,
  User,
  Settings,
} from "lucide-react";

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

export default function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  const pathname = usePathname();

  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
      badge: null,
    },
    {
      title: "Blogs",
      icon: FileText,
      href: "/admin/blog",
      badge: null,
    },
    {
      title: "Contact Responses",
      icon: Mail,
      href: "/admin/contacts",
      badge: "new",
    },
    {
      title: "Careers",
      icon: Briefcase,
      href: "/admin/careers",
      badge: null,
    },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 80 : 280 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed left-0 top-0 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 z-40 flex flex-col"
    >
      {/* Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200 dark:border-gray-800">
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0B8FD6] to-[#1BCDC5] flex items-center justify-center">
              <span className="text-white font-bold text-sm">PN</span>
            </div>
            <span className="font-bold text-gray-900 dark:text-white">
              Power Solutions
            </span>
          </motion.div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          ) : (
            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-2">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-3 py-3 rounded-lg transition-all
                    ${
                      active
                        ? "bg-gradient-to-r from-[#0B8FD6] to-[#1BCDC5] text-white shadow-lg"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }
                  `}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {!isCollapsed && (
                    <>
                      <span className="flex-1 font-medium">{item.title}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs rounded-full bg-red-500 text-white">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile & Logout */}
      <div className="border-t border-gray-200 dark:border-gray-800 p-4 space-y-2">
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-800"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0B8FD6] to-[#1BCDC5] flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                Admin User
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                info@power-n.in
              </p>
            </div>
          </motion.div>
        )}
        <button
          onClick={() => {
            localStorage.removeItem("user");
            window.location.href = "/login";
          }}
          className={`
            w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all
            text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20
            ${isCollapsed ? "justify-center" : ""}
          `}
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </motion.aside>
  );
}
