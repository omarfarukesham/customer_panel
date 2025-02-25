import PageContainerAuth from '@/components/layout/PageContainerAuth';
import { REGISTER_VIEWS } from '@/configuration/constants';
import { useEffect, useState } from 'react';
import RegistrationForm from './regiration-form/RegistrationForm';
import VerifyAccountFormForm from './verify-account-form/VerifyAccountForm';

const Registration = () => {
  const [viewMode, setViewMode] = useState(REGISTER_VIEWS.register);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user) {
      setViewMode(REGISTER_VIEWS.verify);
    }
  }, [user]);

  return (
    <PageContainerAuth>
      {viewMode === REGISTER_VIEWS.register && (
        <RegistrationForm setUser={setUser} />
      )}
      {viewMode === REGISTER_VIEWS.verify && (
        <VerifyAccountFormForm user={user} setViewMode={setViewMode} />
      )}
    </PageContainerAuth>
  );
};

export default Registration;
