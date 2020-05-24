import * as React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";

interface Props {}

const MyPageContainer = styled.div`
    background: #040104;
    font-family: SpoqaHanSans;
    font-style: normal;
    padding: 0 5em;
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
const EstimateSheet = (props: Props) => {

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

                    <MyPageChangeMusician>뮤지션으로 전환</MyPageChangeMusician>
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
            
            <Footer/>
        </MyPageContainer>
        </>
    );
};

export default EstimateSheet;
