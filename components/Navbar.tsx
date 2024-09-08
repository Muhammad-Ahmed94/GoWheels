import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full flex absolute z-10 mx-auto">
      <nav className="pt-6 px-12 w-full sm:px-7 flex justify-between items-center">
        <Link href="/" className="flex justify-center items-center">
          <Image src="/logo.webp" alt="logo" width={90} height={90} />{" "}
          <span className="ml-1 font-bold">GoWheels</span>
        </Link>

        <CustomButton
          title="Sign In"
          containerStyles="bg-blue-400 text-white font-bold rounded"
        />
      </nav>
    </header>
  );
};

export default Navbar;
