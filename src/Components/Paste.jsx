// import { useEffect } from 'react';

// import { useState } from 'react';
// import PropTypes from 'prop-types';



 

// const slideWidth = 30;

// const boxes = [
//   {
//     name: 'John Peter',
//     description: 'Lorem Ipsum has been the industry standard dummy text Lorem Ipsum has been the industry standard dummy text',
//     rating: '4.2 From play store',
//     image: 'Face', // Replace 'Face' with the actual image URL
//   },
//   // Add more box objects as needed
// ];

// const length = boxes.length;
// const _items = [...boxes];

// const sleep = (ms = 0) => {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// };

// const createItem = (position, idx) => {
//   const item = {
//     styles: {
//       transform: `translateX(${position * slideWidth}rem)`,
//     },
//     box: _items[idx],
//   };

//   switch (position) {
//     case length - 1:
//     case length + 1:
//       item.styles = { ...item.styles, filter: 'grayscale(1)' };
//       break;
//     case length:
//       break;
//     default:
//       item.styles = { ...item.styles, opacity: 0 };
//       break;
//   }

//   return item;
// };

// const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
//   const item = createItem(pos, idx, activeIdx);

//   return (
//     <li className="carousel__slide-item" style={item.styles}>
//       <div className="carousel__slide-item-img-link">
//         <img src={item.box.image} alt={item.box.name} />
//       </div>
//       <div className="carousel-slide-item__body">
//         <h4>{item.box.name}</h4>
//         <p>{item.box.description}</p>
//       </div>
//     </li>
//   );
// };

// const keys = Array.from(Array(_items.length).keys());

// const Carousel = () => {
//   const [items, setItems] = React.useState(keys);
//   const [isTicking, setIsTicking] = React.useState(false);
//   const [activeIdx, setActiveIdx] = React.useState(0);
//   const bigLength = items.length;

//   const prevClick = (jump = 1) => {
//     if (!isTicking) {
//       setIsTicking(true);
//       setItems((prev) => {
//         return prev.map((_, i) => prev[(i + jump) % bigLength]);
//       });
//     }
//   };

//   const nextClick = (jump = 1) => {
//     if (!isTicking) {
//       setIsTicking(true);
//       setItems((prev) => {
//         return prev.map(
//           (_, i) => prev[(i - jump + bigLength) % bigLength]
//         );
//       });
//     }
//   };

//   const handleDotClick = (idx) => {
//     if (idx < activeIdx) prevClick(activeIdx - idx);
//     if (idx > activeIdx) nextClick(idx - activeIdx);
//   };

//   React.useEffect(() => {
//     if (isTicking) sleep(300).then(() => setIsTicking(false));
//   }, [isTicking]);

//   React.useEffect(() => {
//     setActiveIdx((length - (items[0] % length)) % length); // prettier-ignore
//   }, [items]);

//   return (
//     <div className="carousel__wrap">
//       <div className="carousel__inner">
//         <button
//           className="carousel__btn carousel__btn--prev"
//           onClick={() => prevClick()}
//         >
//           <i className="carousel__btn-arrow carousel__btn-arrow--left" />
//         </button>
//         <div

//  className="carousel__container">
//           <ul className="carousel__slide-list">
//             {items.map((pos, i) => (
//               <CarouselSlideItem
//                 key={i}
//                 idx={i}
//                 pos={pos}
//                 activeIdx={activeIdx}
//               />
//             ))}
//           </ul>
//         </div>
//         <button
//           className="carousel__btn carousel__btn--next"
//           onClick={() => nextClick()}
//         >
//           <i className="carousel__btn-arrow carousel__btn-arrow--right" />
//         </button>
//         <div className="carousel__dots">
//           {items.slice(0, length).map((pos, i) => (
//             <button
//               key={i}
//               onClick={() => handleDotClick(i)}
//               className={i === activeIdx ? 'dot active' : 'dot'}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };








































































































// import  { useState, useEffect } from 'react';


// const Paste = () => {
//  
//   const [isCarouselVisible, setIsCarouselVisible] = useState(true);



 
//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + boxes.length) % boxes.length);
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % boxes.length);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 868) {
//         setIsCarouselVisible(false);
//       } else {
//         setIsCarouselVisible(true);
//       }
//     };

//     window.addEventListener('resize', handleResize);

//     // Initial check on component mount
//     handleResize();

//     // Cleanup
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   if (!isCarouselVisible) {
//     const isPrevButtonActive = currentIndex !== 0; 
//     const isNextButtonActive = currentIndex !== boxes.length - 3;

//     return (
//       <div className="flex flex-col  w-[100%]  sm:pl-[7rem]    h-[368px] mt-4">
//         <div className="flex items-center space-x-4 mb-4   ">
//           <button
//             className="text-gray-500 hover:text-gray-700 focus:outline-none hover-effect-box "
//             onClick={handlePrevious}
//             disabled={!isPrevButtonActive}
//           >
//             <img src={Prev} alt="prev" className="w-[50px] h-[50px]" />
//           </button>

//           <div className="flex-shrink-0 h-[100%] w-[296px]   bg-gray-200 flex flex-col gap-4 p-7 rounded-lg shadow-md">
//             {/* Render item content */}
//             <div className="flex flex-row gap-[7rem] max-md:gap-[3rem] ">
//               <img src={boxes[currentIndex].image} alt="Face" className="w-[100px] h-[100px]" />
//               <img src={Quote} alt="quote" className="w-[30px] h-[21px]" />
//             </div>

//             <div className="flex flex-col gap-[2rem] max-md:gap-[.5rem]">
//               <h5 className="text-Black text-[16px] font-sora leading-[151%] font-700">
//                 {boxes[currentIndex].name}
//               </h5>
//               <p className="font-400 text-[15px] font-sora leading-[151%] text-Black">
//                 {boxes[currentIndex].description}
//               </p>

//               <div className="flex flex-row gap-2">
//                 <img src={Star} alt="Star" className="w-[20px] h-[19px]" />
//                 <p className="font-600 text-Black font-sora text-[12px] leading-[151%]">
//                   {boxes[currentIndex].rating}
//                 </p>
//               </div>
//             </div>
//           </div>

//           <button
//             className="text-gray-500 hover:text-gray-700 focus:outline-none hover-effect-box "
//             onClick={handleNext}
//             disabled={!isNextButtonActive}
//           >
//             <img src={Next} alt="next" className="w-[50px] h-[50px]" />
//           </button>
//         </div>
//       </div>
//     );
//   }  

//   else if (window.innerWidth > 1024) {
//     const isPrevButtonActive = currentIndex !== 0; 
//     const isNextButtonActive = currentIndex !== boxes.length - 3;

//     return (
   
//     );
//   }


//   const isPrevButtonActive = currentIndex !== 0; 
//   const isNextButtonActive = currentIndex !== boxes.length - 3;
//   return (
//     <div className="flex flex-col  w-[100%]   h-[368px] mt-4">
//       <div className="flex items-center space-x-4 mb-4">
//         <button
//           className="text-gray-500 hover:text-gray-700 hover-effect-box focus:outline-none"
//           onClick={handlePrevious}
//           disabled={!isPrevButtonActive}
//         >
//           <img src={Prev} alt="prev" className="w-[50px] h-[50px]" />
//         </button>

//         <div className="flex space-x-4 overflow-x-auto">
//           {boxes.slice(currentIndex, currentIndex + 4).map((box) => (
//             <div
//             key={box.name} className="flex-shrink-0 h-[100%] w-[296px] hover-effect-box bg-gray-200 flex flex-col gap-4 p-7 rounded-lg shadow-md"
//             >
//               {/* Render item content */}
//               <div className="flex flex-row gap-[7rem] max-md:gap-[3rem] ">
//                 <img src={box.image} alt="Face" className="w-[100px] h-[100px]" />
//                 <img src={Quote} alt="quote" className="w-[30px] h-[21px]" />
//               </div>

//               <div className="flex flex-col gap-[2rem] max-md:gap-[.5rem]">
//                 <h5 className="text-Black text-[16px] font-sora leading-[151%] font-700">{box.name}</h5>
//                 <p className="font-400 text-[15px] font-sora leading-[151%] text-Black">{box.description}</p>

//                 <div className="flex flex-row gap-2">
//                   <img src={Star} alt="Star"  className="w-[20px] h-[19px]" />
//                   <p className="font-600 text-Black text-[12px] font-sora leading-[151%]">{box.rating}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <button
//           className="text-gray-500 hover:text-gray-700 hover-effect-box focus:outline-none"
//           onClick={handleNext}
//           disabled={!isNextButtonActive}
//         >
//           <img src={Next} alt="next" className="w-[50px] h-[50px]" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Paste;
