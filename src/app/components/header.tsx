import Link from "next/link";

export default function Header (){
    return(
        <>
            <div className="w-[100%] h-14 bg-gray-400 flex m-auto sm:hidden">
                <div className="text-[25px] pl-[5px] pt-1 flex font-bold italic ">Uzair</div>
                <div className="flex items-center pl-8">
                    <ul className="flex gap-5">
                    <Link href={"/"}>
                    <li>Home</li>
                    </Link>
                    <Link href={"/services"}>
                    <li>Services</li>
                    </Link>
                    <Link href={"/aboutme"}>
                    <li>About Me</li>
                    </Link>
                    <Link href={"/projects"}>
                    <li>Projects</li>
                    </Link>
                    <Link href={"/contact"}>
                    <li>Contacts</li>
                    </Link>
                    {/* <li className="border-2 rounded-2xl px-2 bg-black text-green-500 italic">Hire me</li> */}
                    
                    </ul>
                </div>

            </div>

        {/* for larger screen */}

<div className="w-[100%] h-24 bg-gray-500 sm:flex m-auto justify-between px-9 hidden ">
    <div className="text-[55px] pl-[5px] items-center flex font-bold italic tracking-widest ">
        <p className="hover:text-white hover:cursor-pointer ease-in duration-300">Uzair</p>
    </div>
    <div className="flex items-center pl-2">
    <ul className="flex gap-5 text-[20px]">
    <Link href={"/"}><li className="hover:border-b-2 hover:border-white hover:cursor-pointer ease-in hover:text-white duration-300 border-transparent border-b-2">Home</li></Link>
    <Link href={"/services"}><li className="hover:border-b-2 hover:border-white hover:cursor-pointer ease-in hover:text-white duration-300 border-transparent border-b-2">Services</li></Link>
    <Link href={"/aboutme"}><li className="hover:border-b-2 hover:border-white hover:cursor-pointer ease-in hover:text-white duration-300 border-transparent border-b-2">About Me</li></Link>
    <Link href={"/projects"}><li className="hover:border-b-2 hover:border-white hover:cursor-pointer ease-in hover:text-white duration-300 border-transparent border-b-2">Projects</li></Link>
    <Link href={"/contact"}><li className="hover:border-b-2 hover:border-white hover:cursor-pointer ease-in hover:text-white duration-300 border-transparent border-b-2">Contacts</li></Link>
    {/* <li className="border-4 rounded-2xl px-2 bg-black hover:bg-white hover:cursor-pointer duration-300 text-green-500 hover:text-green-950 italic ">Hire me</li> */}
    </ul>
    </div>

</div>
        </>
    )
}