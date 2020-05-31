import * as React from "react";
import styled from "styled-components";

interface Props {
  faqList: { question: string; asked: string }[];
}
const Container = styled.div`
  color: #e2e1e2;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  color: #b3b4be;
  font-weight: bold;
`;
const Asked = styled.p`
  color: #b3b4be;
`;
const FAQ = styled.div``;
const FAQList = ({ faqList }: Props) => {
  return (
    <Container>
      {faqList.map((faq, index) => (
        <FAQ>
          <Title>
            {index + 1}. {faq.question}
          </Title>
          <Asked>{faq.asked}</Asked>
        </FAQ>
      ))}
    </Container>
  );
};

export default FAQList;
