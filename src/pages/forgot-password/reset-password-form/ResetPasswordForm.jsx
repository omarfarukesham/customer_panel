import Form from '@/components/form/Form';
import FormInput from '@/components/form/FormInput';
import Button from '@/components/ui/Button';
import { useResetPassword } from '@/services/auth/useAuth';
import resetPasswordSchema from '@/services/schema/resetPasswordSchema';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ResetPasswordFormHeader from './ResetPasswordFormHeader';

const ResetPasswordForm = ({ user, setViewMode }) => {
  const navigate = useNavigate();

  const onSuccess = () => {
    toast.success('Password Successfully Reset');
    navigate('/login', { replace: true });
  };
  const onFailure = (error) => {
    toast.error(error.message);
  };

  const { isLoading, mutate } = useResetPassword();
  const handleSubmit = (formData) => {
    const data = {
      ...formData,
      ...user,
    };

    mutate(data, {
      onSuccess: onSuccess,
      onError: onFailure,
    });
  };

  return (
    <div className='rounded-2xl flex m-10 overflow-hidden w-full sm:w-[500px] shadow'>
      <div className='w-full flex flex-col gap-5 p-8 md:p-10'>
        <ResetPasswordFormHeader setViewMode={setViewMode} />
        <Form
          schema={resetPasswordSchema}
          onSubmit={handleSubmit}
          className='flex-1 flex flex-col justify-evenly gap-5'
        >
          <FormInput
            name='password'
            label='New Password'
            placeholder='******'
            type='password'
            validations={{
              required: 'Please enter new password',
            }}
          />
          <FormInput
            name='confirmPassword'
            label='Confirm Password'
            placeholder='******'
            type='password'
            validations={{
              required: 'Please enter new password',
            }}
          />

          <Button
            type='submit'
            className='w-2/3 mx-auto mt-3  text-secondary-500 rounded-full'
            loading={isLoading}
          >
            Reset
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
