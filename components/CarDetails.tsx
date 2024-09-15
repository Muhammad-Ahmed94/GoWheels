import { CarCardProps } from '@/types';
import { Button, Dialog, DialogPanel, DialogTitle, Transition } from '@headlessui/react';
import React, { Fragment } from 'react'
import CustomButton from './CustomButton';
import Image from 'next/image';

interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarCardProps;
}

const CarDetails = ({ isOpen, closeModal, car}: CarDetailsProps) => {
  const { city_mpg, make, model, year, transmission, drive, vehicle_class, combination_mpg, cylinders, displacement, fuel_type, highway_mpg } = car;

  return (
    <>
      <Transition show={isOpen}>
        <Dialog
          open={isOpen}
          as="div"
          className="relative z-10 focus:outline-none transition duration-300 ease-out"
          onClose={closeModal}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="absolute inset-0 w-screen h-screen bg-black bg-opacity-30 rounded-lg" />
            <div className="flex min-h-full items-center justify-center p-4 z-10">
              <DialogPanel
                transition
                className="w-1/3 max-w-md h-[90vh] rounded-xl bg-black bg-opacity-30 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
              >
                {/* top image with hero oevrlay */}
                <div className="w-full relative h-[25vh] flex justify-center items-center bg-white/90 rounded-md">
                  <Image
                    src="/pattern.webp"
                    alt="pattern-image"
                    fill
                    className="object-contain w-full absolute"
                  />
                  {/* hero image */}
                  <Image
                    src="/hero.webp"
                    alt="hero-image"
                    width={250}
                    height={250}
                    className="relative z-20 object-contain"
                  />
                </div>
                {/* 3 car sides images */}
                <div className="flex justify-between rounded mt-2 bg-white/80">
                  <Image
                    src="/hero.webp"
                    alt="side-image"
                    width={100}
                    height={100}
                    className="object-conver rounded-md"
                  />
                  <Image
                    src="/hero.webp"
                    alt="side-image"
                    width={100}
                    height={100}
                    className="object-conver rounded-md"
                  />
                  <Image
                    src="/hero.webp"
                    alt="side-image"
                    width={100}
                    height={100}
                    className="object-conver rounded-md"
                  />
                </div>
                <DialogTitle
                  as="h3"
                  className="text-lg font-bold text-white capitalize mt-4 underline"
                >
                  {make} {model} {year}
                </DialogTitle>

                {/* Car detaisl */}
                {Object.entries(car).map(([key, value]) => (
                  <div
                    className="flex justify-between gap-5 w-full text-right text-white/80"
                    key={key}
                  >
                    <h4 className="font-semibold capitalize">
                      {key.replace("_", " ")}:
                    </h4>
                    <p className="font-bold capitalize">{value}</p>
                  </div>
                ))}

                <div className="mt-4">
                  <Button
                    className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                    onClick={closeModal}
                  >
                    Go Back
                  </Button>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default CarDetails