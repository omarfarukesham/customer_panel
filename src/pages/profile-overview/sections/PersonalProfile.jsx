import PageInnerContainer from '@/components/layout/PageInnerContainer';
import { PROFILE_AVATAR } from '@/configuration/resources';
import { useAuthContext } from '@/context/authContext';

const PersonalProfile = () => {
  const { user } = useAuthContext();

  return (
    <PageInnerContainer className='p-5 text-label flex flex-col gap-3 md:w-[40%]'>
      <div className='font-bold'>Personal Profile</div>
      <div>
        <img
          src={user?.customer?.image?.url || PROFILE_AVATAR}
          alt=''
          className='h-20 aspect-square rounded-full border-2 border-gray-4'
        />
      </div>
      <div className='font-bold'>{user?.customer?.name}</div>
      <div>
        <span className='font-bold'>Phone: </span>
        {user?.customer?.phone ? user.customer?.phone : 'N/A'}
      </div>
      <div>
        <span className='font-bold'>Email: </span>
        {user?.customer?.email ? user.customer?.email : 'N/A'}
      </div>
    </PageInnerContainer>
  );
};

export default PersonalProfile;
