import { ENDPOINTS } from '@/configuration/endpoints';
import { useMutation } from '@tanstack/react-query';
import customerService from './customerService';

export const useUpdateCustomer = () => {
  return useMutation({
    mutationKey: [ENDPOINTS.customer(undefined)],
    mutationFn: customerService.update,
  });
};
