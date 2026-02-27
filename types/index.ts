import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CarCardProps {
  city_mpg: number | string;
  class: string;
  combination_mpg: number | string;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number | string;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
