import LogoutIcon from '@/assets/icons/LogoutIcon';
import { PROFILE_AVATAR } from '@/configuration/resources';
import { useAuthContext } from '@/context/authContext';
import useOutsideClick from '@/hooks/useClickOutside';
import authService from '@/services/auth/authService';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { appMenu } from '../appMenu';

const TopBarDropdown = () => {
  const { user } = useAuthContext();

  const navigate = useNavigate();

  const [showUserMenu, setShowUserMenu] = useState(false);
  const toggleUserMenu = () => setShowUserMenu(!showUserMenu);
  const closeUserMenu = () => setShowUserMenu(false);

  const handleLogout = () => {
    authService.logout();
    navigate('/login', { replace: true });
    window.location.reload();
  };

  const ref = useOutsideClick(closeUserMenu);
  return (
    <div
      className='flex items-center gap-2 cursor-pointer'
      onClick={toggleUserMenu}
      ref={ref}
    >
      <div className='relative'>
        <img
          src={user?.customer?.image?.url || PROFILE_AVATAR}
          alt=''
          className='h-8 md:h-10 aspect-square rounded-full border border-gray-4'
        />
        {/* <div className='absolute top-0 right-0 h-3 md:h-4 aspect-square rounded-full bg-danger text-white text-xs flex justify-center items-center'>
          2
        </div> */}
      </div>
      <div className='hidden md:block'>
        <div className='text-label font-light'>{user?.customer?.name}</div>
        <div className='font-normal'>Order & Profile</div>
      </div>
      {showUserMenu && (
        <div className='absolute top-14 right-5 z-10 bg-white shadow-lg p-2 rounded-lg'>
          <ul>
            {appMenu.map((menu) => (
              <li key={menu.link}>
                <Link
                  to={menu.link}
                  className='flex gap-3 items-center p-3 hover:bg-primary-200 rounded'
                >
                  <menu.icon className='w-6' /> {menu.label}
                </Link>
              </li>
            ))}
          </ul>

          <hr className='text-gray-3 m-1' />
          <button
            className='w-full flex gap-3 items-center p-3 hover:bg-primary-200 rounded'
            onClick={handleLogout}
          >
            <LogoutIcon className='w-6 text-gray' /> Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default TopBarDropdown;
