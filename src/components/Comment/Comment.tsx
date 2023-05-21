import React from 'react';
import { CommentPropsI } from './CommentProps';
// import styles from './Comment.module.scss';
import { ListGroup } from 'react-bootstrap';

export const Comment: React.FC<CommentPropsI> = ({ email, body }) => {
  return (
    <ListGroup.Item>
      <strong>{email}</strong>
      <p>{body}</p>
    </ListGroup.Item>
  );
};
