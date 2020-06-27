import * as React from "react";
import styled from "styled-components";
import ReqList from "./reqList";
import MusicianItem from "../MusicianFinder/MusicianList/MusicianItem";
import BeforeList from "./beforeList";
import { UserContext } from "../../stores/UserStore";
import { SongContext } from "../../stores/SongStore";
import Link from "next/link";

interface Props {}

interface Song {
  id: number;
  title: string;
  isPlaying: boolean;
  isLike: boolean;
  cover_url: string;
  song_url: string;
}

interface Musician {
  id: number;
  name: string;
  introduction: string;
  tags: string[];
  likes: number;
  profile_url: string;
  features: string[];
  song: Song;
}

const MyPageContainer = styled.div`
  background: #040104;
  font-family: SpoqaHanSans;
  font-style: normal;
  padding: 0 40px;
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
    name: "마약왕",
    reqdate: "2020년11월28일",
    //profile: "/static/vector.png",
    profile:
      "https://i.pinimg.com/originals/b4/75/00/b4750046d94fed05d00dd849aa5f0ab7.jpg",
    context1: "선물",
    context2: " 을/를 위한",
    context3: "뉴에이지",
    context4: " 장르의 ",
    context5: "사랑",
    context6: " 분위기인",
    context7: "10초~미정",
    context8: " 분 길이의 곡을",
    context9: "2020년 12월 30일",
    context10: " 까지",
    context11: "10만원 ~ 가격제시",
    context12: " 의 견적으로 의뢰하였습니다.",
    status: "wait",
  },
  {
    id: 2,
    name: "And we go",
    //profile: "/static/vector.png",
    profile:
      "https://freight.cargo.site/t/original/i/a22da87abfa5c1e719a8d2287c6b820a4438cb9e7bd8e19c03cc4c966fb25958/AWA-PACKSHOT.jpg",
    reqdate: "2020년10월03일",
    context1: "작품",
    context2: " 을/를 위한",
    context3: "어쿠스틱",
    context4: " 장르의 ",
    context5: "감동",
    context6: " 분위기인",
    context7: "30초~미정",
    context8: " 분 길이의 곡을",
    context9: "2020년 12월 01일",
    context10: " 까지",
    context11: "10만원 ~ 가격제시",
    context12: " 의 견적으로 의뢰하였습니다.",
    status: "connect",
  },
];

const Mypage = (props: Props) => {
  const { userData, dispatch } = React.useContext(UserContext);
  const song = React.useContext(SongContext);

  const [pageNumber, setPageNumber] = React.useState<number>(1);
  const [pageBeNumber, setPageBeNumber] = React.useState<number>(1);
  const isMusician = false;

  const toggleLike = (id: string) => {
    dispatch({ type: "TOGGLE_LIKE", payload: id });
  };

  const selectSong = (id: string, status: boolean, musician: Musician) => {
    dispatch({ type: "SELECT_SONG", payload: { id, status } });

    const selectedSong = {
      ...musician.song,
      name: musician.name,
      isPlaying: status,
    };
    song.dispatch({ type: "CHANGE_SONG", payload: selectedSong });
  };

  console.log(userData.musicianList);
  console.log(userData.beforeList);
  return (
    <>
      <MyPageContainer>
        <MyPageUserInfo>
          <MyPageUserInfoData>
            <MyPageTitle>김튜나</MyPageTitle>
            <MyPageMainDesc style={{ color: "#B3B4BE" }}>
              tuna@gmail.com
            </MyPageMainDesc>
            <MyPageMainDesc>음악구함</MyPageMainDesc>

            <MyPageReqBox>
              <MyPageReqBoxWait>대기중인 의뢰</MyPageReqBoxWait>
              <MyPageReqBoxIng>진행중인 의뢰</MyPageReqBoxIng>
              <div style={{ flex: 0.4 }}></div>
            </MyPageReqBox>

            <MyPageReqBox style={{ marginTop: "3%" }}>
              <MyPageReqBoxWait
                style={{ fontSize: "1.25rem", fontWeight: "bold" }}
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
            <Link href="/musician/mypage">
              <MyPageChangeMusician>뮤지션으로 전환</MyPageChangeMusician>
            </Link>
          </MyPageUserInfoData>

          <MyPageUserInfoImg>
            <div style={{ textAlign: "end" }}>
              <img
                src="/static/vector.png"
                alt="vector"
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
              <MyPageSubDesc>3건까지 의뢰를 신청할 수 있어요.</MyPageSubDesc>
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
              내가 pick한 뮤지션
            </MyPageTitle>

            <div style={{ display: "table", height: "100%" }}>
              <MyPageSubDesc>
                뮤지션 Pick는 최대 16명까지 가능합니다.
              </MyPageSubDesc>
            </div>
          </MyPageTitleBox>

          <PickListBox>
            {userData.musicianList.display.map((musician) => {
              return (
                <MusicianItem
                  key={musician.id}
                  musician={musician}
                  toggleLike={toggleLike}
                  selectSong={selectSong}
                  currentSong={song.song}
                />
              );
            })}
            {userData.musicianList.display.length ===
            userData.musicianList.list.length ? (
              <span></span>
            ) : pageNumber > 3 ? (
              <Next style={{ cursor: "auto" }}>더보기 ({pageNumber}/4)</Next>
            ) : (
              <Next
                onClick={() => {
                  setPageNumber(pageNumber + 1);
                  dispatch({ type: "NEXT_MUSICIANS" });
                }}
              >
                더보기 ({pageNumber}/4)
              </Next>
            )}
          </PickListBox>
        </MyPageUserInfo>

        <MyPageUserInfo style={{ paddingTop: "12%", flexDirection: "column" }}>
          <MyPageTitleBox>
            <MyPageTitle style={{ fontSize: "1.5rem" }}>
              이전 의뢰 리스트
            </MyPageTitle>
          </MyPageTitleBox>

          <PickListBox>
            {userData.beforeList.display.map((element) => {
              return <BeforeList element={element} />;
            })}
          </PickListBox>

          {userData.beforeList.display.length ===
          userData.beforeList.list.length ? (
            <span></span>
          ) : pageBeNumber > 3 ? (
            <Next style={{ cursor: "auto" }}>더보기 ({pageBeNumber}/4)</Next>
          ) : (
            <Next
              onClick={() => {
                setPageBeNumber(pageBeNumber + 1);
                dispatch({ type: "NEXT_BEFORE" });
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

export default Mypage;
