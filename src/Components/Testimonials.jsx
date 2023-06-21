// import Carousel from "./Carosel"
// import Paste from "./Paste"

const Testimonials = () => {
  return (
    <div className="flex flex-col gap-5  ">
      <div className="flex flex-col gap-[1rem]  ">
        <div className="flex flex-row max-sm:justify-center">
          <h2 className="text-Black text-[30px] font-700 leading-[200%] font-sora border-b-[3px] border-Gold ">Test</h2>
          <h2 className="text-Black text-[30px] font-700 font-sora leading-[200%]">imonial</h2>
          </div>
        <p className="text-Black text-[16px] font-400 font-sora leading-[32px] max-xs:pr-[1rem] xxs:pl-[.5rem] xxs:w-[90%]">what our clients say about us <br className="xxs:hidden"/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,</p>
      </div>
      {/* <Paste/> */}
    </div>
  )
}

export default Testimonials