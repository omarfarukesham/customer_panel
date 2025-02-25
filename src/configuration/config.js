import { getEnv } from '@/utilities/getEnv';

// Redirect after login or default redirection url
export const DEFAULT_REDIRECTION_PATH = '/profile-overview';

// Token key for localStorage
export const TOKEN_KEY = 'token';

// Marketplace URL
export const MARKETPLACE_URL = getEnv('VITE_MARKETPLACE_URL');
export const MARKETPLACE_PDP_URL = MARKETPLACE_URL + '/products/';

// API BASE URL (service wise)
export const API_BASE_URL = getEnv('VITE_API_BASE_URL');
export const API_SERVICE_MODE = getEnv('VITE_API_SERVICE_MODE');
const isGatewayMode = API_SERVICE_MODE === 'gateway';

export const SETTINGS_SERVICE_BASE_URL =
  API_BASE_URL + (isGatewayMode ? '/settings/api' : ':9090/api/v1');
export const CATALOG_SERVICE_BASE_URL =
  API_BASE_URL + (isGatewayMode ? '/soldfy-catalog/api' : ':9091/api');
export const CONTENT_SERVICE_BASE_URL =
  API_BASE_URL + (isGatewayMode ? '/contentservice/api' : ':9094/api');
export const CUSTOMER_SERVICE_BASE_URL =
  API_BASE_URL + (isGatewayMode ? '/soldfy-customer/api' : ':9096/api');
export const USER_SERVICE_BASE_URL =
  API_BASE_URL + (isGatewayMode ? '/soldfy-user/api' : ':9097/api');
export const ORDER_SERVICE_BASE_URL =
  API_BASE_URL + (isGatewayMode ? '/soldfy-order/api' : ':9099/api');
