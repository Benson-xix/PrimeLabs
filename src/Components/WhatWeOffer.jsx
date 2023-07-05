import Smile from "../assets/Image/Group 13.png";
import Line1 from "../assets/Image/Group.png";
import Tick from "../assets/Image/Tick.png";

const WhatWeOffer = () => {
  return (
    <div>
      <div className='flex flex-col p-3 gap-[3rem] xxs:pr-[6rem] '>
        <div className=' flex justify-center animate-slide-in-right  max-xs:mt-10 xxs:pr-[3rem] xxs:p-0  xxs:pl-[0rem] '>
          <h3 className='text-[48px] font-600 leading-[160%] text-Black border-b-[.5rem] font-sora border-Gold mr-4 '>
            what
          </h3>
          <h3 className='text-[48px] font-sora font-600 leading-[160%] text-Black'>
            we offer
          </h3>
        </div>
        <div
          className='flex flex-row max-xs:flex-col lg:p-1 gap-[2rem]  hover-effect-box  w-full   lg:w-[100%] h-[400px]  md:w-[100%]  md:p-0 sm:p-0 xs:p-0 sm:w-[700px] max-xs:w-[350px]   bg-word rounded-[10px] animate-slide-in-left  ]'
          style={{ boxShadow: "0px 4px 200px rgba(0, 0, 0, 0.1)" }}
        >
          <div className=' flex flex-col pl-[2rem]  w-[50%] sm:w-[50%]  max-xs:w-[90%]'>
            <h4 className=' text-Black md:text-[32px] leading-[160%] font-600 mt-[2rem] xxs:mt-[.5rem] font-sora sm:text-[20px] max-sm:text-[30px]  '>
              software services provided by
              <br />
              PrimeLabs
            </h4>

            <p className=' text-Black text-[16px] max-sm:text-[12px] font-sora  leading-[32px] md:mt-[3rem] sm:mt-1rem max-sm:mt-6 font-400 '>
             Web Development: HTML, CSS, JavaScript, React, Python, PHP. Mobile App Development: Custom iOS, Android apps. E-commerce, UI/UX Design, Maintenance, Consulting, tailored solutions.
            </p>
          </div>
          <div className=' w-[512px] h-[363px] flex justify-center mt-[2rem]'>
            <img
              src={Smile}
              alt='smile'
              className='w-[475px] h-[331px] md:w-[375px] sm:w-[275px]  max-xs:hidden '
            />
          </div>
        </div>

        <div
          className='flex flex-row lg:p-1 gap-[2rem] max-xs:gap-0   w-[100%] h-[400px]  md:w-[100%]  md:p-0 sm:p-0 xs:p-0 sm:w-[700px] max-xs:w-[350px]   md:p-0 sm:p-0 xs:p-0  bg-word rounded-[10px] animate-slide-in-right'
          style={{ boxShadow: "0px 4px 200px rgba(0, 0, 0, 0.1)" }}
        >
          <div className=' flex flex-col gap-[2rem]  max-xs:w-[100%] pl-[1rem]'>
            <h4 className=' text-Black text-[32px] leading-[160%] font-600 mt-[2rem] xxs:mt-[.5rem] font-sora max-sm:text-[20px] '>
              PrimeLabs Solves
            </h4>

            <p className=' text-Black text-[16px] leading-[32px] font-sora font-400 max-sm:text-[12px] xxs:pr-[1rem] '>
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industries standard dummy text ever since the
              1500s, when an unknown printer took a galley of type
            </p>

            <ul className='list-none text-Black text-[16px] max-sm:text-[12px] text-uppercase leading-[30px] flex flex-col gap-5 font-600 mt-3 md:mt-[.5rem] max-xs:mt-3 '>
              <div className='flex flex-row gap-3'>
                <img
                  src={Tick}
                  alt='Tick'
                  className='w-[17px] h-[12px] mt-2 '
                />{" "}
                <li className="font-sora">Fintech</li>
              </div>
              <div className='flex flex-row gap-3'>
                <img
                  src={Tick}
                  alt='Tick'
                  className='w-[17px] h-[12px] mt-2 '
                />{" "}
                <li className="font-sora">Edtech</li>
              </div>
              <div className='flex flex-row gap-3'>
                <img
                  src={Tick}
                  alt='Tick'
                  className='w-[17px] h-[12px] mt-2 '
                />{" "}
                <li className="font-sora">Retail</li>
              </div>
            </ul>
          </div>
          <div className=' w-[712px] h-[763px] relative flex justify-center mt-[2rem ]  max-xs:hidden max-xs:w-[0px] max-xs:h-[0px] '>
            <img
              src={Line1}
              alt='Tick'
              className='w-[775px] h-[731px] absolute  mr-[5rem] max-xs:hidden '
              style={{ zIndex: `20` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
