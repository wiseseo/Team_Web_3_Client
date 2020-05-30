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
  padding-right: 1rem;
`;
const Cover = styled.div`
    background-image: url("${({ source }: { source: string }) => source}");
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 0.25rem;
    width: 3rem;
    height: 3rem;
`;
const Info = styled.div`
  margin-left: 2rem;
  width: 4rem;
`;
const Name = styled.div`
  color: #fdfdff;
`;

const Title = styled.div`
  color: #b3b4be;
  font-size: 14px;
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
