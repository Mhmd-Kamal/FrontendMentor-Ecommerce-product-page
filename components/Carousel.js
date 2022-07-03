import { useState, useEffect } from 'react';

function Carousel() {
  const [mainImages, setMainImages] = useState([]);
  const [thumbImages, setThumbImages] = useState([]);

  async function getImages() {
    const res = await fetch('/api/images');
    const { mainImages, thumbImages } = await res.json();
    setMainImages(mainImages);
    setThumbImages(thumbImages);
  }

  useEffect(() => {
    getImages();
  }, []);

  return (
    <section className='h-80 relative w-full'>
      <button className='absolute cursor-pointer left-4 -translate-y-1/2 bg-white z-10 w-10  top-1/2 aspect-square flex justify-center items-center rounded-full'>
        <img className='' src='images/icon-previous.svg' alt='' />
      </button>
      <ul className=''>
        {mainImages.map((image) => (
          <li className='absolute w-full' key={image}>
            <img
              className='h-80 object-cover w-full'
              src={`images/product-images/main/${image}`}
              alt='product image'
            />
          </li>
        ))}
      </ul>
      <button className='absolute cursor-pointer right-4 -translate-y-1/2 bg-white z-10 w-10  top-1/2 aspect-square flex justify-center items-center rounded-full'>
        <img src='images/icon-next.svg' alt='' />
      </button>
    </section>
  );
}

export default Carousel;
