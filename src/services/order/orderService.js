import { ORDER_SERVICE_BASE_URL } from '@/configuration/config';
import { ENDPOINTS } from '@/configuration/endpoints';
import httpService from '../http/httpService';

const config = {
  baseURL: ORDER_SERVICE_BASE_URL,
};

const orderService = {
  getOrders: (filters = {}) => {
    return httpService.get(ENDPOINTS.orders, {
      params: {
        ...filters,
        size: filters?.perPage,
        page: filters?.page - 1,
      },
      ...config,
    });
  },
  getOrderDetails: (id) => {
    return httpService.get(ENDPOINTS.orderDetails(id), { ...config });
  },
};

export default orderService;
