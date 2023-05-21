import React from 'react';
import { HomePropsI } from './HomeProps';
import { Header, PostsList } from 'components';
import { Container } from 'react-bootstrap';

export const Home: React.FC<HomePropsI> = () => {
  return (
    <div>
      <Header />
      <Container fluid>
        <PostsList />
      </Container>
    </div>
  );
};
