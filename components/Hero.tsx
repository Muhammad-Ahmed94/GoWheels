'use client'

import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton';

const Hero = () => {
  const handleScroll = () => {
    alert('explore more')
  }

  return (
    <div className="flex xl:flex-row flex-col relative gap-5 w-screen mx-auto">
      <div className="flex-1 pt-36 px-10">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-bold">
          Find, Book, or rent a car _ quickly and easily!
        </h1>
        <p className="text-[27px] font-light mt-5">
          Best car deals in the town...Get quickly on the road with a few clicks
        </p>

        <CustomButton
          title="Explore cars"
          containerStyles="bg-blue-500 text-white rounded mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="xl:w-full w-[90%] xl:h-full h-[590px] relative ">
          <Image
            src="/hero.webp"
            alt="hero-img"
            fill
            className="object-contain"
          />
          <div className='hero__image-overlay' />
        </div>
      </div>
    </div>
  );
}

export default Hero