import Link from "next/link";
import Header from "../components/header";


export default function AboutMeSummary() {
  return (
    <>
      <div className="w-[500px] bg-black flex-col m-auto sm:hidden ">
        <Header />

        <p className="w-[100%] h-20  mt-8 flex m-auto items-center justify-center text-[50px] font-bold font-mono text-green-700">
          Why Hire me?
        </p>
        <p className="p-6 flex justify-center m-auto text-gray-400 text-[18px] font-mono">
          Experienced in HR, skilled in frontend development with React and
          Next.js, and dedicated to building responsive, user-focused
          applications with continuous learning in mind.
        </p>

        <ul className="border-2 border-black grid gap-5">
          <Link href={"/education"}>
            <li className="border-2 border-green-300 bg-green-300 rounded-xl  text-green-800 w-[90%] m-auto h-10 font-mono text-[25px] justify-center items-center flex">
              Education
            </li>
          </Link>
          <Link href={"/skills"}>
            <li className="border-2 border-green-300 bg-green-300 rounded-xl  text-green-800 w-[90%] m-auto h-10 font-mono text-[25px] justify-center items-center flex">
              Skills
            </li>
          </Link>
          <Link href={"/experience"}>
            <li className="border-2 border-green-300 bg-green-300 rounded-xl  text-green-800 w-[90%] m-auto h-10 font-mono text-[25px] justify-center items-center flex">
              Experience
            </li>
          </Link>
          <Link href={"/aboutmesummary"}>
          <li className="border-2 border-green-500 bg-green-500 rounded-xl  text-green-800 w-[90%] m-auto h-10 font-mono text-[25px] justify-center items-center flex mb-5">
            About me
          </li>
          </Link>
        </ul>

        <p className="w-[100%] h-20  mt-8 flex m-auto items-center justify-center text-[50px] font-bold font-mono text-white">
            Summary About me
        </p>
            <p className="p-6 flex justify-center m-auto text-gray-400 text-[18px] font-mono">
            <ul className="list-disc pl-6 pr-2">
                <li>
                4+ years of professional experience in HR, building a foundation in communication and teamwork.
                </li>
                <li>
                Proficient in frontend development with a focus on React, Next.js, TypeScript, and responsive design.
                </li>
                <li>
                Passionate about creating engaging, user-centric applications with a strong focus on UI/UX principles.
                </li>
                <li>
                Always eager to learn and adopt new technologies that improve my skill set and deliver the best solutions.
                </li>
            </ul>
         </p>
            


      </div>






      <div className="sm:w-[70%] sm:h-auto sm:bg-black sm:flex-col sm:m-auto hidden sm:block ">
        <Header />

        <p className="w-[100%] h-20 mt-8 flex m-auto items-center justify-center text-[80px] font-bold font-mono text-green-700">
          Why Hire me?
        </p>
        <p className="p-6 flex justify-center m-auto text-gray-400 text-[25px] font-mono">
          Experienced in HR, skilled in frontend development with React and
          Next.js, and dedicated to building responsive, user-focused
          applications with continuous learning in mind.
        </p>

        <ul className="border-2 border-black grid gap-5">
          <Link href={"/education"}>
          <li className="border-2 duration-300 border-green-300 hover:border-green-800 bg-green-300 hover:bg-green-800 rounded-xl  text-green-800 hover:text-green-300 w-[30%] m-auto h-20 font-mono text-[35px] justify-center items-center flex">
              Education
            </li>
          </Link>
          <Link href={"/skills"}>
          <li className="border-2 duration-300 border-green-300 hover:border-green-800 bg-green-300 hover:bg-green-800 rounded-xl  text-green-800 hover:text-green-300 w-[30%] m-auto h-20 font-mono text-[35px] justify-center items-center flex">
              Skills
            </li>
          </Link>
          <Link href={"/experience"}>
          <li className="border-2 duration-300 border-green-300 hover:border-green-800 bg-green-300 hover:bg-green-800 rounded-xl  text-green-800 hover:text-green-300 w-[30%] m-auto h-20 font-mono text-[35px] justify-center items-center flex">
              Experience
            </li>
          </Link>
          <Link href={"/aboutmesummary"}>
          <li className="border-2 duration-300 border-green-300 hover:border-green-800 bg-green-300 hover:bg-green-800 rounded-xl  text-green-800 hover:text-green-300 w-[30%] m-auto h-20 font-mono text-[35px] justify-center items-center flex">
            About me
          </li>
          </Link>
        </ul>

        <p className="w-[100%] h-20 mt-8 flex m-auto items-center justify-center text-[70px] font-bold font-mono text-white">
            Summary About me
        </p>
            <p className="p-6 flex justify-center m-auto text-gray-400 text-[25px] text-justify px-20 font-mono">
            <ul className="list-disc pl-6 pr-2 mb-6">
                <li className="mb-6">
                4+ years of professional experience in HR, building a foundation in communication and teamwork.
                </li>
                <li className="mb-6">
                Proficient in frontend development with a focus on React, Next.js, TypeScript, and responsive design.
                </li>
                <li className="mb-6">
                Passionate about creating engaging, user-centric applications with a strong focus on UI/UX principles.
                </li>
                <li className="mb-6">
                Always eager to learn and adopt new technologies that improve my skill set and deliver the best solutions.
                </li>
            </ul>
         </p>
            


      </div>

      </>
  )
}