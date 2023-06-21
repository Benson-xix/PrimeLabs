import  { useState, useEffect } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

const Scroll = () => {
    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []); 

  return (
    <button
      className={`scroll-to-top-btn ${isVisible ? 'visible' : ''}  hover-effect-box `}
      onClick={scrollToTop}
    >
      <AiOutlineArrowUp className='scroll-up'/>
    </button>
  )
}

export default Scroll