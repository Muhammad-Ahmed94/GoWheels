"use client";

import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    const el = document.getElementById("cars-catalogue");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex xl:flex-row flex-col relative gap-5 w-full mx-auto">
      <div className="flex-1 pt-36 px-6 sm:px-10">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[44px] font-bold leading-tight">
          Find, Book, or rent a car — quickly and easily!
        </h1>
        <p className="text-xl sm:text-[27px] font-light mt-5 text-gray-600">
          Best car deals in the town. Get on the road with a few clicks.
        </p>

        <CustomButton
          title="Explore cars"
          containerStyles="bg-blue-500 text-white rounded mt-10 hover:bg-blue-600 transition-colors"
          handleClick={handleScroll}
        />
      </div>

      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="xl:w-full w-[90%] xl:h-full h-[400px] sm:h-[590px] relative">
          <Image
            src="/hero.webp"
            alt="hero"
            fill
            className="object-contain"
            loading="eager"
          />
        </div>
        <div className="hero__image-overlay">
          <Image src="/hero-bg.webp" alt="hero-overlay" fill />
        </div>
      </div>
    </div>
  );
};

export default Hero;
