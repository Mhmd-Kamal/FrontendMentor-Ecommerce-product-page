import Head from 'next/head';
import Carousel from '../components/Carousel';

import NavBar from '../components/NavBar';
import ProductDetails from '../components/ProductDetails';

const ProductPage = () => {
  return (
    <div className='flex flex-col items-center min-h-screen'>
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
      <div className='md:flex'>
        <Carousel />
        <ProductDetails />
      </div>
    </div>
  );
};

export default ProductPage;
