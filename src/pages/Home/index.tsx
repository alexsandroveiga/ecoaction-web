import React from 'react';

import Header from '../../components/Header';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />

      <main>
        <h1>The equation that will help to change the world.</h1>
        <div>
          Through eco.action, your company's investment will encourage
          sustainability with a focus on climate change and still generating a
          financial return for your company. In addition to promoting
          environmental education within public schools, through a chatbot with
          an environmental educational theme.
        </div>
      </main>
    </Container>
  );
};

export default Home;
