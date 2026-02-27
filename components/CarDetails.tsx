"use client";

import { CarCardProps } from "@/types";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import RentModal from "./RentModal";
import { calculateRentPrice } from "@/utils";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarCardProps;
}

const displayLabels: Record<string, string> = {
  make: "Make",
  model: "Model",
  year: "Year",
  class: "Class",
  drive: "Drive",
  transmission: "Transmission",
  fuel_type: "Fuel Type",
  cylinders: "Cylinders",
  displacement: "Displacement",
};

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  const [rentOpen, setRentOpen] = useState(false);
  const rentPrice = calculateRentPrice(car);

  const filteredEntries = Object.entries(car).filter(
    ([key, value]) =>
      (key in displayLabels && typeof value !== "string") ||
      (typeof value === "string" && !value.includes("premium")),
  );

  return (
    <>
      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <div className="fixed inset-0 bg-black/40 z-10" />
          <div className="fixed inset-0 z-20 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <DialogPanel className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl relative">
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <Image src="/close.svg" alt="close" width={14} height={14} />
                </button>

                <div className="relative w-full h-48 bg-blue-50 rounded-xl overflow-hidden">
                  <Image
                    src="/pattern.webp"
                    alt="pattern"
                    fill
                    className="object-cover opacity-40"
                  />
                  <Image
                    src="/hero.webp"
                    alt={`${car.make} ${car.model}`}
                    fill
                    className="object-contain relative z-10 p-4"
                  />
                </div>

                <DialogTitle className="text-2xl font-bold capitalize mt-5">
                  {car.make} {car.model}{" "}
                  <span className="text-gray-500 text-lg">{car.year}</span>
                </DialogTitle>

                <div className="mt-4 space-y-1">
                  {filteredEntries.map(([key, value]) => (
                    <div
                      className="flex justify-between py-1.5 border-b border-gray-100 last:border-0"
                      key={key}
                    >
                      <span className="text-gray-500 text-sm">
                        {displayLabels[key] || key.replace(/_/g, " ")}
                      </span>
                      <span className="font-semibold text-sm capitalize">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={closeModal}
                    className="flex-1 py-2.5 px-4 rounded-full border border-gray-300 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-colors"
                  >
                    Go Back
                  </button>
                  <button
                    onClick={() => setRentOpen(true)}
                    className="flex-1 py-2.5 px-4 rounded-full bg-blue-500 text-white font-semibold text-sm hover:bg-blue-600 transition-colors"
                  >
                    Rent Now — ${rentPrice}/day
                  </button>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </Transition>

      <RentModal
        isOpen={rentOpen}
        closeModal={() => setRentOpen(false)}
        car={car}
        dailyRate={rentPrice}
      />
    </>
  );
};

export default CarDetails;
