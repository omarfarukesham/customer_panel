import FormConditionalRendering from '@/components/form/FormConditionalRendering';
import FormInput from '@/components/form/FormInput';
import FormDropdownRest from '@/components/form/form-dropdown-rest/FormDropdownRest';
import {
  useGetAreas,
  useGetCountries,
  useGetStates,
  useGetZones,
} from '@/services/country/countryService';
const AddressesEdit = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div>Billing Address</div>
      <hr className='text-gray-4' />
      <FormInput name='name' label='Name' />
      <FormInput name='phone' label='Phone' />
      <FormDropdownRest
        name='countryId'
        label='Country'
        restServiceHook={useGetCountries}
      />

      <FormConditionalRendering fieldName='countryId'>
        {(fieldValue) => (
          <FormDropdownRest
            name='stateId'
            label='State'
            restServiceHook={useGetStates}
            restFilters={{ countryId: fieldValue }}
          />
        )}
      </FormConditionalRendering>

      <FormConditionalRendering fieldName='stateId'>
        {(fieldValue) => (
          <FormDropdownRest
            name='zoneId'
            label='Zone'
            restServiceHook={useGetZones}
            restFilters={{ stateId: fieldValue }}
          />
        )}
      </FormConditionalRendering>

      <FormConditionalRendering fieldName='zoneId'>
        {(fieldValue) => (
          <FormDropdownRest
            name='areaId'
            label='Area'
            restServiceHook={useGetAreas}
            restFilters={{ zoneId: fieldValue }}
          />
        )}
      </FormConditionalRendering>
    </div>
  );
};

export default AddressesEdit;
