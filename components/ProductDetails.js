import { useState } from 'react';

function ProductDetails() {
  const [count, setCount] = useState(0);
  return (
    <section className='p-6'>
      <h2 className='text-sm font-semibold tracking-widest uppercase text-theme-orange'>
        sneaker company
      </h2>

      <h1 className='py-4 text-3xl font-bold text-very-vark-blue'>
        Fall Limited Edition Sneakers
      </h1>

      <p className='leading-6 text-dark-grayish-blue'>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div className='flex items-center justify-between py-8 '>
        <div className='flex items-center justify-between '>
          <p className='pr-5 text-3xl font-bold text-very-vark-blue'>$125.00</p>
          <p className='px-2 font-bold rounded-md text-theme-orange bg-pale-orange'>
            50%
          </p>
        </div>
        <p className='font-bold line-through text-grayish-blue'>$250.00</p>
      </div>

      <div className='flex items-center justify-between p-4 px-4 mb-4 rounded-xl bg-light-grayish-blue'>
        <button
          className='text-3xl font-bold align-middle px-2'
          onClick={() =>
            setCount((count) => {
              return count === 0 ? 0 : count - 1;
            })
          }
        >
          <img src='/images/icon-minus.svg' alt='decrease icon' />
        </button>
        <p className='font-bold text-very-vark-blue'>{count}</p>
        <button
          className='text-3xl font-bold px-2'
          onClick={() => setCount((count) => count + 1)}
        >
          <img src='/images/icon-plus.svg' alt='increase icon' />
        </button>
      </div>
      <button className='flex items-center justify-center w-full p-4 font-bold rounded-xl text-light-grayish-blue bg-theme-orange'>
        <svg
          width='22'
          height='20'
          className='fill-current text-light-grayish-blue'
        >
          <path
            d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
            fillRule='nonzero'
          />
        </svg>
        <span className='pl-3'>Add to cart</span>
      </button>
    </section>
  );
}
export default ProductDetails;
