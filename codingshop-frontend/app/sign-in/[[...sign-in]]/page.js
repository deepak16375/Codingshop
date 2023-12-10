import { Login } from "@/public";
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 h-screen pt-20 pl-10 flex flex-col gap-16 justify-center">
        <SignIn/>
      </div>
      <div className="w-1/2 h-screen">
        <div className="w-full h-1/2 flex justify-center items-center">
          <h1 className=" text-center text-5xl">
            We're thrilled to have you back!
          </h1>
        </div>
        <div className="w-full h-1/2 bg-white overflow-hidden justify-center flex">
          <Image src={Login} width={500} height={500} className=" bg-cover" />
        </div>
      </div>
    </div>
  );
};

export default page;
