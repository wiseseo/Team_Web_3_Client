import * as React from "react";
import styled from "styled-components";

interface Props {}
const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
  background: #121212;
  border-radius: 8px;
  position: relative;
`;
const ProfileImage = styled.div`
    background-image: url("${({ source }: { source: string }) => source}");
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;
    margin: 1.5rem 7.25rem .5rem;
`;
const Name = styled.div`
  color: white;
  font-size: 0.875rem;
  color: #e2e1e2;
`;
const Introduction = styled.div`
  color: white;
  font-size: 0.75rem;
  color: #b3b4be;
  margin: 0.25rem 0 1.5rem;
  max-width: 10rem;
  text-align: center;
`;
const Button = styled.button`
  background: linear-gradient(157.55deg, #6865fc 36.28%, #658dfc 100%);
  border-radius: 8px;
  margin: 1rem;
  align-self: stretch;
  color: #e2e1e2;
  font-size: 1rem;
  padding: 0.75rem;
  border: none;
`;
const Like = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
const ProfileInfo = (props: Props) => {
  return (
    <Container>
      <Like>
        <img src="/static/liked.png" alt="like" />
      </Like>
      <ProfileImage source="https://mblogthumb-phinf.pstatic.net/MjAxODAxMjFfNyAg/MDAxNTE2NTEzNDMwNTIz.jhaceEmlCn_SPq5bEgzBVrDyi1gGeF4lRB-KWrRvrC8g.It70Wg4tXXRCpy6HlJdfP_XkTSY2CW3kZbBZE1EEYQ0g.JPEG.kimleeple/170822_%25EA%25B0%259C%25EA%25B8%25B0%25EC%259A%25B1_(1).jpg?type=o_webp" />
      <Name>마약왕</Name>
      <Introduction>일이삼사오육칠팔구십일이삼사오육치랄구십</Introduction>
      <Button>의뢰하기</Button>
    </Container>
  );
};

export default ProfileInfo;
