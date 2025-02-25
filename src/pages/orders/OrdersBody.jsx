import PageError from '@/components/layout/PageError';
import PageInnerContainer from '@/components/layout/PageInnerContainer';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import useDevice from '@/hooks/useDevice';
import { useGetOrders } from '@/services/order/useOrder';
import { useEffect, useState } from 'react';
import OrdersFooter from './OrdersFooter';
import OrdersList from './OrdersList';
import OrdersTable from './OrdersTable';

const OrdersBody = () => {
  const defaultFilters = {
    perPage: 10,
    page: 1,
  };
  const [filters, setFilters] = useState(defaultFilters);
  const { data, error, isFetching, refetch } = useGetOrders(filters);

  // Data fetch will occur whenever filter is changed
  useEffect(() => {
    refetch(filters);
  }, [filters, refetch]);

  // Changing the filter base on user interaction
  const handleFilterChange = (newFilters) => {
    setFilters({
      ...filters,
      ...newFilters,
    });
  };

  const { isMobile } = useDevice();

  return (
    <PageInnerContainer className='flex flex-col !bg-transparent md:!bg-white'>
      {isFetching && <LoadingSpinner text='Loading Orders' />}
      {!isFetching && data && !error && (
        <>
          {isMobile ? (
            <OrdersList data={data.items} />
          ) : (
            <OrdersTable data={data?.items} />
          )}
        </>
      )}
      {!isFetching && error && <PageError message={error.message} />}

      <OrdersFooter
        onFilterChange={handleFilterChange}
        filters={filters}
        paginate={data?.paginate}
      />
    </PageInnerContainer>
  );
};

export default OrdersBody;
