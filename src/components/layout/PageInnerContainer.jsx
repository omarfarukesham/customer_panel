const PageInnerContainer = ({ children, className = '' }) => {
  return (
    <div className={`bg-white h-full rounded overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export default PageInnerContainer;
