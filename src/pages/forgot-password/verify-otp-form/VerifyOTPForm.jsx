import Form from '@/components/form/Form';
import FormInput from '@/components/form/FormInput';
import Button from '@/components/ui/Button';
import OTPReSender from '@/components/ui/OTPReSender';
import {
  FORGOT_PASSWORD_VIEWS,
  OTP_ACTION_TYPE,
} from '@/configuration/constants';
import { useVerifyOtp } from '@/services/auth/useAuth';
import { toast } from 'react-toastify';
import VerifyOTPFormHeader from './VerifyOTPFormHeader';

const VerifyOTPForm = ({ user, setUser, setViewMode }) => {
  const onSuccess = (formData) => {
    toast.success('OTP Successfully Verified');
    setUser((prev) => ({ ...prev, ...formData }));
    setViewMode(FORGOT_PASSWORD_VIEWS.reset);
  };
  const onFailure = (error) => {
    toast.error(error.message);
  };

  const { isLoading, mutate } = useVerifyOtp();
  const handleSubmit = (formData) => {
    const data = {
      ...formData,
      mediumValue: user?.username,
      actionType: OTP_ACTION_TYPE.forgotPassword,
    };

    mutate(data, {
      onSuccess: () => onSuccess(formData),
      onError: onFailure,
    });
  };

  return (
    <div className='rounded-2xl flex m-10 overflow-hidden w-full sm:w-[500px] shadow'>
      <div className='w-full flex flex-col gap-5 p-8 md:p-10'>
        <VerifyOTPFormHeader setViewMode={setViewMode} />
        <Form
          onSubmit={handleSubmit}
          className='flex-1 flex flex-col justify-evenly gap-5'
        >
          <FormInput
            name='otp'
            label='OTP'
            placeholder='OTP'
            validations={{
              required: 'Please give your otp number',
            }}
          />

          <Button
            type='submit'
            className='w-2/3 mx-auto mt-3  text-secondary-500 rounded-full'
            loading={isLoading}
          >
            Reset
          </Button>
          <OTPReSender
            username={user?.username}
            otpActionType={OTP_ACTION_TYPE.forgotPassword}
          />
        </Form>
      </div>
    </div>
  );
};

export default VerifyOTPForm;
