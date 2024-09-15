'use client'

import React, { useState } from "react";
import { CarCardProps } from "@/types";
import CustomButton from "./CustomButton";
import Image from "next/image";
import CarDetails from "./CarDetails";

//* Creating an interface is must, to be able to use the props
interface CarProps {
  car: CarCardProps;
}

const CarCard = ({ car }: CarProps) => {
  const { city_mpg, make, model, year, transmission, drive } = car;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col justify-start items-start p-6 rounded-2xl hover:bg-white bg-slate-100 hover:shadow-md">
      <div className="flex justify-start">
        <h1 className="font-bold text-[20px] capitalize">
          {make} {model} {year}
        </h1>
      </div>

      <p className="flex self-start font-bold text-gray-700">$23 / day</p>

      <div className="relative w-full h-40 object-contain my-2 pb-2">
        <Image
          src="/hero.webp"
          alt={`${make} ${model}-image`}
          fill
          loading="eager"
          className="object-contain"
        />
      </div>

      <div className="flex justify-between items-center w-full my-2 text-gray-500 bg-white rounded-2xl p-2">
          <div className="flex flex-col gap-1 items-center">
            <Image
              src="/steering-wheel.svg"
              alt="steering-wheel-image"
              width={20}
              height={20}
            />
            <p>{transmission === "a" ? "Auto" : "Manual"}</p>
          </div>

          <div className="flex flex-col gap-1 items-center">
            <Image
              src="/tyre.svg"
              alt="tyre-image"
              width={20}
              height={20}
            />
            <p>{drive.toUpperCase()}</p>
          </div>

          <div className="flex flex-col gap-1 items-center">
            <Image
              src="/gas.svg"
              alt="gas-image"
              width={20}
              height={20}
            />
            <p>{city_mpg}mpg</p>
          </div>
      </div>

      <CustomButton title="View More" containerStyles="bg-blue-500 text-white rounded-full w-full hover:bg-blue-400 hover:shadow-md" handleClick={() => setIsOpen(true)} />

        <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
    </div>
  );
};

export default CarCard;
