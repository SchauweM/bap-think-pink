import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const Nav = () => (
  <>

    <NavWrapper>
      <LinkWrapper>
        <Link> <a href="https://www.think-pink.be/nl/" target="_blank"><img src="/static/global/assets/images/logo.png" /></a></Link>
        <Link><a href="/team/about">Over Race for the Cure</a></Link>
        <Link><a href="/team/overview">Team overzicht</a></Link>
      </LinkWrapper>
    </NavWrapper>
  </>
);

const NavWrapper = styled.nav`
  padding-top:5rem;
  margin-bottom: 5rem;
`;

const LinkWrapper = styled.ul`
  display: flex;
`;

const Link = styled.li`
  margin: 0 2rem;
  a{
    text-decoration: none;
    color: white;
    font: Fira Sans;
    font-size: 1.9rem;
  }

  a:hover{
    text-decoration: underline;
  }

  img{
    margin-top: -0.3rem;
  }
`;

// Nav.propTypes = {
//   currentPage: string.isRequired,
// };

export default Nav;
