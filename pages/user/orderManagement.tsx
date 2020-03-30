import * as React from "react";
import styled from 'styled-components';

const OrderManagementTitle = styled.h1`
  color : black
`;

const OrderManagement: React.FC = () => {
  return (
    <div>
      <OrderManagementTitle>OrderManagement</OrderManagementTitle>
    </div>
  );
};

export default OrderManagement;