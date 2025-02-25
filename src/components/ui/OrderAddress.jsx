const OrderAddress = ({ address, className = '' }) => {
  if (!address) return <div className='text-gray-4'>No address found!</div>;

  return (
    <div className={className}>
      <div>
        Name: {address.personName ? address.personName : 'N/A'} <br />
        Email: {address.email ? address.email : 'N/A'} <br />
        Phone: {address.phone ? address.phone : 'N/A'}
      </div>

      <div>
        {address?.details && address.details + ', '}
        {address?.areaName && address.areaName + ', '}
        {address?.zoneName && address.zoneName + ', '}
        {address?.stateName && address.stateName + ', '}
        {address?.countryName}
      </div>
    </div>
  );
};

export default OrderAddress;
