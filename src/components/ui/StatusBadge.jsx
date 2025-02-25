import { twMerge } from 'tailwind-merge';

const StatusBadge = ({ status }) => {
  const isSuccess = [
    'SUCCESS',
    'APPROVED',
    'COMPLETED',
    'PAID',
    'REFUNDED',
  ].includes(status);

  const isDanger = ['FAILED', 'CANCELED'].includes(status);

  return (
    <div
      className={twMerge(
        'p-1 px-[6px] rounded text-sm',
        'bg-primary text-secondary',
        isSuccess && 'bg-success text-white',
        isDanger && 'bg-danger text-white',
      )}
    >
      {status ? status : 'N/A'}
    </div>
  );
};

export default StatusBadge;
