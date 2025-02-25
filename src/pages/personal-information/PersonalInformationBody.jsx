import { useState } from 'react';
import PersonalInformationEdit from './PersonalInformationEdit';
import PersonalInformationView from './PersonalInformationView';

const PersonalInformationBody = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className='p-10 bg-white md:mx-[50px] lg:mx-[100px] overflow-auto'>
      {isEditing ? (
        <PersonalInformationEdit setIsEditing={setIsEditing} />
      ) : (
        <PersonalInformationView setIsEditing={setIsEditing} />
      )}
    </div>
  );
};

export default PersonalInformationBody;
