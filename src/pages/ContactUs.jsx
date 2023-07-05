import { useEffect } from "react";
import Header from "../Components/Header";
import Discover from "../Components/Discover";
import Scroll from "../Components/Scroll";

import { useState } from "react";
import Phone from "../assets/Image/Vector (1).png"
import Mail from "../assets/Image/Vector (2).png"
// import location from "../assets/Image/Vector (3).png"
import insta from "../assets/Image/instagram.png"
import twitter from "../assets/Image/twitter.png"
import facebook from "../assets/Image/Facebook.png"
import discord from "../assets/Image/discord.png"
import emailjs from 'emailjs-com';
// import Footer from "./Footer";
import LoadingOverlay from "../LoadingOverlay";


const ContactUs = () => {


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);



  useEffect(() => {
    document.documentElement.classList.add('animate-slide-in-top');
  }, []);

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')

  const EMAIL_SERVICE_ID = 'service_wvvzjcs';
  const EMAIL_TEMPLATE_ID = 'template_bmwi9ev';
  const EMAIL_USER_ID = 'KEKACgBx3DlXrfBTX';
  const RECIPIENT_EMAIL = 'primelabs.dev@gmail.com';

  

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  useEffect(() => {
    emailjs.init('YOUR_USER_ID');
  }, []);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };


 
 

   const handleSubmit = (event) => {
  event.preventDefault();

  if (!isEmailValid(email)) {
    window.alert('Invalid email. Please enter a valid email address.');
    return;
  }

  const templateParams = {
    from_email: email,
    message: message,
    to_email: RECIPIENT_EMAIL, 
  };

  emailjs
    .send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, templateParams, EMAIL_USER_ID)
    .then((response) => {
      console.log('Email sent successfully!', response.text);
      window.alert('Message sent successfully!');
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
      window.alert('Failed to send message. Please try again.');
    });

  setEmail('');
  setMessage('');
};

const isEmailValid = (email) => {
  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  return emailPattern.test(email);
}


  return (
    <>
    {isLoading && <LoadingOverlay />}
    <div className="w-[100%]  flex  flex-col   max-xs:pl-[0rem] overflow-hidden " style={{height:"fit-content"}}>
    <div className=" flex-col bg-cover h-[768px] bg-hero  bg-no-repeat max-xs:w-[425px]  " style={{
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/unsplash_SYTO3xs06fU.png')`,
  }}>
    <Header/>
    <Discover/>
    </div>

    <div className="bg-word mt-[5rem] flex w-full md:max-w-[1100px]  pl-[1rem] pr-[1rem] max-xs:pl-[0rem]    ">
            <div className="flex flex-col  max-xs:p-0">
            <Scroll/>
                    <section className="  flex flex-col gap-5 max-xs:pl-[.1rem]  ">
                    <div className="mt-3 flex flex-col  gap-2 p-4 bg-word ">
       <div className="flex flex-col justify-center">
       <div className=" flex xl:pl-[50rem] lg:pl-[40rem] md:pl-[26rem] ">
        <h1 className="text-center border-b-[5px] border-w-[5px] border-Gold text-[30px]  leading-[120%] font-semibold text-Black  ">Contact Us</h1>
        </div>

        <div className="flex flex-row  md:justify-center w-[100%]  max-sm:flex-col   xs:p-2 max-xx:pr-[.5rem] ">
            <div className="flex md:justify-start ">
            <form className="w-full max-w-sm">
        <div className="flex flex-col gap-5  w-[650px] py-2 input-container ">
        <input
        type="email"
        name="user_email"
        className={`border-3 lg:w-[546px] lg:h-[90px] max-md:w-[346px] max-md:h-[70px] rounded-[20px] bg-start text-word  text-word font-sora py-1 px-7 leading-tight focus:outline-none ${
          email.length > 0 && !isEmailValid(email) ? 'border-2 border-ash ' : ''
        }`}
        placeholder="Enter Email"
        value={email}
        onChange={handleEmailChange}
        required
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
      />
     

      
        <input
            type="text"
            name="message"
            className=" lg:w-[546px] lg:h-[]  max-md:w-[346px] rounded-[20px] max-md:h-[177px] font-sora bg-start text-word text-word pl-7 pb-[7rem] lg:pt-[1rem] focus:outline-none"
            placeholder="Enter Message"
            value={message}
            onChange={handleMessageChange}
            required
          />

          <div className="flex lg:pl-[5rem] ">
            <button
           type="submit"
           className={`bg-start hover:bg-start-dark text-white font-bold py-2 px-4 w-[346px] font-sora h-[60px] rounded-[10px]  focus:outline-none focus:shadow-outline ${
             message.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
           }`}
           onClick={handleSubmit}
           disabled={message.length === 0}
         
          >
            Submit
          </button>
          </div>
     
          
        </div>
      </form>
            </div>

            <div className=" flex flex-col gap-6 w-[100%] justify-center xl:pl-[60rem] lg:pl-[38rem] md:pl-[13rem] mt-5  ">
                <h5 className="text-[20px] text-Black font-bold leading-[120%]  max-sm:justify-center font-sora flex ">Contact Information</h5>
                <p className="font-300 leading-[120%] text-[18px] md:w-[352px] md:h-[108px] flex md:justify-center text-ash font-sora ">
                Feel free to contact us for any inquiries or assistance.
                <br className=""/>Our dedicated team is here to help you with prompt and reliable support.
                <br/>Reach out to us today!  
                </p>

                <div className="flex md:justify-end flex-col gap-5 ">
                <div className="flex flex-row  gap-2">
                    <img src={Phone} alt="phone" className=" w-[20px] h-[20px]" />
                    <div className="flex flex-col  gap-2">
                    <h5 className=" text-18px leading-1205 font-400 font-sora text-ash">Call Us</h5>
                    <p className="text-14px leading-[22px] font-400 text-ash font-sora ">call - +234 8089100521</p>
                    </div>
                </div>

                <div className="flex flex-row  gap-2">
                    <img src={Mail} alt="mail" className=" w-[20px] h-[20px]" />
                    <div className="flex flex-col gap-2">
                    <h5 className=" text-18px leading-1205 font-400 text-ash font-sora ">Email Us</h5>
                    <p className="text-14px leading-[22px] font-400 text-ash font-sora ">primelabs.dev@gmail.com</p>
                    </div>
                </div>


                {/* <div className="flex md:justify-end flex-row gap-2">
                    <img src={location} alt="location" className=" w-[20px] h-[20px]" />
                    <div className="flex flex-col gap-2">
                    <h5 className=" text-18px leading-1205 font-400 text-ash">Address</h5>
                    <p className="text-14px leading-[22px] font-400 text-ash ">Unit 8012- 8014,  Chandaka Industrial Estate,<br/>
                     I T University, Patia, Bhubaneswar, Odisha</p>
                    </div>
                </div> */}
                </div>

                <div className="flex flex-row ml-8 gap-4">
                    <img src={insta} alt="insta" className="bg-word w-[17px] h-[17px] " />
                    <img src={twitter} alt="twitter" className="bg-word w-[17px] h-[17px]" />
                    <img src={facebook} alt="facebook" className="bg-word w-[17px] h-[17px]" />
                    <img src={discord} alt="discord" className="bg-word w-[23px] h-[23px]" />
                </div>
            </div>
        </div>
       </div>
    </div>
                    </section>
                </div>
            </div>

            <footer className="w-[100%] max-xs:w-[105%] h-[20rem] bg-Black"></footer>
     
    </div>
    </>
  )
}

export default ContactUs
