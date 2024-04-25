import React from "react";
import Image from "next/image";
import sm1 from "@/public/images/ri_instagram-fill (1).svg";
import sm2 from "@/public/images/uil_facebook.svg";
import sm3 from "@/public/images/ri_twitter-x-fill.svg";

export default function Footer() {
  return (
    <footer className="bg-blue-400 flex justify-around text-white mt-8 p-28">
      <div>
        <h1 className="pb-5">company</h1>
        <p>about us </p>
        <p>about us </p>
        <p>about us </p>
        <p>about us </p>
      </div>
      <div>
        <h1 className="pb-5">policies</h1>
        <p>cancellation policy</p>
        <p>cancellation policy</p>
        <p>cancellation policy</p>
      </div>
      <div>
        <h1 className="pb-5">Social Media</h1>
        <div className="flex">
          <Image src={sm1} alt={"insta"} />
          <Image src={sm2} alt={"fb"} />
          <Image src={sm3} alt={"twitter"} />
        </div>
      </div>
      <div className="items-center text-center pt-5">
        <div className=" w-20 h-20 bg-white rounded-full"></div>
        <h1 className="text-lg">Logo</h1>
      </div>
    </footer>
  );
}
