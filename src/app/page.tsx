
import Header from "./components/header";
import ImageDivSmallScreen from "./components/imagediv";
import DownloadCV from "./components/downloadcv";
import SocialMediaImages from "./components/socialmedia";

export default function Home() {
  return (
   <>
   <div className="w-[500px] bg-black flex-col m-auto h-svh sm:hidden">
   <Header />
   <ImageDivSmallScreen />
   <DownloadCV />
   <SocialMediaImages />
       
    </div>

    {/* smaller screen above */}

    <div className="sm:w-[70%] sm:h-svh sm:bg-black sm:flex-col sm:m-auto hidden sm:block  ">

   <Header />
   <ImageDivSmallScreen />
   <DownloadCV />
   
    </div>
    
   </>
  );
}
