import Prev from '../assets/Image/Frame 33.png';
  import Next from '../assets/Image/Frame 32.png';
  import Quote from '../assets/Image/Vector.png';
  import Star from '../assets/Image/material-symbols_star.png';
import { useCallback, useState } from 'react';
import { useEffect } from 'react';



const Carosel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSlidingBack, setIsSlidingBack] = useState(false);
  


  const boxes = [
    {
      name: 'John Peter',
      description: 'Lorem Ipsum has been the industry standard dummy text Lorem Ipsum has been the industry standard dummy text',
      rating: '4.2 From play store',
   
    },
    {
      name: 'John King',
      description: 'In a world filled with endless possibilities, innovation drives progress and fuels growth.',
      rating: '4.2 From play store',
   
    },
    {
      name: 'John Haaland',
      description: 'From the depths of imagination to the heights of realization, human ingenuity knows no bounds',
      rating: '4.2 From play store',
   
    },
    {
      name: 'John Muhammed',
      description: 'Through the sands of time, civilizations have risen and fallen, leaving behind tales of triumph and lessons learned. ',
      rating: '4.2 From play store',
   
    },
    {
      name: 'John the Baptist',
      description: 'In the vast expanse of the universe, celestial bodies dance in cosmic harmony, captivating our minds and inspiring our explorations.',
      rating: '4.2 From play store',
   
    },
    {
      name: 'Peter Peter',
      description: 'Amidst the cacophony of voices, ideas clash and meld, creating a symphony of perspectives.',
      rating: '4.2 From play store',
   
    },
    {
      name: 'Ben Peter',
      description: 'Natures grandeur unfolds before our eyes, painting landscapes with breathtaking beauty. The whispers of the wind ',
      rating: '4.2 From play store',
   
    },
    {
      name: 'Solomon Peter',
      description: 'Through the lens of art, emotions find expression in myriad forms, transcending language barriers and touching hearts.',
      rating: '4.2 From play store',
   
    },
    {
      name: 'Brother Peter',
      description: 'Within the realm of literature, words intertwine to craft tales that transport us to realms unknown. ',
      rating: '4.2 From play store',
   
    },
    {
      name: 'Chucks Peter',
      description: 'From the depths of despair to the zenith of hope, the human spirit perseveres through adversity',
      rating: '4.2 From play store',
   
    },
    {
      name: ' Peter',
      description: 'The symphony of knowledge resonates across generations, as wisdom is passed down through the corridors of time.',
      rating: '4.2 From play store',
   
    },
  ];

  const getVisibleBoxes = useCallback(() => {
    if (window.innerWidth >= 1440) {
      return 4;
    } else if (window.innerWidth >= 1024) {
      return 3;
    } else if (window.innerWidth >= 768) {
      return 2;
    } else {
      return 1;
    }
  }, []);


  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(boxes.length - 1);
      setIsSlidingBack(true);
    }
  }, [currentIndex, boxes.length]);

  const handleNext = useCallback(() => {
    const visibleBoxes = getVisibleBoxes();
    const lastIndex = boxes.length - visibleBoxes;

    if (currentIndex < lastIndex) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
      setIsSlidingBack(false);
    }
  }, [currentIndex, boxes.length, getVisibleBoxes]);

  useEffect(() => {
    const handleResize = () => {
      setCurrentIndex(0);
      setIsSlidingBack(false);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isSlidingBack) {
        handlePrev();
      } else {
        handleNext();
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [handleNext, handlePrev, isSlidingBack]);


  return (
    <div className="flex flex-col w-full relative sm:pl-8 mt-4">
      <div className="flex items-center space-x-4 mb-4 carousel-container ">
        <button
          className={`text-gray-500 hover:text-gray-700 hover-effect-box absolute left-[-2%] xxs:left-[3%] focus:outline-none${
            currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <img src={Prev} alt="prev" className="w-10 h-10 sm:w-12 sm:h-12" />
        </button>

        <div className="flex space-x-4 xxs:pl-[1rem] ">
        {boxes
            .slice(currentIndex, currentIndex + getVisibleBoxes())
            .map((box, index) => (
            <div
              key={index}
              className={`flex-shrink-0 h-[300px] w-64  bg-gray-200 flex flex-col gap-4  rounded-lg shadow-md ${
                index === currentIndex ? 'border-2 border-blue-500' : ''
              }`}
            >
              
              <div className="flex flex-row   pt-[1rem] pl-[1rem] ">
                <img src={Quote} alt="quote" className="w-8 h-6" />
              </div>

              <div className="flex flex-col gap-[1rem] sm:gap-2 mt-2 ">
                <h5 className="text-black text-[16px]  pl-[1.5rem] font-sora font-semibold leading-tight">
                  {box.name}
                </h5>
                <p className="text-gray-700 text-[16px] pl-[1.5rem] leading-tight font-sora">
                  {box.description}
                </p>

                <div className="flex flex-row gap-2 pl-[1rem]  max-xs:mt-[.5rem] ">
                  <img src={Star} alt="Star" className="w-6 h-6" />
                  <p className="text-black font-semibold text-sm sm:text-base leading-tight">
                    {box.rating}
                  </p>
                </div>
              </div>

              <div className="flex flex-row gap-[5rem]  pt-[1rem] max-xs:pt-[.1rem] pl-[12rem] ">
                <img src={Quote} alt="quote" className="w-8 h-6" />
              </div>
            </div>
          ))}
        </div>

        <button
          className={`text-gray-500 hover:text-gray-700 hover-effect-box absolute lg:left-[93%] md:left-[87%] sm:left-[79%] max-sm:left-[60%]  focus:outline-none
          ${
            currentIndex >= boxes.length - getVisibleBoxes()
              ? 'opacity-50 cursor-not-allowed'
              : ''
          }`}
          onClick={handleNext}
          disabled={currentIndex >= boxes.length - getVisibleBoxes()}
        >
          <img src={Next} alt="next" className="w-10 h-10 sm:w-12 sm:h-12" />
        </button>
      </div>
    </div>
  )
}

export default Carosel