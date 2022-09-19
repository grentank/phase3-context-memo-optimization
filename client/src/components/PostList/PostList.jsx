import React, { useContext } from 'react';
import { Col, ListGroup, Row } from 'reactstrap';
import { PostContext } from '../../contexts/PostContext';
import PostItem from '../PostItem';

export default function PostList() {
  const { posts } = useContext(PostContext);
  return (
    <Row>
      <Col>
        <ListGroup>
          {posts && posts?.map((el) => (
            <PostItem
              key={el.id}
              id={el.id}
              post={el}
            />
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
}
