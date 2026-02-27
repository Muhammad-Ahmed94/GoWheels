"use client";

import React, { useState } from "react";
import { CarCardProps } from "@/types";
import CustomButton from "./CustomButton";
import Image from "next/image";
import CarDetails from "./CarDetails";
import { calculateRentPrice } from "@/utils";

interface CarProps {
  car: CarCardProps;
}

const CarCard = ({ car }: CarProps) => {
  const { make, model, year, transmission, drive, cylinders } = car;
  const [isOpen, setIsOpen] = useState(false);
  const rentPrice = calculateRentPrice(car);

  return (
    <div className="flex flex-col p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 group">
      <h2 className="text-xl font-bold capitalize">
        {make} {model}
      </h2>
      <span className="text-sm text-gray-500">{year}</span>

      <div className="flex items-baseline mt-4">
        <span className="text-sm font-semibold">$</span>
        <span className="text-3xl font-extrabold">{rentPrice}</span>
        <span className="text-sm text-gray-500 ml-1">/day</span>
      </div>

      <div className="relative w-full h-40 my-4">
        <Image
          src="/hero.webp"
          alt={`${make} ${model}`}
          fill
          loading="eager"
          className="object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex justify-between items-center w-full py-3 px-4 bg-white rounded-xl text-gray-500 text-sm">
        <div className="flex flex-col items-center gap-1">
          <Image
            src="/steering-wheel.svg"
            alt="transmission"
            width={20}
            height={20}
          />
          <p>{transmission === "a" ? "Auto" : "Manual"}</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image src="/tyre.svg" alt="drive" width={20} height={20} />
          <p>{drive.toUpperCase()}</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image src="/gas.svg" alt="fuel" width={20} height={20} />
          <p>{cylinders} cyl</p>
        </div>
      </div>

      <CustomButton
        title="View More"
        containerStyles="bg-blue-500 text-white rounded-full w-full mt-4 hover:bg-blue-600 hover:shadow-md transition-all duration-200"
        handleClick={() => setIsOpen(true)}
      />

      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
