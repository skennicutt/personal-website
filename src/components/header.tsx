import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

interface IProps {
  siteTitle: string;
}

const HeaderRoot = styled.header`
  background: purple;
  margin-bottom: 1.45rem;
`;

const Links = styled.div`
  display: inline-block;

  h4 {
    margin-bottom: 0;
    padding-right: 15px;
    display: inline-block;
  }
`;

const Header = (props: IProps) => (
  <HeaderRoot>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {props.siteTitle}
        </Link>
      </h1>
      <Links>
        <h4>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            home
          </Link>
        </h4>
        <h4>
          <Link
            to="/blogs"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            blog
          </Link>
        </h4>
      </Links>
    </div>
  </HeaderRoot>
);

export default Header;
