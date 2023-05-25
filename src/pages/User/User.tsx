import React, { useEffect } from 'react';
import { UserPropsI } from './UserProps';
import { useParams } from 'react-router-dom';
import { Header, Post } from 'components';
import { Button, Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsRequest, fetchUserRequest } from 'store/actions';
import styles from './User.module.scss';
import { useNavigate } from 'react-router-dom';

interface UserI {
  name: string;
  username: string;
  email: string;
  website: string;
}

export const User: React.FC<UserPropsI> = () => {
  const navigate = useNavigate();

  const params = useParams();
  const { id } = params;

  const dispatch = useDispatch();
  const user: UserI = useSelector((state: any) => state.user.user);

  const posts = useSelector((state: any) => state.posts.posts);

  useEffect(() => {
    dispatch(fetchUserRequest(+id!));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Container>
        {user && (
          <Card className="mt-2">
            <Card.Body>
              <div className={styles.row}>
                <Card.Title>{user.name}</Card.Title>
                <Button onClick={() => navigate(-1)} variant="primary">
                  Назад
                </Button>{' '}
              </div>
              <Card.Subtitle className="mb-2 text-muted">
                {user.username}
              </Card.Subtitle>
              <Card.Text>{user.email}</Card.Text>
              <Card.Link href={user.website}>{user.website}</Card.Link>
            </Card.Body>
          </Card>
        )}
        {posts &&
          posts.map((post: any) => {
            return (
              <Post
                key={post.id}
                id={post.id}
                userId={post.userId}
                title={post.title}
                body={post.body}
              />
            );
          })}
      </Container>
    </>
  );
};
