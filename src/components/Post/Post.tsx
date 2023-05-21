import React, { useEffect, useState } from 'react';
import { PostPropsI } from './PostProps';
import { Button, Card } from 'react-bootstrap';
import styles from './Post.module.scss';
import axios from 'axios';
import { CommentsList } from 'components/CommetsList';
import { Link } from 'react-router-dom';

export const Post: React.FC<PostPropsI> = ({ userId, id, title, body }) => {
  const [comments, setComments] = useState([]);
  const [showComments, setShowCommets] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/post/${id}/comments`)
      .then(function (response) {
        setComments(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Card style={{ marginTop: '10px' }}>
        <Card.Header>
          <div className={styles.row}>
            <Link to={`/user/${userId}`}>
              <img
                className={styles.userImage}
                src="/images/user-icon.png"
                alt="user"
              />
            </Link>
            <Card.Text>{title}</Card.Text>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
        <Button
          onClick={() => setShowCommets(!showComments)}
          variant="outline-primary"
        >
          Comments
        </Button>
      </Card>
      {showComments && (
        <Card>
          <CommentsList comments={comments} />
        </Card>
      )}
    </>
  );
};
