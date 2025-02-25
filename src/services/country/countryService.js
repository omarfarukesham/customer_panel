import { SETTINGS_SERVICE_BASE_URL } from '@/configuration/config';
import Area from '@/model/Area';
import Country from '@/model/Country';
import PaginatedResponse from '@/model/PaginatedResponse';
import State from '@/model/State';
import Zone from '@/model/Zone';
import { useQuery } from '@tanstack/react-query';
import httpService from '../http/httpService';

const config = {
  baseURL: SETTINGS_SERVICE_BASE_URL,
};

const getCountries = (filters) => {
  return httpService.get('countries', {
    ...config,
    params: {
      ...filters,
      size: filters ? filters.perPage : '',
      page: filters ? filters.page - 1 : '',
    },
  });
};
const getStates = (filters) => {
  return httpService.get('states', {
    ...config,
    params: {
      ...filters,
      size: filters ? filters.perPage : '',
      page: filters ? filters.page - 1 : '',
    },
  });
};
const getZones = (filters) => {
  return httpService.get('zones', {
    ...config,
    params: {
      ...filters,
      size: filters ? filters.perPage : '',
      page: filters ? filters.page - 1 : '',
    },
  });
};
const getAreas = (filters) => {
  return httpService.get('areas', {
    ...config,
    params: {
      ...filters,
      size: filters ? filters.perPage : '',
      page: filters ? filters.page - 1 : '',
    },
  });
};

export const useGetCountries = (filters) => {
  return useQuery({
    queryKey: ['countries', JSON.stringify(filters)],
    queryFn: () => getCountries(filters),
    select: (response) => new PaginatedResponse(response.data.data, Country),
  });
};
export const useGetStates = (filters) => {
  return useQuery({
    queryKey: ['states', JSON.stringify(filters)],
    queryFn: () => getStates(filters),
    select: (response) => new PaginatedResponse(response.data.data, State),
  });
};
export const useGetZones = (filters) => {
  return useQuery({
    queryKey: ['zones', JSON.stringify(filters)],
    queryFn: () => getZones(filters),
    select: (response) => new PaginatedResponse(response.data.data, Zone),
  });
};
export const useGetAreas = (filters) => {
  return useQuery({
    queryKey: ['areas', JSON.stringify(filters)],
    queryFn: () => getAreas(filters),
    select: (response) => new PaginatedResponse(response.data.data, Area),
  });
};
const countryService = {
  useGetCountries,
  useGetStates,
  useGetZones,
  useGetAreas,
};

export default countryService;
