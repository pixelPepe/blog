import React, { useState } from 'react';
import { PostPropsI } from './PostProps';
import { Button, Card, Spinner } from 'react-bootstrap';
import styles from './Post.module.scss';
import { CommentsList } from 'components/CommetsList';
import { Link } from 'react-router-dom';
import services from 'services/apiService';

export const Post: React.FC<PostPropsI> = ({ userId, id, title, body }) => {
  const [showComments, setShowComments] = useState<boolean>(false);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getComments = async (postId: number) => {
    setLoading(true);
    try {
      services.getComments(postId).then((response) => {
        setComments(response.data);
        setLoading(false);
        setShowComments(true);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const closeComments = () => {
    setShowComments(false);
  };

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
        {showComments ? (
          <Button onClick={closeComments} variant="outline-primary">
            Закрыть комментарии
          </Button>
        ) : (
          <Button onClick={() => getComments(id)} variant="outline-primary">
            Комментарии
          </Button>
        )}
      </Card>
      {loading && (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
      {showComments && (
        <Card>
          <CommentsList comments={comments} />
        </Card>
      )}
    </>
  );
};
