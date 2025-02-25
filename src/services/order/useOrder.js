import { ENDPOINTS } from '@/configuration/endpoints';
import Order from '@/model/Order';
import PaginatedResponse from '@/model/PaginatedResponse';
import { useQuery } from '@tanstack/react-query';
import orderService from './orderService';

export const useGetOrders = (filters) => {
  return useQuery({
    queryKey: [ENDPOINTS.orders, JSON.stringify(filters)],
    queryFn: () => orderService.getOrders(filters),
    select: (response) => new PaginatedResponse(response.data.data, Order),
  });
};
export const useGetOrderDetails = (id) => {
  return useQuery({
    queryKey: [ENDPOINTS.orderDetails(id)],
    queryFn: () => orderService.getOrderDetails(id),
    select: (response) => new Order(response.data?.data?.content[0]),
  });
};
