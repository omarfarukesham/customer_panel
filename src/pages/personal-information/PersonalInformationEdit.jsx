import ArrowLeftIcon from '@/assets/icons/ArrowLeftIcon';
import Form from '@/components/form/Form';
import FormDatePicker from '@/components/form/FormDatePicker';
import FormInput from '@/components/form/FormInput';
import FormUploadContentService from '@/components/form/FormUploadContentService';
import FormDropdown from '@/components/form/form-dropdown/FormDropdown';
import Button from '@/components/ui/Button';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { CONTENT_FILE_TYPE } from '@/configuration/constants';
import { useAuthContext } from '@/context/authContext';
import { useDirectUploadContent } from '@/services/content/contentService';
import { useUpdateCustomer } from '@/services/customer/useCustomer';
import { toast } from 'react-toastify';

const PersonalInformationEdit = ({ setIsEditing }) => {
  const { isLoading, mutate } = useUpdateCustomer();
  const { user, setUser } = useAuthContext();

  const handleSubmit = (formData) => {
    const data = formData;
    !data?.image?.url && delete data.image;

    mutate(data, {
      onSuccess: () => {
        toast.success('Successfully updated');
        setUser({
          ...user,
          customer: {
            ...user.customer,
            ...data,
            dob: new Date(data.dob),
          },
        });
        setIsEditing(false);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  const genderOptions = [
    { label: 'Male', value: 'MALE' },
    { label: 'Female', value: 'FEMALE' },
    { label: 'Other', value: 'OTHER' },
  ];

  const defaultValues = {
    id: user?.customer.id,
    name: user?.customer.name,
    email: user?.customer.email,
    phone: user?.customer.phone,
    image: user?.customer.image,
    dob: user?.customer.dob,
    gender: user?.customer.gender,
  };

  return (
    <Form
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      className='flex flex-col gap-5'
    >
      <div className='flex gap-5 justify-between'>
        <div className='flex w-20 h-20'>
          <FormUploadContentService
            name='image.url'
            className='w-20 h-20'
            restServiceHook={useDirectUploadContent}
            restData={{ fileType: CONTENT_FILE_TYPE.image }}
          />
        </div>

        <Button
          onClick={() => setIsEditing(false)}
          variant=''
          className='text-[12px] text-highlight !p-0'
        >
          <ArrowLeftIcon />
          <div>Back</div>
        </Button>
      </div>
      <FormInput name='name' label='Name' placeholder='Your Name' />
      <FormInput name='email' label='Email' placeholder='Your Email' />
      <FormInput name='phone' label='Phone' placeholder='Your Phone Number' />
      <FormDatePicker
        name='dob'
        label='Date of Birthday'
        placeholder='Date of Birthday'
      />
      <FormDropdown
        name='gender'
        label='Gender'
        placeholder='Select Gender'
        options={genderOptions}
      />

      {isLoading && <LoadingSpinner className='mt-5' />}
      {!isLoading && (
        <div className='mt-5 flex gap-5 justify-center'>
          <Button
            variant='outlined'
            className='rounded-full w-[120px]'
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </Button>

          <Button type='submit' className='rounded-full w-[120px]'>
            Save
          </Button>
        </div>
      )}
    </Form>
  );
};

export default PersonalInformationEdit;
