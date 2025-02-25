const PageContainer = ({ children, className = '' }) => {
  return (
    <div className={`h-full w-full p-4 md:p-6 bg-bg-color-1 ${className}`}>
      {children}
    </div>
  );
};

export default PageContainer;
