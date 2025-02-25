import { useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const SidebarSubMenuCollapsible = ({ menu }) => {
  const navigate = useNavigate();

  const handleSubMenuClick = (subMenu) => {
    if (subMenu.link.includes('http')) {
      window.location.href = subMenu.link;
    } else navigate(subMenu.link);
  };

  return (
    <div className='w-full text-label-sm'>
      <div className='flex flex-col'>
        {menu.children.map((subMenu) => (
          <button
            key={subMenu.label}
            className={twMerge(
              'text-left p-3 pl-14 hover:bg-primary-200',
              subMenu.link === location.pathname &&
                'bg-primary-200 border-l-8 border-primary pl-12',
            )}
            onClick={() => handleSubMenuClick(subMenu)}
          >
            {subMenu.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SidebarSubMenuCollapsible;
