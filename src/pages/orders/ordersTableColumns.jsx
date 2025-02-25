import currencyFormatter from '@/utilities/currencyFormatter';
import getFormattedDate from '@/utilities/getFormattedDate';
import OrdersTableActionButtons from './OrdersTableActionButtons';

const ordersTableColumns = [
  {
    label: 'SL No.',
    key: 'serial',
  },
  {
    label: 'Order Id',
    key: 'orderSequenceId',
  },
  {
    label: 'Placed on',
    key: 'createdAt',
    content: (value) => getFormattedDate(value, true),
  },
  {
    label: 'Status',
    key: 'orderStatus',
  },
  {
    label: 'Payment Status',
    key: 'paymentStatus',
  },
  {
    label: 'Net Amount',
    key: 'netAmount',
    content: (amount, order) => currencyFormatter(amount, order.currencyCode),
  },
  {
    label: 'Action',
    key: 'id',
    content: (id) => <OrdersTableActionButtons orderId={id} />,
  },
];

export default ordersTableColumns;
