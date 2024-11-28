import Header from "../components/header";

export default function Services () {
    return (
        <>
            <div className="w-[500px] h-auto bg-black flex-col m-auto sm:hidden">
                <Header />

                <div className="w-[75%] grid m-auto bg-black pb-20 border-b-2 border-dashed">
                    <p className="text-[55px] font-bold font-mono text-gray-400">01</p>
                    <p className="text-[40px] font-semibold font-mono text-green-700">Responsive <br />Web Design</p>
                    <p className="text-[20px] font-semibold font-mono text-gray-400 tracking-wider "><br />Creating visually appealing websites that adapt seamlessly across all devices (mobile, tablet, and desktop).</p>
                </div>

                <div className="w-[75%] grid m-auto bg-black pb-20 border-b-2 border-dashed">
                    <p className="text-[55px] font-bold font-mono text-gray-400">02</p>
                    <p className="text-[40px] font-semibold font-mono text-green-700">UI/UX Optimization</p>
                    <p className="text-[20px] font-semibold font-mono text-gray-400 tracking-wider "><br />Improving existing interfaces for better usability, accessibility, and visual appeal.</p>
                </div>

                <div className="w-[75%] grid m-auto bg-black pb-20 border-b-2 border-dashed">
                    <p className="text-[55px] font-bold font-mono text-gray-400">03</p>
                    <p className="text-[40px] font-semibold font-mono text-green-700">Portfolio Website Creation</p>
                    <p className="text-[20px] font-semibold font-mono text-gray-400 tracking-wider "><br />Building professional portfolio sites for clients to showcase their work and skills.</p>
                </div>

                <div className="w-[75%] grid m-auto bg-black pb-20 border-b-2 border-dashed">
                    <p className="text-[55px] font-bold font-mono text-gray-400">04</p>
                    <p className="text-[40px] font-semibold font-mono text-green-700">Single Page Applications</p>
                    <p className="text-[20px] font-semibold font-mono text-gray-400 tracking-wider "><br />Building fast, interactive SPAs using frameworks like React and Next.js to enhance user experiences.</p>
                </div>

                <div className="w-[75%] grid m-auto bg-black pb-20">
                    <p className="text-[55px] font-bold font-mono text-gray-400">05</p>
                    <p className="text-[40px] font-semibold font-mono text-green-700">Web Prototyping with Figma and Tailwind CSS</p>
                    <p className="text-[20px] font-semibold font-mono text-gray-400 tracking-wider "><br />Creating web prototypes using Figma and Tailwind CSS, perfect for clients looking to visualize and fine-tune their ideas.</p>
                </div>

            </div>








            {/* larger screen below */}
<div className="sm:w-[70%] sm:h-svh sm:bg-black sm:flex-col sm:m-auto hidden sm:block ">
            <div className=" h-auto bg-black m-auto sm:block hidden">
                <Header />
            </div>
            <div className="grid m-auto bg-black pb-20 border-b-2 border-dashed px-16">
                    <p className="text-[55px] font-bold font-mono text-gray-400">01</p>
                    <p className="text-[40px] font-semibold font-mono text-green-700">Responsive <br />Web Design</p>
                    <p className="text-[20px] font-semibold font-mono text-gray-400 tracking-wider "><br />Creating visually appealing websites that adapt seamlessly across all devices (mobile, tablet, and desktop).</p>
             
                </div>
                <div className=" grid m-auto bg-black pb-20 border-b-2 border-dashed px-16">
                    <p className="text-[55px] font-bold font-mono text-gray-400">02</p>
                    <p className="text-[40px] font-semibold font-mono text-green-700">UI/UX Optimization</p>
                    <p className="text-[20px] font-semibold font-mono text-gray-400 tracking-wider "><br />Improving existing interfaces for better usability, accessibility, and visual appeal.</p>
                </div>

                <div className="grid m-auto bg-black pb-20 border-b-2 border-dashed px-16">
                    <p className="text-[55px] font-bold font-mono text-gray-400">03</p>
                    <p className="text-[40px] font-semibold font-mono text-green-700">Portfolio Website Creation</p>
                    <p className="text-[20px] font-semibold font-mono text-gray-400 tracking-wider "><br />Building professional portfolio sites for clients to showcase their work and skills.</p>
                </div>

                <div className="grid m-auto bg-black pb-20 border-b-2 border-dashed px-16">
                    <p className="text-[55px] font-bold font-mono text-gray-400">04</p>
                    <p className="text-[40px] font-semibold font-mono text-green-700">Single Page Applications</p>
                    <p className="text-[20px] font-semibold font-mono text-gray-400 tracking-wider "><br />Building fast, interactive SPAs using frameworks like React and Next.js to enhance user experiences.</p>
                </div>

                <div className="grid m-auto bg-black pb-20 px-16">
                    <p className="text-[55px] font-bold font-mono text-gray-400">05</p>
                    <p className="text-[40px] font-semibold font-mono text-green-700">Web Prototyping with Figma and Tailwind CSS</p>
                    <p className="text-[20px] font-semibold font-mono text-gray-400 tracking-wider "><br />Creating web prototypes using Figma and Tailwind CSS, perfect for clients looking to visualize and fine-tune their ideas.</p>
                </div>

 

                

                


            </div>
        
        </>
    )
}