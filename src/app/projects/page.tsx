"use client"
import Image from "next/image";
import Header from "../components/header";
import blogImage from "../../../public/personal_portfolio_images/BloggingWebsite1.png"
import IphoneImage from "../../../public/personal_portfolio_images/PhoneWeb1.png"
import { useState } from "react";



export default function Projects() {
    const [currentSlide, setCurrentSlide] = useState(0)
    // const handleNext = () => {
    //     setCurrentSlide((previousSlide) => (previousSlide === 0 ? 1 : 0))
    // }
    const handlePrev = () => {
        setCurrentSlide((previousSlide) => (previousSlide === 1 ? 0 : 1))
    }

    return (
      <>
        <div className="w-[500px] bg-black flex-col m-auto sm:hidden ">
          <Header />

          {
            currentSlide === 0 ? (

          <div>
            <Image
              src={blogImage}
              alt="blog web Image"
              className="h-96"
            ></Image>

            <p className="text-white text-[70px] pl-8 font-bold">01</p>
            <p className="text-white text-[40px] pl-8 font-medium pt-6 font-mono">
              Blogging Website
            </p>
            <p className="text-white text-[20px] pl-8 font-medium pt-3 font-mono pb-9 pr-4">
            I created this blogging website to provide a clean, user-friendly platform for sharing ideas, stories, 
            and insights. Built with modern web technologies, it features a responsive design, 
            intuitive navigation, and a seamless user experience, perfect for content creators and readers alike.
            </p>
          </div>
            ) : (
          <div>
            <Image
              src={IphoneImage}
              alt="Iphone Image"
              className="h-96"
            ></Image>

            <p className="text-white text-[70px] pl-8 font-bold">02</p>
            <p className="text-white text-[40px] pl-8 font-medium pt-6 font-mono">
              IPhone 14 Pro
            </p>
            <p className="text-white text-[20px] pl-8 font-medium pt-3 font-mono pb-9 pr-4">
            Crafted a sleek and modern website showcasing the iPhone 14 Pro. This project 
            highlights its stunning design, powerful features, and seamless user experience, 
            all presented with a clean and responsive layout.
            </p>
          </div>
)}

            <div className="absolute top-1/2 transform -translate-y-1/2">
                <button
                onClick={handlePrev}
                className="text-white bg-gray-700 px-4 py-2 rounded-full"
                >
                    ←
                     
                </button>
            </div>

            <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
                <button
                onClick={handlePrev}
                className="text-white bg-gray-700 px-4 py-2 rounded-full "
                >
                    →
                     
                </button>
            </div>

        </div>




















        <div className="sm:w-[70%] sm:h-auto sm:bg-black sm:flex-col sm:m-auto hidden sm:block  ">
          <Header />

          {
            currentSlide === 0 ? (

          <div>
            <Image
              src={blogImage}
              alt="blog web Image"
              className="h-[500px]"
            ></Image>

            <p className="text-white text-[70px] pl-8 font-bold">01</p>
            <p className="text-white text-[40px] pl-8 font-medium pt-6 font-mono">
              Blogging Website
            </p>
            <p className="text-white text-[20px] pl-8 font-medium pt-3 font-mono pb-9 pr-4">
            I created this blogging website to provide a clean, user-friendly platform for sharing ideas, stories, 
            and insights. Built with modern web technologies, it features a responsive design, 
            intuitive navigation, and a seamless user experience, perfect for content creators and readers alike.
            </p>
          </div>
            ) : (
          <div>
            <Image
              src={IphoneImage}
              alt="Iphone Image"
              className="h-[500px]"
            ></Image>

            <p className="text-white text-[70px] pl-8 font-bold">02</p>
            <p className="text-white text-[40px] pl-8 font-medium pt-6 font-mono">
              IPhone 14 Pro
            </p>
            <p className="text-white text-[20px] pl-8 font-medium pt-3 font-mono pb-9 pr-4">
            Crafted a sleek and modern website showcasing the iPhone 14 Pro. This project 
            highlights its stunning design, powerful features, and seamless user experience, 
            all presented with a clean and responsive layout.
            </p>
          </div>
)}

            <div className="absolute top-1/2 transform ">
                <button
                onClick={handlePrev}
                className="text-white bg-gray-700 px-4 py-2 rounded-full hover:text-gray-700 hover:bg-white duration-200 "
                >
                    ←
                     
                </button>
            </div>

            <div className="absolute top-1/2 right-60 transform ">
                <button
                onClick={handlePrev}
                className="text-white bg-gray-700 px-4 py-2 rounded-full hover:text-gray-700 hover:bg-white duration-200 "
                >
                    →
                     
                </button>
            </div>

        </div>






      </>
    );
}