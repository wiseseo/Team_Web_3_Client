import React from "react";
import styled from "styled-components";

interface Props {
  guide: { type: string; content: string; price: number };
  initSelect: () => void;
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  width: 800px;
  height: 472px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  color: #6865fc;
  padding: 1.25rem 3rem;
  font-weight: bold;
  background: #181818;
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  background: #121212;
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Type = styled.div`
  color: #e2e1e2;
  font-size: 1.125rem;
  margin-top: 1.5rem;
  margin-left: 3rem;
  margin-bottom: 1rem;
`;
const Detail = styled.div`
  line-height: 1.75rem;
  flex: 1;
  color: #b3b4be;
  margin-left: 3rem;
  margin-right: 3rem;
  margin-bottom: 1rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
const Price = styled.div`
  text-align: right;
  margin-right: 1.5rem;
  margin-top: 2.25rem;
  color: #b3b4be;
  font-weight: bold;
  font-size: 1.125rem;
  margin-bottom: 2.25rem;
`;
const toWon = (price: number): string => {
  return price
    ? `${price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " 원"
    : "0 원";
};
const PriceModal = (props: Props) => {
  const modalRef = React.useRef(null);
  const onClickHandler = (event) => {
    if (modalRef && !modalRef.current.contains(event.target)) {
      props.initSelect();
    }
  };

  return (
    <Container onClick={onClickHandler}>
      <Modal ref={modalRef}>
        <Header>
          가격 가이드
          <img
            src="/static/close.png"
            alt="close"
            width={18}
            height={18}
            onClick={() => props.initSelect()}
          ></img>
        </Header>
        <Content>
          <Type>{props.guide.type}</Type>
          <Detail>{props.guide.content}</Detail>
          <Price>{toWon(props.guide.price)}</Price>
        </Content>
      </Modal>
    </Container>
  );
};

export default PriceModal;
