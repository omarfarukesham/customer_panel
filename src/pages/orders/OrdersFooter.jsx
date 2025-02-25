import Pagination from '@/components/ui/Pagination';

const OrdersFooter = ({ onFilterChange, filters, paginate }) => {
  return (
    <div className='pt-5 md:p-5 flex flex-col gap-3 items-end'>
      <Pagination
        perPage={filters.perPage}
        page={filters.page}
        paginate={paginate}
        onChange={onFilterChange}
      />
    </div>
  );
};

export default OrdersFooter;
