import React from 'react';
import { AboutMePropsI } from './AboutMeProps';
import { Header } from 'components';
import styles from './AboutMe.module.scss';
import { Container } from 'react-bootstrap';

export const AboutMe: React.FC<AboutMePropsI> = () => {
  return (
    <>
      <Header />
      <Container>
        <div className={styles.about}>
          <h2 className={styles.name}>Алексей Попов</h2>
          <p className={styles.text}>
            Я начинающий веб-разработчик, развиваюсь в направлении frontend. Мое
            увлечение программированием побудило меня принять участие в open
            source проекте по созданию веб-приложения с блокчейн играми, где я
            получил ценный опыт и знания. В этой командной работе с более
            опытными разработчиками я осуществлял задачи, связанные с версткой,
            написанием и отладкой кода. Более того, я вносил свои предложения по
            улучшению дизайна и функциональности приложения, что позволило мне
            активно применять свою креативность и улучшать навыки
            веб-разработки.
          </p>
          <p className={styles.text}>
            В свободное время я люблю кататься на велосипеде. Это помогает мне
            расслабиться и насладиться свежим воздухом, а также поддерживать
            здоровье и физическую активность. Катание на велосипеде дает мне
            возможность на время отвлечься от работы и вдохновиться новыми
            идеями для моих проектов веб-разработки.
          </p>
        </div>
      </Container>
    </>
  );
};
