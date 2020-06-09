import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Login from "../Login";
import { Modal } from "antd";
interface Props {
  text: string;
  type: string;
}

const ModalOver = styled(Modal)`
  && {
    .ant-modal-root {
      font-size: 12rem;
      .ant-modal-mask {
        .ant-modal-wrap {
          min-width: 1300px;
        }
      }
    }
    .ant-modal-close {
      color: #93949c;
    }
    .ant-modal-content {
      background-color: #181818;
      fill: dimgray;
      padding: 0;
      height: 424px;
      border-radius: 8px;
    }
    .ant-modal-body {
      padding: 0;
      height: 100%;
    }
  }
`;

const Button = styled.div`
  color: #b3b4be;
  font-size: 0.875rem;
  font-weight: bold;
  cursor: pointer;
  margin: 0.4em 0;
  margin-left: 2rem;
  min-width: fit-content;
`;

const LinkButton: React.FC<Props> = ({ text, type }) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  if (type == "enroll") {
    return (
      <>
        <Button onClick={onOpenModal}>{text}</Button>
        <ModalOver
          visible={open}
          onOk={onCloseModal}
          onCancel={onCloseModal}
          footer={null}
          width={368}
          style={{ top: 130, minWidth: 368 }}
        >
          <Login onCloseModal={onCloseModal} musicianFlag={true} />
        </ModalOver>
      </>
      // <Link href="/musician/enroll">
      //   <Button>{text}</Button>
      // </Link>
    );
  } else {
    return (
      <>
        <Button onClick={onOpenModal}>{text}</Button>
        <ModalOver
          visible={open}
          onOk={onCloseModal}
          onCancel={onCloseModal}
          footer={null}
          width={368}
          style={{ top: 130, minWidth: 368 }}
        >
          <Login onCloseModal={onCloseModal} musicianFlag={false} />
        </ModalOver>
      </>
    );
  }
};

export default LinkButton;
