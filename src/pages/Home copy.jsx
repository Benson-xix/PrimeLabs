import { useEffect } from "react";
import Header from "../Components/Header";
import Discover from "../Components/Discover";

import Scroll from "../Components/Scroll";
import Goals from "../Components/Goals";
import Provide from "../Components/Provide";
import Doings from "../Components/Doings";
import Reason from "../Components/Reason";
import Testimonials from "../Components/Testimonials";
import ContactUs from "./ContactUs";

const Home = () => {
  useEffect(() => {
    document.documentElement.classList.add("animate-slide-in-top");
  }, []);

  return (
    <div
      className='  md:flex  flex-col pt-2 pl-5 pr-5 max-xs:pl-[1rem] '
      style={{ height: "fit-content" }}
    >
      <div
        className=' flex-col bg-cover h-[768px]   bg-no-repeat max-xs:w-[400px]  '
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/unsplash_SYTO3xs06fU.png')`,
        }}
      >
        <Header />
        <Discover />
      </div>

      <div className='bg-word mt-[5rem] flex w-full md:max-w-[1100px] mx-auto pl-[1rem] pr-[1rem] max-xs:pl-[0] '>
        <div className='flex flex-col  max-xs:p-0 '>
          <Scroll />
          <section className='  grid  gap-5   '>
            <Goals />
            <Provide />
            <Doings />
            <Reason />
            <Testimonials />
            <ContactUs />
          </section>
        </div>
      </div>

      <footer className='w-[100%] h-[20rem] bg-Black'></footer>
    </div>
  );
};

export default Home;
