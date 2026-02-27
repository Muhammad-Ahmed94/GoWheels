"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import CarCard from "./CarCard";
import { fetchCars } from "@/utils";
import { CarCardProps } from "@/types";

const CarsSection = () => {
  const [cars, setCars] = useState<CarCardProps[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadCars = async (model: string, sliceCount?: number) => {
    setLoading(true);
    setError(false);
    try {
      const data = await fetchCars(model);
      if (Array.isArray(data) && data.length > 0) {
        setCars(sliceCount ? data.slice(0, sliceCount) : data);
      } else {
        setCars([]);
        setError(true);
      }
    } catch {
      setError(true);
      setCars([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadCars("corolla", 3);
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      loadCars(searchQuery.trim());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div
      id="cars-catalogue"
      className="mt-10 px-6 sm:px-10 w-full max-w-[1440px] mx-auto pb-10"
    >
      <div className="flex flex-col justify-start items-start gap-2.5">
        <h1 className="text-3xl sm:text-4xl font-bold">Cars Catalogue</h1>
        <p className="text-md text-gray-500">You like — we provide</p>

        <div className="flex w-full max-w-xl items-center border border-gray-300 rounded-lg bg-white shadow-sm overflow-hidden mt-2">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            type="text"
            className="flex-1 p-3 focus:outline-none bg-transparent text-sm"
            placeholder="e.g. civic, corolla, a4..."
          />
          <button
            type="button"
            onClick={handleSearch}
            className="p-3 hover:bg-gray-100 transition-colors"
          >
            <Image src="/mag-glass.svg" alt="search" width={24} height={24} />
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : error || cars.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-gray-500">
          <p className="text-lg font-semibold">No cars found</p>
          <p className="text-sm mt-1">
            Try searching for a different car model
          </p>
        </div>
      ) : (
        <section className="mt-6 border-t border-gray-200 pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
            {cars.map((car, index) => (
              <CarCard key={`${car.make}-${car.model}-${index}`} car={car} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default CarsSection;
