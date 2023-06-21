import { useEffect } from "react";
import Header from "../Components/Header";
import Discover from "../Components/Discover";

import Scroll from "../Components/Scroll";
import Goals from "../Components/Goals";
import Provide from "../Components/Provide";
import Doings from "../Components/Doings";
import Reason from "../Components/Reason";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";

const Home = () => {
  useEffect(() => {
    document.documentElement.classList.add("animate-slide-in-top");
  }, []);

  return (
    <div
      className='  md:flex  flex-col  pl-5 pr-5 max-xs:pl-[0rem] overflow-hidden '
      style={{ height: "fit-content" }}
    >
      <div
        className=' flex flex-col bg-cover h-[768px]   bg-no-repeat max-xs:w-[425px]  '
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/unsplash_SYTO3xs06fU.png')`,
        }}
      >
        <Header />
        <Discover />
      </div>

      <div className='bg-word mt-[5rem] flex w-full md:max-w-[1100px] mx-auto pl-[1rem] pr-[1rem] max-xs:pl-[0]  '>
        <div className='flex flex-col '>
          <Scroll />
          <section className=' flex flex-col   xs:pl-[1rem] max:xxs:pl-[0rem] '>
            <Goals />
            <Provide />
            <Doings />
            <Reason />
            <Testimonials />
            <Contact/>
          </section>
        </div>
      </div>

      <footer className='w-[100%] max-xs:w-[105%] h-[20rem] bg-Black'></footer>
    </div>
  );
};

export default Home;
