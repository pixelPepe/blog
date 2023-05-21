import React, { useEffect, useState } from 'react';
import { UserPropsI } from './UserProps';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Header, Post } from 'components';
import { Card, Container } from 'react-bootstrap';

interface UserI {
  name: string;
  username: string;
  email: string;
  website: string;
}

export const User: React.FC<UserPropsI> = () => {
  const params = useParams();
  const { id } = params;
  const [user, setUser] = useState<UserI>();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(function (response) {
        setUser(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then(function (response) {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Header />
      <Container>
        {user && (
          <Card>
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
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
