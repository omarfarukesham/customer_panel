import OrderViewAddresses from './sections/OrderViewAddresses';
import OrderViewOrderItem from './sections/OrderViewOrderItem';
import OrderViewStatus from './sections/OrderViewStatus';
import OrderViewSummary from './sections/OrderViewSummary';

const OrderViewDetails = ({ order }) => {
  return (
    <div className='w-full md:w-[75%] flex flex-col gap-5 text-label'>
      <OrderViewStatus order={order} />
      {order.orderItems.map((orderItem) => (
        <OrderViewOrderItem
          key={orderItem.id}
          orderItem={orderItem}
          order={order}
        />
      ))}
      <div className='flex flex-col md:flex-row gap-5'>
        <OrderViewAddresses order={order} />
        <OrderViewSummary order={order} />
      </div>
    </div>
  );
};

export default OrderViewDetails;
