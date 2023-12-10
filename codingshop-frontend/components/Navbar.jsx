'use client'
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { Fade as Hamburger } from 'hamburger-react'
import { useClerk } from '@clerk/clerk-react';
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { user } = useClerk();
  const [isOpen, setOpen] = useState(false);

  // Use the 'user' object directly to check if the user is logged in
  const loggedIn = user !== null;

  return (
    <nav className="w-full h-[11vh] bg-white flex items-center justify-between border border-b-1 fixed top-0 z-50">
      <div className="flex items-center gap-20">
        <div className="pl-20">
          <Link href="/">
            <Image src="./Logo.svg" width={80} height={80} alt="logo" />
          </Link>
        </div>
        <div className="relative max-lg:hidden">
          <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none ">
            <CiSearch />
          </div>
          <input
            type="text"
            placeholder="Search for workshop"
            className="pl-8 pr-4 py-3 rounded-full border focus:outline-none focus:ring focus:border-[#9381FF]"
          />
        </div>
      </div>
      <div className="lg:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <div className="mr-20 flex items-center gap-10 max-lg:hidden ">
        <Link href="/Workshops" className="text-black font-bold">
          Find workshops
        </Link>
        <Link href="/WorkshopListing" className="text-black font-bold">
          Host workshop
        </Link>
        {loggedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <>
            <Link href="/sign-in" className="text-[#9381FF] font-bold">
              Sign In
            </Link>
            <button className="bg-[#9381FF] text-white px-4 py-2 rounded-xl">
              <Link href="/sign-up">Sign Up</Link>
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
