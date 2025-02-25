import PageError from '@/components/layout/PageError';
import PageInnerContainer from '@/components/layout/PageInnerContainer';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import useDevice from '@/hooks/useDevice';
import OrdersList from '@/pages/orders/OrdersList';
import { useGetOrders } from '@/services/order/useOrder';
import RecentOrderTable from './RecentOrderTable';

const RecentOrders = () => {
  const filters = { page: 1, perPage: 10 };
  const { data, isFetching, error } = useGetOrders(filters);

  const { isMobile } = useDevice();

  return (
    <PageInnerContainer className='flex-1 flex flex-col !bg-transparent md:!bg-white'>
      <div className='p-4 '>Recent Orders</div>
      {isFetching && <LoadingSpinner />}
      {!isFetching && data && (
        <>
          {isMobile ? (
            <OrdersList data={data.items} />
          ) : (
            <RecentOrderTable data={data.items} />
          )}
        </>
      )}
      {!isFetching && error && <PageError message={error} />}
    </PageInnerContainer>
  );
};

export default RecentOrders;
