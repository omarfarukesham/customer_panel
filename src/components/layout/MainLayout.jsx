import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useAuthContext } from '@/context/authContext';
import useTokenFromURL from '@/hooks/useTokenFromURL';
import authService from '@/services/auth/authService';
import { useUserInfo } from '@/services/auth/useAuth';
import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import RedirectToLogin from './RedirectToLogin';
import Sidebar from './sidebar/Sidebar';
import TopBar from './topbar/TopBar';

const MainLayout = () => {
  const { user, setUser } = useAuthContext();
  const {
    data: currentUser,
    isFetching,
    error,
    refetch: userRefresh,
  } = useUserInfo(() => {
    setUser(currentUser);
  });

  const tokenCheckingFromURL = useTokenFromURL();

  useEffect(() => {
    if (!user && authService.getToken()) {
      userRefresh();
    }
  }, [user, userRefresh]);

  if (!tokenCheckingFromURL && !authService.getToken()) {
    return <RedirectToLogin message='You are not authorized!' />;
  }

  if (!isFetching && !user && error) {
    authService.logout();
    return <RedirectToLogin message='Authorization failed!' />;
  }

  if (isFetching) {
    return (
      <div className='h-full'>
        <LoadingSpinner text='Authenticating' />
      </div>
    );
  }

  return (
    <div className='h-full overflow-hidden'>
      <TopBar />
      <div className='flex flex-1 h-full w-full'>
        <Sidebar />
        <div className='flex-1 h-[calc(100%-64px)]'>
          <Suspense fallback={<LoadingSpinner text='Loading your content' />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
