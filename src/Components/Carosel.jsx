import Prev from '../assets/Image/Frame 33.png';
  import Next from '../assets/Image/Frame 32.png';
  import Face from '../assets/Image/Frame 34738.png';
  import Quote from '../assets/Image/Vector.png';
  import Star from '../assets/Image/material-symbols_star.png';
import { useState } from 'react';
import { useEffect } from 'react';



const Carosel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  


  const boxes = [
    {
      name: 'John Peter',
      description: 'Lorem Ipsum has been the industry standard dummy text Lorem Ipsum has been the industry standard dummy text',
      rating: '4.2 From play store',
      image: Face,
    },
    {
      name: 'John King',
      description: 'Lorem Ipsum has been the industry standard dummy text Lorem Ipsum has been the industry standard dummy text',
      rating: '4.2 From play store',
      image: Face,
    },
    {
      name: 'John Haaland',
      description: 'Lorem Ipsum has been the industry standard dummy text Lorem Ipsum has been the industry standard dummy text',
      rating: '4.2 From play store',
      image: Face,
    },
    {
      name: 'John Muhammed',
      description: 'Lorem Ipsum has been the industry standard dummy text Lorem Ipsum has been the industry standard dummy text',
      rating: '4.2 From play store',
      image: Face,
    },
    {
      name: 'John the Baptist',
      description: 'Lorem Ipsum has been the industry standard dummy text Lorem Ipsum has been the industry standard dummy text',
      rating: '4.2 From play store',
      image: Face,
    },
    {
      name: 'Peter Peter',
      description: 'Lorem Ipsum has been the industry standard dummy text Lorem Ipsum has been the industry standard dummy text',
      rating: '4.2 From play store',
      image: Face,
    },
    {
      name: 'Ben Peter',
      description: 'Lorem Ipsum has been the industry standard dummy text Lorem Ipsum has been the industry standard dummy text',
      rating: '4.2 From play store',
      image: Face,
    },
    {
      name: 'Solomon Peter',
      description: 'Lorem Ipsum has been the industry standard dummy text Lorem Ipsum has been the industry standard dummy text',
      rating: '4.2 From play store',
      image: Face,
    },
    {
      name: 'Brother Peter',
      description: 'Lorem Ipsum has been the industry standard dummy text Lorem Ipsum has been the industry standard dummy text',
      rating: '4.2 From play store',
      image: Face,
    },
    {
      name: 'Chucks Peter',
      description: 'Lorem Ipsum has been the industry standard dummy text Lorem Ipsum has been the industry standard dummy text',
      rating: '4.2 From play store',
      image: Face,
    },
  ];

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < boxes.length - getVisibleBoxes()) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const getVisibleBoxes = () => {


    if (window.innerWidth >= 1440) {
      return 4;
    } else if (window.innerWidth >= 1024) {
      return 3;
    } else if (window.innerWidth >= 768) {
      return 2;
    }  else  {
      return 1;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setCurrentIndex(0);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="flex flex-col w-full relative sm:pl-8 mt-4">
      <div className="flex items-center space-x-4 mb-4">
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
              
              <div className="flex flex-row gap-[5rem]  pt-[1rem] pl-[1rem] ">
                <img src={box.image} alt="Face" className="w-[100px] h-[100px] " />
                <img src={Quote} alt="quote" className="w-8 h-6" />
              </div>

              <div className="flex flex-col gap-8 sm:gap-2">
                <h5 className="text-black text-[16px]  pl-[1.5rem] font-sora font-semibold leading-tight">
                  {box.name}
                </h5>
                <p className="text-gray-700 text-[16px] pl-[1.5rem] leading-tight font-sora">
                  {box.description}
                </p>

                <div className="flex flex-row gap-2 pl-[1rem]  max-xs:mt-[-1.7rem] ">
                  <img src={Star} alt="Star" className="w-6 h-6" />
                  <p className="text-black font-semibold text-sm sm:text-base leading-tight">
                    {box.rating}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className={`text-gray-500 hover:text-gray-700 hover-effect-box absolute lg:left-[93%] md:left-[87%] sm:left-[79%] max-xs:left-[60%] focus:outline-none
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