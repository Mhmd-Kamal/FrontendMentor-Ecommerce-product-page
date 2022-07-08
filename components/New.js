import React from 'react';

function Cart() {
  return (
    <div className='absolute z-40 drop-shadow-2xl flex flex-col bg-white top-20 w-[355px] h-64 rounded-lg sm:right-3 md:right-10'>
      <p className='font-bold border-b-[1px] text-very-vark-blue p-6'>Cart</p>
      <div className='flex flex-col justify-between flex-grow p-6'>
        <div className='flex items-center justify-between'>
          <img
            className='w-12 rounded-md'
            src='images/product-images/thumb/image-product-1-thumbnail.jpg'
            alt='product thumbnail'
          />
          <div className='w-48 text-grayish-blue'>
            <p className='truncate '>Fall Limited Edition Sneaker</p>
            <p>
              $125.00 x 3
              <span className='pl-3 font-bold text-very-vark-blue'>
                $375.00
              </span>
            </p>
          </div>
          <img src='images/icon-delete.svg' alt='' />
        </div>
        <button className='w-full p-4 font-bold rounded-xl text-light-grayish-blue bg-theme-orange hover:opacity-50'>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
