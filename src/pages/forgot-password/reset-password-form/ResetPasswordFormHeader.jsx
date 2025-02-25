import ArrowLeftIcon from '@/assets/icons/ArrowLeftIcon';
import { FORGOT_PASSWORD_VIEWS } from '@/configuration/constants';
import { LOGO_DARK } from '@/configuration/resources';

const ResetPasswordFormHeader = ({ setViewMode }) => {
  return (
    <>
      <div className='grid grid-cols-3 gap-3 justify-between font-bold pb-3 border-b border-gray-4'>
        <button
          type='button'
          className='text-gray-6 flex gap-2 items-center text-label'
          onClick={() => setViewMode(FORGOT_PASSWORD_VIEWS.forgot)}
        >
          <ArrowLeftIcon />
          <div>Forgot</div>
        </button>
        <div className='text-center'>Reset Password</div>
        <div></div>
      </div>
      <div className='flex justify-center p-3'>
        <img src={LOGO_DARK} width={120} />
      </div>
    </>
  );
};

export default ResetPasswordFormHeader;
