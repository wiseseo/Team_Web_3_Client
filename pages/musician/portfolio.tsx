import * as React from "react";
import styled from 'styled-components';
import Link from 'next/link';

const PortfolioTitle = styled.h1`
  color : black
`;

const Portfolio: React.FC = () => {
  return (
    <div>
      <PortfolioTitle>Portfolio</PortfolioTitle>

      <ul>
        <li>
          <Link href="/document/estimateSheet">
            <a>document estimateSheet</a>
          </Link>
        </li>
      </ul>

    </div>
  );
};

export default Portfolio;