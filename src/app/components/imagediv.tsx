"use client"
import Image from "next/image";
import myPic from "@/app/uzair_pic.png"
import { motion } from "motion/react"

export default function ImageDivSmallScreen() {
    return(
        <>
            <div className="w-[280px] overflow-hidden h-[280px] bg-black border-4 border-dotted rounded-full flex m-auto mt-7 sm:hidden">
                <Image className="flex pl-10 pr-4 m-auto" src={myPic} alt="mypic" >

                </Image>
            </div>



            <div className="w-[90%] h-auto  text-gray-400 grid m-auto mt-7 sm:hidden">
                <p className="text-[20px] mx-auto flex-col font-bold font-mono tracking-wider italic ">FrontEnd Developer</p>
                <p className="text-[40px] mx-auto flex-col font-bold font-mono tracking-widest "> Hello I am</p>
                <p className="text-[50px] mx-auto text-white flex-col font-extrabold font-mono tracking-widest ">Uzair Zia</p>
                <p className="text-[18px] mx-auto flex-col font-bold font-mono text-center">I am a passionate frontend developer dedicated to crafting responsive, user-friendly web experiences.</p>
            </div>


            {/* larger screen below  */}
        <div className="flex mb-8">
           

            <div className="w-[40%] h-auto  text-gray-400 grid m-auto mt-7 items-center justify-center sm:block hidden">


            <motion.p
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                    duration: 3, // Adjust duration for typing speed
                    ease: "easeOut",
                    
                }}
                className="text-[40px] mx-auto flex-col font-bold font-mono tracking-wider italic overflow-hidden whitespace-nowrap border-r-2 border-white"
            >FrontEnd Developer</motion.p>
 
 
 
                <motion.p animate= {{x: -15, transition: { duration: 1 }}} className="text-[60px] mx-auto flex-col pl-4 font-bold font-mono tracking-widest /"> Hello I am</motion.p>
                <motion.p animate= {{x: 50, transition: { duration: 1 }}} className="text-[70px] mx-auto text-white flex-col font-extrabold font-mono tracking-[10px] /">Uzair Zia</motion.p>
                <p className="text-[23px] mx-auto flex-col font-bold font-mono ">I am a passionate frontend developer dedicated to crafting responsive, user-friendly web experiences.</p>
            </div>

            <div className="w-[380px] overflow-hidden h-[380px] bg-black border-[10px] border-double  rounded-full flex m-auto mt-7 sm:block hidden ">
                <Image className="flex mt-6 m-auto h-auto w-auto" src={myPic} alt="mypic" >

                </Image>
            </div>
            </div>
        
        </>
    )
}