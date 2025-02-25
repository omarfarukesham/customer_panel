import StatusBadge from '@/components/ui/StatusBadge';
import currencyFormatter from '@/utilities/currencyFormatter';
import getFormattedDate from '@/utilities/getFormattedDate';

const OrderViewStatus = ({ order }) => {
  return (
    <div className='p-5 bg-white flex flex-col md:flex-row gap-2'>
      <div className='flex-1 flex flex-col gap-2'>
        <div className='flex gap-1'>
          <span className='font-bold'>Order </span>
          {order.orderSequenceId}
        </div>

        <div className='text-gray'>
          Placed on {getFormattedDate(order.createdAt, true)}
        </div>
      </div>

      <div className='flex flex-col gap-2 md:items-end '>
        <div className='text-lg'>
          Total: {currencyFormatter(order.netAmount, order.currencyCode)}
        </div>
        <div className='flex gap-1 items-center'>
          <div>Order Status:</div>
          <StatusBadge status={order.orderStatus} />
        </div>
      </div>
    </div>
  );
};

export default OrderViewStatus;
