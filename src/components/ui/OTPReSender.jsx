import { useSendOtp } from '@/services/auth/useAuth';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const OTPReSender = ({ username, otpActionType }) => {
  const DEFAULT_SECONDS = 120;
  const [seconds, setSeconds] = useState(DEFAULT_SECONDS);
  const { isLoading, mutate: sendOTP } = useSendOtp();

  // Timer according to seconds left
  useEffect(() => {
    let timer;

    if (seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    // Cleanup on component unmount
    return () => clearInterval(timer);
  }, [seconds]);

  const onSuccess = () => {
    toast.success('Successfully OTP sent');
    setSeconds(DEFAULT_SECONDS);
  };
  const onFailure = (error) => {
    toast.error(error.message);
  };

  const sendOTPHandler = () => {
    const data = {
      mediumValue: username,
      actionType: otpActionType,
    };

    sendOTP(data, {
      onSuccess: onSuccess,
      onError: onFailure,
    });
  };

  return (
    <div className='text-label text-gray-4 flex gap-1 justify-end'>
      <button
        type='button'
        onClick={sendOTPHandler}
        className='text-secondary disabled:text-gray-4'
        disabled={!!seconds || isLoading}
      >
        {isLoading ? 'Sending...' : 'Resend'}
      </button>
      {!isLoading && <div>after {seconds} seconds</div>}
    </div>
  );
};

export default OTPReSender;
