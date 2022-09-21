import React from 'react';
import { useSelector } from 'react-redux';
import { Col, ListGroup, Row } from 'reactstrap';
import PostItem from '../PostItem';

export default function PostList() {
  const posts = useSelector((state) => state.posts);
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
