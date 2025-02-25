export const ENDPOINTS = {
  //Auth Service
  authenticate: '/marketplace/authenticate',
  userInfo: '/marketplace/user-info',
  sendOtp: '/marketplace/send',
  verifyOtp: '/marketplace/verify',
  resetPassword: '/marketplace/users/reset-password',
  checkUser: '/marketplace/users/check-user',
  registration: '/marketplace/users/register',

  //Order Service
  orders: '/marketplace/orders',
  orderDetails: (id) => '/marketplace/orders/' + id + '/details',

  //Customer Service
  customer: (id) => '/marketplace/customers/' + id,
};
