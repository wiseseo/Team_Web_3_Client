import * as React from "react";
import styled from "styled-components";
import Progress from "../ProgressBar/TenProgress/eight";
const EstimateUserInfoData = styled.div`
    flex: 0.2;
    color : #E2E1E2;
    padding-right : 7%;
`;


const EstimateMainDesc = styled.div`
    font-size : 1.25rem;
    font-weight : bold;
    color : #6865FC;
    margin-bottom : 24px;
`;

const EstimateSubTitle = styled.div`
    font-size : 1rem;
    color : #B3B4BE;
    font-weight :bold;
    border-bottom: 1px solid  #3E3E41;
    padding-bottom: 5px;
    margin-bottom : 8px;
`;

const EstimateSubDesc = styled.div`
    font-size: 0.875rem;
    line-height : 23px;
    color : #B3B4BE;
`;

const EstimateContentMain = styled.div`
    flex: 0.8;
    background : #121212;
    border-radius : 8px;
    width : 800px;
    height : 693px;

`;

const EstimateContentMainTitle = styled.div`
    width : 100%;
    height : 56px;
    position : relative;
`;

const EstimateContentMainSub = styled.div`
    width : 90%;
    height : 425px;
    margin : 7% 5%;
`;

const EstimateContentMainSubTitle = styled.div`
    font-size : 1.25rem;
    color : #FFFFFF;
    font-weight : bold;
    clear : both;
    margin-top : 56px;
`;
const EstimateContentMainSubTitleBack = styled.div`
    font-size : 0.75rem;
    color : #B3B4BE;
    margin-top : 8px;
`;

const EstimateContentMainButton = styled.div`
    width : 100%;
    height : 96px;
    text-align : center;
    display: table;
`;

const FormContainerTextarea = styled.textarea`

    margin-top : 18px;
    color : #B3B4BE;
    background: #3E3E41;
    border-radius: 8px;
    padding : 1.5%;
    border : none;
    line-height : 20px;
    width : 97%;
    height : 120px;
    &&{
        ::placeholder {
        color : #181818;
        font-size : 0.75rem;
        }
    }
    &:focus {
        outline : none;
    }
`;

const FormContainerRadioLayout = styled.div`
  color : #B3B4BE;
  font-size : 0.875rem;
  display: flex;
  flex-direction : row;
  position: relative;
  padding: 0 6px;
  margin: 10px 0 0;
  width : 100%;
  margin-bottom : 1%;
`;

const FormContainerRadioLabel = styled.label`
  color: #B3B4BE;
  font-weight: normal;
  cursor : pointer;
  &:before {
    content: " ";
    display: inline-block;
    position: relative;
    top: 5px;
    margin: 0 10px 0 0;
    width: 20px;
    height: 20px;
    border-radius: 11px;
    border: 2px solid #3E3E41;
    background-color: transparent;
  }
`;

const FormContainerRadio = styled.input`
  display : none;

  &:checked + ${FormContainerRadioLabel}:after {
    border-radius: 11px;
    width: 12px;
    height: 12px;
    position: absolute;
    top: 9px;
    left: 10px;
    content: " ";
    display: block;
    background: #6865FC;
  }
`;

const FormContainerProfileUpload = styled.button`
  background : #3E3E41;
  color : #B3B4BE;
  width : 88px;
  height : 32px;
  font-size : 0.75rem;
  font-weight : bold;
  border : none;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const XButton = styled.span`
    cursor : pointer;
`;


const BeforeButton = styled.button`
    background : #121212;
    border-radius : 8px;
    color : #E2E1E2;
    padding : 1.5% 4%;
    width : 344px;
    height : 48px;
    border: 0.6px solid #B3B4BE;
    font-size : 1rem;
    font-weight : bold;
    margin-right : 32px;
`;

const AfterButton = styled.button`
    width : 344px;
    height : 48px;
    background : #B3B4BE;
    border-radius : 8px;
    color : #E2E1E2;
    padding : 1.5% 4%;
    border: none;
    font-size : 1rem;
`;

const index = ({nextButton, beforeButton, object}): React.ReactElement => {

    const [radioBoxArr, setRadioBoxArr] = React.useState([]);
    const [radioBoxList, setRadioBoxList] = React.useState([
        {
            label : "참고 자료 없음",
            select : false
        },
        {
            label : "참고 자료 있음",
            select : false
        },
    ])
    
    const [fileArr, setFileArr] = React.useState([]);
    const [fileHover, setFileHover] = React.useState<number>(0);
    const [fileSize, setFileSize] = React.useState<boolean>(true);

    const checkBox = (e) => {
        console.log(e.target.value);
        
        let newList = [...radioBoxList];

        for(let i = 0 ; i < radioBoxList.length ; i++){
            if(radioBoxList[i].label === e.target.value){
                newList[i].select = true;
            }
            else{
                newList[i].select = false;
            }
        }
        setRadioBoxList(newList)
        setRadioBoxArr([...radioBoxArr, e.target.value]);
    }

    const handleFileOnChange = (event) => {
    
        let file = event.target.files;
        console.log(file);
        let newFileArr = [];
        let fileSize = 0;
        if(file.length > 5){
            for(let i = 0 ; i < 5 ; i++){
                newFileArr.push([file[i], i])
                fileSize += file[i].size;
            }

            if(fileSize > 10000000){
                setFileSize(false);
            }
            else{
                setFileSize(true);
                setFileArr(newFileArr);
            }
            
            
        }
        else{
            
            for(let i = 0 ; i < file.length ; i++){
                newFileArr.push([file[i], i])
                fileSize += file[i].size;
            }

            if(fileSize > 10000000){
                setFileSize(false);
            }
            else{
                setFileSize(true);
                setFileArr(newFileArr);
            }
            
            
        }
        
      }

    const fileInput = React.useRef<HTMLInputElement>(null);
    const resetInput = () => {
        fileInput.current.value = '';
    };

    React.useEffect(() => {
        if(fileInput.current){
            resetInput();
        }
    }, [fileArr]);

    let FileStyle = {
        display: "inline-block",
        padding: "0 5px",
        background: "rgba(143, 143, 143, 0.1)"
    };
    
    
    return (
        <>
        <EstimateUserInfoData>
                        
            <img
                src={"/static/Frame.png"}
                alt="vector"
                style={{
                    width : 23,
                    height : 23,
                    borderRadius : "50%",
                    float : "left",
                    marginRight : "3%"
                }}
            />
            <EstimateMainDesc>튜나 팁</EstimateMainDesc>
            <EstimateSubTitle>기획 의도란?</EstimateSubTitle>
            <EstimateSubDesc>
                어떤 음악을 제작하고 싶은지 원하는 음원에 대해 상세하게 적어주세요. 참고 자료와 링크, 이미지를 첨부해주셔도 좋습니다.
            </EstimateSubDesc>
            
        </EstimateUserInfoData>
        
        <EstimateContentMain>
            
            <EstimateContentMainTitle>
                <Progress/>
            </EstimateContentMainTitle>
            
            <EstimateContentMainSub>

                <EstimateContentMainSubTitle>음원 기획 의도를 알려주세요.</EstimateContentMainSubTitle>
                <EstimateContentMainSubTitleBack>음원을 기획하게 된 사유와 상세한 기획 의도에 대해 적어주세요. (2000자)</EstimateContentMainSubTitleBack>
                <FormContainerTextarea
                    placeholder="최소 30자 이상 입력해주세요."
                />
                {radioBoxList.map((list, key) => {

                    if(list.select === true){
                        return (
                            <FormContainerRadioLayout key={key}>

                                <FormContainerRadio onChange={(e) => {checkBox(e)}} type="radio" value={list.label} name="pay" id={list.label}/> 
                                <FormContainerRadioLabel htmlFor={list.label} style={{color : "#6865FC"}}>{list.label}</FormContainerRadioLabel>
                                
                            </FormContainerRadioLayout>
                            
                        );
                    
                    }
                    else{
                        return (
                            <FormContainerRadioLayout key={key}>

                                <FormContainerRadio onChange={(e) => {checkBox(e)}} type="radio" value={list.label} name="pay" id={list.label}/> 
                                <FormContainerRadioLabel htmlFor={list.label}>{list.label}</FormContainerRadioLabel>

                            </FormContainerRadioLayout>
                        );
                    }

                })}
                
                {radioBoxList[1].select === true ? 
                
                <div style={{marginLeft : "4%", marginTop : 4}}>
                    {fileSize ? 
                        <div style={{fontSize : "0.75rem", color : "#6865FC", marginBottom : 8}}>최대 5개까지 업로드 할 수 있습니다. (최대 10MB)</div>
                    : 
                        <div style={{fontSize : "0.75rem", color : "#C93237", marginBottom : 8}}>
                            <img
                                src={"/static/warningCircle.png"}
                                alt="vector"
                                style={{
                                    width : 12,
                                    height : 12,
                                    marginRight : 5
                                }}
                            />
                            최대 5개까지 업로드 할 수 있습니다. (최대 10MB)
                        </div>
                    }
                    
                    <FormContainerProfileUpload onClick={()=>{
                        document.getElementById('getFile').click();
                    }}>업로드
                    </FormContainerProfileUpload>
                    <input multiple style={{visibility : "hidden"}} type="file" id="getFile" ref={fileInput} onChange={e => {
                    handleFileOnChange(e);
                    
                    }}/>
                    
                    {fileArr.length !== 0 ?
                        fileArr.map((value, idx) => {
                            return (
                                <div key={idx} style={{marginBottom : 8}}>
                                    
                                    {fileHover === idx ? 
                                         <div style={FileStyle}>
                                            <img
                                                src={"/static/fileLink.png"}
                                                alt="fileLink"
                                                style={{
                                                    width : 12,
                                                    height : 12,
                                                    marginRight : 5
                                                }}
                                            />
                                            <span onMouseOver={() => {setFileHover(idx)}} onMouseLeave={() => {setFileHover(idx)}} style={{width : 160, display : "inline-block"}}>
                                            {value[0].name.length > 20 ? value[0].name.substr(0, 20) : value[0].name}
                                            </span>
                                            <XButton onClick={() => {
                                                setFileArr(fileArr.filter(item => item[1] !== value[1]))
                                                                
                                                }}>
                                                <img
                                                    src={"/static/group.png"}
                                                    alt="group"
                                                    style={{
                                                        width : 10,
                                                        height : 10,
                                                        marginLeft : 20
                                                    }}
                                                />
                                            </XButton>
                                         </div>
     
                                    :
                                        <div style={{display : "inline-block"}}>
                                            <img
                                                src={"/static/fileLink.png"}
                                                alt="fileLink"
                                                style={{
                                                    width : 12,
                                                    height : 12,
                                                    marginRight : 5
                                                }}
                                            />
                                            <span onMouseOver={() => {setFileHover(idx)}} onMouseLeave={() => {setFileHover(idx)}} style={{width : 160, display : "inline-block"}}>
                                            {value[0].name.length > 20 ? value[0].name.substr(0, 20) : value[0].name}
                                            </span>
                                            
                                        </div>

                                    }

                                   
                                </div>
                            )
                        })
                        
                    :
                    ""
                    }

                </div>
                : 
                ""
                }

            </EstimateContentMainSub>
            
            <EstimateContentMainButton>
                <div style={{display:"table-cell", height : "100%", verticalAlign:"middle"}}>
                <BeforeButton onClick={()=>{beforeButton(8, "")}}>이전으로</BeforeButton>
                {
                // nickNmFlag === 1 &&
                // introductionFlag === 1 &&
                // (stepOneObj.profileUrl !== {}) &&
                // careerFlag === 1 &&
                // celPhoneFlag === 1 &&
                // (stepOneObj.songEsntlUrl !== {}) &&
                // (stepOneObj.portFolioMainMusic.size !== 0)
                1
                ? 
                <AfterButton onClick={()=>{nextButton(8, "")}} style={{cursor : "pointer", background : "#6865FC"}}>다음으로</AfterButton>
                :
                <AfterButton>다음으로</AfterButton>
                }
                </div>
            </EstimateContentMainButton>

        </EstimateContentMain>

        </>
    );
};

export default index;
