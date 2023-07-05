import { Link } from "react-router-dom"
import Circle from "../assets/Image/image 3.png"



const Reason = () => {
  return (
    <div>
          <div className="  flex flex-row max-sm:flex-col bg-ind mt-[2rem]  justify-center  max-md:gap-[1rem] max-md:p-1 ">
            <div className="w-[50%] max-sm:w-[100%] animate-slide-in-left" >
            <img src={Circle} alt="circle" className="w-[561px] h-[589px] hover-effect-box md:w-[461px] md:h-[489px] sm:w-[361px] sm:h-[389px] max-xs:w-[361px] max-xs:h-[389px] "/>
            </div>

            <div className="flex flex-col justify-content lg:w-[40%] md:w-[50%] sm:w-[50%] max-xs:w-[100%] max-xs:mt-5 gap-3 animate-slide-in-right ">
            <div className="flex ">
            <h4 className="text-Black text-[30px] max-sm:text-[24px] font-700 leading-[200%] border-b-[5px] border-Gold mr-1 font-sora ">Why</h4>
            <h4 className="text-Black text-[30px] max-sm:text-[24px] font-700 leading-[200%] font-sora ">You Should Trust Us</h4>
            </div>
            <p className="text-Black text-[16px] max-sm:text-[14px] md:justify-start  md:w-[90%] sm:w-[180%] sm:flex sm:justify-center font-400 font-sora leading-[32px] max-xs:pl-[.5rem] max-xs:pr-[1rem] max-xs:w-[90%] ">
            Our team of highly skilled professionals specializes in web and app development, providing tailored expertise to meet your unique business needs. 
            With a track record of success, we prioritize your satisfaction, maintaining transparent communication and exceptional customer service throughout the process.
             By staying up-to-date with the latest trends and technologies, we incorporate cutting-edge solutions to give your business a competitive edge.
              Through a collaborative approach, we actively involve you in the development process, ensuring the final product aligns perfectly with your vision. 
            With meticulous attention to detail, we deliver a polished and seamless user experience, backed by reliable support and prompt assistance when needed.
            </p>
            <div className="flex justify-start  max-xs:p-3 ">
            <button className="bg-start w-[150px] hover-effect-box h-[50px] rounded-[10px] text-word text-[20px] leading-[25px] font-600 pt-[2px] hover:bg-start-dark  "><Link to="/contact" className="font-sora">Contact Us</Link></button>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Reason
