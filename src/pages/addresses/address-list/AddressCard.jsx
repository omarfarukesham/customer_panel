const AddressCard = ({ address, index }) => {
  return (
    <div className='grid gap-2 text-label'>
      <div className='text-gray'>Address {index + 1}</div>
      <div
        className='grid gap-1 p-4 rounded border border-dashed border-gray-4 border-l-4 border-l-primary-200'
        style={{ borderLeftStyle: 'solid' }}
      >
        <div className='font-bold'>{address.personName}</div>
        <div>{address.phone}</div>
        <div>{address.details}</div>
        <div>
          {address.areaName}
          {address.zoneName && ', ' + address.zoneName}
          {address.stateName && ', ' + address.stateName}
          {address.countryName && ', ' + address.countryName}
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
