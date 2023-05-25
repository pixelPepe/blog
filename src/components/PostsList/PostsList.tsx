import React, { useEffect } from 'react';
import { PostListsI } from './PostsListProps';
import { Post } from 'components';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsRequest } from 'store/actions';

export const PostsList: React.FC<PostListsI> = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: any) => state.posts.posts);
  // const loading = useSelector((state: any) => state.posts.loading);
  // const error = useSelector((state: any) => state.posts.error);

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);

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
