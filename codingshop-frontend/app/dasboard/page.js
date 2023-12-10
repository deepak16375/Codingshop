
import Hero from "@/components/Hero";
import HostWorkshop from "@/components/HostWorkshop";
import Newsletter from "@/components/Newsletter";
import Personalisation from "@/components/Personalisation";
import PopularWorkshop from "@/components/PopularWorkshop";
import Testimonials from "@/components/Testimonials";
import WorkshopCircles from "@/components/WorkshopCircles";
import React from "react";

const page = () => {
  return (
    <div>
      <section className="w-full h-screen">
        <Hero />
      </section>
      <section className="w-full h-40">
        <WorkshopCircles />
      </section>
      <section id="workshop" className="w-full h-screen">
        <PopularWorkshop />
      </section>
      <section className="w-full h-screen">
        <Personalisation />
      </section>
      <section className="w-full h-screen">
        <HostWorkshop />
      </section>
      <section className="w-full h-screen">
        <Testimonials />
      </section>
      <section className="w-full h-screen">
        <Newsletter />
      </section>
  
    </div>
  );
};

export default page;
