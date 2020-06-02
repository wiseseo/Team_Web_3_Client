import * as React from "react";
import styled from "styled-components";

interface Props {}

const Foot = styled.footer`
  color: #b3b4be;
  text-align: center;
  font-size: 12px;
  padding-bottom: 22px;
  width: 100%;
  min-width: 1000px;
  max-width: 1300px;
  margin: 124px auto;
`;
const Footer = (props: Props): React.ReactElement => {
  return <Foot>Copyright ⓒ2020 Tuna.yaap@gmail.com</Foot>;
};

export default Footer;