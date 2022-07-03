import { useState } from 'react';

function NavBar() {
  const [navbarHide, setNavbarHide] = useState(true);

  return (
    <nav className='flex items-center justify-between w-full p-6'>
      <div className='flex items-baseline'>
        <button
          onClick={() => {
            setNavbarHide(false);
          }}
        >
          <img
            className='w-4 h-4 cursor-pointer'
            src='images/icon-menu.svg'
            alt='Menu'
          />
        </button>
        <a href='/' className='pl-4 cursor-pointer'>
          <img src='images/logo.svg' alt='' />
        </a>
      </div>

      <ul
        className={` transition-transform fixed inset-y-0 left-0 flex-col flex ${
          navbarHide && '-translate-x-full'
        }
         w-2/3 gap-6 p-6 text-lg font-bold bg-white text-very-vark-blue`}
      >
        <button
          className='w-6 pb-6 cursor-pointer'
          onClick={() => {
            setNavbarHide(true);
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
          className='w-5 aspect-auto cursor-pointer'
          src='images/icon-cart.svg'
          alt='Cart'
        />
        <img
          className='w-6 aspect-square cursor-pointer'
          src='images/image-avatar.png'
          alt='Avatar image'
        />
      </div>
    </nav>
  );
}

export default NavBar;
