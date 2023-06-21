import frameImage from '../assets/Image/IMG_20220624_1718181.png';

const Provide = () => {
    const boxes = [
        { title: 'Retail e-commerce' },
        { title: 'Education & E-Learning' },
        { title: 'Healthcare And Fitness' },
        { title: 'Social Networking' },
        { title: 'Real Estate' },
        { title: 'Food & Restaurant' },
      ];
  return (
    <div className=' w-[100%] md:p-[1rem] lg:p-[1rem] mt-7 max-xxs:pl-[.2rem] '>
   <div className='flex flex-row'> <h3 className='font-600 text-[40px] leading-[160%] text-Black border-b-[.3rem] border-Gold font-sora '>In</h3>
    <h3 className='font-600 text-[40px] leading-[160%] text-Black font-sora '>dustries we serve</h3></div>
    <h4 className=' font-400 text-[24px] text-Black leading-[200%] max-xs:text-[18px] font-sora  max-xxs:pr-[7rem] '>We Make Almost Every Genre Of Application, You Name it And We Build it</h4>

    <div className="container  mt-8 flex md:p-[2rem] lg:p-[2rem] ">
    <div className="grid grid-cols-1 gap-3  sm:grid-cols-2 sm:gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:pl-[0]  lg:pl-[5rem]  ">
    {boxes.map((box, index) => (
        <div
          key={index}
          className="pl-2  pt-[18rem] rounded-[.5rem] cursor-pointer  hover-effect-box  flex  text-word text-[20px] font-bold leading-[25px] font-sora  max-w-full "
          style={{
            width: '370px',
            height: '350px',
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${frameImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow:"0px 4px 200px rgba(0, 0, 0, 0.03",
          }}
        >
         {box.title}
        </div>
      ))}
    </div>
    </div>


    </div>
  )
}

export default Provide



