import Image from "next/image";
import Header from "../components/header";
import PhoneImage from "../../../public/personal_portfolio_images/phoneImage.png"
import EmailImage from "../../../public/personal_portfolio_images/emailImage.jpg"
import Location1Image from "../../../public/personal_portfolio_images/Location1.png"

export default function Contact() {
    return (
        <>
             <div className="w-[500px] bg-black flex-col m-auto sm:hidden pb-2 ">
             <Header />

             <div className="w-[100%] h-[80px] text-white flex mt-10">
                <div className="w-[10%] h-[80px] flex ml-7">
                    <Image src={PhoneImage} alt="Phone Image" className="w-auto h-auto m-auto "></Image>
                </div>

                <div className="w-[90%] h-[80px] m-auto pt-4 pl-5 font-mono">
                    <p className="text-[15px] ">Phone</p>
                    <p className="text-[25px]">0092 334 354 3884</p>
                </div>


             </div>

             <div className="w-[100%] h-[80px] text-white flex mt-6">
                <div className="w-[10%] h-[80px] flex ml-7">
                    <Image src={EmailImage} alt="Phone Image" className="w-auto h-auto m-auto "></Image>
                </div>

                <div className="w-[90%] h-[80px] m-auto pt-4 pl-5 font-mono">
                    <p className="text-[15px] ">Email</p>
                    <p className="text-[25px]">uzair9900@hotmail.com</p>
                </div>


             </div>

             <div className="w-[100%] h-[80px] text-white flex mt-6">
                <div className="w-[10%] h-[80px] flex ml-7">
                    <Image src={Location1Image} alt="Location Image" className="w-auto h-auto m-auto "></Image>
                </div>

                <div className="w-[90%] h-[80px] m-auto pt-4 pl-5 font-mono">
                    <p className="text-[15px] ">Address</p>
                    <p className="text-[25px]">Karachi, Pakistan</p>
                </div>


             </div>


             <form className="text-white bg-gray-900 w-[90%] m-auto mt-16 px-4 rounded-xl" action="submit">
                <p className="text-[30px] font-bold font-mono text-green-700 " >Lets work together</p>
                <p className="font-mono mt-5">Ready to bring your ideas to life? Whether you have a project in mind or just want to say hello, I am here to collaborate. Fill out the form below, and lets create something amazing together! </p>
                <div className="items-center justify-center m-auto grid mt-4 ">
                <input className="mt-5 grid px-1" type="text" placeholder="First Name" />
                
                <input className="mt-5 grid px-1" type="text" placeholder="Last Name" />

                <input className="mt-5 grid px-1" type="text" placeholder="Email Address" />

                <input className="mt-5 grid px-1" type="text" placeholder="Phone Number" />

                <input className="mt-5 grid px-1" type="text" placeholder="Service requested" />

                <textarea className="mt-5 grid h-24  px-1" name="messageArea" id="messageArea" placeholder="Enter your message"></textarea>

               <button className="bg-green-300 px-8 py-2 mt-5 rounded-full m-auto text-green-800 font-semibold mb-4">
                Submit
               </button>

                </div>
             </form>

             </div>















             <div className="sm:w-[70%] sm:h-auto sm:bg-black sm:flex-col sm:m-auto hidden sm:block pb-4 ">
             <Header />

             <div className="w-[100%] h-[80px] text-white flex mt-10 mb-14">
                <div className="w-[10%] h-[80px] flex ml-7">
                    <Image src={PhoneImage} alt="Phone Image" className="w-auto h-auto m-auto "></Image>
                </div>

                <div className="w-[90%] h-[80px] m-auto pt-4 pl-5 font-mono">
                    <p className="text-[25px] text-green-700 ">Phone</p>
                    <p className="text-[35px]">0092 334 354 3884</p>
                </div>

             </div>

             <div className="w-[100%] h-[80px] text-white flex mt-6 mb-14">
                <div className="w-[10%] h-[80px] flex ml-7">
                    <Image src={EmailImage} alt="Phone Image" className="w-auto h-auto m-auto mt-7 "></Image>
                </div>

                <div className="w-[90%] h-[80px] m-auto pt-4 pl-5 font-mono">
                    <p className="text-[25px] text-green-700 ">Email</p>
                    <p className="text-[35px]">uzair9900@hotmail.com</p>
                </div>


             </div>

             <div className="w-[100%] h-[80px] text-white flex mt-6 mb-14">
                <div className="w-[10%] h-[80px] flex ml-7">
                    <Image src={Location1Image} alt="Location Image" className="w-auto h-auto m-auto "></Image>
                </div>

                <div className="w-[90%] h-[80px] m-auto pt-4 pl-5 font-mono">
                    <p className="text-[25px] text-green-700 ">Address</p>
                    <p className="text-[35px]">Karachi, Pakistan</p>
                </div>


             </div>


             <form className="text-white bg-gray-900 w-[95%] m-auto mt-16 px-4 rounded-xl" action="submit">
                <p className="text-[50px] font-bold font-mono text-green-700 " >Lets work together</p>
                <p className="font-mono mt-5 text-[20px] text-justify">Ready to bring your ideas to life? Whether you have a project in mind or just want to say hello, I am here to collaborate. Fill out the form below, and lets create something amazing together! </p>
                <div className="items-center justify-center m-auto grid mt-4 ">
                <input className="mt-5 grid px-2 w-[400px] h-[30px] rounded-md " type="text" placeholder="First Name" />
                
                <input className="mt-5 grid px-2 w-[400px] h-[30px] rounded-md " type="text" placeholder="Last Name" />

                <input className="mt-5 grid px-2 w-[400px] h-[30px] rounded-md " type="text" placeholder="Email Address" />

                <input className="mt-5 grid px-2 w-[400px] h-[30px] rounded-md " type="text" placeholder="Phone Number" />

                <input className="mt-5 grid px-2 w-[400px] h-[30px] rounded-md " type="text" placeholder="Srvice requested" />

                <textarea className="mt-5 grid h-40  px-1" name="messageArea" id="messageArea" placeholder="Enter your message"></textarea>

               <button className="bg-green-300 duration-150 hover:bg-green-800 px-8 py-2 mt-5 rounded-full m-auto text-green-800 hover:text-green-300 font-semibold mb-4">
                Submit
               </button>

                </div>
             </form>

             </div>
        
        </>
    )
}