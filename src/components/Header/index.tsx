import React from 'react';

import logo from '../../assets/logo-reduzida-slogan.png';

import { Container, Wrap } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Wrap>
        <img src={logo} alt="EcoAction" />

        <ul>
          <li>About Us</li>
          <li>Our Work</li>
          <li>Join us</li>
          <li>Environmental Education</li>
          <li>Contact</li>
        </ul>
      </Wrap>
    </Container>
  );
};

export default Header;
