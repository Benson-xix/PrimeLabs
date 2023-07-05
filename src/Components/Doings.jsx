import PHP from "../assets/Image/image 6.png"
import Word from "../assets/Image/image 7.png"
import Js from "../assets/Image/image 8.png"
import Andriod from "../assets/Image/image 14.png"
import IOS from "../assets/Image/image 9.png"
import Flutter from "../assets/Image/image 10.png"
import Native from "../assets/Image/image 11.png"
import Html5 from "../assets/Image/html5.png"
import Css3 from "../assets/Image/css-3.png"
import Python from "../assets/Image/python.png"
// import Katlin from "../assets/Image/image 12.png"
// import Ionic from "../assets/Image/image 13.png"
import Magneto from "../assets/Image/image 15.png"
import BIG from "../assets/Image/image 16.png"
import Uber from "../assets/Image/image 17.png"
import Prestashop from "../assets/Image/image 18.png"
import virtuemart from "../assets/Image/image 19.png"
import { Link } from "react-router-dom"

const Doings = () => {
  return (
    <div className="flex flex-col  gap-3  xxs:pl-[.2rem]  pb-[2rem] mt-[2rem]  ">
    <div className="flex flex-row xxs:pl-[1rem]  ">
        <h1 className="font-600 text-[40px] leading-[160%] text-Black border-b-[.2rem] font-sora border-Gold">wh</h1>
        <h1 className="font-600 text-[40px] leading-[160%] font-sora text-Black">at we offer</h1>
    </div>
    <h3 className=' font-400 text-[24px] text-Black leading-[200%] max-xs:text-[18px] font-sora max-xs-m-[0] xxs:pr-[7rem] xxs:pl-[1rem] '>We Make Almost Every Genre Of Application, You Name it And We Build it</h3>

    <div> 
    <div className="flex flex-row xl:gap-[12rem] md:gap-[.1rem] sm:gap-[2rem] max-sm:gap-[3rem]  md:pl-[2rem]  lg:grid xl:grid-cols-3 lg:grid-cols-3 md:grid md:grid-cols-3 max-sm:flex-col  ">

      <div className="xl:w-[170%] md:w-[90%] sm:w-[70%] max-sm:w-[90%] max-xs:w-[90%]   h-[650px] hover-effect-box bg-word shadow-lg flex flex-col gap-[3rem]  pt-7 pl-9  ">
        <div className="flex flex-col gap-[1rem]">
        <h3  className=" text-Black text-[24px] leading-[120%] font-semibold mt-[.5em] font-sora ">Web development</h3>
    
        </div>

        <div className=" flex flex-col pl-6 gap-[3rem]">
        <div className=" flex flex-row gap-5 ">
         <img src={PHP} alt="PHP" className="w-[27px] h-[27px]" />
         <p className=" text-Black text-[20px] leading-[120%] font-400 font-sora ">PHP(Laravel)</p>
        </div>

        <div className=" flex flex-row gap-5">
         <img src={Word} alt="Word" className="w-[27px] h-[27px]" />
         <p className=" text-Black text-[20px] leading-[120%] font-400 font-sora ">Word press</p>
        </div>

        <div className=" flex flex-row gap-5">
         <img src={Js} alt="Js" className="w-[27px] h-[27px]" />
         <p className=" text-Black text-[20px] leading-[120%] font-400 font-sora ">Javascript</p>
        </div>

        <div className=" flex flex-row gap-5">
        <img src={Html5} alt="Html5" className="w-[27px] h-[27px]" />
         <p className=" text-Black text-[20px] leading-[120%] font-400 font-sora ">HTML5</p>
        </div>

        <div className=" flex flex-row gap-5">
       <img src={Css3} alt="Css3" className="w-[27px] h-[27px]" />
         <p className=" text-Black text-[20px] leading-[120%] font-400 font-sora ">Css</p>
        </div>

        <div className=" flex flex-row gap-5">
           <img src={Python} alt="Python" className="w-[27px] h-[27px]" />
         <p className=" text-Black text-[20px] leading-[120%] font-400 font-sora ">Python</p>
        </div>
        </div>
        
      
        <div className="flex  ">
            <button className="bg-start hover:bg-start-dark rounded-[10px] lg:w-[227px] md:w-[200px] sm:w-[200px] max-sm:w-[200px] max-xs:w-[200px] font-sora  h-[40px] flex justify-center text-word leading-[20px] font-semibold text-[16px] pt-2   "><Link to="/contact">Contact Us</Link></button>
        </div>

        </div>


        <div className="xl:w-[170%] md:w-[90%] sm:w-[70%] max-sm:w-[90%] max-xs:w-[90%] h-[650px] max-xs:mt-[3rem] bg-word hover-effect-box shadow-lg flex flex-col gap-[3rem]  pt-7 pl-9 ">
       <div className="flex flex-col gap-[1rem]">
       <h3  className=" text-Black text-[24px] leading-[120%] font-semibold mt-[1rem] font-sora ">App development</h3>
       </div>
      <div className="flex flex-col pl-6 gap-[3rem]">
      <div className=" flex flex-row gap-5 ">
         <img src={Andriod} alt="Andriod" className="w-[27px] h-[27px]" />
         <p className=" text-Black text-[20px] leading-[120%] font-400 font-sora ">Andriod App</p>
        </div>

        <div className=" flex flex-row gap-5">
         <img src={IOS} alt="IOS" className="w-[27px] h-[27px]" />
         <p className=" text-Black text-[20px] leading-[120%] font-400 font-sora ">IOS App</p>
        </div>

        <div className=" flex flex-row gap-5">
         <img src={Flutter} alt="Flutter" className="w-[27px] h-[27px]" />
         <p className=" text-Black text-[20px] leading-[120%] font-400 font-sora ">Flutter</p>
        </div>

        <div className=" flex flex-row gap-5">
         <img src={Native} alt="Native" className="w-[27px] h-[27px]" />
         <p className=" text-Black text-[20px] leading-[120%] font-400 font-sora ">React Native</p>
        </div>
{/* 
        <div className=" flex flex-row gap-5">
         <img src={Katlin} alt="Katlin" className="w-[27px] h-[27px]" />
         <p className=" text-Black text-[20px] leading-[120%] font-400 font-sora ">Katlin</p>
        </div>

        <div className=" flex flex-row gap-5">
         <img src={Ionic} alt="Ionic" className="w-[27px] h-[27px]" />
         <p className=" text-Black text-[20px] leading-[120%] font-400 font-sora ">Ionic</p>
        </div> */}
        
      </div>
        <div className="flex ">
            <button className="bg-start hover:bg-start-dark rounded-[10px] font-sora lg:w-[227px] md:w-[200px] sm:w-[200px] max-sm:w-[200px] max-xs:w-[200px] h-[40px] flex justify-center text-word leading-[20px] font-semibold text-[16px] pt-2   "><Link to="/contact">Contact Us</Link></button>
        </div>

        </div>

      <div className="xl:w-[170%] md:w-[90%] sm:w-[70%] max-sm:w-[90%] max-xs:w-[90%] h-[650px] max-xs:mt-[3rem] bg-word hover-effect-box shadow-lg  flex flex-col gap-[3rem]  pt-7 pl-9  xl:mt-0 lg:mt-5 ">
       <div  className="flex flex-col gap-[1rem]">
       <h3  className=" text-Black text-[24px] leading-[120%] font-semibold mt-[1rem] font-sora ">E-Commerce<br/>development</h3>
       </div>
      
      <div className="flex flex-col pl-6 gap-[3rem]">
      <div className=" flex flex-row gap-5 ">
         <img src={Magneto} alt="Magneto" className="w-[27px] h-[27px]" />
         <p className=" text-Black text-[20px] leading-[120%] font-400 font-sora ">Magneto</p>
        </div>

        <div className=" flex flex-row gap-5">
         <img src={BIG} alt="BIG" className="w-[27px] h-[27px]" />
         <p className=" text-Black text-[20px] leading-[120%] font-400 font-sora ">Big commerce</p>
        </div>

        <div className=" flex flex-row gap-5">
         <img src={Uber} alt="Uber" className="w-[27px] h-[27px]" />
         <p className=" text-Black text-[20px] leading-[120%] font-400 font-sora ">Ubercart</p>
        </div>

        <div className=" flex flex-row gap-5">
         <img src={Prestashop} alt="Prestashop" className="w-[27px] h-[27px]" />
         <p className=" text-Black text-[20px] leading-[120%] font-400 font-sora ">Prestashop</p>
        </div>

        <div className=" flex flex-row gap-5">
         <img src={virtuemart} alt="virtuemart" className="w-[27px] h-[27px]" />
         <p className=" text-Black text-[20px] leading-[120%] font-400 font-sora ">virtuemart</p>
        </div>
      </div>

        
        
        <div className="flex mt-12 ">
            <button className="bg-start hover:bg-start-dark rounded-[10px] lg:w-[227px] md:w-[200px] sm:w-[200px] max-sm:w-[200px] font-sora max-xs:w-[200px]  h-[40px] flex justify-center text-word leading-[20px] font-semibold text-[16px] pt-2   "><Link to="/contact">Contact Us</Link></button>
        </div>

        </div>
    
    </div>

    </div>

    </div>
  )
}

export default Doings
