import Link from "next/link";
import Header from "../components/header";

export default function AboutMe() {
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
            <li className="border-2 border-green-300 bg-green-300 rounded-xl  text-green-800 w-[90%] m-auto h-10 font-mono text-[25px] justify-center items-center flex mb-5">
              About me
            </li>
          </Link>
        </ul>
      </div>






































      <div className="sm:w-[70%] sm:h-max sm:bg-black sm:flex-col sm:m-auto hidden sm:block ">
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
          <li className="border-2 duration-300 border-green-300 hover:border-green-800 bg-green-300 hover:bg-green-800 rounded-xl mb-5 text-green-800 hover:text-green-300 w-[30%] m-auto h-20 font-mono text-[35px] justify-center items-center flex">
          About me
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}
