import NoDataFound from '@/components/layout/NoDataFound';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import AddressCard from './AddressCard';

const AddressList = ({ title = '', addresses = [] }) => {
  return (
    <CollapsibleSection title={title} isCollapsible={false}>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        {addresses.map((address, index) => (
          <AddressCard key={index} address={address} index={index} />
        ))}
      </div>
      {!addresses.length && <NoDataFound message='No Address Found' />}
    </CollapsibleSection>
  );
};

export default AddressList;
