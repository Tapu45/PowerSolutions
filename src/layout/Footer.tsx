import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted text-muted-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/logo.png"
              alt="Power Solutions Logo"
              width={150}
              height={50}
              className="mb-4"
            />
            <p className="text-sm leading-relaxed">
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
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  USPs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Innovations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Methodology
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Email: info@powersolutions.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 Tech Street, Innovation City, IC 12345</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; 2024 Power Solutions. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
