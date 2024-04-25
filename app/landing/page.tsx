"use client";
import React, { useState } from "react";
import Input from "../components/input/page";
import search from "@/public/images/Vector.svg";
import rect1 from "@/public/images/Rectangle 904.svg";
import rect2 from "@/public/images/Rectangle905.svg";
import rect3 from "@/public/images/Rectangle 929.svg";
import rect33 from "@/public/images/Rectangle 926.jpg";
import rect4 from "@/public/images/Rectangle 931.svg";
import rect5 from "@/public/images/Rectangle 933.svg";
import rect6 from "@/public/images/Rectangle 919.svg";
import rect7 from "@/public/images/Rectangle 920.svg";
import rect8 from "@/public/images/Rectangle 921.svg";
import rect9 from "@/public/images/Rectangle 918.svg";
import taxi from "@/public/images/Group 442 (1).svg";
import taxi1 from "@/public/images/Group 819.jpg";
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
import girl1 from "@/public/images/Group 1266.svg";
import girl2 from "@/public/images/Group 1267.svg";

import rect10 from "@/public/images/Rectangle 935.svg";
import Image from "next/image";
import Button from "../components/button/page";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const Page = () => {
  const [location, setLocation] = useState("New Delhi");
  const [data, setData] = useState("New Delhi");
  const [person, setPerson] = useState("New Delhi");

  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="flex justify-center items-center flex-col">
        <div className="w-full flex justify-around">
          <div className="w-4 h-12 bg-red-400 "></div>
          <div className="w-4 h-12 bg-red-400"></div>
        </div>

        {/* input part one for laptop viw one for phone veiw */}
        <div className="bg-primary w-5/6 flex p-8 rounded-lg justify-center items-center">
          <div className="hidden lg:flex  lg:flex-row bg-primary w-5/6 justify-center items-center">
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
              inputValue={data}
              inputLable={"data"}
            />
            <Input
              inputkey={""}
              inputPlaceholder={""}
              inputType={""}
              inputValue={person}
              inputLable={"add person"}
            />
          </div>

          <div className="w-full lg:hidden flex flex-col justify-center items-center">
            <input
              type="text"
              placeholder="location"
              className="w-full bg-white rounded-lg p-2 m-1"
            ></input>
            <input
              type="text"
              placeholder="location"
              className="w-full bg-white rounded-lg p-2 m-1"
            ></input>{" "}
            <input
              type="text"
              placeholder="location"
              className="w-full bg-white rounded-lg p-2 m-1"
            ></input>
            <Button className="lg:hidden w-2/5 bg-primary2 mt-2 ">
              Search
            </Button>
          </div>
          <button className="bg-primary2 rounded-full p-3 mt-3 hidden lg:block">
            <Image className="w-5" src={search} alt={"search"} />
          </button>
        </div>

        {/* phone veiw only need to works more */}
        <div className="relative mt-16 lg:hidden">
          <div className="rounded-lg ">
            <Image width={990} src={rect33} alt={"rect33"} />
          </div>
          <div className="px-7 py-4 absolute top-1 flex flex-col justify-center items-center rounded-lg">
            <h3 className="text-blue-500 py-8 font-bold text-2xl">
              know more about us
            </h3>
            <p className=" text-white text-xl tracking-wider p-3">
              At <b>StayBook Travel,</b> we're passionate about making your
              travel dreams a reality. From luxurious hotel stays to adventurous
              tours, we're here to help you discover, book, and experience the
              world with ease. With our personalized service and commitment to
              transparency, trust StayBook Travel to be your ultimate travel
              companion. Start planning your next adventure today!
            </p>
          </div>
        </div>

        {/* for laptop view need to work on position */}
        <div className="bg-Accent1 relative hidden lg:flex mt-10">
          <div className="w-2/5">
            <Image src={rect1} alt={"rect1"} />
          </div>
          <div className="bg-Accent1 w-3/5 md: flex flex-col justify-center md:px-20">
            <h3 className="text-blue-500 pt-3 pr-3 pb-2 font-bold text-xl items-start">
              know more about us
            </h3>
            <p className="text-xl items-start">
              At <b>StayBook Travel,</b> we're passionate about making your
              travel dreams a reality. From luxurious hotel stays to adventurous
              tours, we're here to help you discover, book, and experience the
              world with ease. With our personalized service and commitment to
              transparency, trust StayBook Travel to be your ultimate travel
              companion. Start planning your next adventure today!
            </p>

            <br />
            <div>
              <button className="bg-blue-400 text-white rounded-lg float-right mr-7 mb-5 py-2 px-9  ">
                know more
              </button>
            </div>
          </div>
          <div className="absolute top-40 left-24 lg:left-40 ">
            <Image src={rect2} alt={"rect2"} />
          </div>
        </div>

        {/* phone view package divs */}
        <div className="flex-col w-full lg:hidden flex justify-center items-center mt-10">
          <h3 className="text-center mb-4 text-primary font-extrabold ">
            Explore top destination package
          </h3>
          {Array.from({
            length: 3,
          }).map((value, index: number) => (
            <div className=" w-4/5 mt-3 flex justify-center items-center flex--col shadow-xl rounded-xl">
              <div className="items-center justify-center flex w-2/5">
                <Image src={rect3} alt={"rect3"} />
              </div>
              <div className="p-2 text-left w-3/5">
                <h2 className="font-bold mt-1 pb-2">Package of Manali</h2>
                <p className="border-b-2 border-blue-300 pb-10 mt-2">
                  2 days 3 night
                </p>

                <div className="flex justify-between mt-3 ">
                  <p>0000</p>
                  <button className="bg-primary py-1 px-3 rounded-md">
                    book now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* laptop view  */}
        <div className="mt-36 text-center mb-4 hidden lg:block ">
          <h3 className="text-center mb-4 text-primary font-extrabold ">
            Explore top destination package
          </h3>
          <div className=" flex justify-around gap-8 sm:flex-col md:flex-col lg:flex-row">
            {Array.from({
              length: 3,
            }).map((value, index: number) => (
              <div
                key={index}
                className="h-full rounded-xl shadow-md sm:flex-col md:flex-row lg:flex-col"
              >
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

        {/* discover's divs for phone */}
        <div className="lg:hidden mt-10">
          <div className=" bg-Accent1 flex justify-center items-center flex-col pt-9 pb-2 px-5">
            <h4 className="text-secondary font-bold text-2xl mb-2">
              Discover Our top Cities
            </h4>
            <h3 className="font-bold mb-2 text-lg">
              start planning your next getaway today
            </h3>
            <p className="">
              Embark on a journey through our carefully selected top cities
              worldwide! From the romantic allure of Paris to the bustling
              streets of New York City, each destination offers a unique
              tapestry of culture, history, and adventure. Let Staybook Travel
              guide you to extraordinary experiences in these iconic urban gems.
              Start your exploration today and make unforgettable memories with
              us!
            </p>
            <Button variant="secondary" className="mt-10 py-2">
              view more
            </Button>
          </div>
          <div className="bg-Accent1 grid grid-cols-2">
            <div className="relative">
              <Image width={900} src={rect6} alt={"rect6"} />
              <div className="absolute bottom-2 left-2 font-bold text-white">
                Goa
              </div>
            </div>
            <div className="relative">
              <Image width={900} src={rect7} alt={"rect7"} />
              <div className="absolute bottom-2 left-2 font-bold text-white">
                Manali
              </div>
            </div>
            <div className="relative">
              <Image width={900} src={rect8} alt={"rect8"} />
              <div className="absolute bottom-2 left-2 font-bold text-white">
                Shimla
              </div>
            </div>
            <div className="relative">
              <Image width={900} src={rect9} alt={"rect9"} />
              <div className="absolute bottom-2 left-2 font-bold text-white">
                Mussoorie
              </div>
            </div>
          </div>
        </div>
        {/* laptop view */}
        <div className="mt-11 rounded-2xl shadow-xl hidden lg:flex">
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

        {/*  taxi part  phone and laptop */}
        <div className="relative mt-16">
          <div className="hidden lg:block">
            <Image src={taxi} alt={"texi"} />
          </div>
          <div className="w-full lg:hidden ">
            <Image width={890} src={taxi1} alt={"texi"} />
          </div>
          <div className="p-2 absolute top-1 py-5 px-5 md:justify-center md:items-start md:flex md:flex-col">
            <h3 className="font-bold text-2xl py-2">
              Seamless Travel Connections
            </h3>
            <h3 className="text-blue-500 font-bold text-3xl py-4 tracking-wide">
              Book your cab and tickets for your best travel experience
            </h3>
            <p className="hidden lg:flex w-4/6 ">
              At Staybook Travel, we ensure your journey is smooth from start to
              finish. In addition to offering enticing package trips, we provide
              convenient booking options for cab, train, and flight tickets.
              Whether you're hopping between cities or exploring a new
              destination, our comprehensive travel services make getting around
              a breeze. With Staybook Travel, you can focus on making memories
              while we take care of the logistics. Book your tickets with us and
              embark on a hassle-free adventure!
            </p>
            <p className="py-4 tracking-wide text-2xl lg:hidden ">
              Book cab, train, and flight tickets easily with StayBook Travel.
              Our comprehensive services ensure hassle-free adventures, letting
              you focus on making unforgettable memories. Start your journey
              with us today
            </p>
          </div>
        </div>
      </div>

      {/* infinity scroll slider */}
      {/* <div>
        <h2 className="text-center mb-4 text-primary font-extrabold text-3xl mt-10">
          facility that we provide
        </h2>
        <div className="h-60 bg-red-400 flex flex-row">
          {Array.from({ length: 8 }).map((value, index: number) => (
            <div
              key={index}
              className="px-12 flex flex-col justify-evenly items-center"
            >
              <div className="h-36 w-36 bg-white rounded-full flex justify-around items-center">
                <Image className="w-14 h-14 " src={ellipse1} alt={"ellipse1"} />
              </div>
              <p className="text-white text-xs pt-2">Best Destination</p>
            </div>
          ))}
        </div>
      </div> */}

      {/* grid one */}
      {/* <div className="container mx-auto px-10">
        <div>
          <h3 className="text-center mb-4 text-blue-500 font-extrabold">
            Explore the beauty of India
          </h3>
          <div className="grid grid-cols-1 gap-4 bg-red-500 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4">
            {Array.from({
              length: 10,
            }).map((value, index: number) => ( \
            <div>
              <Image
                className="w-full h-full object-cover"
                src={destiny1}
                alt={"raj"}
              />
            </div>
            <div>
              <Image
                className="w-full h-full object-cover"
                src={destiny1}
                alt={"raj"}
              />
            </div>
            <div className="col-span-2">
              <Image
                className="w-full h-full object-cover"
                src={destiny2}
                alt={"raj"}
              />
            </div>
            <div className="col-span-2">
              <Image
                className="w-full h-full object-cover"
                src={destiny3}
                alt={"raj"}
              />
            </div>
            <div className="col-span-2">
              <Image
                className="w-full h-full object-cover"
                src={destiny4}
                alt={"raj"}
              />
            </div>
            <div>
              <Image
                className="w-full h-full object-cover"
                src={destiny1}
                alt={"raj"}
              />
            </div>
            <div className="col-span-2">
              <Image
                className="w-full h-full object-cover"
                src={destiny2}
                alt={"raj"}
              />
            </div>
            <div>
              <Image
                className="w-full h-full object-cover"
                src={destiny1}
                alt={"raj"}
              />
            </div>
            <div className="col-span-2">
              <Image
                className="w-full h-full object-cover"
                src={destiny3}
                alt={"raj"}
              />
            </div>
            <div className="col-span-2">
              <Image
                className="w-full h-full object-cover"
                src={destiny4}
                alt={"raj"}
              />
            </div>
             ))} 
          </div>
        </div>
      </div> */}

      {/* girl  */}

      <div className="relative mt-10 flex justify-center items-center">
        <div className="hidden lg:block ">
          <Image src={girl1} alt={"girl"} />
        </div>
        <div className="lg:hidden">
          <Image width={440} src={girl2} alt={"girl"} />
        </div>
        <div className="absolute top-4 left-32 md:left-48 lg:top-44 lg:left-2/4">
          <p className="text-white font-bold text-3xl lg:pt-14">
            Enjoy your best weekend <br />
            in a beautiful place
          </p>
          <div className="flex py-3 justify-around items-center">
            <button className="rounded-2xl px-7 py-2 border-white border-2 text-white font-bold hover:bg-primary2 hover:border-0">
              Find a place
            </button>
            <button className="rounded-2xl px-7 py-2 border-white border-2 text-white font-bold hover:bg-primary2 hover:border-0">
              contact us
            </button>
          </div>
        </div>
      </div>

      {/* taj mahal  */}
      <div className="container mx-auto px-10 flex justify-center items-center mt-10">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5">
            <Image src={rect10} alt={"rect10"} />
          </div>
          <div className="lg:w-3/5 lg:px-24 lg:py-4 px-2 justify-center items-center ">
            <div className="flex justify-center items-center flex-col pt-5">
              <h1 className="font-extrabold pb-1">100% Best services</h1>
              <h1 className="text-primary font-bold pb-2 text-lg">
                with our experience we will serve you{" "}
              </h1>
              <p className="pb-10">
                Choose us for seamless travel planning, unbeatable deals,
                <br /> and unparalleled customer service. Let us make your dream
                vacation a reality.
              </p>
              <div className="grid grid-cols-2 gap-6 lg:hidden">
                <button className="px-3 py-2 bg-primary2 text-white rounded-lg">
                  <h1 className="font-bold">2570 +</h1>
                  <p>Customers</p>
                </button>
                <button className="px-3 py-2 bg-primary2 text-white rounded-lg">
                  <h1 className="font-bold">2570 +</h1>
                  <p>Customers</p>
                </button>
                <button className="px-3 py-2 bg-primary2 text-white rounded-lg">
                  <h1 className="font-bold">2570 +</h1>
                  <p>Customers</p>
                </button>
                <button className="px-3 py-2 bg-primary2 text-white rounded-lg">
                  <h1 className="font-bold">2570 +</h1>
                  <p>Customers</p>
                </button>
              </div>
            </div>

            <div className="hidden gap-7 lg:flex ">
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
      <Footer />
    </div>
  );
};

export default Page;
