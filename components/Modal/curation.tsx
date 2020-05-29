import * as React from "react";
import styled from 'styled-components';
import {Modal} from 'antd';
import { CurationContext } from "./../../stores/CurationStore";

import Main from "./Curation/main";
import StepOne from "./Curation/step_one";
import StepTwo from "./Curation/step_two";
import StepThree from "./Curation/step_three";
import StepFour from "./Curation/step_four";

const Button = styled.button`
background: transparent;
  color: #6865fc;
  border: 2px solid #6865fc;
  border-radius: 10px;
  font-size: 1rem;
  padding: 0.4em 2em;
  cursor: pointer;
  min-width: fit-content;
`;

const ModalOver = styled(Modal)`
  &&{
    .ant-modal-close {
      color : #93949C;
    };
    .ant-modal-content {
      background-color : #181818;
      fill : dimgray;
      width : 800px;
      height: 472px;
      padding : 0;
      border-radius : 8px;
    };
    .ant-modal-body {
      padding : 0;
      height: 100%;
    }
  }

`;
const BannerButton = styled.button`
    background: linear-gradient(157.06deg, #6865fc 36.28%, #658dfc 100%);
    border-radius: 8px;
    border: none;
    color: #fdfdff;
    font-size: 1.5rem;
    padding: 1rem 6rem;
    cursor : pointer;
`;
const Curation = ({className}): React.ReactElement => {

  const [open, setOpen] = React.useState<any>(false);
  const [curationStep, setStep] = React.useState<number>(1);

  const tags = React.useContext(CurationContext);


  let stepLayout = <></>;
  let ButtonType = <></>;
  const onOpenModal = () => {
    setOpen(true);
    setStep(1);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  const nextButton = (step: number, tag : string) => {
    
      if(step == 1){
        tags.dispatch({ type : "ONE_TAG", payload : {tag: tag}})
      }
      else if(step == 2){
        tags.dispatch({ type : "TWO_TAG", payload : {tag: tag}})
      }
      else if(step == 3){
        tags.dispatch({ type : "THREE_TAG", payload : {tag: tag}})
      }
      else if(step == 4){
        tags.dispatch({ type : "FOUR_TAG", payload : {tag: tag}})
        
        setOpen(false);
        
      }
      setStep(curationStep+1);
  };

  const beforeButton = (step: any, tag : object) => {
    
    if(step == 1){
      tags.dispatch({ type : "ONE_TAG", payload : {tag: tag}})
    }
    else if(step == 2){
      tags.dispatch({ type : "TWO_TAG", payload : {tag: tag}})
    }
    else if(step == 3){
      tags.dispatch({ type : "THREE_TAG", payload : {tag: tag}})
    }
    else if(step == 4){
      tags.dispatch({ type : "FOUR_TAG", payload : {tag: tag}})
    }

    setStep(curationStep-1);
  }
  if(curationStep == 1){
    stepLayout = <ModalOver visible={open} onOk={onCloseModal} onCancel={onCloseModal}
    footer={null}
    width={800}
    style={{ top: 130 }}
    >
        <Main nextButton={nextButton}/>
    </ModalOver>

  }
  else if(curationStep == 2){
    stepLayout = <ModalOver visible={open} onOk={onCloseModal}onCancel={onCloseModal}
    footer={null}
    width={800}
    style={{ top: 130 }}
    >
        <StepOne nextButton={nextButton} beforeButton={beforeButton} object={tags.tags.stepOne_Tag}/>
    </ModalOver>
  }
  else if(curationStep == 3){
    stepLayout =  <ModalOver visible={open} onOk={onCloseModal} onCancel={onCloseModal}
    footer={null}
    width={800}
    style={{ top: 130 }}
    >
        <StepTwo nextButton={nextButton} beforeButton={beforeButton} object={tags.tags.stepTwo_Tag}/>
    </ModalOver>
  }
  else if(curationStep == 4){
    stepLayout =  <ModalOver visible={open} onOk={onCloseModal} onCancel={onCloseModal}
    footer={null}
    width={800}
    style={{ top: 130 }}
    >
        <StepThree nextButton={nextButton} beforeButton={beforeButton} object={tags.tags.stepThree_Tag}/>
    </ModalOver>
  }
  else if(curationStep == 5){
    stepLayout =  <ModalOver visible={open} onOk={onCloseModal} onCancel={onCloseModal}
    footer={null}
    width={800}
    style={{ top: 130 }}
    >
        <StepFour nextButton={nextButton} beforeButton={beforeButton} object={tags.tags.stepFour_Tag}/>
    </ModalOver>
  }
  else{
    stepLayout = <ModalOver visible={open} onCancel={onCloseModal}
    footer={null}
    width={800}
    style={{ top: 130 }}
    />
    console.log('final Tags : ',tags.tags)
  }

  if(className === "header"){
    ButtonType = <Button className={className} onClick={onOpenModal}>
                    뮤지션매칭
                </Button>
  } 
  else{
    ButtonType = <BannerButton className={className} onClick={onOpenModal}>
                    뮤지션 매칭하기
                </BannerButton>
  }
  return (
    <>
      {ButtonType}
      {stepLayout}
      
    </>
  );
};

export default Curation;
