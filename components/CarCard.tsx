import React from "react";
import { CarCardProps } from "@/types";
import CustomButton from "./CustomButton";

//* Creating an interface is must, to be able to use the props
interface CarProps {
  car: CarCardProps;
}

const CarCard = ({ car }: CarProps) => {
  const { city_mpg, make, model, year, transmission, drive } = car;

  // TODO Create car cards here
  // TODO Add heading drive, transmission, drive type, city_mpg
  return <div>CarCard</div>;
};

export default CarCard;
