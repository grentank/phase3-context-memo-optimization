import React, { memo, useContext } from 'react';
import { Button, ListGroupItem } from 'reactstrap';
import { HandlerContext } from '../../contexts/PostContext';

function PostItem({ post, id }) {
  const { deleteHandler } = useContext(HandlerContext);
  console.log('Item render');
  return (
    <ListGroupItem>
      {`${id}. ${post.title}`}
      <Button onClick={() => deleteHandler(id)} className="danger">x</Button>
    </ListGroupItem>
  );
}

export default memo(PostItem); // HOC
