import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='flex flex-col w-full h-screen justify-center items-center'>
      <div className='text-secondary-300 text-3xl md:text-7xl'>
        Page not found
      </div>
      <div className='mt-3 text-label md:text-lg'>
        <Link className='text-primary' to={'/login'} replace>
          Go to: Login
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
