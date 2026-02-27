"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full flex absolute z-10 mx-auto">
      <nav className="pt-6 px-6 sm:px-10 w-full flex justify-between items-center">
        <Link href="/" className="flex justify-center items-center">
          <Image src="/logo.webp" alt="logo" width={90} height={90} />
          <span className="ml-1 font-bold text-lg">GoWheels</span>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
