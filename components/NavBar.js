import React from 'react';
import { useState } from 'react';

function NavBar() {
  const [navbarShow, setNavbarShow] = useState(false);

  return (
    <nav className='flex items-center justify-between w-full p-6'>
      <div className='flex items-baseline'>
        <button
          onClick={() => {
            setNavbarShow(true);
          }}
        >
          <img
            className='w-4 h-4 cursor-pointer'
            src='images/icon-menu.svg'
            alt='Menu'
          />
        </button>
        <a
          href='/'
          className='pl-4 font-["Poppins"] text-3xl font-bold cursor-pointer text-very-vark-blue'
        >
          sneakers
        </a>
      </div>

      <ul
        className={` fixed inset-y-0 left-0 flex-col ${
          navbarShow ? 'flex' : 'hidden'
        } w-2/3 gap-6 p-6 text-lg font-bold bg-white text-very-vark-blue`}
      >
        <button
          className='pb-6 cursor-pointer'
          onClick={() => {
            setNavbarShow(false);
          }}
        >
          <img src='/images/icon-close.svg' alt='' />
        </button>
        <li>
          <a href='/collections'>Collections</a>
        </li>
        <li>
          <a href='/men'></a>Men
        </li>
        <li>
          <a href='/women'></a>Women
        </li>
        <li>
          <a href='/about'></a>About
        </li>
        <li>
          <a href='/contact'></a>Contact
        </li>
      </ul>
      <div className='flex items-center justify-between w-16'>
        <img
          className='w-6 h-6 cursor-pointer'
          src='images/icon-cart.svg'
          alt='Cart'
        />
        <img
          className='w-6 h-6 cursor-pointer'
          src='images/image-avatar.png'
          alt='Avatar image'
        />
      </div>
    </nav>
  );
}

export default NavBar;
