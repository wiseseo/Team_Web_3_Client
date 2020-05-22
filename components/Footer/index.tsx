import * as React from "react";
import styled from "styled-components";

interface Props {}

const Foot = styled.footer`
  color: #b3b4be;
  margin: 124px;
  text-align: center;
  font-size: 12px;
  padding-bottom: 22px;
`;
const Footer = (props: Props): React.ReactElement => {
  return <Foot>Copyright ⓒ2020 Tuna.yaap@gmail.com</Foot>;
};

export default Footer;