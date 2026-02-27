import { CarCardProps } from "@/types";

export async function fetchCars(model: string = "corolla") {
  const headers = {
    "x-rapidapi-key": "b425f0c146mshdf4a181074a9a20p14ffc2jsn20ccdfe79d6c",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}`,
    { headers },
  );
  const result = await response.json();
  return result;
}

export function calculateRentPrice(car: CarCardProps): number {
  let price = 30;

  const age = new Date().getFullYear() - car.year;
  if (age <= 2) price += 25;
  else if (age <= 5) price += 15;
  else if (age <= 10) price += 5;

  if (car.cylinders >= 8) price += 30;
  else if (car.cylinders >= 6) price += 15;
  else if (car.cylinders >= 4) price += 5;

  if (car.displacement >= 4) price += 15;
  else if (car.displacement >= 3) price += 8;

  const vc = (car.class || "").toLowerCase();
  if (vc.includes("two seater") || vc.includes("minicompact")) price += 20;
  else if (vc.includes("large") || vc.includes("standard sport utility"))
    price += 12;
  else if (vc.includes("midsize") || vc.includes("small sport utility"))
    price += 8;

  return price;
}
