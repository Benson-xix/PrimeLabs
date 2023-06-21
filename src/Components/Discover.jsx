import { Link } from "react-router-dom"
import Line from "../assets/Image/Group.png"

const Discover = () => {
  return (
    <div className="mt-[6rem] flex flex-col text-word gap-8 relative ">
      <div className="flex justify-center xxs:pr-[1rem] ">
      <div className="bg-gray-700 hover:bg-gray-800 text-word w-[216px] h-[67px]  pt-5 cursor-pointer rounded-tl-xl animate-slide-in-left hover-effect-box  rounded-tr-none rounded-bl-none rounded-br-xl ">
      <Link to="/about"><h2 className="text-center text-[16px] leading-[200%] font-sora  font-600 ">Discover & Contact Us</h2></Link>  
      </div>
      </div>
      
      <div className="flex  flex-col gap-8 animate-slide-in-right max-xs:p-3">
        <div className="flex  justify-center ">
            <h1 className="text-[32px] font-600  leading-[200%] font-sora  xxs:pr-[3rem] xxs:pl-[1rem] ">Invest Today, Secure Your Tomorrow</h1>
        </div>
      
      <div  className="flex  justify-center ">
        <p className=" text-[20px] font-400 leading-[200%] font-sora sm:pl-[1rem] xxs:pr-[3rem] xxs:pl-[1rem]  " >
        We attribute our long-term success to our commitment of always putting clients interests first <br />
        <span className="md:ml-[15rem]  max-xs:ml-[0]  "> Join our Platform today to get started</span>
        </p>
      </div>
        
      </div>
      <div className="flex justify-center  xs:p-3 xxs:pr-[4rem] xxs:pl-[1rem] ">
      <button className="bg-start w-[691px] max-sm:w-[30.0%] h-[60px] rounded-[10px] animate-slide-in-left  pt-[2px] hover:bg-start-dark  hover-effect-box "><Link to="/contact"  className="font-sora">Contact Us</Link></button>
      <img src={Line} alt="Line" className="absolute w-[1000px] h-[584px]  xl:left-[66%] lg:left-[55%] max-md:top-[70%] max-md:left-[36%] top-[3%] md:w-[600px] max-sm:w-[0] " />
      </div>
    </div>
  )
}

export default Discover