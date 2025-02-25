import Button from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';

const OrdersTableActionButtons = ({ orderId }) => {
  const navigate = useNavigate();

  return (
    <Button
      className='hover:bg-secondary hover:text-white'
      variant='outlined'
      size='small'
      onClick={() => navigate(`/orders/${orderId}`)}
    >
      View
    </Button>
  );
};

export default OrdersTableActionButtons;
