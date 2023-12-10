'use client'
import React, { useState } from "react";
import { useEffect } from 'react'
import Card from "./Card";
import Image from "next/image";
import { arrow } from "@/public";
import Link from "next/link";



const BASEURL = "https://codingshop.onrender.com";
const WORKSHOP_GETALL = "workshop/getAll";

const PopularWorkshop = () => {
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    fetch(`${BASEURL}/${WORKSHOP_GETALL}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((response) => {
        setWorkshops(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="w-full h-screen pt-24 pl-20 pr-20 flex flex-col gap-5">
      <h2 className="text-2xl">
        Popular <span className="text-[#9381FF]">Workshops</span>
      </h2>
      <ul className="flex gap-5 cursor-pointer">
      <li className="text-[#9381FF]">All</li>
        <li>For you</li>
        <li>Online</li>
        <li>Offline</li>
        <li>Today</li>
        <li>This weekend</li>
        <li>Free</li>
        <li>Paid</li>
        <li>Java</li>
        <li>Python</li>
        <li>GO</li>
        <li>Java-script</li>
        <li>React</li>
      </ul>
      <div className="w-full h-screen flex flex-wrap gap-7 justify-center items-center ">
        {workshops.map((workshop) => (
          <Card
            key={workshop._id}
            title={workshop.title}
            description={workshop.description}
            image={workshop.image}
            pricing={workshop.pricing}
            date={workshop.date}
          />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link href="/Workshops">
          <button className="border p-3 px-10 flex justify-center items-center gap-5 rounded-xl">
            See more
            <Image src={arrow} width={30} height={30} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularWorkshop;