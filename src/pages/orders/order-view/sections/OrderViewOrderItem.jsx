import StatusBadge from '@/components/ui/StatusBadge';
import currencyFormatter from '@/utilities/currencyFormatter';

const OrderViewOrderItem = ({ orderItem, order }) => {
  const { productInfo } = orderItem;
  return (
    <div className='p-5 bg-white grid gap-3'>
      <div className='flex gap-1'>
        <div className='flex-1 grid gap-1'>
          <div className='text-base-1'>{productInfo.title}</div>
          <div className='text-gray'>Sold by {order.sellerName}</div>
        </div>
      </div>

      <hr className='text-gray-4 border-dashed' />

      <div className='flex gap-3'>
        <div className='md:flex-1'>
          <img
            className='h-20'
            src={productInfo?.image?.url}
            alt={productInfo.title}
          />
        </div>

        <div className='flex-1 flex flex-col justify-between'>
          <div className='flex flex-col items-end gap-2 md:flex-row md:justify-between'>
            <div>Quantity: {orderItem.quantity}</div>
            <div>{currencyFormatter(orderItem.total, order.currencyCode)}</div>
          </div>

          <div className='flex justify-end'>
            <div className='flex gap-1 items-center'>
              <div>Delivery Status:</div>
              <StatusBadge status={orderItem.itemDeliveryStatus} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderViewOrderItem;
