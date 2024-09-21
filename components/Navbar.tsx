"use client";

import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { auth, googleProvider } from "@/auth";

import CustomButton from "./CustomButton";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsub();
  });

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log(`${auth.currentUser?.displayName} you are logged in`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      if (!auth.currentUser) {
        console.log("there is no user");
      } else {
        console.log(`${auth.currentUser.displayName} is logged in.`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="w-full flex absolute z-10 mx-auto">
      <nav className="pt-6 px-12 w-full sm:px-7 flex justify-between items-center">
        <Link href="/" className="flex justify-center items-center">
          <Image src="/logo.webp" alt="logo" width={90} height={90} />{" "}
          <span className="ml-1 font-bold">GoWheels</span>
        </Link>

        {!user ? (
          <CustomButton
            title="Sign In"
            containerStyles="bg-blue-400 text-white font-bold rounded"
            handleClick={handleGoogleSignIn}
          />
        ) : (
         <div className="flex items-center gap-3">
          <p className="text-white font-bold">{auth.currentUser?.displayName}</p>
          <CustomButton title="Sign Out" containerStyles="bg-blue-400 text-white font-bold rounded" handleClick={handleSignOut} />
         </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
