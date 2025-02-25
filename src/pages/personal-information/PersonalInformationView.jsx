import EditIcon from '@/assets/icons/EditIcon';
import FakeInput from '@/components/form/FakeInput';
import Button from '@/components/ui/Button';
import { PROFILE_AVATAR } from '@/configuration/resources';
import { useAuthContext } from '@/context/authContext';
import getFormattedDate from '@/utilities/getFormattedDate';

const PersonalInformationView = ({ setIsEditing }) => {
  const { user } = useAuthContext();
  const data = user?.customer || {};

  return (
    <div className='flex flex-col gap-5'>
      <div className='flex gap-5 justify-between'>
        <img
          src={data?.image?.url || PROFILE_AVATAR}
          alt=''
          className='h-20 aspect-square rounded-full border-2 border-gray-4'
        />

        <Button
          onClick={() => setIsEditing(true)}
          variant=''
          className='text-[12px] text-highlight !p-0'
        >
          <EditIcon />
          <div>Change Information</div>
        </Button>
      </div>

      <FakeInput label='Name' value={data.name} />
      <FakeInput label='Email' value={data.email} />
      <FakeInput label='Phone' value={data.phone} />
      <FakeInput
        label='Date of Birthday'
        value={data.dob}
        formatter={getFormattedDate}
      />
      <FakeInput label='Gender' value={data.gender} />
    </div>
  );
};

export default PersonalInformationView;
