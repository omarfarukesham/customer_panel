import { MARKETPLACE_URL } from '@/configuration/config';
import { LOGO_DARK } from '@/configuration/resources';
import { Link } from 'react-router-dom';
import TopBarDropdown from './TopBarDropdown';

const TopBar = () => {
  return (
    <div className='relative flex h-16 bg-white text-black px-4 md:px-8 gap-3 md:gap-5 items-center'>
      <div className='flex-1 flex'>
        <Link to={MARKETPLACE_URL}>
          <img
            src={LOGO_DARK}
            alt='logo'
            className='h-6 md:h-12 mx-auto my-5'
          />
        </Link>
      </div>

      <TopBarDropdown />

      {/* <div className='relative flex justify-center'>
        <ShoppingCartIcon className='h-[1.5rem] w-[1.5rem] md:h-10 md:w-10' />
        <div className='absolute top-0 text-danger text-xs md:text-base-1'>
          15
        </div>
      </div> */}
    </div>
  );
};

export default TopBar;
