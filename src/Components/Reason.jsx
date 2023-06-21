import { Link } from "react-router-dom"
import Circle from "../assets/Image/image 3.png"



const Reason = () => {
  return (
    <div>
          <div className="  flex flex-row max-xs:flex-col mt-5  justify-center  max-md:gap-[1rem] max-md:p-1 ">
            <div className="w-[50%] max-xs:w-[100%] animate-slide-in-left" >
            <img src={Circle} alt="circle" className="w-[561px] h-[589px] md:w-[461px] md:h-[489px] sm:w-[361px] sm:h-[389px] max-xs:w-[361px] max-xs:h-[389px] "/>
            </div>

            <div className="flex flex-col justify-content lg:w-[40%] md:w-[50%] sm:w-[50%] max-xs:w-[100%] max-xs:mt-5 gap-3 animate-slide-in-right ">
            <div className="flex ">
            <h4 className="text-Black text-[30px] max-sm:text-[24px] font-700 leading-[200%] border-b-[5px] border-Gold mr-1 font-sora ">Why</h4>
            <h4 className="text-Black text-[30px] max-sm:text-[24px] font-700 leading-[200%] font-sora ">You Should Trust Us</h4>
            </div>
            <p className="text-Black text-[16px] max-sm:text-[14px] font-400 font-sora leading-[32px] max-xs:pr-[2rem] max-xxs:w-[95%] ">
            Trusted by 25+ world-class brands and organizations of all sizes.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex justify-start hover-effect-box max-xs:p-3 ">
            <button className="bg-start w-[150px] h-[50px] rounded-[10px] text-word text-[20px] leading-[25px] font-600 pt-[2px] hover:bg-start-dark  "><Link to="/contact" className="font-sora">Contact Us</Link></button>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Reason