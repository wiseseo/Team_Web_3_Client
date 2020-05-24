import * as React from "react";
import styled from 'styled-components';
import Header from "../../components/Header"
import Footer from '../../components/Footer';

const ProfileTitle = styled.h1`
  color : black
`;

const Profile: React.FC = () => {
  return (
    <div>
        <Header/>
        <ProfileTitle>Profile</ProfileTitle>
        <Footer/>
    </div>
  );
};

export default Profile;