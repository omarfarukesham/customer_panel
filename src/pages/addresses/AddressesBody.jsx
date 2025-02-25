import Form from '@/components/form/Form';
import { useAuthContext } from '@/context/authContext';
import AddressList from './address-list/AddressList';

const AddressesBody = () => {
  const { user } = useAuthContext();

  return (
    <Form className='flex flex-col gap-5 p-10 bg-white md:mx-[50px] lg:mx-[100px]'>
      <AddressList
        title='Shipping Address'
        addresses={user?.customer?.shippingAddress || []}
      />
      <AddressList
        title='Billing Address'
        addresses={user?.customer?.billingAddress || []}
      />
    </Form>
  );
};

export default AddressesBody;
