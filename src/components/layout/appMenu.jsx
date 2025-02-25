import EyeIcon from '@/assets/icons/EyeIcon';
import ListIcon from '@/assets/icons/ListIcon';
import LocationIcon from '@/assets/icons/LocationIcon';
import PersonIcon from '@/assets/icons/PersonIcon';

export const appMenu = [
  {
    label: 'Profile Overview',
    icon: EyeIcon,
    link: '/profile-overview',
  },
  {
    label: 'My Order',
    icon: ListIcon,
    link: '/orders',
  },
  {
    label: 'Personal Information',
    icon: PersonIcon,
    link: '/personal-information',
  },
  {
    label: 'Addresses',
    icon: LocationIcon,
    link: '/addresses',
  },
];
