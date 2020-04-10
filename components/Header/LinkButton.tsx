import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Login from "../Login";

import {Modal} from 'react-responsive-modal';

interface Props {
  text: string;
  type: string;
}

const Button = styled.div`
  color: #b3b4be;
  font-size: 1.125rem;
  cursor: pointer;
  padding: 0.4em 2em;

`;

const LinkButton = ({ text, type }: Props) => {

  const [open, setOpen] = React.useState<boolean>(false);

  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  if(type=="enroll"){
    return (
    <Link href="/musician/enroll">
      <Button>
        {text}
      </Button>
    </Link>
    )
  }
  else
  {
    return (
      <>
      <Button onClick={onOpenModal}>
          {text}
      </Button>
      <Modal open={open} onClose={onCloseModal} center>
        
        <Login/>
      </Modal>
      </>
    )
  }
};

export default LinkButton;
