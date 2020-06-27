import * as React from "react";
import styled from "styled-components";
import ReqList from "./reqList";
import PickList from "./pickList";
import BeforeList from "./beforeList";
interface Props {}

const MyPageContainer = styled.div`
  background: #040104;
  font-family: SpoqaHanSans;
  font-style: normal;
  padding: 0 5em;
  display: flex;
  flex-direction: column;
  min-width: 1120px;
  max-width: 1300px;
  margin: 0 auto;
`;

const MyPageUserInfo = styled.div`
  padding-top: 7%;
  display: flex;
  flex-direction: row;
`;

const MyPageUserInfoData = styled.div`
  flex: 1;
  color: #e2e1e2;
`;

const MyPageUserInfoImg = styled.div`
    flex: 1;
    color : #E2E1E2
    display : flex;
`;

const MyPageTitle = styled.div`
  color: #e2e1e2;
  font-size: 1.75rem;
  font-weight: bold;
`;

const MyPageMainDesc = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #e2e1e2;
  margin-top: 1%;
`;

const MyPageSubDesc = styled.div`
  font-size: 0.75rem;
  color: #b3b4be;
  display: table-cell;
  vertical-align: middle;
`;

const MyPageReqBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20%;
`;

const MyPageReqBoxWait = styled.div`
  flex: 0.3;
`;
const MyPageReqBoxIng = styled.div`
  flex: 0.3;
`;

const MyPageChangeMusician = styled.button`
  width: 330px;
  height: 48px;
  margin-top: 7%;
  background: #6865fc;
  border-radius: 8px;
  color: #e2e1e2;
  padding: 1.5% 4%;
  border: none;
  font-size: 1rem;
  cursor: pointer;
`;

const MyPageTitleBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ReqListBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3%;
  justify-content: flex-start;
`;

const PickListBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3%;
`;

const Next = styled.div`
  background-color: #040104;
  color: #b3b4be;
  height: 56px;
  border: 1px solid #b3b4be;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1rem;

  margin-top: 40px;
`;

const ReqContents = [
  {
    id: 1,
    name: "김지윤",
    profile: "/static/vector.png",
    reqdate: "2020년10월03일",
    context1: "작품",
    context2: " 을/를 위한",
    context3: "어쿠스틱",
    context4: " 장르의 ",
    context5: "잔잔",
    context6: " 분위기인",
    context7: "30초~미정",
    context8: " 분 길이의 곡을",
    context9: "2020년 12월 11일",
    context10: " 까지",
    context11: "10만원 ~ 가격제시",
    context12: " 의 견적으로 의뢰하였습니다.",
    status: "wait",
  },
  {
    id: 2,
    name: "박진호",
    profile: "/static/vector.png",
    reqdate: "2020년11월28일",
    context1: "선물",
    context2: " 을/를 위한",
    context3: "뉴에이지",
    context4: " 장르의 ",
    context5: "사랑",
    context6: " 분위기인",
    context7: "10초~미정",
    context8: " 분 길이의 곡을",
    context9: "2020년 11월 30일",
    context10: " 까지",
    context11: "5만원 ~ 10만원",
    context12: " 의 견적으로 의뢰하였습니다.",
    status: "connect",
  },
];

const defaultBeforeList = [
  {
    id: 1,
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    name: "dorai",
    enrollDate: "2018-12-28",
    status: "0",
    features: "선물/뉴에이지/사랑/10초~미정/2018년12월30일/3만원 ~ 가격제시",
  },
  {
    id: 2,
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    name: "타코",
    enrollDate: "2018-01-01",
    status: "1",
    features: "선물/뉴에이지/사랑/10초~미정/2018년12월30일/5만원 ~ 가격제시",
  },
  {
    id: 3,
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    name: "dorai",
    enrollDate: "2018-12-28",
    status: "2",
    features: "선물/뉴에이지/사랑/10초~미정/2018년12월30일/3만원 ~ 가격제시",
  },
  {
    id: 4,
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    name: "타코",
    enrollDate: "2018-01-01",
    status: "0",
    features: "선물/뉴에이지/사랑/10초~미정/2018년12월30일/5만원 ~ 가격제시",
  },
  {
    id: 5,
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    name: "dorai",
    enrollDate: "2018-12-28",
    status: "1",
    features: "선물/뉴에이지/사랑/10초~미정/2018년12월30일/3만원 ~ 가격제시",
  },
  {
    id: 6,
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    name: "타코",
    enrollDate: "2018-01-01",
    status: "2",
    features: "선물/뉴에이지/사랑/10초~미정/2018년12월30일/5만원 ~ 가격제시",
  },
  {
    id: 7,
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    name: "dorai",
    enrollDate: "2018-12-28",
    status: "0",
    features: "선물/뉴에이지/사랑/10초~미정/2018년12월30일/3만원 ~ 가격제시",
  },
  {
    id: 8,
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    name: "타코",
    enrollDate: "2018-01-01",
    status: "1",
    features: "선물/뉴에이지/사랑/10초~미정/2018년12월30일/5만원 ~ 가격제시",
  },
  {
    id: 9,
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    name: "타코",
    enrollDate: "2018-01-01",
    status: "2",
    features: "선물/뉴에이지/사랑/10초~미정/2018년12월30일/5만원 ~ 가격제시",
  },
  {
    id: 10,
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    name: "dorai",
    enrollDate: "2018-12-28",
    status: "0",
    features: "선물/뉴에이지/사랑/10초~미정/2018년12월30일/3만원 ~ 가격제시",
  },
  {
    id: 11,
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    name: "타코",
    enrollDate: "2018-01-01",
    status: "1",
    features: "선물/뉴에이지/사랑/10초~미정/2018년12월30일/5만원 ~ 가격제시",
  },
  {
    id: 12,
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    name: "타코",
    enrollDate: "2018-01-01",
    status: "2",
    features: "선물/뉴에이지/사랑/10초~미정/2018년12월30일/5만원 ~ 가격제시",
  },
];

const MusicianMyPage = (props: Props) => {
  const isMusician = true;
  const [pageBeNumber, setPageBeNumber] = React.useState<number>(1);
  const displayList = defaultBeforeList.slice(0, 3 * pageBeNumber);
  return (
    <>
      <MyPageContainer>
        <MyPageUserInfo>
          <MyPageUserInfoData>
            <MyPageTitle>마약왕</MyPageTitle>
            <MyPageMainDesc style={{ color: "#B3B4BE" }}>
              tuna@gmail.com
            </MyPageMainDesc>
            <MyPageMainDesc>내가 하고싶은 음악을 합니다.</MyPageMainDesc>

            <MyPageReqBox>
              <MyPageReqBoxWait>대기중인 의뢰</MyPageReqBoxWait>
              <MyPageReqBoxIng>진행중인 의뢰</MyPageReqBoxIng>
              <div style={{ flex: 0.4 }}></div>
            </MyPageReqBox>

            <MyPageReqBox style={{ marginTop: "3%" }}>
              <MyPageReqBoxWait
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  color: "#4C4C50",
                }}
              >
                0
              </MyPageReqBoxWait>
              <MyPageReqBoxIng
                style={{ fontSize: "1.25rem", fontWeight: "bold" }}
              >
                <span style={{ color: "#6865FC" }}>2</span>
              </MyPageReqBoxIng>
              <div style={{ flex: 0.4 }}></div>
            </MyPageReqBox>

            <MyPageChangeMusician>일반 회원으로 전환</MyPageChangeMusician>
          </MyPageUserInfoData>

          <MyPageUserInfoImg>
            <div style={{ textAlign: "end" }}>
              <img
                src="/static/musician.png"
                alt="musician"
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: "50%",
                  marginRight: "3%",
                }}
              />
            </div>
          </MyPageUserInfoImg>
        </MyPageUserInfo>

        <MyPageUserInfo style={{ paddingTop: "12%", flexDirection: "column" }}>
          <MyPageTitleBox>
            <MyPageTitle style={{ fontSize: "1.5rem" }}>
              내 의뢰 리스트
            </MyPageTitle>

            <div style={{ display: "table", height: "100%" }}>
              <MyPageSubDesc>의뢰는 동시 3건까지 가능합니다.</MyPageSubDesc>
            </div>
          </MyPageTitleBox>

          <ReqListBox>
            {ReqContents.map((element) => {
              return <ReqList context={element} isMusician={isMusician} />;
            })}
          </ReqListBox>
        </MyPageUserInfo>

        <MyPageUserInfo style={{ paddingTop: "12%", flexDirection: "column" }}>
          <MyPageTitleBox>
            <MyPageTitle style={{ fontSize: "1.5rem" }}>
              이전 의뢰 리스트
            </MyPageTitle>
          </MyPageTitleBox>

          <PickListBox>
            {displayList.map((element) => {
              return <BeforeList element={element} />;
            })}
          </PickListBox>
          {displayList.length === defaultBeforeList.length ? (
            <span></span>
          ) : pageBeNumber > 3 ? (
            <Next style={{ cursor: "auto" }}>더보기 ({pageBeNumber}/4)</Next>
          ) : (
            <Next
              onClick={() => {
                setPageBeNumber(pageBeNumber + 1);
              }}
            >
              더보기 ({pageBeNumber}/4)
            </Next>
          )}
        </MyPageUserInfo>
      </MyPageContainer>
    </>
  );
};

export default MusicianMyPage;
