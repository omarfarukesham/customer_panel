import { Suspense, lazy } from 'react';
const DashboardIcon = lazy(() => import('@/assets/icons/DashboardIcon'));
const CatalogIcon = lazy(() => import('@/assets/icons/CatalogIcon'));
const SalesIcon = lazy(() => import('@/assets/icons/SalesIcon'));
const CustomerCareIcon = lazy(() => import('@/assets/icons/CustomerCareIcon'));
const CustomerIcon = lazy(() => import('@/assets/icons/CustomerIcon'));
const MarketingIcon = lazy(() => import('@/assets/icons/MarketingIcon'));
const PurchaseIcon = lazy(() => import('@/assets/icons/PurchaseIcon'));
const ReportIcon = lazy(() => import('@/assets/icons/ReportIcon'));
const SEOIcon = lazy(() => import('@/assets/icons/SEOIcon'));
const SellerIcon = lazy(() => import('@/assets/icons/SellerIcon'));
const ShipmondoIcon = lazy(() => import('@/assets/icons/ShipmondoIcon'));
const SiteSettingsIcon = lazy(() => import('@/assets/icons/SiteSettingsIcon'));
const StoreIcon = lazy(() => import('@/assets/icons/StoreIcon'));
const ThirdPartyIcon = lazy(() => import('@/assets/icons/ThirdPartyIcon'));
const UsersIcon = lazy(() => import('@/assets/icons/UsersIcon'));
const BlogIcon = lazy(() => import('@/assets/icons/BlogIcon'));

const MenuIcon = ({ menuName, ...rest }) => {
  let MenuIcon = DashboardIcon;
  if (menuName === 'Dashboard') MenuIcon = DashboardIcon;
  if (menuName === 'Catalog') MenuIcon = CatalogIcon;
  if (menuName === 'Sales') MenuIcon = SalesIcon;
  if (menuName === 'Orders') MenuIcon = SalesIcon;
  if (menuName === 'Customer Care') MenuIcon = CustomerCareIcon;
  if (menuName === 'Customer') MenuIcon = CustomerIcon;
  if (menuName === 'Marketing') MenuIcon = MarketingIcon;
  if (menuName === 'Purchase') MenuIcon = PurchaseIcon;
  if (menuName === 'Report') MenuIcon = ReportIcon;
  if (menuName === 'SEO') MenuIcon = SEOIcon;
  if (menuName === 'Seller') MenuIcon = SellerIcon;
  if (menuName === 'Shipmondo') MenuIcon = ShipmondoIcon;
  if (menuName === 'Site Settings') MenuIcon = SiteSettingsIcon;
  if (menuName === 'Settings') MenuIcon = SiteSettingsIcon;
  if (menuName === 'Store') MenuIcon = StoreIcon;
  if (menuName === 'Third Party') MenuIcon = ThirdPartyIcon;
  if (menuName === 'Users') MenuIcon = UsersIcon;
  if (menuName === 'Blog') MenuIcon = BlogIcon;

  return (
    <Suspense>
      <MenuIcon {...rest} />
    </Suspense>
  );
};

export default MenuIcon;
