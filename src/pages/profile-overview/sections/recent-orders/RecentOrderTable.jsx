import NoDataFound from '@/components/layout/NoDataFound';
import DataTable from '@/components/table/data-table/DataTable';
import ordersTableColumns from '@/pages/orders/ordersTableColumns';

const RecentOrderTable = ({ data }) => {
  const columns = ordersTableColumns;

  return (
    <div className='flex-1 flex flex-col overflow-auto'>
      <DataTable data={data} columns={columns} />
      {data.length === 0 && <NoDataFound />}
    </div>
  );
};

export default RecentOrderTable;
