import Link from "next/link";
import Header from "../components/header";


export default function Experience() {
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
            <li className="border-2 border-green-500 bg-green-500 rounded-xl  text-green-800 w-[90%] m-auto h-10 font-mono text-[25px] justify-center items-center flex">
              Experience
            </li>
          </Link>
          <Link href={"/aboutmesummary"}>
          <li className="border-2 border-green-300 bg-green-300 rounded-xl  text-green-800 w-[90%] m-auto h-10 font-mono text-[25px] justify-center items-center flex mb-5">
            About me
          </li>
          </Link>
        </ul>

        <p className="w-[100%] h-20  mt-8 flex m-auto items-center justify-center text-[50px] font-bold font-mono text-white">
            My Experience
        </p>
            <p className="p-6 flex justify-center m-auto text-gray-400 text-[18px] font-mono">
            I bring over 4 years of experience in the HR domain, specializing in talent acquisition, employee engagement, and policy 
            development. My experience working with people has equipped me with excellent communication and problem-solving skills, 
            which have been invaluable in my transition into web development. I have since dedicated myself to programming and frontend 
            development, working on various projects such as a resume generator, a weather application, a coin market component, and a 
            Blogging with animations.

         </p>
            


      </div>

      <div className="sm:w-[70%] sm:h-auto sm:bg-black sm:flex-col sm:m-auto hidden sm:block">
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
          <li className="border-2 duration-300 border-green-300 hover:border-green-800 bg-green-300 hover:bg-green-800 mb-5 rounded-xl  text-green-800 hover:text-green-300 w-[30%] m-auto h-20 font-mono text-[35px] justify-center items-center flex">
          About me
          </li>
          </Link>
        </ul>

        <p className="w-[100%] h-20 mt-8 flex m-auto items-center justify-center text-[70px] font-bold font-mono text-white">
            My Experience
        </p>
            <p className="p-6 flex justify-center m-auto text-gray-400 text-[25px] text-justify px-20 font-mono">
            I bring over 4 years of experience in the HR domain, specializing in talent acquisition, employee engagement, and policy 
            development. My experience working with people has equipped me with excellent communication and problem-solving skills, 
            which have been invaluable in my transition into web development. I have since dedicated myself to programming and frontend 
            development, working on various projects such as a resume generator, a weather application, a coin market component, and a 
            Blogging with animations.

         </p>
            


      </div>

      </>
  )
}