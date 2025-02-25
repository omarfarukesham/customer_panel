import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import ProfileOverviewBody from './ProfileOverviewBody';

const ProfileOverview = () => {
  return (
    <PageContainer className='page-container'>
      <PageHeader title='Profile Overview' />
      <ProfileOverviewBody />
    </PageContainer>
  );
};

export default ProfileOverview;
