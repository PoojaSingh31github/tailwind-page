"use client";
import React, { useState } from "react";
import home from "@/public/images/Destination.svg";
import hotel from "@/public/images/hotels.svg";
import travel from "@/public/images/Travel.svg";
import Input from "../components/input/page";
import search from "@/public/images/Vector.svg";
import rect1 from "@/public/images/Rectangle 904.svg";
import rect2 from "@/public/images/Rectangle 905.svg";
import rect3 from "@/public/images/Rectangle 929.svg";
import rect4 from "@/public/images/Rectangle 931.svg";
import rect5 from "@/public/images/Rectangle 933.svg";
import rect6 from "@/public/images/Rectangle 919.svg";
import rect7 from "@/public/images/Rectangle 920.svg";
import rect8 from "@/public/images/Rectangle 921.svg";
import rect9 from "@/public/images/Rectangle 918.svg";
import taxi from "@/public/images/Group 442 (1).svg";
import ellipse1 from "@/public/images/Direction.svg";
import ellipse2 from "@/public/images/icons (5) 1.svg";
import ellipse3 from "@/public/images/icons (6) 1.svg";
import ellipse4 from "@/public/images/Train.svg";
import ellipse5 from "@/public/images/Plane.svg";
import ellipse6 from "@/public/images/hotel.svg";
import ellipse7 from "@/public/images/traveler.svg";
import ellipse8 from "@/public/images/Island Protection.svg";
import destiny1 from "@/public/images/Rectangle 936.svg";
import destiny2 from "@/public/images/Rectangle 937.svg";
import destiny3 from "@/public/images/Rectangle 938.svg";
import destiny4 from "@/public/images/Rectangle 939.svg";
import girl from "@/public/images/26128 2.svg";
import rect10 from "@/public/images/Rectangle 935.svg";
import sm1 from "@/public/images/ri_instagram-fill (1).svg";
import sm2 from "@/public/images/uil_facebook.svg";
import sm3 from "@/public/images/ri_twitter-x-fill.svg";

import Image from "next/image";
import Button from "../components/button/page";

const Page = () => {
  const [location, setLocation] = useState("New Delhi");
  return (
    <div className="container mx-auto px-8 ">
      <div className="p-7 bg-blue-500 items-center">
        <nav className="float-end text-white">login/signin</nav>
      </div>
      {/*  */}
      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-around items-center p-10 shadow-xl w-4/5 mt-1">
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
        {/*  */}
        <div className="w-full flex justify-around">
          <div className="w-4 h-12 bg-red-400"></div>
          <div className="w-4 h-12 bg-red-400"></div>
        </div>
        {/*  */}
        <div className="flex justify-center items-center p-8 text-white shadow-xl w-4/5 bg-blue-400 rounded-lg ">
          <Input
            inputkey={""}
            inputPlaceholder={""}
            inputType={""}
            inputValue={location}
            inputLable={"location"}
          />
          <Input
            inputkey={""}
            inputPlaceholder={""}
            inputType={""}
            inputValue={undefined}
            inputLable={"data"}
          />
          <Input
            inputkey={""}
            inputPlaceholder={""}
            inputType={""}
            inputValue={undefined}
            inputLable={"add person"}
          />
          <button className="bg-red-500 rounded-full p-2">
            <Image className="w-5" src={search} alt={"search"} />
          </button>
        </div>
        {/*  */}

        {/* tryimg for responsiveness */}
        <div className="bg-red-200 flex relative">
          <div className="w-2/5">
            <Image src={rect1} alt={"rect1"} />
          </div>
          <div className="bg-blue-200 w-3/5 px-16 py-2">
            <h3 className="text-blue-500 pt-3 pr-3 pb-2 font-bold">
              know more about us
            </h3>
            <p>
              At <b>StayBook Travel,</b> we're passionate about making your
              travel dreams a reality. From luxurious hotel stays to adventurous
              tours, we're here to help you discover, book, and experience the
              world with ease. With our personalized service and commitment to
              transparency, trust StayBook Travel to be your ultimate travel
              companion. Start planning your next adventure today!
            </p>

            <br />
            <button className="bg-blue-400 text-white rounded-md float-right mr-7 mb-5 pl-7 pr-7">
              know more
            </button>
          </div>
          <div className="absolute top-40 left-32">
            <Image src={rect2} alt={"rect2"} />
          </div>
        </div>

        <div className="w-4/5 relative h-96">
          <div className="bg-pink-100 ">
            <div className="w-3/5 float-right bg-pink-100 pl-40 pr-10 pt-10 ">
              <h3 className="text-blue-500 pt-3 pr-3 pb-2 font-bold">
                know more about us
              </h3>
              <p>
                At <b>StayBook Travel,</b> we're passionate about making your
                travel dreams a reality. From luxurious hotel stays to
                adventurous tours, we're here to help you discover, book, and
                experience the world with ease. With our personalized service
                and commitment to transparency, trust StayBook Travel to be your
                ultimate travel companion. Start planning your next adventure
                today!
              </p>

              <br />
              <button className="bg-blue-400 text-white rounded-md float-right mr-7 mb-5 pl-7 pr-7">
                know more
              </button>
            </div>
            <div className="w-2/5 h-45">
              <Image src={rect1} alt={"rect1"} />
            </div>
            <div className="w-2/5 h-45 ml-20 absolute top-40 left-32">
              <Image src={rect2} alt={"rect2"} />
            </div>
          </div>
        </div>

        {/* till here  */}
        {/*  */}

        <div className="mt-36 text-center mb-4">
          <h3 className="text-center mb-4 text-primary font-extrabold ">
            Explore top destination package
          </h3>
          <div className=" flex justify-around gap-8">
            {Array.from({
              length: 3,
            }).map((value, index: number) => (
              <div key={index} className="h-full rounded-xl shadow-md">
                <Image
                  className="w-full h-full object-cover rounded-t-xl"
                  src={rect3}
                  alt={"rect3"}
                />
                <div className="p-4 text-left">
                  <h2 className="font-bold mt-1">Package of Manali</h2>
                  <p className="border-b-2 border-blue-300 pb-2 mt-2">
                    2 days 3 night
                  </p>

                  <div className="flex justify-between mt-3">
                    <p>0000</p>
                    <Button variant="secondary">Book Now</Button>
                    {/* <button className="bg-blue-400 ">book now</button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-11 flex rounded-2xl shadow-xl">
          <div className="bg-pink-100 grid grid-cols-2">
            <div className="relative">
              <Image className="w-48" src={rect6} alt={"rect6"} />
              <div className="absolute bottom-2 left-2 font-bold text-white">
                Goa
              </div>
            </div>
            <div className="relative">
              <Image className="w-48" src={rect7} alt={"rect7"} />
              <div className="absolute bottom-2 left-2 font-bold text-white">
                Manali
              </div>
            </div>
            <div className="relative">
              <Image className="w-48" src={rect8} alt={"rect8"} />
              <div className="absolute bottom-2 left-2 font-bold text-white">
                Shimla
              </div>
            </div>
            <div className="relative">
              <Image className="w-48" src={rect9} alt={"rect9"} />
              <div className="absolute bottom-2 left-2 font-bold text-white">
                Mussoorie
              </div>
            </div>
          </div>

          <div className="w-4/5 bg-Accent1 pl-14 pt-8 rounded-r-2xl">
            <div>
              <h3 className="font-bold mb-2">
                start planning your next getaway today
              </h3>
              <h4 className="text-secondary font-bold text-2xl mb-2">
                Discover Our top Cities
              </h4>
              <p className="w-3/5">
                Embark on a journey through our carefully selected top cities
                worldwide! From the romantic allure of Paris to the bustling
                streets of New York City, each destination offers a unique
                tapestry of culture, history, and adventure. Let Staybook Travel
                guide you to extraordinary experiences in these iconic urban
                gems. Start your exploration today and make unforgettable
                memories with us!
              </p>
            </div>
            <Button variant="secondary" className="mt-14">
              view more
            </Button>
          </div>
        </div>

        {/*  */}

        <div className="relative mt-16">
          <Image className="w-screen" src={taxi} alt={"texi"} />
          <div className="w-3/5 p-16 absolute top-20">
            <h3 className="font-bold">Seamless Travel Connections</h3>
            <h3 className="text-blue-500 font-bold text-2xl pt-2 pb-2">
              Book your cab and tickets for your best travel experience
            </h3>
            <p>
              At Staybook Travel, we ensure your journey is smooth from start to
              finish. In addition to offering enticing package trips, we provide
              convenient booking options for cab, train, and flight tickets.
              Whether you're hopping between cities or exploring a new
              destination, our comprehensive travel services make getting around
              a breeze. With Staybook Travel, you can focus on making memories
              while we take care of the logistics. Book your tickets with us and
              embark on a hassle-free adventure!
            </p>
          </div>
        </div>
      </div>
      <div className=""></div>
      {/* infinity scroll slider */}
      <div>
        <h2 className="text-center mb-4 text-primary font-extrabold ">
          facility that we provide
        </h2>
        <div className="h-40 bg-red-400 flex flex-row">
          {Array.from({ length: 8 }).map((value, index: number) => (
            <div key={index} className="py-2 px-8">
              <div className="h-20 w-20 bg-white rounded-full flex justify-center items-center">
                <Image className="w-10 h-10 " src={ellipse8} alt={"ellipse1"} />
              </div>
              <p className="text-white text-xs pt-2">Best Destination</p>
            </div>
          ))}
        </div>
      </div>

      {/* grid one */}
      <div className="container mx-auto px-10">
        <div>
          <h3 className="text-center mb-4 text-blue-500 font-extrabold">
            Explore the beauty of India
          </h3>
          <div className="grid grid-cols-4 gap-4">
            {/* {Array.from({
              length: 10,
            }).map((value, index: number) => ( */}
            <div>
              <Image src={destiny1} alt={"raj"} />
            </div>
            <div>
              <Image src={destiny1} alt={"raj"} />
            </div>
            <div className="col-span-2">
              <Image src={destiny2} alt={"raj"} />
            </div>
            <div className="col-span-2">
              <Image src={destiny3} alt={"raj"} />
            </div>
            <div className="col-span-2">
              <Image src={destiny4} alt={"raj"} />
            </div>
            <div>
              <Image src={destiny1} alt={"raj"} />
            </div>
            <div className="col-span-2">
              <Image src={destiny2} alt={"raj"} />
            </div>
            <div>
              <Image src={destiny1} alt={"raj"} />
            </div>
            <div className="col-span-2">
              <Image src={destiny3} alt={"raj"} />
            </div>
            <div className="col-span-2">
              <Image src={destiny4} alt={"raj"} />
            </div>
            {/* ))} */}
          </div>
        </div>
      </div>

      {/* girl  */}
      <div></div>

      {/* taj mahal  */}
      <div className="container mx-auto px-10">
        <div className="flex">
          <div className="w-2/4">
            <Image src={rect10} alt={"rect10"} />
          </div>
          <div className="2/4 flex flex-col justify-center items-start px-28">
            <div>
              <h1 className="font-extrabold pb-1">100% Best services</h1>
              <h1 className="text-primary font-bold pb-2 text-lg">
                with our experience we will serve you{" "}
              </h1>
              <p className="pb-10">
                Choose us for seamless travel planning, unbeatable deals, and
                unparalleled customer service. Let us make your dream vacation a
                reality.
              </p>
            </div>

            <div className="flex gap-7">
              <div className="border-r-primary border-r-2 pr-5 ">
                <h1 className="text-primary font-bold p-1 ">2570 +</h1>
                <h2>Customers</h2>
              </div>
              <div className="border-r-primary border-r-2 pr-5 ">
                <h1 className="text-primary font-bold p-1 ">2570 +</h1>
                <h2>Customers</h2>
              </div>
              <div className="border-r-primary border-r-2 pr-5 ">
                <h1 className="text-primary font-bold p-1 ">2570 +</h1>
                <h2>Customers</h2>
              </div>
              <div className="">
                <h1 className="text-primary font-bold p-1 ">2570 +</h1>
                <h2>Customers</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* query one  */}
      <div className="bg-primary2 flex p-14 justify-around items-center mt-8 ">
        <div className="w-2/5 p-10">
          <h1 className="font-extrabold text-xl text-white px-10">
            Ask your queries
            <br /> by send your message
          </h1>
        </div>
        <div className="relative w-3/5 p-10">
          <Input
            inputkey={"query"}
            inputPlaceholder={"Ask your queries"}
            inputType={"text"}
            inputValue={undefined}
            inputLable={""}
          />
          <button className="absolute top-9 right-32 bg-primary2 text-white rounded text-sm px-3">
            send
          </button>
        </div>
      </div>

      {/* footer */}
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
    </div>
  );
};

export default Page;
