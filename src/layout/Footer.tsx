import React from "react";
import Link from "next/link";
import { Linkedin, Facebook, Youtube } from "lucide-react";
import CircularText from "@/components/animation/Circular-Text";

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted text-muted-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand / Circular Text */}
          <div className="flex flex-col items-center md:items-start">
            <CircularText
              text="IDENTIFY.IMPLEMENT.INTENSIFY."
              spinDuration={20}
              onHover="speedUp"
              className="text-blue-400"
              logoSrc="/logo-clean.png"
              logoAlt="Power Solutions"
            />
            <p className="text-sm leading-relaxed mt-6 text-center md:text-left">
              Power Solutions delivers innovative technology solutions to
              empower businesses worldwide. Specializing in ERP systems,
              application development, and business consulting.
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
                  className="hover:text-primary transition-colors"
                >
                  Who we are
                </Link>
              </li>
              <li>
                <Link
                  href="/creators"
                  className="hover:text-primary transition-colors"
                >
                  The Creators
                </Link>
              </li>
              <li>
                <Link
                  href="/credentials"
                  className="hover:text-primary transition-colors"
                >
                  Our Credentials
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/innovations"
                  className="hover:text-primary transition-colors"
                >
                  Innovations
                </Link>
              </li>
              <li>
                <Link
                  href="/methodology"
                  className="hover:text-primary transition-colors"
                >
                  Methodology
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Follow Us
            </h3>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-primary transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-primary transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Contact
              </h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <a
                    href="tel:+919310567216"
                    className="hover:text-primary transition-colors"
                  >
                    +91-9310567216
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+911141053409"
                    className="hover:text-primary transition-colors"
                  >
                    +91-11-41053409
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@power-n.in"
                    className="hover:text-primary transition-colors"
                  >
                    info@power-n.in
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Offices (Rightmost) with Map */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Offices
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Bhubaneswar, India</li>
              <li>New Delhi, India</li>
              <li>Registered Office</li>
              <li>Brahmapur, India</li>
            </ul>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © [solutions]n 2022-2025 | All Rights Reserved
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm">
            <Link
              href="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-foreground/30">|</span>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
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
