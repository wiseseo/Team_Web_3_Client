import * as React from "react";
import styled from "styled-components";
import MusicianCard from "./../MusicianCard";

interface Props {}

const Slider = styled.ul`
  display: flex;
`;
const Back = styled.div``;
const Next = styled.div``;
const MusicianList = (props: Props) => {
  const musicians = [
    {
      name: "마약왕",
      introduction: "나라에서 허락한 유일한 마약팔이",
      tags: ["태그", "태그그"],
      likes: 777,
      isPlaying: false,
      profile:
        "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
      song: {
        id: "1",
        title: "tuna",
        cover:
          "https://post-phinf.pstatic.net/MjAxOTA4MDJfMTMg/MDAxNTY0NzE4NzAwOTA5.tn4HF1zjhfl6_aHxlR7asab1KXtzqAr9cdtE1N34esUg.5Mh8Nq1dlgLPhjjClwburE2_cSS3KlbKega_nY1Jc0Ig.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_1.jpg?type=w1200"
      },
      features: ["빠른 작업", "3분 이상", "효과음", "보컬 곡 작곡"]
    }
  ];
  return (
    <div>
      뮤지션 리스트
      <Slider>
        <Back>
          <svg
            width="27"
            height="53"
            viewBox="0 0 27 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M26 0.987305L1 25.8266L26 51.6594" stroke="#E2E1E2" />
          </svg>
        </Back>
        <MusicianCard musician={musicians[0]} />
        <MusicianCard musician={musicians[0]} />
        <MusicianCard musician={musicians[0]} />
        <Next>
          <svg
            width="27"
            height="53"
            viewBox="0 0 27 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1.02148L26 26.289L1 52.5673" stroke="#6865FC" />
          </svg>
        </Next>
      </Slider>
    </div>
  );
};

export default MusicianList;
