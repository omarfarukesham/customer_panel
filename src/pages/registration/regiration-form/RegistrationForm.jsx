import Form from '@/components/form/Form';
import FormInput from '@/components/form/FormInput';
import Button from '@/components/ui/Button';
import { OTP_ACTION_TYPE } from '@/configuration/constants';
import { useCheckUser, useSendOtp } from '@/services/auth/useAuth';
import registrationSchema from '@/services/schema/registrationSchema';
import { useState } from 'react';
import { toast } from 'react-toastify';
import RegistrationFormHeader from './RegistrationFormHeader';

const RegistrationForm = ({ setUser }) => {
  const [errors, setErrors] = useState(null);
  const { isLoading: userCheckLoading, mutate: checkUser } = useCheckUser();
  const { isLoading: sendOTPLoading, mutate: sendOtp } = useSendOtp();

  const isLoading = userCheckLoading || sendOTPLoading;

  const onFailure = (error) => {
    toast.error(error.message);
  };

  const onCheckingUserSuccess = (user, response) => {
    if (response.isExist) {
      /* Manually error set for existing user */
      setErrors({ username: 'Already exists!' });
    } else {
      if (errors) setErrors(null);

      const data = {
        mediumValue: user?.username,
        actionType: OTP_ACTION_TYPE.registration,
      };

      /* Send OTP */
      sendOtp(data, {
        onSuccess: () => {
          setUser(user);
        },
        onError: onFailure,
      });
    }
  };

  const handleSubmit = (user) => {
    /* Check for duplicate user */
    checkUser(user, {
      onSuccess: (response) => onCheckingUserSuccess(user, response),
      onError: onFailure,
    });
  };

  return (
    <div className='rounded-2xl flex m-10 overflow-hidden w-full sm:w-[500px] shadow'>
      <div className='w-full flex flex-col gap-5 p-8 md:p-10'>
        <RegistrationFormHeader />
        <Form
          schema={registrationSchema}
          onSubmit={handleSubmit}
          className='flex-1 flex flex-col justify-center gap-5'
          errors={errors}
        >
          <FormInput
            name='username'
            label='Mobile/Email'
            placeholder='Username'
            validations={{ required: true }}
          />
          <FormInput name='personName' label='Name' placeholder='Name' />
          <FormInput
            name='password'
            label='Password'
            placeholder='******'
            type='password'
            validations={{ required: true }}
          />
          <FormInput
            name='confirmPassword'
            label='Confirm Password'
            placeholder='******'
            type='password'
            validations={{ required: true }}
          />
          <Button
            type='submit'
            className='w-2/3 mx-auto mt-8 text-secondary-500 rounded-full'
            loading={isLoading}
          >
            Send Code
          </Button>
        </Form>

        <div></div>
      </div>
    </div>
  );
};

export default RegistrationForm;
