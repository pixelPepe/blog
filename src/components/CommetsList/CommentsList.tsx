import React from 'react';
import { CommentsListPropsI } from './CommentsListProps';
import { Card, ListGroup } from 'react-bootstrap';
import { Comment } from 'components';

export const CommentsList: React.FC<CommentsListPropsI> = ({ comments }) => {
  return (
    <Card.Body>
      <ListGroup variant="flush">
        {comments &&
          comments.map((comment) => {
            return (
              <Comment
                key={comment.id}
                email={comment.email}
                body={comment.body}
              />
            );
          })}
      </ListGroup>
    </Card.Body>
  );
};
