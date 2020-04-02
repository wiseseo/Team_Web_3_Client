import React from "react";
import styled from "styled-components";

interface Props {
  cover: string;
  name: string;
  title: string;
}
const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Cover = styled.div`
    background-image: url("${({ source }: { source: string }) => source}");
    background-repeat: no-repeat;
    background-size: contain;
    width: 5rem;
    height: 5rem;
`;
const Info = styled.div`
  margin-left: 2rem;
`;
const Name = styled.div`
  color: white;
`;

const Title = styled.div`
  color: #b3b4be;
`;
const Profile = ({ cover, name, title }: Props) => {
  return (
    <Container>
      <Cover source={cover} />
      <Info>
        <Name>{name}</Name>
        <Title>{title}</Title>
      </Info>
    </Container>
  );
};

export default Profile;
