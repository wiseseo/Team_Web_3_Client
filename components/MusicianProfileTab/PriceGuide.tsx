import * as React from "react";
import styled from "styled-components";
import PriceModal from "./../Modal/Price";

interface Props {
  guides: { type: string; content: string; price: number }[];
}
const Container = styled.ul`
  color: #e2e1e2;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  list-style: none;
`;
const Card = styled.li`
  padding: 1.5rem;
  display: flex;
  margin: 0;
  flex-direction: column;
  background: #181818;
  border-radius: 8px;
  cursor: pointer;
`;
const Divide = styled.div`
  border-bottom: solid #3e3e41 0.74px;
  border-radius: 0.741935px;
  height: 5px;
  align-self: stretch;
`;
const Type = styled.div`
  color: #e2e1e2;
  font-size: 0.875rem;
  font-weight: bold;
`;
const Content = styled.div`
  max-width: 10rem;
  font-size: 0.75rem;
  color: #b3b4be;
  margin: 0.4rem 0;
`;
const Price = styled.div`
  margin-top: 1.5rem;
  color: #b3b4be;
  font-size: 0.75rem;
`;
const toWon = (price: number): string => {
  return price
    ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " 원"
    : "0 원";
};
const PriceGuide = ({ guides }: Props) => {
  const [selected, setSelect] = React.useState<number>(-1);
  const initSelect = () => {
    setSelect(-1);
  };
  return (
    <Container>
      {selected !== -1 && (
        <PriceModal guide={guides[selected]} initSelect={initSelect} />
      )}
      {guides.map((guide, index) => (
        <Card key={index} onClick={() => setSelect(index)}>
          <Type>{guide.type}</Type>
          <Divide></Divide>
          <Content>{guide.content}</Content>
          <Price>{toWon(guide.price)}</Price>
        </Card>
      ))}
    </Container>
  );
};

export default PriceGuide;
