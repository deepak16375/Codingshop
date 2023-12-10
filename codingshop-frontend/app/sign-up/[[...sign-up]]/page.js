import { signup } from "@/public";
import Image from "next/image";
import React from "react";
import { SignUp } from "@clerk/nextjs";
const page = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 h-screen pt-20 pl-10 flex flex-col gap-16 justify-center">
      <SignUp />
      </div>
      <div className="w-1/2 h-screen">
        <div className="w-full h-1/2 flex justify-center items-center">
          <h1 className=" w-[70%] text-center text-2xl">
          Sign up now and let's turn your keyboard into a magic wand. Your coding adventure starts here!
          </h1>
        </div>
        <div className="w-full h-1/2 bg-white overflow-hidden justify-center flex">
          <Image src={signup} width={500} height={500} className=" bg-cover" />
        </div>
      </div>
    </div>
  );
};

export default page;
