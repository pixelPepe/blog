import React from 'react';
import { HomePropsI } from './HomeProps';
import styles from './Home.module.scss';
import { Header } from 'components';

export const Home: React.FC<HomePropsI> = () => {
  return (
    <div>
      <Header />
    </div>
  );
};
