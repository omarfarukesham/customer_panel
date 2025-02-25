import { CUSTOMER_SERVICE_BASE_URL } from '@/configuration/config';
import { ENDPOINTS } from '@/configuration/endpoints';
import httpService from '../http/httpService';

const config = {
  baseURL: CUSTOMER_SERVICE_BASE_URL,
};

const customerService = {
  update: (data) => {
    return httpService.patch(ENDPOINTS.customer(data.id), data, config);
  },
};

export default customerService;
