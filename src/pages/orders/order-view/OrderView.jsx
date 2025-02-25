import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import OrderViewBody from './OrderViewBody';

const OrderView = () => {
  const breadcrumb = [
    { label: 'Home', path: '/' },
    { label: 'Orders', path: '/orders' },
    { label: 'Order Details' },
  ];

  return (
    <PageContainer className='flex flex-col gap-5 overflow-auto'>
      <PageHeader title='Order details' breadcrumb={breadcrumb} />
      <OrderViewBody />
    </PageContainer>
  );
};

export default OrderView;
