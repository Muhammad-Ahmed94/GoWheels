"use client";

import { CarCardProps } from "@/types";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import React, { Fragment, useState } from "react";

interface RentModalProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarCardProps;
  dailyRate: number;
}

const RentModal = ({ isOpen, closeModal, car, dailyRate }: RentModalProps) => {
  const [days, setDays] = useState(1);
  const [username, setUsername] = useState("");

  const handleConfirm = () => {
    if (!username.trim()) {
      alert("Please enter your name to book this car.");
      return;
    }

    alert(
      `Booking Confirmed!\n\n` +
        `Name: ${username}\n` +
        `Car: ${car.make} ${car.model} ${car.year}\n` +
        `Duration: ${days} day${days > 1 ? "s" : ""}\n` +
        `Total Fare: $${days * dailyRate}`,
    );

    setDays(1);
    setUsername("");
    closeModal();
  };

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={closeModal}>
        <div className="fixed inset-0 bg-black/40 z-30" />
        <div className="fixed inset-0 z-40 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
              <DialogTitle className="text-xl font-bold capitalize">
                Rent {car.make} {car.model}
              </DialogTitle>

              <div className="mt-5 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Days
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4, 5, 6, 7, 10, 14, 30].map((d) => (
                      <button
                        key={d}
                        onClick={() => setDays(d)}
                        className={`w-12 h-10 rounded-lg text-sm font-semibold transition-colors ${
                          days === d
                            ? "bg-blue-500 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      ${dailyRate} × {days} day{days > 1 ? "s" : ""}
                    </span>
                    <span className="font-bold text-xl">
                      ${dailyRate * days}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={closeModal}
                  className="flex-1 py-2.5 rounded-full border border-gray-300 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  className="flex-1 py-2.5 rounded-full bg-blue-500 text-white font-semibold text-sm hover:bg-blue-600 transition-colors"
                >
                  Confirm Booking
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default RentModal;
