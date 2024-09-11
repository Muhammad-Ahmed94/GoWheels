import { CarCardProps } from '@/types';
import { Button, Dialog, DialogPanel, DialogTitle, Transition } from '@headlessui/react';
import React from 'react'
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
          className="relative z-10 focus:outline-none"
          onClose={closeModal}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="absolute inset-0 w-screen h-screen bg-black bg-opacity-30 rounded-lg" />
            <div className="flex min-h-full items-center justify-center p-4 z-10">
              <DialogPanel
                transition
                className="w-1/3 max-w-md h-[90vh] rounded-xl bg-black bg-opacity-30 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
              >
                <DialogTitle
                  as="h3"
                  className="text-base/7 font-medium text-white"
                >
                  {make.toUpperCase()}_{model.toUpperCase()}_{year}
                </DialogTitle>
                <div className="mt-2 text-sm/6 text-white/50 ">
                  <Image
                    src="/hero.webp"
                    alt="car-image"
                    fill
                    className="object-contain relative"
                  />

                  <ul className="list-none flex flex-col gap-4 text-lg justify-start items-start">
                    <li>Mileage: {city_mpg}</li>
                    <li>Drive Mode: {drive.toUpperCase()}</li>
                    <li>
                      Gear Shift:{" "}
                      {transmission === "a" ? "Automatic" : "Manual"}
                    </li>
                    <li>Combination: {combination_mpg}</li>
                    <li>Cylinder: {cylinders}</li>
                    <li>Engine Displacement: {displacement}</li>
                    <li>Fuel Type: {fuel_type}</li>
                    <li>Highway MPG: {highway_mpg}</li>
                    <li>Vehicle Class: {vehicle_class}</li>
                  </ul>
                </div>
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
      {/* {isOpen && (
        <div className='relative h-screen w-screen bg-black bg-opacity-30 flex z-10'>
            <div className='fixed inset-0 bg-white/25 rounded-lg h-8 w-10 p-2 z-20'>
                <h1>hey there</h1>
                <CustomButton title='close' containerStyles='bg-blue-500 rounded-lg text-white' handleClick={closeModal} />
            </div>
        </div>
    )} */}
    </>
  );
}

export default CarDetails