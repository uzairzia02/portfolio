import Image from "next/image";
import FacebookLogo from "../../../public/personal_portfolio_images/facebok-removebg-preview.png"
import LinkedInLogo from "../../../public/personal_portfolio_images/linkedin.webp"
import GithubLogo from "../../../public/personal_portfolio_images/git-removebg-preview.png"


export default function SocialMediaImages() {
    return (
        <>
            <div className="w-[30%] h-auto  flex m-auto items-center justify-between pt-2">
            <a href="https://www.facebook.com/uzair.zia.37" target="_blank"><Image src={FacebookLogo} alt="Fb logo" className="w-9 h-auto"></Image></a>
            <a href="https://www.linkedin.com/in/uzair-zia-67730790/" target="_blank"><Image src={LinkedInLogo} alt="Fb logo" className="w-9 h-auto"></Image></a>
            <a href="https://github.com/uzairzia02?tab=repositories" target="_blank"><Image src={GithubLogo} alt="Fb logo" className="w-8 h-auto"></Image></a>
            </div>

        </>
    )
}