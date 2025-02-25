import ArrowLeftIcon from '@/assets/icons/ArrowLeftIcon';
import { LOGO_DARK } from '@/configuration/resources';
import { useNavigate } from 'react-router-dom';

const RegistrationFormHeader = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='grid grid-cols-3 gap-3 justify-between font-bold pb-3 border-b border-gray-4'>
        <button
          type='button'
          className='text-gray-6 flex gap-2 items-center text-label'
          onClick={() => navigate('/login')}
        >
          <ArrowLeftIcon />
          <div>Login</div>
        </button>
        <div className='text-center'>Registration</div>
        <div></div>
      </div>
      <div className='flex justify-center p-3'>
        <img src={LOGO_DARK} width={120} />
      </div>
    </>
  );
};

export default RegistrationFormHeader;
