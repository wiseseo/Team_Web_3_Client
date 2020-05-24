import * as React from "react";
import styled from 'styled-components';

const ProfileTitle = styled.h1`
  color : black
`;

const Profile: React.FC = () => {
  return (
    <div>
      <ProfileTitle>Profile</ProfileTitle>
    </div>
  );
};

export default Profile;