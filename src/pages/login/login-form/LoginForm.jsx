import Form from '@/components/form/Form';
import FormInput from '@/components/form/FormInput';
import Button from '@/components/ui/Button';
import { DEFAULT_REDIRECTION_PATH } from '@/configuration/config';
import { useAuthContext } from '@/context/authContext';
import { setUser } from '@/reducer/authReducer';
import { useLogin } from '@/services/auth/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoginFormFooter from './LoginFormFooter';
import LoginFormHeader from './LoginFormHeader';

const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { dispatch } = useAuthContext();

  const onSuccess = (user) => {
    dispatch(setUser(user));
    toast.success('Login successful');
    navigate(location.state?.from || DEFAULT_REDIRECTION_PATH, {
      replace: true,
    });
  };
  const onFailure = (error) => {
    toast.error(error.message);
  };

  const { isLoading, mutate: login } = useLogin(onSuccess, onFailure);
  const handleSubmit = (user) => {
    login(user);
  };

  return (
    <div className='rounded-2xl flex m-10 overflow-hidden w-full sm:w-[500px] shadow'>
      <div className='w-full flex flex-col gap-5 p-8 md:p-10'>
        <LoginFormHeader />
        <Form
          onSubmit={handleSubmit}
          className='flex-1 flex flex-col justify-evenly gap-5'
        >
          <FormInput
            name='username'
            label='Mobile/Email'
            placeholder='Username'
            validations={{
              required: 'Please write an email or mobile number',
            }}
          />
          <FormInput
            name='password'
            label='Password'
            placeholder='******'
            type='password'
            validations={{ required: 'Please enter a valid password' }}
          />
          <Button
            type='submit'
            className='w-2/3 mx-auto my-3 text-secondary-500 rounded-full'
            loading={isLoading}
          >
            Login
          </Button>
        </Form>
        <LoginFormFooter />
      </div>
    </div>
  );
};

export default LoginForm;
