import { useLocation } from 'react-router-dom';

const useTitleFromPathname = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/');
  const title = pathnames[pathnames.length - 1];

  return title.replaceAll('-', ' ');
};

export default useTitleFromPathname;
