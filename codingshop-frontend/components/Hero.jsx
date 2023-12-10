"use client";
import Lottie from "lottie-react";
import React from "react";
import Animation from "../app/Animation/Animation.json";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full h-screen flex bg-white max-md:flex-col-reverse">
      <div className="w-1/2  h-screen flex  justify-center items-center">
        <div className="pl-20 flex flex-col gap-10">
          <h1 className=" text-5xl  tracking-normal font-medium q-40 leading-tight ">
            Discover, Learn, and Code Together: Your Gateway to Engaging Coding
            <br />
            <span className="text-[#9381FF] font-bold"> Workshops</span>
          </h1>
          <Link href='/sign-up'>
          <button  className="bg-[#9381FF] text-white px-4 py-3 rounded-xl w-52">
            Get started- It's Free
          </button>
          </Link>
        </div>
      </div>
      <div className="w-1/2  h-screen flex justify-center items-center">
        <Lottie loop={true} animationData={Animation} />
      </div>
    </div>
  );
};

export default Hero;
