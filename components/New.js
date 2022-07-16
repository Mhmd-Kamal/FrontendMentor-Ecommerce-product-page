import { useRecoilState } from 'recoil';
import { cartStateAtom } from '../utils/atoms';

function Cart() {
  const [cartStateValue, setCartStateValue] = useRecoilState(cartStateAtom);

  const product = cartStateValue[0]; //this is only for this demo project, if real webiste with pther product we will render the cart array.

  function handleDeleteCart() {
    setCartStateValue([]);
  }
  return (
    <div className='transition-all absolute z-40 drop-shadow-2xl flex flex-col bg-white top-20 w-[355px] h-64 rounded-lg sm:right-3 md:right-10'>
      <p className='font-bold border-b-[1px] text-very-vark-blue p-6'>Cart</p>
      {cartStateValue.length === 0 ? (
        <div className='flex justify-center items-center flex-grow text-dark-grayish-blue font-bold'>
          Yout cart is empty.
        </div>
      ) : (
        <div className='flex flex-col justify-between flex-grow p-6'>
          <div className='flex items-center justify-between'>
            <img
              className='w-12 rounded-md'
              src='images/product-images/thumb/image-product-1-thumbnail.jpg'
              alt='product thumbnail'
            />
            <div className='w-48 text-grayish-blue'>
              <p className='truncate '>{product.title}</p>
              <p>
                {`${product.price.toFixed(2)} x ${product.quantity}`}
                <span className='pl-3 font-bold text-very-vark-blue'>
                  {`$${(product.quantity * product.price).toFixed(2)}`}
                </span>
              </p>
            </div>
            {/*  TODO: add delete functionality for this button */}
            <img
              onClick={handleDeleteCart}
              src='images/icon-delete.svg'
              alt=''
            />
          </div>
          <button className='w-full p-4 font-bold rounded-xl text-light-grayish-blue bg-theme-orange hover:opacity-50'>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
