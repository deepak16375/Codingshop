import { footerlogo } from "@/public";
import Image from "next/image";
import React from "react";
const Footer = () => {
  return (
    <section className=" w-full min-h-[45vh] bg-[#9381FF] text-white px-16 py-10 -z-50">
      <div className=" flex gap-20 flex-col justify-center text-center lg:text-start lg:flex-row  ">
        <div className="flex flex-col gap-4 w-full lg:w-[30%] ">
          <Image src={footerlogo} width={50} height={50} />
          <p className=" text-sm">
            Unlock the world of coding with codingshop, your go-to destination
            for free online coding workshops! Whether you're a budding
            programmer or an experienced developer, our platform connects you
            with a diverse range of hands-on workshops, covering everything from
            beginner basics to advanced coding techniques.
          </p>
        </div>
        <div className="  flex flex-col gap-2 w-full lg:w-[20%]">
          <p className=" text-lg font-bold">Use Codingshop</p>
          <p className=" text-xs">Host a workshop</p>
          <p className=" text-xs">Pricing</p>
          <p className=" text-xs">Feedback</p>
          <p className=" text-xs">Sitemap</p>
          <p className=" text-xs">About Us</p>
          <p className=" text-xs"> FAQs</p>
        </div>
        <div className="  flex flex-col gap-2 w-full lg:w-[20%]">
          <p className="  text-lg font-bold">Find Workshops</p>
          <p className=" text-xs">Java </p>
          <p className=" text-xs"> JavaScript </p>
          <p className=" text-xs"> Node js </p>
          <p className=" text-xs">React js</p>
          <p className=" text-xs">API</p>
        </div>
        <div className="   flex flex-col gap-5 w-full lg:w-[20%]">
          <p className=" text-lg font-bold">Connect with us</p>
          <p className=" text-xs">Contact Support</p>
          <p className=" text-xs"> Twitter</p>
          <p className=" text-xs">Facebook</p>
          <p className=" text-xs">LinkedIn</p>
          <p className=" text-xs"> Instagram</p>
        </div>
      </div>
      <div className=" text-center mt-24 pt-5  border-t-2 flex justify-center items-center">
        <p>Designed and Developed by Deepak</p>
      </div>
    </section>
  );
};

export default Footer;
