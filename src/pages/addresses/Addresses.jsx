import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import AddressesBody from './AddressesBody';

const Addresses = () => {
  return (
    <PageContainer className='page-container'>
      <PageHeader title='All Addresses' />
      <AddressesBody />
    </PageContainer>
  );
};

export default Addresses;
