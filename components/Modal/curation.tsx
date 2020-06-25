import * as React from "react";
import styled from "styled-components";
import { Modal } from "antd";
import { CurationContext } from "./../../stores/CurationStore";
import { FilterContext } from "./../../stores/FilterStore";

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
  font-size: 0.875rem;
  padding: 0.4em 2em;
  cursor: pointer;
  min-width: fit-content;
`;

const ModalOver = styled(Modal)`
  && {
    .ant-modal-close {
      color: #93949c;
    }
    .ant-modal-content {
      background-color: #181818;
      fill: dimgray;
      width: 800px;
      height: 472px;
      padding: 0;
      border-radius: 8px;
    }
    .ant-modal-body {
      padding: 0;
      height: 100%;
    }
  }
`;
const BannerButton = styled.button`
  background: linear-gradient(157.06deg, #6865fc 36.28%, #658dfc 100%);
  border-radius: 30px;
  border: none;
  color: #fdfdff;
  font-size: 1.25rem;
  padding: 0.64em 4.8em;
  cursor: pointer;
  font-weight: bold;
  background-size: 200% 200%;
  background-position: 30% 30%;
  transition: 0.5s background-position cubic-bezier(0, 0.68, 0.82, 1),
    0.5s font-size;

  &:hover {
    background-position: 80% 80%;
    font-size: 1.375rem;
    transition: 0.5s background-position cubic-bezier(0, 0.68, 0.82, 1),
      0.5s font-size;
  }
`;
const Curation = ({ className }): React.ReactElement => {
  const [open, setOpen] = React.useState<any>(false);
  const [curationStep, setStep] = React.useState<number>(1);

  const tags = React.useContext(CurationContext);
  const { setFilter } = React.useContext(FilterContext);

  let stepLayout = <></>;
  let ButtonType = <></>;
  const onOpenModal = () => {
    setOpen(true);
    setStep(1);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  const nextButton = (step: number, tag: string) => {
    if (step == 1) {
      tags.dispatch({ type: "ONE_TAG", payload: { tag: tag } });
    } else if (step == 2) {
      tags.dispatch({ type: "TWO_TAG", payload: { tag: tag } });
    } else if (step == 3) {
      tags.dispatch({ type: "THREE_TAG", payload: { tag: tag } });
    } else if (step == 4) {
      tags.dispatch({ type: "FOUR_TAG", payload: { tag: tag } });
      setFilter({
        atmoList: [...tags.tags.stepOne_Tag],
        genreList: [...tags.tags.stepThree_Tag],
        instruList: [...tags.tags.stepFour_Tag],
        themeList: [...tags.tags.stepTwo_Tag],
      });

      setOpen(false);
    }
    setStep(curationStep + 1);
  };

  const beforeButton = (step: any, tag: object) => {
    if (step == 1) {
      tags.dispatch({ type: "ONE_TAG", payload: { tag: tag } });
    } else if (step == 2) {
      tags.dispatch({ type: "TWO_TAG", payload: { tag: tag } });
    } else if (step == 3) {
      tags.dispatch({ type: "THREE_TAG", payload: { tag: tag } });
    } else if (step == 4) {
      tags.dispatch({ type: "FOUR_TAG", payload: { tag: tag } });
    }

    setStep(curationStep - 1);
  };
  if (curationStep == 1) {
    stepLayout = (
      <ModalOver
        visible={open}
        onOk={onCloseModal}
        onCancel={onCloseModal}
        footer={null}
        width={800}
        style={{ top: 130 }}
      >
        <Main nextButton={nextButton} />
      </ModalOver>
    );
  } else if (curationStep == 2) {
    stepLayout = (
      <ModalOver
        visible={open}
        onOk={onCloseModal}
        onCancel={onCloseModal}
        footer={null}
        width={800}
        style={{ top: 130 }}
      >
        <StepOne
          nextButton={nextButton}
          beforeButton={beforeButton}
          object={tags.tags.stepOne_Tag}
        />
      </ModalOver>
    );
  } else if (curationStep == 3) {
    stepLayout = (
      <ModalOver
        visible={open}
        onOk={onCloseModal}
        onCancel={onCloseModal}
        footer={null}
        width={800}
        style={{ top: 130 }}
      >
        <StepTwo
          nextButton={nextButton}
          beforeButton={beforeButton}
          object={tags.tags.stepTwo_Tag}
        />
      </ModalOver>
    );
  } else if (curationStep == 4) {
    stepLayout = (
      <ModalOver
        visible={open}
        onOk={onCloseModal}
        onCancel={onCloseModal}
        footer={null}
        width={800}
        style={{ top: 130 }}
      >
        <StepThree
          nextButton={nextButton}
          beforeButton={beforeButton}
          object={tags.tags.stepThree_Tag}
        />
      </ModalOver>
    );
  } else if (curationStep == 5) {
    stepLayout = (
      <ModalOver
        visible={open}
        onOk={onCloseModal}
        onCancel={onCloseModal}
        footer={null}
        width={800}
        style={{ top: 130 }}
      >
        <StepFour
          nextButton={nextButton}
          beforeButton={beforeButton}
          object={tags.tags.stepFour_Tag}
        />
      </ModalOver>
    );
  } else {
    stepLayout = (
      <ModalOver
        visible={open}
        onCancel={onCloseModal}
        footer={null}
        width={800}
        style={{ top: 130 }}
      />
    );
    console.log("final Tags : ", tags.tags);
  }

  if (className === "header") {
    ButtonType = (
      <Button className={className} onClick={onOpenModal}>
        뮤지션 찾기
      </Button>
    );
  } else {
    ButtonType = (
      <BannerButton className={className} onClick={onOpenModal}>
        나의 뮤지션 찾기
      </BannerButton>
    );
  }
  return (
    <>
      {ButtonType}
      {stepLayout}
    </>
  );
};

export default Curation;
