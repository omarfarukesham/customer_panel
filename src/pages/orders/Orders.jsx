import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import OrdersBody from './OrdersBody';

const Orders = () => {
  return (
    <PageContainer className='flex flex-col gap-3'>
      <PageHeader title='Orders' />
      <OrdersBody />
    </PageContainer>
  );
};

export default Orders;
