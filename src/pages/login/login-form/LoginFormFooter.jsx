import { useNavigate } from 'react-router-dom';

const LoginFormFooter = () => {
  const navigate = useNavigate();

  return (
    <div className='flex gap-3 justify-between text-gray-6 text-label'>
      <button
        className='hover:text-secondary text-left'
        type='button'
        onClick={() => navigate('/registration')}
      >
        Create an account
      </button>
      <button
        className='hover:text-secondary text-right'
        type='button'
        onClick={() => navigate('/forgot-password')}
      >
        Forgot password?
      </button>
    </div>
  );
};

export default LoginFormFooter;
