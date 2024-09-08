import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { footerLinks } from '@/constants';

const Footer = () => {
  return (
    <footer className="flex flex-col flex-wrap px-10 border-t border-gray-300">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 my-5">
        <div className="flex flex-col gap-1">
          <Image src="/logo.webp" alt="logo" width={90} height={90} />
          <p>@GoWheels 2024</p>
          <p>&copy;All rights reserved</p>
        </div>

        <div className="flex flex-wrap gap-20 justify-end">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.title}>
              <h3 className="font-bold mb-2">{footerLink.title}</h3>
              <div>
                {footerLink.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    className="flex flex-col text-gray-500 border-b-2 border-dotted"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 pb-4 sm:flex-nowrap">
        <p>@2024 GoWheels. All rights reserved.</p>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Terms of Use</Link>
      </div>
    </footer>
  );
};

export default Footer;
