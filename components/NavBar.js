import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { showCartAtom } from '../utils/atoms';

function NavBar() {
  const [navbarHide, setNavbarHide] = useState(true);

  const showCart = useSetRecoilState(showCartAtom);

  return (
    <nav className='flex items-center justify-between w-full p-6 border-b border-l-grayish-blue md:p-0 md:h-28'>
      <div className='flex items-baseline'>
        <button
          className='md:hidden'
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
        className={` transition-transform z-40 fixed inset-y-0 left-0 flex-col flex ${
          navbarHide && '-translate-x-full'
        } w-2/3 gap-6 p-6 text-lg font-bold bg-white text-very-vark-blue md:transform-none md:static md:flex-row md:text-grayish-blue md:p-0 md:items-stretch md:self-stretch`}
      >
        <button
          className='w-6 pb-6 cursor-pointer md:hidden'
          onClick={() => {
            setNavbarHide(true);
          }}
        >
          <img src='/images/icon-close.svg' alt='' />
        </button>

        <li className='hover:cursor-pointer hover:text-very-vark-blue hover:border-b-4 hover:border-theme-orange md:flex md:items-center'>
          <a href='/collections'>Collections</a>
        </li>
        <li className='hover:cursor-pointer hover:text-very-vark-blue hover:border-b-4 hover:border-theme-orange md:flex md:items-center'>
          <a href='/men'></a>Men
        </li>
        <li className='hover:cursor-pointer hover:text-very-vark-blue hover:border-b-4 hover:border-theme-orange md:flex md:items-center'>
          <a href='/women'></a>Women
        </li>
        <li className='hover:cursor-pointer hover:text-very-vark-blue hover:border-b-4 hover:border-theme-orange md:flex md:items-center'>
          <a href='/about'></a>About
        </li>
        <li className='hover:cursor-pointer hover:text-very-vark-blue hover:border-b-4 hover:border-theme-orange md:flex md:items-center'>
          <a href='/contact'></a>Contact
        </li>
      </ul>
      <div
        onClick={() => showCart((state) => !state)}
        className='flex items-center justify-between w-16 md:w-auto md:gap-12'
      >
        <img
          className='w-6 cursor-pointer aspect-auto'
          src='images/icon-cart.svg'
          alt='Cart'
        />
        <img
          className='w-6 rounded-full cursor-pointer aspect-square md:w-12 hover:border-2 hover:border-theme-orange'
          src='images/image-avatar.png'
          alt='Avatar image'
        />
      </div>
    </nav>
  );
}

export default NavBar;
