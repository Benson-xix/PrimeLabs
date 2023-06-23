import { useState } from "react";
import Phone from "../assets/Image/Vector (1).png"
import Mail from "../assets/Image/Vector (2).png"
// import location from "../assets/Image/Vector (3).png"
import insta from "../assets/Image/instagram.png"
import twitter from "../assets/Image/twitter.png"
import facebook from "../assets/Image/Facebook.png"
import discord from "../assets/Image/discord.png"
import emailjs from 'emailjs-com';
import { useEffect } from "react";
// import Footer from "./Footer";




const Contact = () => {
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

  function isEmailValid(email) {
    
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    
    return emailPattern.test(email);
  }

  return (
    <div className="mt-3 flex flex-col  gap-2 p-4 ">
       <div>
       <div className="w-[100%] flex justify-center   ">
        <h1 className="text-center border-b-[5px] border-w-[5px] border-Gold text-[30px]  leading-[120%] font-semibold text-Black ">Contact Us</h1>
        </div>

        <div className="flex flex-row  md:justify-between   max-sm:flex-col   xs:p-2 max-xx:pr-[.5rem] ">
            <div className="flex md:justify-start ">
            <form className="w-full max-w-sm">
        <div className="flex flex-col gap-5  w-[650px] py-2 input-container ">
        <input
        type="email"
        name="user_email"
        className={`border-3 w-[346px] h-[70px] rounded-[20px] bg-start text-word  text-word font-sora py-1 px-7 leading-tight focus:outline-none ${
          email.length > 0 && !isEmailValid(email) ? 'border-start' : ''
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
            className="w-[346px] rounded-[20px] h-[177px] font-sora bg-start text-word text-word pl-7 pb-[8rem] focus:outline-none"
            placeholder="Enter Message"
            value={message}
            onChange={handleMessageChange}
            required
          />
     
          <button
           type="submit"
           className={`bg-start hover:bg-start-dark text-white font-bold py-2 px-4 w-[346px] font-sora h-[60px] rounded-[10px] focus:outline-none focus:shadow-outline ${
             message.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
           }`}
           onClick={handleSubmit}
           disabled={message.length === 0}
         
          >
            Submit
          </button>
        </div>
      </form>
            </div>

            <div className=" flex flex-col gap-6 w-[100%] md:justify-end mt-5  ">
                <h5 className="text-[20px] text-Black font-bold leading-[120%] md:justify-end max-sm:justify-center font-sora flex ">Contact Information</h5>
                <p className="font-300 leadin-[120%] text-[18px] flex md:justify-end text-ash font-sora ">
                Lorem ipsum dolor sit amet consectetur. Sit sed
                <br className="max-xxs:hidden"/>commodo mauris  
                </p>

                <div className="flex md:justify-end flex-col gap-5 ">
                <div className="flex flex-row md:justify-end gap-2">
                    <img src={Phone} alt="phone" className=" w-[20px] h-[20px]" />
                    <div className="flex flex-col  gap-2">
                    <h5 className=" text-18px leading-1205 font-400 font-sora text-ash">Call Us</h5>
                    <p className="text-14px leading-[22px] font-400 text-ash font-sora ">call - +234 8089100521</p>
                    </div>
                </div>

                <div className="flex flex-row md:justify-end gap-2">
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

                <div className="flex md:justify-end flex-row ml-8 gap-4">
                    <img src={insta} alt="insta" className="bg-word w-[17px] h-[17px] " />
                    <img src={twitter} alt="twitter" className="bg-word w-[17px] h-[17px]" />
                    <img src={facebook} alt="facebook" className="bg-word w-[17px] h-[17px]" />
                    <img src={discord} alt="discord" className="bg-word w-[23px] h-[23px]" />
                </div>
            </div>
        </div>
       </div>
          
       {/* <Footer/> */}
    </div>
    
  )
}

export default Contact