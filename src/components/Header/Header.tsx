import React, { useState } from 'react';
import { HeaderPropsI } from './HeaderProps';
import styles from './Header.module.scss';
import { Navbar, Container, Offcanvas, ListGroup } from 'react-bootstrap';
import cn from 'classnames';
import { Link } from 'react-router-dom';

export const Header: React.FC<HeaderPropsI> = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link to={'/'}>
          <Navbar.Brand>Logo</Navbar.Brand>
        </Link>
        <button className={styles.burgerBtn} onClick={handleShow}>
          <span className={cn(show ? styles.active : null)}></span>
        </button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header>
            <Offcanvas.Title>Меню</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ListGroup variant="flush">
              <Link to={'/about'}>
                <ListGroup.Item>Обо мне</ListGroup.Item>
              </Link>
              <Link to={'/'}>
                <ListGroup.Item>Список постов</ListGroup.Item>
              </Link>
            </ListGroup>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
};
