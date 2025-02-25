import { useAppContext } from '@/context/appContext';
import { appMenu } from '../appMenu';
import SidebarMenu from './SidebarMenu';

const Sidebar = () => {
  const { appState } = useAppContext();
  const { isMobile } = appState;

  if (isMobile) return null;

  return (
    <div className='flex flex-col w-[250px]'>
      {/* All the menu items */}
      <ul className='flex-1 overflow-auto flex flex-col'>
        {appMenu.map((menu) => (
          <SidebarMenu menu={menu} key={menu.label} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
