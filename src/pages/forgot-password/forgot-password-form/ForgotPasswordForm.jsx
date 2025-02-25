import Form from '@/components/form/Form';
import FormInput from '@/components/form/FormInput';
import Button from '@/components/ui/Button';
import {
  FORGOT_PASSWORD_VIEWS,
  OTP_ACTION_TYPE,
} from '@/configuration/constants';
import { useSendOtp } from '@/services/auth/useAuth';
import { toast } from 'react-toastify';
import ForgotPasswordFormHeader from './ForgotPasswordFormHeader';

const ForgotPasswordForm = ({ setUser, setViewMode }) => {
  const onSuccess = (formData) => {
    toast.success('OTP Successfully Sent');
    setUser(formData);
    setViewMode(FORGOT_PASSWORD_VIEWS.verify);
  };
  const onFailure = (error) => {
    toast.error(error.message);
  };

  const { isLoading, mutate: sendOTP } = useSendOtp();
  const handleSubmit = (formData) => {
    const data = {
      mediumValue: formData.username,
      actionType: OTP_ACTION_TYPE.forgotPassword,
    };

    sendOTP(data, {
      onSuccess: () => onSuccess(formData),
      onError: onFailure,
    });
  };

  return (
    <div className='rounded-2xl flex m-10 overflow-hidden w-full sm:w-[500px] shadow'>
      <div className='w-full flex flex-col gap-5 p-8 md:p-10'>
        <ForgotPasswordFormHeader />
        <Form
          onSubmit={handleSubmit}
          className='flex-1 flex flex-col justify-evenly gap-5'
        >
          <FormInput
            name='username'
            label='Mobile/Email'
            placeholder='Username'
            validations={{
              required: 'Please enter a valid email address',
            }}
          />
          <Button
            type='submit'
            className='w-2/3 mx-auto mt-3  text-secondary-500 rounded-full'
            loading={isLoading}
          >
            Send
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
