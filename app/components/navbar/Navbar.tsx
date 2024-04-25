import React from "react";
import Image from "next/image";
import hotel from "@/public/images/hotels.svg";
import travel from "@/public/images/Travel.svg";
import home from "@/public/images/Destination.svg";


export default function Navbar() {
  return (
    <>
      <div className="p-7 bg-blue-500 items-center ">
        <nav className="float-end text-white">login/signin</nav>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-around items-center p-10 shadow-xl mt-1 sm:w-full md:w-full lg:w-4/5">
          <div className="font-bold text-blue-500 text-center">
            <Image src={home} alt={"home"} />
            home
          </div>
          <div className="font-bold text-blue-500 text-center">
            <Image src={hotel} alt={"hotel"} />
            hotels
          </div>
          <div className="font-bold text-blue-500 text-center">
            <Image src={travel} alt={"travel"} />
            travel
          </div>
        </div>
      </div>
    </>
  );
}
