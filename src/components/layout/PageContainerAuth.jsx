import { DEFAULT_REDIRECTION_PATH } from '@/configuration/config';
import authService from '@/services/auth/authService';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const PageContainerAuth = ({ className, children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (authService.getToken()) {
      navigate(location.state?.from || DEFAULT_REDIRECTION_PATH, {
        replace: true,
      });
    }
  }, [navigate, location]);

  return (
    <div
      className={twMerge(
        'w-full h-full flex justify-center items-center bg-white',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default PageContainerAuth;
