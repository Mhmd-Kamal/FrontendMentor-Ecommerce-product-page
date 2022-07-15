import Head from 'next/head';
import { useRecoilValue } from 'recoil';

import Carousel from '../components/Carousel';
import LightBox from '../components/LightBox';
import NavBar from '../components/NavBar';
import Cart from '../components/New';
import ProductDetails from '../components/ProductDetails';

import { showCartAtom } from '../utils/atoms';

const ProductPage = () => {
  const product = {
    title: 'Fall Limited Edition Sneaker',
    priceBeforeSale: 250,
    sale: 50,
    price: 125.0,
    description:
      'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
  };

  const showCart = useRecoilValue(showCartAtom);

  return (
    <div className='flex flex-col items-center min-h-screen md:px-20'>
      <Head>
        <title>Product Page</title>
        <meta
          name='description'
          content='This is a solution to E-commerce product page on frontendmentor.io'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='keywords' content='product, page, e-commerce' />
        <meta http-equiv='Content-Type' content='text/html;charset=UTF-8' />
        <link
          rel='shortcut icon'
          href='/images/favicon-32x32.png'
          type='image/x-icon'
        />
      </Head>

      <NavBar />
      {/* <LightBox /> */}
      {showCart && <Cart />}
      <div className='md:flex md:flex-grow md:justify-around md:items-center'>
        <Carousel />
        <ProductDetails product={product} />
      </div>
    </div>
  );
};

export default ProductPage;
