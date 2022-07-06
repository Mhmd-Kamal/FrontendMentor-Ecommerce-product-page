import { useState, useEffect, useRef } from 'react';

function Carousel() {
  const [mainImages, setMainImages] = useState([]);
  const [thumbImages, setThumbImages] = useState([]);
  const [translation, setTranslation] = useState(0);
  const [translationClass, setTranslationClass] = useState(
    `translate-x-[${translation}px]`
  );

  const ref = useRef();

  async function getImages() {
    const res = await fetch('/api/images');
    const { mainImages, thumbImages } = await res.json();
    // console.log(thumbImages);
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

  // useEffect(() => {
  //   setTranslationClass(`translate-x-[${translation}px]`);
  // }, [translation]);

  return (
    <section className='h-80 relative w-full'>
      <button
        onClick={previous}
        className=' md:hidden absolute cursor-pointer left-4 -translate-y-1/2 bg-white z-10 w-10  top-1/2 aspect-square flex justify-center items-center rounded-full'
      >
        <img
          className=''
          src='images/icon-previous.svg'
          alt='previous button'
        />
      </button>
      <div className=' overflow-x-hidden'>
        <ul
          style={{ transform: `translateX(${translation}px)` }}
          ref={ref}
          className={`flex transition-all duration-1000`}
        >
          {mainImages.map((image) => (
            <li className='w-full shrink-0' key={image}>
              <img
                className='h-80 object-cover w-full'
                src={`images/product-images/main/${image}`}
                alt='product image'
              />
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={next}
        className='md:hidden absolute cursor-pointer right-4 -translate-y-1/2 bg-white z-10 w-10  top-1/2 aspect-square flex justify-center items-center rounded-full'
      >
        <img src='images/icon-next.svg' alt='next button' />
      </button>
      <div id='thumbnails' className='hidden md:flex'>
        {thumbImages.map((thumb) => (
          <img key={thumb} src={`images/product-images/thumb/${thumb}`} />
        ))}
      </div>
    </section>
  );
}

export default Carousel;
