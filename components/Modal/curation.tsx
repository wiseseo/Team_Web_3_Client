import * as React from "react";
import styled from 'styled-components';
import {Modal} from 'react-responsive-modal';
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
  float: right;
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

  const [open, setOpen] = React.useState<boolean>(false);
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
    stepLayout = <Modal open={open} onClose={onCloseModal} center
    styles={{
        closeButton : {
            fill : "dimgray"
        }, 
        modal : {
            width : "800px",
            height: "472px",
            padding : 0,
            borderRadius : 8,
            minWidth : 500
        }
            }}>
        <Main nextButton={nextButton}/>
    </Modal>

  }
  else if(curationStep == 2){
    stepLayout = <Modal open={open} onClose={onCloseModal} center
    styles={{
        closeButton : {
            fill : "dimgray"
        }, 
        modal : {
            minWidth : "800px",
            height: "472px",
            padding : 0,
            borderRadius : 8
        }
            }}>
        <StepOne nextButton={nextButton} beforeButton={beforeButton} object={tags.tags.stepOne_Tag}/>
    </Modal>
  }
  else if(curationStep == 3){
    stepLayout = <Modal open={open} onClose={onCloseModal} center
    styles={{
        closeButton : {
            fill : "dimgray"
        }, 
        modal : {
            minWidth : "800px",
            height: "472px",
            padding : 0,
            borderRadius : 8
        }
            }}>
        <StepTwo nextButton={nextButton} beforeButton={beforeButton} object={tags.tags.stepTwo_Tag}/>
    </Modal>
  }
  else if(curationStep == 4){
    stepLayout = <Modal open={open} onClose={onCloseModal} center
    styles={{
        closeButton : {
            fill : "dimgray"
        }, 
        modal : {
            minWidth : "800px",
            height: "472px",
            padding : 0,
            borderRadius : 8
        }
            }}>
        <StepThree nextButton={nextButton} beforeButton={beforeButton} object={tags.tags.stepThree_Tag}/>
    </Modal>
  }
  else if(curationStep == 5){
    stepLayout = <Modal open={open} onClose={onCloseModal} center
    styles={{
        closeButton : {
            fill : "dimgray"
        }, 
        modal : {
            minWidth : "800px",
            height: "472px",
            padding : 0,
            borderRadius : 8
        }
            }}>
        <StepFour nextButton={nextButton} beforeButton={beforeButton} object={tags.tags.stepFour_Tag}/>
    </Modal>
  }
  else{
    stepLayout = <Modal open={open} onClose={onCloseModal}/>
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
