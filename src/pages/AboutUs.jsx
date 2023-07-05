import { useEffect } from "react";
import Header from "../Components/Header";
import AboutUsWords from "../Components/AboutUsWords";
// import WhatWeOffer from "../Components/WhatWeOffer"
import WhoAreWe from "../Components/WhoAreWe"
import Goals from "../Components/Goals";
import Scroll from "../Components/Scroll";
import Reason from "../Components/Reason";
import Contact from "../Components/Contact";
import { useState } from "react";
import LoadingOverlay from "../LoadingOverlay";


const AboutUs = () => {
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
       <div  className="  md:flex  flex-col   max-xs:pl-[0rem] relative overflow-hidden "  style={{ height:"fit-content"}}>

    <div className=" flex flex-col bg-cover h-[768px]  bg-no-repeat max-xs:w-[425px]  " style={{
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/young-employees-sitting-office-table-using-laptop-team-work-brainstorming-meeting-concept.jpg')`,
  }}>
    <Header/>
   <AboutUsWords/>
    </div>

            <div className="bg-word mt-[5rem] flex w-full md:max-w-[1100px] mx-auto pl-[1rem] pr-[1rem] max-xs:pl-[0] ">
            <div className="flex flex-col  max-xs:p-0">
            <Scroll/>
                    <section className=" flex flex-col gap-5 md:pl-[0rem] xs:pl-[1rem] max:xxs:pl-[0rem]  ">
                        
                        <WhoAreWe/>
                        {/* <WhatWeOffer/> */}
                          <Goals />
                          <Reason/>
                          <Contact/>
                    </section>
                </div>
            </div>

            <footer className="w-[100%] max-xs:w-[105%] h-[20rem] bg-Black"></footer>
    </div>
   </>
  )
}

export default AboutUs
