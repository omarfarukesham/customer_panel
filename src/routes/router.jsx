/* eslint-disable react-refresh/only-export-components */
import MainLayout from '@/components/layout/MainLayout';
import { lazy } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
const Login = lazy(() => import('@/pages/login/Login'));
const Registration = lazy(() => import('@/pages/registration/Registration'));
const ForgotPassword = lazy(() =>
  import('@/pages/forgot-password/ForgotPassword'),
);
const ErrorPage = lazy(() => import('@/pages/error-page/ErrorPage'));
const ProfileOverview = lazy(() =>
  import('@/pages/profile-overview/ProfileOverview'),
);
const Orders = lazy(() => import('@/pages/orders/Orders'));
const OrderView = lazy(() => import('@/pages/orders/order-view/OrderView'));
const PersonalInformation = lazy(() =>
  import('@/pages/personal-information/PersonalInformation'),
);
const Addresses = lazy(() => import('@/pages/addresses/Addresses'));

const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Navigate to='/profile-overview' replace />,
      },
      {
        path: 'profile-overview',
        element: <ProfileOverview />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
      {
        path: 'orders/:id',
        element: <OrderView />,
      },
      {
        path: 'personal-information',
        element: <PersonalInformation />,
      },
      {
        path: 'addresses',
        element: <Addresses />,
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'registration',
    element: <Registration />,
  },
  {
    path: 'forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export default router;
