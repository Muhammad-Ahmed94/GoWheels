'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import { CarCard, Hero } from '@/components';
import { fecthCars } from '@/utils';

export default async function Home() {
  const allCars = await fecthCars();

  //* API endpoint & response data checkpoint.
  const response = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      {/* CARS CATALOGUE HEADING */}
      <div className="mt-10 px-10 w-full">
        <div className="flex flex-col justify-start items-start gap-2.5">
          <h1 className="text-4xl font-bold">Cars Catalogue</h1>
          {/* <p>We got cars you like</p> */}
          <p className="text-md text-gray-500">You like_we provide</p>

          <div className="flex w-full items-center justify-center gap-1 border border-black rounded bg-white/60">
            <input
              type="text"
              className="rounded p-2 focus:outline-none bg-white/60"
              placeholder="eg. lamborghini huracan"
            />
            <button type='submit' title="button">
              <Image
                src="/mag-glass.svg"
                alt="search-icon"
                width={30}
                height={30}
                className="rounded"
              />
            </button>
          </div>
        </div>

        {!response ? (
          <section className="mt-4 mb-8 border-t-2 border-gray-300">
            <div className="grid grid-cols-2 gap-2 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 p-2">
              {allCars.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div>
            <h4>Response failed</h4>{" "}
            {/* when project complete add spinning loading bar or error something went wrong message */}
            <p>could fecth data from api</p>
          </div>
        )}
      </div>
    </main>
  );
}
