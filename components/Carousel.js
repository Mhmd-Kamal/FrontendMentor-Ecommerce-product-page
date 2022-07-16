import { useState, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';

import { showLightboxAtom } from '../utils/atoms';

function Carousel() {
  const [mainImages, setMainImages] = useState([]);
  const [thumbImages, setThumbImages] = useState([]);
  const [translation, setTranslation] = useState(0);
  const [activeThumb, setActiveThumb] = useState(0);

  const ref = useRef();

  const [showLightbox, setShowLightbox] = useRecoilState(showLightboxAtom);

  // TODO: use get static props instead.
  async function getImages() {
    const res = await fetch('/api/images');
    const { mainImages, thumbImages } = await res.json();

    setMainImages(mainImages);
    setThumbImages(thumbImages);
  }

  useEffect(() => {
    getImages();
  }, []);

  //Carousel functionality handlers
  function next() {
    const carouselWidth = ref.current.offsetWidth;
    setTranslation((translation) =>
      translation <= carouselWidth * -1 * (mainImages.length - 1)
        ? 0
        : translation - carouselWidth
    );
    setActiveThumb((currentThumb) =>
      currentThumb < mainImages.length - 1 ? currentThumb + 1 : 0
    );
  }
  function previous() {
    const carouselWidth = ref.current.offsetWidth;
    setTranslation((translation) =>
      translation >= 0
        ? carouselWidth * -1 * (mainImages.length - 1)
        : translation + carouselWidth
    );
    setActiveThumb((currentThumb) =>
      currentThumb > 0 ? currentThumb - 1 : mainImages.length - 1
    );
  }

  function handleClickthumb(index) {
    setActiveThumb(index);
    const carouselWidth = ref.current.offsetWidth;
    setTranslation(index * -1 * carouselWidth);
  }

  const listener = () => {
    // resets the carousel image to the first image to avoid having two images in the same time due to the changed width and the old translation amount.
    setTranslation(0);
    setActiveThumb(0);
    setShowLightbox(false);
  };
  useEffect(() => {
    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, []);

  return (
    <section className=' w-full h-80 md:h-auto  md:flex md:flex-col md:gap-8 md:w-80 lg:w-96'>
      <div className='relative'>
        <button
          id='previous_button'
          onClick={previous}
          className={`group absolute z-10 flex items-center justify-center w-10 -translate-y-1/2 bg-white rounded-full cursor-pointer top-1/2 aspect-square ${
            showLightbox ? '-left-5' : 'md:hidden left-4'
          }`}
        >
          <svg
            className='stroke-very-vark-blue group-hover:stroke-theme-orange'
            width='12'
            height='18'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M11 1 3 9l8 8'
              stroke-width='3'
              fill='none'
              fill-rule='evenodd'
            />
          </svg>
        </button>
        <div
          onClick={() => {
            screen.width >= 768 && setShowLightbox(true);
          }}
          className='overflow-x-hidden md:cursor-pointer'
        >
          <ul
            style={{ transform: `translateX(${translation}px)` }}
            ref={ref}
            className={`flex transition-all duration-1000`}
          >
            {mainImages.map((image) => (
              <li className='w-full shrink-0 ' key={image}>
                <img
                  className='object-cover w-full h-80 md:h-auto md:rounded-2xl md:w-80 lg:w-96 '
                  src={`images/product-images/main/${image}`}
                  alt='product image'
                />
              </li>
            ))}
          </ul>
        </div>
        <button
          id='next_button'
          onClick={next}
          className={`group absolute z-10 flex items-center justify-center w-10 -translate-y-1/2 bg-white rounded-full cursor-pointer top-1/2 aspect-square ${
            showLightbox ? '-right-5' : 'md:hidden right-4'
          }`}
        >
          <svg
            className='stroke-very-vark-blue group-hover:stroke-theme-orange '
            width='13'
            height='18'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='m2 1 8 8-8 8'
              stroke-width='3'
              fill='none'
              fill-rule='evenodd'
            />
          </svg>
        </button>
      </div>
      <div id='thumbnails' className='hidden md:flex md:justify-between'>
        {thumbImages.map((thumb, index) => (
          <div
            key={thumb}
            onClick={() => handleClickthumb(index)}
            className={`w-1/5 rounded-lg cursor-pointer ${
              activeThumb === index && 'border-2 border-theme-orange/100'
            }`}
          >
            <img
              className={`transition-opacity outline-none rounded-lg hover:opacity-40 ${
                activeThumb === index && 'opacity-40'
              }`}
              key={thumb}
              src={`images/product-images/thumb/${thumb}`}
              alt='Thumbnail images'
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Carousel;
