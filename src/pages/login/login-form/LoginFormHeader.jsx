import { LOGO_DARK } from '@/configuration/resources';

const LoginFormHeader = () => {
  return (
    <>
      <div className='flex gap-3 justify-center font-bold pb-3 border-b border-gray-4'>
        Login
      </div>
      <div className='flex justify-center pt-3'>
        <img src={LOGO_DARK} width={120} />
      </div>
    </>
  );
};

export default LoginFormHeader;
