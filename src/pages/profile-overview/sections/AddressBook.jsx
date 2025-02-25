import PageInnerContainer from '@/components/layout/PageInnerContainer';
import OrderAddress from '@/components/ui/OrderAddress';
import { useAuthContext } from '@/context/authContext';

const AddressBook = () => {
  const { user } = useAuthContext();

  return (
    <PageInnerContainer className='p-5 text-label flex flex-col gap-5 flex-1'>
      <div className='font-bold border-b border-gray-4 md:border-none  pb-3'>
        Address Book
      </div>
      <div className='flex flex-col md:flex-row gap-5'>
        <div className='flex-1 flex flex-col gap-3'>
          <div className='font-bold'>Default Shipping Address</div>
          <OrderAddress
            className='grid gap-3'
            address={user?.customer?.shippingAddress?.[0]}
          />
        </div>

        <hr className='text-gray-4 bg-gray-4 h-auto min-w-[1px]' />

        <div className='flex-1 flex flex-col gap-3'>
          <div className='font-bold'>Default Billing Address</div>
          <OrderAddress
            className='grid gap-3'
            address={user?.customer?.billingAddress?.[0]}
          />
        </div>
      </div>
    </PageInnerContainer>
  );
};

export default AddressBook;
