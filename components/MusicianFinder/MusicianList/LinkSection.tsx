import * as React from "react";
import styled from 'styled-components';
//import Footer from '../Footer';

interface Props {}

const Container = styled.div`
    flex:11;
    background: red;
    display: flex;
    justify-content : center;
    align-items : center;
`;


const ProfileButton = styled.a`
    background-color: #6865FC;
    color: white;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
`;


const LinkSection = (props: Props) => { 
    return (
        <Container>
            <ProfileButton>뮤지션 보기</ProfileButton>
        </Container>
    )
  
};

export default LinkSection;
