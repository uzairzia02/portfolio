import Image from "next/image";
import FacebookLogo from "../../../public/personal_portfolio_images/facebok-removebg-preview.png"
import LinkedInLogo from "../../../public/personal_portfolio_images/linkedin.webp"
import GithubLogo from "../../../public/personal_portfolio_images/git-removebg-preview.png"


export default function DownloadCV() {
    return (
      <>
        <div className="pb-2 bg-black sm:hidden">
          <a href="/UzairZiaResume.pdf" download={"UzairZiaResume"}>
            <button className="border-4 w-auto p-1 m-auto flex mt-2 px-7 rounded-3xl border-gray-200 font-bold text-gray-200">
              Download CV
            </button>
          </a>
        </div>

        {/* below for larger screen */}

      <div className="pb-2 sm:flex items-center gap-4 hidden ml-[5%] w-[40%]">
          <a href="/UzairZiaResume.pdf" download={"UzairZiaResume"}>
            <button className="border-4 p-1 px-7 rounded-3xl border-gray-200 font-bold text-gray-200 duration-200 hover:text-black hover:bg-white">
              Download CV
            </button> </a>
            <a href="https://www.facebook.com/uzair.zia.37" target="_blank">
              <Image
                src={FacebookLogo}
                alt="Fb logo"
                className="w-9 h-auto"
              ></Image>
            </a>
            <a
              href="https://www.linkedin.com/in/uzair-zia-67730790/"
              target="_blank"
            >
              <Image
                src={LinkedInLogo}
                alt="Fb logo"
                className="w-9 h-auto"
                ></Image>
            </a>
            <a href="https://github.com/uzairzia02?tab=repositories" target="_blank">
              <Image src={GithubLogo}  alt="Fb logo" className="w-8 h-auto bg-white ml-2 rounded-[50%]" ></Image>
            </a>
         
        </div>

      </>
    );
}