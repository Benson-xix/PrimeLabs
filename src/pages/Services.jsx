import { useEffect } from "react";
import Header from "../Components/Header";
import ServicesWords from "../Components/ServicesWords";
import WhatWeOffer from "../Components/WhatWeOffer"
import Scroll from "../Components/Scroll";
import Doings from "../Components/Doings";
import Provide from "../Components/Provide";
import Contact from "../Components/Contact";
import LoadingOverlay from "../LoadingOverlay";
import { useState } from "react";



const Services = () => { 
    useEffect(() => {
      document.documentElement.classList.add('animate-slide-in-top');
    }, []);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 4000);
  
      return () => clearTimeout(timer);
    }, []);

  return (
    <>
    {isLoading && <LoadingOverlay />}
      <div  className="  md:flex  flex-col     max-xs:pl-[0rem]   overflow-hidden "  style={{ height:"fit-content"}}>
      <div className=" flex flex-col bg-cover h-[768px] bg-hero  bg-no-repeat max-xs:w-[425px]  " style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/unsplash_SYTO3xs06fU.png')`,
    }}>
      <Header/>
       <ServicesWords/>
      </div>

      <div className="bg-word mt-[5rem] flex w-full md:max-w-[1100px] mx-auto pl-[1rem] pr-[1rem] max-xs:pl-[0] ">
              <div className="flex flex-col  max-xs:p-0">
              <Scroll/>
                      <section className=" flex flex-col gap-5  xs:pl-[1rem] xxs:pl-[0rem] ">
                            <WhatWeOffer/>
                            <Provide/>
                            <Doings/>
                            <Contact/>
                      </section>
                  </div>
      </div>

      <footer className="w-[100%] max-xs:w-[105%]  h-[20rem] bg-Black"></footer>
      </div>
    </>
  )
}

export default Services
