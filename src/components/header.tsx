import * as React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby"

interface IProps {
  siteTitle: string;
};

const HeaderRoot = styled.header`
  background: purple;
  margin-bottom: 1.45rem;
`;

const Header = (props: IProps) => (
  <HeaderRoot>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {props.siteTitle}
        </Link>
      </h1>
    </div>
  </HeaderRoot>
)

export default Header
