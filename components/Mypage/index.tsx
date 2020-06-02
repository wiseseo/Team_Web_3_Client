import * as React from "react";
import styled from "styled-components";
import ReqList from "./reqList";
import MusicianItem from "../MusicianFinder/MusicianList/MusicianItem";
import BeforeList from "./beforeList";
import {UserContext} from "../../stores/UserStore";
import {SongContext} from "../../stores/SongStore";
import Link from "next/link";

interface Props {}

interface Song {
    id: string;
    title: string;
    date: string;
    isPlaying: boolean;
    isLike: boolean;
    cover_url: string;
    song_url: string;
}

interface Musician {
    id: string;
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
    flex-direction : column;
    min-width : 1050px;
    max-width : 1300px;
    margin : 0 auto;
`;

const MyPageUserInfo = styled.div`
    padding-top : 7%;
    display : flex;
    flex-direction : row;
`;

const MyPageUserInfoData = styled.div`
    flex: 1;
    color : #E2E1E2
`;

const MyPageUserInfoImg = styled.div`
    flex: 1;
    color : #E2E1E2
    display : flex;
`;

const MyPageTitle = styled.div`
    color : #E2E1E2;
    font-size : 1.75rem;
    font-weight : bold;
    
`;

const MyPageMainDesc = styled.div`
    font-size : 1rem;
    font-weight : bold;
    color : #E2E1E2;
    margin-top : 1%;
`;

const MyPageSubDesc = styled.div`
    font-size : 0.75rem;
    color : #B3B4BE;
    display : table-cell;
    vertical-align : middle;
`;

const MyPageReqBox = styled.div`
    display : flex;
    flex-direction : row;
    margin-top : 20%;
`;

const MyPageReqBoxWait = styled.div`
    flex : 0.3
`;
const MyPageReqBoxIng = styled.div`
    flex : 0.3
`;

const MyPageChangeMusician = styled.button`
    width : 330px;
    height : 48px;
    margin-top : 7%;
    background : #6865FC;
    border-radius : 8px;
    color : #E2E1E2;
    padding : 1.5% 4%;
    border: none;
    font-size : 1rem;
    cursor : pointer;
`;

const MyPageTitleBox = styled.div`
    display: flex;
    width : 100%;
    justify-content : space-between;

`;

const ReqListBox = styled.div`
    display : flex;
    flex-direction : row;
    margin-top : 3%;
`;

const PickListBox = styled.div`
    display : flex;
    flex-direction : column;
    margin-top : 3%;
`;

const AddButtonLayout = styled.div`
    border : 1px solid #B3B4BE;
    border-radius : 8px;
    height: 72px;
    color : #E2E1E2;
    cursor : pointer;
    margin-top : 3%;
    display : table;
    text-align : center;
    width : 100%;
`;

const Next = styled.div`
    background-color: #040104;
    color: #B3B4BE;
    height: 72px;
    border: 1px solid #B3B4BE;
    box-sizing: border-box;
    border-radius: 8px;
    display: flex;
    justify-content : center;
    align-items : center;
    cursor : pointer;
`;

const Mypage = (props: Props) => {

    const { userData, dispatch } = React.useContext(UserContext);
    const song = React.useContext(SongContext);

    const [pageNumber, setPageNumber] = React.useState<number>(1);

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
    return(
        <>
        <MyPageContainer>
            
            <MyPageUserInfo>

                <MyPageUserInfoData>
                    <MyPageTitle>김튜나</MyPageTitle>
                    <MyPageMainDesc style={{color : "#B3B4BE"}}>tuna@gmail.com</MyPageMainDesc>
                    <MyPageMainDesc>일이삼사오육칠팔구십일이삼사오육칠팔구십</MyPageMainDesc>

                    <MyPageReqBox>
                    
                        <MyPageReqBoxWait>대기중인 의뢰</MyPageReqBoxWait>
                        <MyPageReqBoxIng>진행중인 의뢰</MyPageReqBoxIng>
                        <div style={{flex: 0.4}}></div>
                        
                    </MyPageReqBox>

                    <MyPageReqBox style={{marginTop : "3%"}}>
                        
                        <MyPageReqBoxWait style={{fontSize : "1.25rem", fontWeight : "bold"}}>0</MyPageReqBoxWait>
                        <MyPageReqBoxIng style={{fontSize : "1.25rem", fontWeight : "bold"}}><span style={{color : "#6865FC"}}>2</span></MyPageReqBoxIng>
                        <div style={{flex: 0.4}}></div>

                    </MyPageReqBox>
                    <Link href="/musician/mypage">
                    <MyPageChangeMusician>뮤지션으로 전환</MyPageChangeMusician>
                    </Link>
                </MyPageUserInfoData>
                
                <MyPageUserInfoImg>
                    <div style={{textAlign : "end"}}>
                        <img
                            src="/static/vector.png"
                            alt="vector"
                            style={{
                                width : 150,
                                height : 150,
                                borderRadius : "50%",
                                marginRight : "3%"
                            }}
                        />
                    </div>
                </MyPageUserInfoImg>

            </MyPageUserInfo>

            <MyPageUserInfo style={{paddingTop : "12%", flexDirection : "column"}}>
                <MyPageTitleBox>
                    <MyPageTitle style={{fontSize : "1.5rem"}}>내 의뢰 리스트</MyPageTitle>
                    
                    <div style={{display : "table", height : "100%"}}>
                        <MyPageSubDesc>의뢰는 동시 3건까지 가능합니다.</MyPageSubDesc>
                    </div>
                </MyPageTitleBox>

                <ReqListBox>
                    <ReqList context={1}/>
                    <ReqList context={2}/>
                    <ReqList context={3}/>
                </ReqListBox>
            </MyPageUserInfo>

            <MyPageUserInfo style={{paddingTop : "12%", flexDirection : "column"}}>
                <MyPageTitleBox>
                    <MyPageTitle style={{fontSize : "1.5rem"}}>내가 pick한 뮤지션</MyPageTitle>
                    
                    <div style={{display : "table", height : "100%"}}>
                        <MyPageSubDesc>뮤지션 Pick는 최대 16명까지 가능합니다.</MyPageSubDesc>
                    </div>
                </MyPageTitleBox>

                <PickListBox>

                    {userData.musicianList.display.map((musician)=>{
                        return <MusicianItem
                        key={musician.id}
                        musician={musician}
                        toggleLike={toggleLike}
                        selectSong={selectSong}
                        currentSong={song.song}
                        />
                    })}
                    { userData.musicianList.display.length === userData.musicianList.list.length ? 
                    <span></span>
                    :
                    pageNumber > 3 ? 
                    
                    <Next style={{cursor : "auto"}}>
                        더보기 ({pageNumber}/4)
                    </Next>
                    : 
                    <Next onClick={() => {
                        setPageNumber(pageNumber+1)
                        dispatch({ type: "NEXT_MUSICIANS" })
                    }}>
                        더보기 ({pageNumber}/4)
                    </Next>
                    }
                </PickListBox>

            </MyPageUserInfo>
            
            <MyPageUserInfo style={{paddingTop : "12%", flexDirection : "column"}}>
                <MyPageTitleBox>
                    <MyPageTitle style={{fontSize : "1.5rem"}}>이전 의뢰 리스트</MyPageTitle>
                </MyPageTitleBox>

                <PickListBox>
                    <BeforeList/>
                    <BeforeList/>
                    <BeforeList/>
                    <BeforeList/>
                </PickListBox>

                <AddButtonLayout>
                    <div style={{display : "table-cell", verticalAlign : "middle"}}>
                        더보기 (1/4)
                    </div> 
                </AddButtonLayout>
            </MyPageUserInfo>
            
        </MyPageContainer>
        </>
    );
};

export default Mypage;
