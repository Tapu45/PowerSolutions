import React from "react";
import Link from "next/link";
import { Linkedin, Facebook, Youtube } from "lucide-react";
import CircularText from "@/components/animation/Circular-Text";

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted dark:bg-[#121212] text-muted-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand / Circular Text */}
          <div className="flex flex-col items-center md:items-start">
            <CircularText
              text="identify.implement.intensify."
              spinDuration={20}
              onHover="speedUp"
              className="text-blue-400"
              logoSrc="/logo-clean.png"
              logoAlt="Power Solutions"
            />
            <p className="text-sm leading-relaxed mt-6 text-center md:text-left">
              Every granule impacts - Decompose your problem. Customize your
              approach. Deliver the ultimate solution and Ensure the
              Sustainability
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                >
                  Who we are
                </Link>
              </li>
              <li>
                <Link
                  href="/creators"
                  className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                >
                  The Creators
                </Link>
              </li>
              <li>
                <Link
                  href="/credentials"
                  className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                >
                  Our Credentials
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                >
                  Career
                </Link>
              </li>
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Offices
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Bhubaneswar, India</li>
              <li>New Delhi, India</li>
              <li>Registered Office</li>
              <li>Brahmapur, India</li>
              <li>Dubai, UAE</li>
            </ul>
          </div>

          {/* Contact Us (moved to rightmost column) */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Contact
            </h3>
            <div className="flex items-center space-x-4 mb-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href="tel:+919310567216"
                  className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                >
                  +91-9310567216
                </a>
              </li>
              <li>
                <a
                  href="tel:+911141053409"
                  className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                >
                  +91-11-41053409
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@power-n.in"
                  className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                >
                  info@power-n.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © powerNsolutions 2025 | All Rights Reserved
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm">
            <Link
              href="/privacy-policy"
              className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-foreground/30">|</span>
            <Link
              href="/terms"
              className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// ...existing code...
