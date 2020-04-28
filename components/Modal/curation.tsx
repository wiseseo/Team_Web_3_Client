import * as React from "react";
import styled from 'styled-components';
import {Modal} from 'react-responsive-modal';

import Quarter from "../ProgressBar/quarter";
import Half from "../ProgressBar/half";
import ThreeQuarters from "../ProgressBar/threeQuarters";
import Fixed from "../ProgressBar/fixed";

const CurationContainer = styled.div`
  height: 45vh;
`;

const CurationModalLogo = styled.div`
  text-align : center;

  height: 200px;
`;

const CurationModalGray = styled.div`
    height : 64px;
    background: #181818;
    border-radius: 8px 8px 0 0;
    position : relative;
`;
const CurationModalTitle = styled.div`
  color: #FFFFFF;
  font-family: SpoqaHanSans;
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 20px;
  align-items: center;
  text-align: center; 
  padding-top : 32px;
`;

const CurationModalDescription = styled.div`
  color: #B3B4BE;
  font-family: SpoqaHanSans;
  font-style: normal;
  font-weight: normal;
  font-size: 0.75rem;
  line-height: 20px;
  align-items: center;
  text-align: center;   
  padding-top : 1%;
  padding-bottom : 3%;
`;

const CurationModalButton = styled.div`
  padding-top : 40px;
  margin: 0 10%;
`;

const CurationModalButtonLayout = styled.div`
  text-align : center;
  height: 5vh;
  margin-bottom : 16px;
`;

const Button = styled.button`
font-size: 1rem;
cursor: pointer;
padding: 0.4em 2em;
`;


const NextButton = styled.button`
  background: #6865FC;
  border-radius: 8px;
  border: none;
  color: #E2E1E2;
  fontFamily: "SpoqaHanSans";
  font-size: 0.75rem;
  width: 344px;
  height: 48px;
  outline-width : 0px;
  cursor : pointer;
`;

const Curation = (): React.ReactElement => {

  const [open, setOpen] = React.useState<boolean>(false);
  const [curationStep, setStep] = React.useState<number>(1);

  let stepLayout = <></>

  const onOpenModal = () => {
    setOpen(true);
    setStep(1);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  const nextButton = (res: any) => {
      console.log(curationStep);
      console.log('Res : ', res);

      setStep(curationStep+1);
  };
  if(curationStep == 1){

    stepLayout = <Modal open={open} onClose={onCloseModal} center
        styles={{
            closeButton : {
                fill : "dimgray"
            }, 
            modal : {
                width : "800px",
                minWidth : "500px",
                height: "472px",
                padding : 0,
                borderRadius : 8
            }
                }}>
        <CurationContainer>
            <CurationModalGray/>
            <CurationModalTitle>뮤지션 매칭하기</CurationModalTitle>
            <CurationModalDescription>어서오세요. 당신에게 딱맞는~ 어쩌고 하는 큐레이션 설명글</CurationModalDescription>

            <CurationModalLogo>
            <img
            src="/static/vector.png"
            alt="vector"
            style={{
                
            }}
            />
            </CurationModalLogo>

            
            <CurationModalButton>

            <CurationModalButtonLayout>
                <NextButton onClick={nextButton}>시작하기</NextButton>
            </CurationModalButtonLayout>

            </CurationModalButton>
        </CurationContainer>
        </Modal>

  }
  else if(curationStep == 2){
    stepLayout = <Modal open={open} onClose={onCloseModal} center
    styles={{
        closeButton : {
            fill : "dimgray"
        }, 
        modal : {
            width : "800px",
            height: "472px",
            padding : 0,
            borderRadius : 8
        }
            }}>
    <CurationContainer>
        <CurationModalGray>
            <Quarter/>
        </CurationModalGray>
        <CurationModalTitle>1</CurationModalTitle>
        <CurationModalDescription>어서오세요. 당신에게 딱맞는~ 어쩌고 하는 큐레이션 설명글</CurationModalDescription>

        <CurationModalLogo>
        <img
        src="/static/vector.png"
        alt="vector"
        style={{
            
        }}
        />
        </CurationModalLogo>

        
        <CurationModalButton>

        <CurationModalButtonLayout>
            <NextButton onClick={nextButton}>시작하기</NextButton>
        </CurationModalButtonLayout>

        </CurationModalButton>
    </CurationContainer>
    </Modal>
  }
  else if(curationStep == 3){
    stepLayout = <Modal open={open} onClose={onCloseModal} center
        styles={{
            closeButton : {
                fill : "dimgray"
            }, 
            modal : {
                width : "800px",
                height: "472px",
                padding : 0,
                borderRadius : 8
            }
                }}>
        <CurationContainer>
            <CurationModalGray>
                <Half/>
            </CurationModalGray>
            <CurationModalTitle>2</CurationModalTitle>
            <CurationModalDescription>어서오세요. 당신에게 딱맞는~ 어쩌고 하는 큐레이션 설명글</CurationModalDescription>

            <CurationModalLogo>
            <img
            src="/static/vector.png"
            alt="vector"
            style={{
                
            }}
            />
            </CurationModalLogo>

            
            <CurationModalButton>

            <CurationModalButtonLayout>
                <NextButton onClick={nextButton}>시작하기</NextButton>
            </CurationModalButtonLayout>

            </CurationModalButton>
        </CurationContainer>
        </Modal>
  }
  else if(curationStep == 4){
    stepLayout = <Modal open={open} onClose={onCloseModal} center
        styles={{
            closeButton : {
                fill : "dimgray"
            }, 
            modal : {
                width : "800px",
                height: "472px",
                padding : 0,
                borderRadius : 8
            }
                }}>
        <CurationContainer>
            <CurationModalGray>
                <ThreeQuarters/>
            </CurationModalGray>
            <CurationModalTitle>3</CurationModalTitle>
            <CurationModalDescription>어서오세요. 당신에게 딱맞는~ 어쩌고 하는 큐레이션 설명글</CurationModalDescription>

            <CurationModalLogo>
            <img
            src="/static/vector.png"
            alt="vector"
            style={{
                
            }}
            />
            </CurationModalLogo>

            
            <CurationModalButton>

            <CurationModalButtonLayout>
                <NextButton onClick={nextButton}>시작하기</NextButton>
            </CurationModalButtonLayout>

            </CurationModalButton>
        </CurationContainer>
        </Modal>
  }
  else{
    stepLayout = <Modal open={open} onClose={onCloseModal} center
        styles={{
            closeButton : {
                fill : "dimgray"
            }, 
            modal : {
                width : "800px",
                height: "472px",
                padding : 0,
                borderRadius : 8
            }
                }}>
        <CurationContainer>
            <CurationModalGray>
                <Fixed/>
            </CurationModalGray>
            <CurationModalTitle>4</CurationModalTitle>
            <CurationModalDescription>어서오세요. 당신에게 딱맞는~ 어쩌고 하는 큐레이션 설명글</CurationModalDescription>

            <CurationModalLogo>
            <img
            src="/static/vector.png"
            alt="vector"
            style={{
                
            }}
            />
            </CurationModalLogo>

            
            <CurationModalButton>

            <CurationModalButtonLayout>
                <NextButton onClick={nextButton}>시작하기</NextButton>
            </CurationModalButtonLayout>

            </CurationModalButton>
        </CurationContainer>
        </Modal>
  }
  
  return (
    <>
      <Button onClick={onOpenModal}>
          click
      </Button>
      {stepLayout}
      
    </>
  );
};

export default Curation;
