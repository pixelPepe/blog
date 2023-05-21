import React, { useEffect, useState } from 'react';
import { PostListsI } from './PostsListProps';
import axios from 'axios';
import { Post } from 'components';
import { Container } from 'react-bootstrap';

export const PostsList: React.FC<PostListsI> = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        setPosts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get('https://jsonplaceholder.typicode.com/users/1/posts')
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      {posts &&
        posts.map((post: any) => {
          return (
            <Post
              key={post.id}
              userId={post.userId}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          );
        })}
    </Container>
  );
};
