import PageError from '@/components/layout/PageError';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useGetOrderDetails } from '@/services/order/useOrder';
import { useParams } from 'react-router-dom';
import OrderViewDetails from './OrderViewDetails';

const OrderViewBody = () => {
  const { id } = useParams();
  const { data, error, isFetching } = useGetOrderDetails(id);

  return (
    <div className='flex-1 flex flex-col items-center'>
      {isFetching && <LoadingSpinner text='Loading Order' className='flex' />}
      {!isFetching && data && !error && <OrderViewDetails order={data} />}
      {!isFetching && error && <PageError message={error.message} />}
    </div>
  );
};

export default OrderViewBody;
