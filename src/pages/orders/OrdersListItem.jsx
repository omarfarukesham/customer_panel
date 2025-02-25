import Button from '@/components/ui/Button';
import currencyFormatter from '@/utilities/currencyFormatter';
import getFormattedDate from '@/utilities/getFormattedDate';
import { useNavigate } from 'react-router-dom';

const OrdersListItem = ({ order }) => {
  const navigate = useNavigate();

  return (
    <div className='rounded-lg p-3 bg-white text-label flex flex-col gap-2'>
      <div>
        <span className='font-bold'>Order No.: </span>
        {order.orderSequenceId}
      </div>
      <hr className='text-gray-4' />
      <div className='flex gap-2'>
        <div className='flex-1 grid gap-2'>
          <div>
            <span className='font-bold'>Placed On: </span>
            {getFormattedDate(order.createdAt)}
          </div>
          <div>
            <span className='font-bold'>Status: </span>
            {order.orderStatus}
          </div>
          <div>
            <span className='font-bold'>Amount: </span>
            {currencyFormatter(order.totalAmount, order.currencyCode)}
          </div>
        </div>
        <div className='flex items-end'>
          <Button
            onClick={() => navigate(`/orders/${order.id}`)}
            variant='outlined'
            className='hover:bg-secondary hover:text-white'
            size='small'
          >
            View
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrdersListItem;
