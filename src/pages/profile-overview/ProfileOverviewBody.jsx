import AddressBook from './sections/AddressBook';
import PersonalProfile from './sections/PersonalProfile';
import RecentOrders from './sections/recent-orders/RecentOrders';

const ProfileOverviewBody = () => {
  return (
    <div className='flex-1 flex flex-col gap-5 overflow-hidden'>
      <div className='flex flex-col md:flex-row gap-5'>
        <PersonalProfile />
        <AddressBook />
      </div>
      <RecentOrders />
    </div>
  );
};

export default ProfileOverviewBody;
