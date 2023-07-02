import { useState } from "react";
import Smile2 from "../assets/Image/Group 19 (1).png";

const WhoAreWe = () => {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleModalMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <div
        className='flex flex-row md:pl-[2rem]  gap-[0rem] w-[100%] h-[400px]  hover-effect-box  sm:w-[100%] max-xs:w-[100%] max-xs:w-[350px] md:p-0 bg-word rounded-[10px] pl-[2rem] sm:pl-[1rem] max-xs:ml-[5rem] relative  animate-slide-in-left'
        style={{ boxShadow: "0px 4px 200px rgba(0, 0, 0, 0.1)" }}
      >
        <div className=' flex flex-col  lg-gap-[.1rem]  md:gap-[.5rem] md:pl-3   w-[50%] max-xs:w-[90%] '>
          <div className='flex flex-row'>
            <h4 className=' text-Black text-[32px] font-sora leading-[160%] font-600 mt-[2rem] border-b-[.5rem] border-Gold mr-4 '>
              Who
            </h4>
            <h4 className=' text-Black text-[32px] font-sora leading-[160%] font-600 mt-[2rem]'>
              Are We
            </h4>
          </div>

          <h5 className=' text-Black text-[16px] font-sora leading-[32px] mt-[1rem] font-400 '>
          Welcome to PrimeLabs
          </h5>

          <p className=' text-Black text-[16px] font-sora leading-[32px] mt-[1rem] font-400 max-md:mt-[.5rem] max-sm:text-[12px] ' >
          PrimeLabs is a trusted provider of expert web and app development solutions.
          With a passion for helping businesses thrive in the digital landscape, 
          we offer a comprehensive range of services to meet your unique needs.{" "}
            <span onClick={openModal} className='text-red cursor-pointer '>read more...</span>
          </p>

          {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 sm:pr-[1rem]  max-xs:pl-[1rem]"
          onMouseLeave={handleModalMouseLeave}>
          <div className="relative bg-white max-sm:bg-ash rounded-lg p-8 w-[100%] border md:border-gray-900 sm:border-Gold  md:h-[100%] sm:h-[160%] max-xs:h-[270%] sm:mt-[12rem] xs:mt-[10rem] max-xs:mt-[40rem]  ">
            <span onClick={closeModal} className="absolute top-1 right-4 text-gray-500 hover:text-gray-700 cursor-pointer">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
            <div className="grid mt-2 grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border border-gray-300 max-sm:border-white p-4 rounded-lg hover-effect-box ">
          <h2 className="text-xl font-bold mb-4 max-sm:text-box font-sora "><span className="border-b-[.2rem] border-Gold">Our</span> History</h2>
          <p className="max-sm:text-box  font-sora ">Since our establishment, PrimeLabs has been at the forefront of delivering top-notch web and app development solutions. With a strong track record of success and a growing client base, we have solidified our position as a leader in the industry.</p>
        </div>
        <div className="border border-gray-300 max-sm:border-white p-4 rounded-lg hover-effect-box ">
          <h2 className="text-xl font-bold mb-4 max-sm:text-box font-sora "><span className="border-b-[.2rem] border-Gold">Our</span> Core Values</h2>
          <p className="max-sm:text-box font-sora ">At PrimeLabs, we are guided by our core values of expertise, problem-solving, innovation, and customer success. These values form the foundation of our company culture and drive us to deliver exceptional results for our clients.</p>
        </div>
        <div className="border border-gray-300 max-sm:border-white p-4 rounded-lg hover-effect-box ">
          <h2 className="text-xl font-bold mb-4 max-sm:text-box font-sora "><span className="border-b-[.2rem] border-Gold">Services</span> and <span className="border-b-[.2rem] border-Gold">Expertise</span></h2>
          <p className="max-sm:text-box font-sora ">We specialize in web and app development, utilizing the latest technologies and frameworks to create dynamic and user-friendly digital experiences. Our team of skilled professionals is proficient in HTML, CSS, JavaScript, React, Python, PHP (Laravel), and WordPress, ensuring that we can meet a wide range of development needs.</p>
        </div>
      </div>
    </div>
  </div>
      )}
        </div>
        <div className=' w-[512px] h-[363px] flex justify-center mt-[2rem] max-xs:hidden max-xs:w-[0px] max-xs:h-[0px]'>
          <img
            src={Smile2}
            alt='smile'
            className='w-[475px] h-[331px] md:w-[375px] sm:w-[275px]  max-xs:hidden '
          />
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
