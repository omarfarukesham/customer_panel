import OrderAddress from '@/components/ui/OrderAddress';

const OrderViewAddresses = ({ order }) => {
  return (
    <div className='bg-white p-5 flex-1 flex flex-col gap-4'>
      <div className='font-bold'>Shipping Address</div>
      <OrderAddress address={order?.shippingInfo} />
      <hr className='text-gray-4 border-dashed' />
      <div className='font-bold'>Billing Address</div>
      <OrderAddress address={order?.billingInfo} />
    </div>
  );
};

export default OrderViewAddresses;
