import Form from '@/components/form/Form';
import FormInput from '@/components/form/FormInput';
import Button from '@/components/ui/Button';
import OTPReSender from '@/components/ui/OTPReSender';
import { DEFAULT_REDIRECTION_PATH } from '@/configuration/config';
import { OTP_ACTION_TYPE } from '@/configuration/constants';
import { useRegistration, useVerifyOtp } from '@/services/auth/useAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import VerifyAccountFormHeader from './VerifyAccountFormHeader';

const VerifyAccountFormForm = ({ user, setViewMode }) => {
  const navigate = useNavigate();
  const { isLoading: verificationLoading, mutate: verify } = useVerifyOtp();
  const { isLoading: registrationLoading, mutate: register } =
    useRegistration();
  const isLoading = verificationLoading || registrationLoading;

  const onError = (error) => {
    toast.error(error.message);
  };

  const onVerificationSuccess = () => {
    toast.success('Successfully Verified');
    register(user, {
      onSuccess: () => {
        toast.success('Successfully Registered');
        navigate(DEFAULT_REDIRECTION_PATH, { replace: true });
      },
      onError: onError,
    });
  };

  const handleSubmit = (formData) => {
    const data = {
      ...formData,
      mediumValue: user?.username,
      actionType: OTP_ACTION_TYPE.registration,
    };

    verify(data, {
      onSuccess: onVerificationSuccess,
      onError: onError,
    });
  };

  return (
    <div className='rounded-2xl flex m-10 overflow-hidden w-full sm:w-[500px] shadow'>
      <div className='w-full flex flex-col gap-5 p-8 md:p-10'>
        <VerifyAccountFormHeader setViewMode={setViewMode} />
        <Form
          onSubmit={handleSubmit}
          className='flex-1 flex flex-col justify-evenly gap-5'
        >
          <FormInput
            name='otp'
            label='Enter the code here'
            placeholder='Code'
            validations={{
              required: 'Please enter the code',
            }}
          />
          <Button
            type='submit'
            className='w-2/3 mx-auto mt-3  text-secondary-500 rounded-full'
            loading={isLoading}
          >
            Register
          </Button>
          <OTPReSender
            username={user?.username}
            otpActionType={OTP_ACTION_TYPE.registration}
          />
        </Form>
      </div>
    </div>
  );
};

export default VerifyAccountFormForm;
