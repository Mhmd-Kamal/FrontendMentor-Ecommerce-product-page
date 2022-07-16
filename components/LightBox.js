import { useSetRecoilState } from 'recoil';
import { showLightboxAtom } from '../utils/atoms';
import Carousel from './Carousel';

function LightBox() {
  const setShowLightbox = useSetRecoilState(showLightboxAtom);

  return (
    <div id='lightbox' className='absolute inset-0 z-50 p-24 bg-black/75 '>
      <div className='flex flex-col items-center justify-center'>
        <button
          onClick={() => setShowLightbox(false)}
          className='m-4 self-end md:w-80 lg:w-96 xl:w-1/3'
        >
          <svg
            className='scale-150 hover:fill-theme-orange fill-light-grayish-blue'
            width='14'
            height='15'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
              fill-rule='evenodd'
            />
          </svg>
        </button>
        <Carousel />
      </div>
    </div>
  );
}

export default LightBox;
