import Smile2 from "../assets/Image/Group 19 (1).png";

const WhoAreWe = () => {
  return (
    <div>
      <div
        className='flex flex-row md:pl-[2rem]  gap-[0rem] w-[100%] h-[400px]  hover-effect-box  sm:w-[100%] max-xs:w-[100%] max-xs:w-[350px] md:p-0 bg-word rounded-[10px] pl-[2rem] sm:pl-[1rem] relative  animate-slide-in-left'
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
            About PrimeLabs
          </h5>

          <p className=' text-Black text-[16px] font-sora leading-[32px] mt-[1rem] font-400 max-md:mt-[.5rem] max-sm:text-[12px] '>
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industries standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived{" "}
            <span className='text-red'>read more...</span>
          </p>
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
