import Hands from "../assets/Image/Group 19.png"
import Gathering from "../assets/Image/Group 12.png"

const Goals = () => {
  return (
    <div> 
      <div className=" flex flex-row gap-[4rem]  animate-slide-in-right md:flex-row  sm:flex-col max-xs:flex-col xxs:pl-[.1rem] ">
    <div className=" flex flex-col gap-5  lg:w-[70%] md:w-[40%] max-xs:w-[100%] ">
    <div className="flex flex-row gap-2 xxs:pl-[1rem] ">
        <h3 className=" text-Black text-[40px] font-700 leading-[200%] border-b-[5px] border-Gold font-sora  ">Our </h3>
        <h3 className="text-Black text-[40px] font-700 leading-[200%] font-sora ">Vision</h3>
        </div>

        <h5 className=" text-Black text-[16px] font-400 leading-[200%] font-sora xxs:pl-[1rem]  ">About primelabs</h5>

        <p className=" text-Black text-[16px] font-400 leading-[32px] font-sora lg:pr-[0rem] md:pr-[0rem] xs:pr-[2rem] xxs:pr-[3rem] xxs:pl-[1rem] ">
        simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
        been the industrys standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type 
        specimen book. It has survived
        </p>
    </div>
    <div className="  h-[100%]  md:flex  hover-effect-box  ">
        <img src={Hands} alt="Hands" className=" w-[550px] h-[377px] max-xs:w-[370px] max-xs:h-[200px]  " />
    </div>
    </div> 

    <div className=" flex flex-row gap-[3rem] animate-slide-in-left md:flex-row  sm:flex-col max-xs:flex-col mt-4 xxs:pl-[.1rem]  ">
    <div className="  h-[100%]  md:flex  hover-effect-box  max-xs:hidden ">
        <img src={Gathering} alt="Hands" className=" w-[550px] h-[377px] max-xs:w-[377px] max-xs:h-[277px]  " />
    </div>

    <div className=" flex flex-col gap-5 h-[100%] lg:w-[40%] md:w-[30%] max-xs:w-[100%] ">
        <div className="flex flex-row gap-2 xxs:pl-[1rem] ">
        <h3 className=" text-Black text-[40px] font-700 leading-[200%] border-b-[5px] border-Gold font-sora  ">Our </h3>
        <h3 className="text-Black text-[40px] font-sora font-700 leading-[200%]">Mission</h3>
        </div>

        <h5 className=" text-Black text-[16px] font-sora font-400 leading-[200%] xxs:pl-[1rem] ">About primelabs</h5>

        <p className=" text-Black text-[16px]  font-sora font-400 leading-[32px] lg:pr-[0rem] md:pr-[0rem] xs:pr-[2rem] xxs:pr-[3rem] xxs:pl-[1rem] ">
        simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
        been the industrys standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type 
        specimen book. It has survived
        </p>
    </div> 

    <div className="  h-[100%]  md:flex  hover-effect-box lg:hidden md:hidden sm:hidden max-xs:visible ">
        <img src={Gathering} alt="Hands" className=" w-[550px] h-[377px] max-xs:w-[370px] max-xs:h-[200px]  " />
    </div>
    </div></div>
  )
}

export default Goals