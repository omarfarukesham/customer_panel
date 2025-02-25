import NoDataFound from '@/components/layout/NoDataFound';
import OrdersListItem from './OrdersListItem';

const OrdersList = ({ data = [] }) => {
  return (
    <div className='flex-1 flex flex-col gap-3 overflow-auto'>
      {data.map((order) => (
        <OrdersListItem key={order.id} order={order} />
      ))}
      {data.length === 0 && <NoDataFound />}
    </div>
  );
};

export default OrdersList;
