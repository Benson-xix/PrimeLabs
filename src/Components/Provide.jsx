import frameImage2 from '../assets/Image/IMG_20220624_1718181.png';
import frameImage1 from '../assets/Image/roberto-cortese-ejhjSZKTeeg-unsplash.jpg'
import frameImage3 from '../assets/Image/hush-naidoo-jade-photography-yo01Z-9HQAw-unsplash.jpg'
import frameImage4 from '../assets/Image/alex-kotliarskyi-ourQHRTE2IM-unsplash.jpg'
import frameImage5 from '../assets/Image/sean-pollock-PhYq704ffdA-unsplash.jpg'
import frameImage6 from '../assets/Image/nordwood-themes-q8U1YgBaRQk-unsplash.jpg'
import { useState } from 'react';

const Provide = () => { 
  const [expandedBox, setExpandedBox] = useState(null);
    const boxes = [
        { 
          title: 'Retail e-commerce',  
        backgroundImage: frameImage1,
        text: ' With Primelabs firms will thrive in retail e-commerce, building user-friendly platforms with secure transactions, system integration, scalability, and customization. Our expertise contributes to business growth in the dynamic digital market.' 
        },

        { 
          title: 'Education & E-Learning',
          backgroundImage: frameImage2,
          text: 'Primelabs impacts education by creating interactive learning platforms like virtual classrooms, mobile apps, and personalized solutions. We empower institutions to enhance content delivery and engage students in innovative ways.' 
          },

        {
          title: 'Healthcare And Fitness',
          backgroundImage: frameImage3,
          text: 'Primelabs provides healthcare and fitness firms with electronic health records, telemedicine, fitness apps, and AI diagnostics. These innovations improve care, enable remote consultations, track fitness, and promote well-being.' 
        },
        
        {
          title: 'Social Networking',
          backgroundImage: frameImage4,
          text: 'Primelabs drives social networking platforms by creating feature-rich applications that connect people, enable communication, and foster online communities through real-time messaging, social feeds, and personalized content recommendations.' 
            },

        {
          title: 'Real Estate',
          backgroundImage: frameImage5,
          text: 'Primelabs streamline real estate processes with digital solutions. We create property listing platforms, virtual tours, and automation systems, simplifying property search and enhancing the overall experience for buyers, sellers, and agents.' 
        },

        {
          title: 'Fin-Tech',
          backgroundImage: frameImage6,
          text: 'Primelabs innovates the Fin-Tech industry by creating secure payment gateways, mobile banking apps, trading platforms, robo-advisory systems, and blockchain solutions. These technologies improve financial transactions, accessibility, and investment capabilities.' 
        },
      ];

      const handleClick = (index) => {
        if (expandedBox === index) {
          setExpandedBox(null);
        } else {
          setExpandedBox(index);
        }
      }    
     
  return (
    <div className="w-[100%] md:p-[1rem] lg:p-[1rem] mt-7 xxs:pl-[.1rem]">
    <div className="flex flex-row">
      <h3 className="font-600 text-[40px] leading-[160%] text-Black border-b-[.3rem] border-Gold font-sora xxs:pl-[.5rem]">
        In
      </h3>
      <h3 className="font-600 text-[40px] leading-[160%] text-Black font-sora">dustries we serve</h3>
    </div>
    <h4 className="font-400 text-[24px] text-Black leading-[200%] mt-3 max-xs:text-[18px] font-sora xxs:pr-[5rem] xxs:pl-[2rem]">
      We Make Almost Every Genre Of Application, You Name it And We Build it
    </h4>

    <div className="container mt-8 flex md:p-[1rem] lg:p-[1rem] max-xs:pl-[.3rem]">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xl:pl-[0] lg:pl-[5rem]">
        {boxes.map((box, index) => (
          <div
            key={index}
            className={`pl-2 pt-[18rem] rounded-[.5rem] cursor-pointer hover-effect-box flex flex-col text-word text-[20px] font-bold leading-[25px] font-sora max-w-full ${
              expandedBox === index ? 'expanded-box' : ''
            }`}
            style={{
              width: '370px',
              height: '350px',
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${box.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: '0px 4px 200px rgba(0, 0, 0, 0.03)',
            }}
            onClick={() => handleClick(index)}
          >
            <h2
              className={`text-white text-[18px] font-bold mb-[1rem] font-sora  transition-transform duration-500 ease-in-out ${
                expandedBox === index ? 'expanded-title' : ''
              }`}
              style={{ transform: expandedBox === index ? 'translateY(-800%)' : 'none' }}
            >
              {box.title}
            </h2>
            {expandedBox === index && (
              <div
                className="text-white text-center transition-transform duration-500 ease-in-out"
                style={{ transform: expandedBox === index ? 'translateY(-70%)' : 'none' }}
              >
                <p className='text-[12px] font-sora font-semi-bold text-Gold max-xs:pr-[1rem] '>{box.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Provide



