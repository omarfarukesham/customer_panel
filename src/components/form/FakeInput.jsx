import { twMerge } from 'tailwind-merge';

const FakeInput = ({
  label,
  value,
  className,
  labelClassName,
  containerClassName,
  required = false,
  notFound = 'Not found',
  formatter = (value) => value,
}) => {
  return (
    <div className={containerClassName}>
      <label
        className={twMerge('text-label block mb-2.5 relative', labelClassName)}
      >
        {label} {required && <span className='text-danger'>*</span>}
      </label>

      <div
        className={twMerge(
          'text-label border border-gray-4 rounded px-2 py-[9px] h-9 w-full ',
          className,
        )}
      >
        {value ? (
          formatter(value)
        ) : (
          <span className='text-gray-5'>{notFound}</span>
        )}
      </div>
    </div>
  );
};

export default FakeInput;
