import StatusBadge from '@/components/ui/StatusBadge';
import currencyFormatter from '@/utilities/currencyFormatter';

const OrderViewSummary = ({ order }) => {
  return (
    <div className='p-5 bg-white flex-1 flex flex-col gap-3'>
      <div className='flex-1 font-bold'>Order Summary</div>
      <div className='flex gap-3'>
        <div className='flex-1'>Item(s) Total:</div>
        <div>{currencyFormatter(order.totalAmount, order.currencyCode)}</div>
      </div>
      <div className='flex gap-3'>
        <div className='flex-1'>Item(s) Discount:</div>
        <div>{currencyFormatter(order.discountAmount, order.currencyCode)}</div>
      </div>

      <hr className='text-gray-4 border-dashed' />

      <div className='flex gap-3'>
        <div className='flex-1'>Shipping:</div>
        <div>
          {currencyFormatter(
            order.shippingFeeInfo.originalAmount,
            order.currencyCode,
          )}
        </div>
      </div>
      <div className='flex gap-3'>
        <div className='flex-1'>Shipping Discount:</div>
        <div>
          {currencyFormatter(
            order.shippingFeeInfo.discountAmount,
            order.currencyCode,
          )}
        </div>
      </div>

      <hr className='text-gray-4 border-dashed' />

      <div className='flex gap-3'>
        <div className='flex-1'>Coupon Discount:</div>
        <div>{currencyFormatter(order.couponDiscount, order.currencyCode)}</div>
      </div>

      <hr className='text-gray-4 border-dashed' />

      <div className='flex gap-3'>
        <div className='flex-1'>
          <strong>Total </strong>(
          {order.orderItems.reduce((total, oItem) => total + oItem.quantity, 0)}
          {' Items'})
        </div>
        <div>{currencyFormatter(order.netAmount, order.currencyCode)}</div>
      </div>

      <div className='flex flex-col items-end gap-1'>
        <div className='flex gap-1 items-center'>
          <div>Payment Status: </div>
          <StatusBadge status={order.paymentStatus} />
        </div>

        {order.totalRefundAmount && (
          <div className='flex gap-1 text-gray-8'>
            <div>Refunded:</div>
            {currencyFormatter(order.totalRefundAmount, order.currencyCode)}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderViewSummary;
