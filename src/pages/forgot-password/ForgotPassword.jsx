import PageContainerAuth from '@/components/layout/PageContainerAuth';
import { FORGOT_PASSWORD_VIEWS } from '@/configuration/constants';
import { useState } from 'react';
import ForgotPasswordForm from './forgot-password-form/ForgotPasswordForm';
import ResetPasswordForm from './reset-password-form/ResetPasswordForm';
import VerifyOTPForm from './verify-otp-form/VerifyOTPForm';

const Registration = () => {
  const [viewMode, setViewMode] = useState(FORGOT_PASSWORD_VIEWS.forgot);
  const [user, setUser] = useState(null);

  return (
    <PageContainerAuth>
      {viewMode === FORGOT_PASSWORD_VIEWS.forgot && (
        <ForgotPasswordForm setUser={setUser} setViewMode={setViewMode} />
      )}
      {viewMode === FORGOT_PASSWORD_VIEWS.verify && (
        <VerifyOTPForm
          user={user}
          setUser={setUser}
          setViewMode={setViewMode}
        />
      )}
      {viewMode === FORGOT_PASSWORD_VIEWS.reset && (
        <ResetPasswordForm user={user} setViewMode={setViewMode} />
      )}
    </PageContainerAuth>
  );
};

export default Registration;
