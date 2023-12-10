import React from "react";

const page = (props) => {

  const { title, description, image, pricing, date, onClose } = props;
  return (
    <div className="w-full h-[1440px] pl-28 pr-28 pt-28 flex flex-col gap-4">
      <div className="w-full h-[45%] bg-slate-500 border  shadow-lg flex justify-center items-center rounded-lg ">
        <h1 className="text-6xl">Featured Image</h1>
      </div>

      <div className="w-full h-screen flex">
        <div className="w-[70%] h-screen rounded-lg ">
          <div className="w-full h-[20%] text-2xl">
            <h1 className="text-4xl">{title}</h1>
            <p className="text-lg">{date}</p>
            <p className="text-lg">Time</p>
          </div>
          <h2>Description:-</h2>
          <div className="w-full h-[70%] border rounded-lg shadow-lg p-10">
            <p className="text-xs">{description}</p>
          </div>
        </div>
        <div className=" w-[30%] pl-10 pr-10 pt-10">
          <div className="w-full h-36 border shadow-lg rounded-lg p-5 flex flex-col gap-2 ">
            <div className="w-full h-1/2 bg-slate-400 rounded-lg flex justify-start items-center pl-5 ">
              
            {pricing}
            </div>
            <button className="bg-[#9381FF] w-full py-3 rounded-lg text-white">
              Book your Spot
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
