import Breadcrumb from '../ui/Breadcrumb';

const PageHeader = ({ title, breadcrumb }) => {
  return (
    <div className='flex gap-3 items-center justify-between flex-wrap'>
      <div>
        <div className='text-lg font-bold capitalize'>{title}</div>
        <Breadcrumb routes={breadcrumb} />
      </div>
    </div>
  );
};

export default PageHeader;
