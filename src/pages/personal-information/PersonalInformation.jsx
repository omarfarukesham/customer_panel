import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import PersonalInformationBody from './PersonalInformationBody';

const PersonalInformation = () => {
  return (
    <PageContainer className='page-container'>
      <PageHeader title='Personal Information' />
      <PersonalInformationBody />
    </PageContainer>
  );
};

export default PersonalInformation;
