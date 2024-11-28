import Link from "next/link";
import Header from "../components/header";
import Image from "next/image";
import HTMLImage from "../../../public/personal_portfolio_images/HTML5_logo.png";
import CssImage from "../../../public/personal_portfolio_images/css-logo.webp";
import TS from "../../../public/personal_portfolio_images/Typescript Logo.webp";
import JS from "../../../public/personal_portfolio_images/JS_logo.png";
import figmaLogo from "../../../public/personal_portfolio_images/figma-logo.png";
import githubblogo from "../../../public/personal_portfolio_images/GitHub-logo.png";
import tailwindLogo from "../../../public/personal_portfolio_images/tailwind-css-logo.png";

export default function Skills() {
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
            <li className="border-2 border-green-500 bg-green-500 rounded-xl  text-green-800 w-[90%] m-auto h-10 font-mono text-[25px] justify-center items-center flex">
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















{/* for larger screens below */}




      <div className="sm:w-[70%] sm:h-svh sm:bg-black sm:flex-col sm:m-auto hidden sm:block  ">
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
      </div>


      <div className=" w-[100%] flex pl-5 pt-2 mb-5 bg-white sm:pl-60">
        <Image
          className="w-[70px] h-auto hover:w-[80px] hover:h-auto duration-200"
          src={HTMLImage}
          alt="HTMLs Image"
        ></Image>
        <p className=" w-[75%] h-5 hover:h-7 duration-300 bg-gray-500 flex m-auto ml-3 rounded-full">
          <p className=" w-[80%] h-5 hover:h-7 duration-300 bg-black flex rounded-full"></p>
        </p>
      </div>

      <div className=" w-[100%] flex pl-5 pt-2 mb-5 bg-white sm:pl-60">
        <Image
          className="w-[70px] h-auto hover:w-[80px] hover:h-auto duration-200"
          src={CssImage}
          alt="cssFile Image"
        ></Image>
        <p className=" w-[75%] h-5 hover:h-7 duration-300 bg-gray-500 flex m-auto ml-3 rounded-full">
          <p className=" w-[80%] h-5 hover:h-7 duration-300 bg-black flex rounded-full"></p>
        </p>
      </div>

      <div className=" w-[100%] flex pl-5 pt-2 mb-5 bg-white sm:pl-60">
        <Image className="w-[70px] h-auto hover:w-[80px] hover:h-auto duration-200" src={TS} alt="type script"></Image>
        <p className=" w-[75%] h-5 hover:h-7 duration-300 bg-gray-500 flex m-auto ml-3 rounded-full">
          <p className=" w-[75%] h-5 hover:h-7 duration-300 bg-black flex rounded-full"></p>
        </p>
      </div>

      <div className=" w-[100%] flex pl-5 pt-2 mb-5 bg-white sm:pl-60">
        <Image
          className="w-[60px] h-[80px] hover:w-[70px] hover:h-auto duration-200"
          src={JS}
          alt="Java script"
        ></Image>
        <p className=" w-[75%] h-5 hover:h-7 duration-300 bg-gray-500 flex m-auto ml-6 rounded-full">
          <p className=" w-[65%] h-5 hover:h-7 duration-300 bg-black flex rounded-full"></p>
        </p>
      </div>

      <div className=" w-[100%] flex pl-5 pt-2 mb-5 mt-5 bg-white sm:pl-60">
        <Image
          className="w-[70px] h-auto hover:w-[80px] hover:h-auto duration-200  "
          src={figmaLogo}
          alt="figmaLogo"
        ></Image>
        <p className=" w-[75%] h-5 hover:h-7 duration-300 bg-gray-500 flex m-auto ml-3 rounded-full">
          <p className=" w-[75%] h-5 hover:h-7 duration-300 bg-black flex rounded-full"></p>
        </p>
      </div>

      <div className=" w-[100%] flex pl-5 pt-2 mb-5 mt-10 bg-white sm:pl-60">
        <Image
          className="w-[70px] h-auto hover:w-[80px] hover:h-auto duration-200 "
          src={githubblogo}
          alt="githublogo"
        ></Image>
        <p className=" w-[75%] h-5 hover:h-7 duration-300 bg-gray-500 flex m-auto ml-3 rounded-full">
          <p className=" w-[85%] h-5 hover:h-7 duration-300 bg-black flex rounded-full"></p>
        </p>
      </div>

      <div className=" w-[100%] flex pl-5 pt-2 mb-10 mt-10 bg-white sm:pl-60">
        <Image
          className="w-[70px] h-auto hover:w-[80px] hover:h-auto duration-200"
          src={tailwindLogo}
          alt="tailwindlogo"
        ></Image>
        <p className=" w-[75%] h-5 hover:h-7 duration-300 bg-gray-500 flex m-auto ml-3 rounded-full">
          <p className=" w-[80%] h-5 hover:h-7 duration-300 bg-black flex rounded-full"></p>
        </p>
      </div>
    </>
  );
}
