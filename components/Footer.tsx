import Image from "next/image";
import Link from "next/link";
import React from "react";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col flex-wrap px-6 sm:px-10 border-t border-gray-300">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 my-5">
        <div className="flex flex-col gap-1">
          <Image src="/logo.webp" alt="logo" width={90} height={90} />
          <p>@GoWheels 2024</p>
          <p>&copy;All rights reserved</p>
        </div>

        <div className="flex flex-wrap gap-10 sm:gap-20 md:justify-end">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.title}>
              <h3 className="font-bold mb-2">{footerLink.title}</h3>
              <div className="flex flex-col gap-1">
                {footerLink.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 pb-4 text-sm text-gray-500">
        <p>@2024 GoWheels. All rights reserved.</p>
        <Link href="/" className="hover:text-gray-700 transition-colors">
          Privacy Policy
        </Link>
        <Link href="/" className="hover:text-gray-700 transition-colors">
          Terms of Use
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
