import { useState, useEffect, useRef } from 'react';

function Carousel() {
  const [mainImages, setMainImages] = useState([]);
  const [thumbImages, setThumbImages] = useState([]);
  const [translation, setTranslation] = useState(0);

  const ref = useRef();

  async function getImages() {
    const res = await fetch('/api/images');
    const { mainImages, thumbImages } = await res.json();

    setMainImages(mainImages);
    setThumbImages(thumbImages);
  }

  useEffect(() => {
    getImages();
  }, []);

  function next() {
    const carouselWidth = ref.current.offsetWidth;
    setTranslation((translation) =>
      translation <= carouselWidth * -1 * (mainImages.length - 1)
        ? 0
        : translation - carouselWidth
    );
  }
  function previous() {
    const carouselWidth = ref.current.offsetWidth;
    setTranslation((translation) =>
      translation >= 0
        ? carouselWidth * -1 * (mainImages.length - 1)
        : translation + carouselWidth
    );
  }

  function handleClickthumb(index) {
    const carouselWidth = ref.current.offsetWidth;
    setTranslation(index * -1 * carouselWidth);
  }

  const listener = () => {
    // resets the carousel image to the first image to avoid having two images in the same time due to the changed width and the old translation amount.
    setTranslation(0);
  };
  useEffect(() => {
    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, []);

  return (
    <section className='relative flex-col w-full h-80 md:h-full md:w-2/5 md:flex md:gap-8'>
      <button
        onClick={previous}
        className='absolute z-10 flex items-center justify-center w-10 -translate-y-1/2 bg-white rounded-full cursor-pointer md:hidden left-4 top-1/2 aspect-square'
      >
        <img
          className=''
          src='images/icon-previous.svg'
          alt='previous button'
        />
      </button>
      <div className='overflow-x-hidden '>
        <ul
          style={{ transform: `translateX(${translation}px)` }}
          ref={ref}
          className={`flex transition-all duration-1000`}
        >
          {mainImages.map((image) => (
            <li className='w-full shrink-0 ' key={image}>
              <img
                className='object-cover w-full h-80 md:h-auto md:rounded-2xl'
                src={`images/product-images/main/${image}`}
                alt='product image'
              />
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={next}
        className='absolute z-10 flex items-center justify-center w-10 -translate-y-1/2 bg-white rounded-full cursor-pointer md:hidden right-4 top-1/2 aspect-square'
      >
        <img src='images/icon-next.svg' alt='next button' />
      </button>
      <div id='thumbnails' className='hidden md:flex md:justify-between'>
        {thumbImages.map((thumb, index) => (
          <div
            onClick={() => handleClickthumb(index)}
            className='w-1/5 rounded-2xl hover:border-[3px] hover:border-theme-orange/100'
          >
            <img
              className=' rounded-2xl hover:opacity-40'
              key={thumb}
              src={`images/product-images/thumb/${thumb}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Carousel;
