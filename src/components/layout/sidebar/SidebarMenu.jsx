import ArrowRightIcon from '@/assets/icons/ArrowRightIcon';
import { useAppContext } from '@/context/appContext';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import SidebarSubMenuCollapsible from './SidebarSubMenuCollapsible';

const SidebarMenu = ({ menu }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const closeSubMenu = () => setShowSubMenu(false);

  const location = useLocation();
  const navigate = useNavigate();

  const { appState } = useAppContext();
  const { isSidebarCollapsed } = appState;

  const menuSelected = menu.children
    ? menu.children.find((subMenu) => subMenu.link === location.pathname)
    : menu.link === location.pathname;

  const handleMenuClick = () => {
    if (menu.link && !menu.children) {
      navigate(menu.link);
    } else {
      setShowSubMenu(!showSubMenu);
    }
  };

  return (
    <li className={twMerge('w-full text-label')}>
      <button
        className={twMerge(
          'flex items-center w-full p-3 pl-5 ',
          menuSelected && !showSubMenu && 'border-l-8 pl-3 border-primary',
          menuSelected && 'bg-primary-200',
          menu.children && showSubMenu && 'bg-white',
          !showSubMenu && 'hover:bg-primary-200',
        )}
        onClick={handleMenuClick}
      >
        <div
          className={`flex-1 flex items-center gap-4 ${
            isSidebarCollapsed && 'justify-center'
          }`}
        >
          <menu.icon menuName={menu.label} className='fill-gray w-5 h-5' />
          {!isSidebarCollapsed && (
            <div className='text-left flex-1'>{menu.label}</div>
          )}
        </div>
        {menu.children && (
          <ArrowRightIcon
            className={twMerge(
              'text-gray transition-all duration-100',
              showSubMenu && 'rotate-90',
            )}
          />
        )}
      </button>
      {menu.children && showSubMenu && (
        <SidebarSubMenuCollapsible menu={menu} closeSubMenu={closeSubMenu} />
      )}
    </li>
  );
};

export default SidebarMenu;
