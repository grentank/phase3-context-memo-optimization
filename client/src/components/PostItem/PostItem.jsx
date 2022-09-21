import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { Button, ListGroupItem } from 'reactstrap';
import { deletePostAsync } from '../../redux/actions/postsActions';

function PostItem({ post, id }) {
  const dispatch = useDispatch();
  console.log('Item render');
  return (
    <ListGroupItem>
      {`${id}. ${post.title}`}
      <Button onClick={() => dispatch(deletePostAsync(id))} className="danger">x</Button>
    </ListGroupItem>
  );
}

export default memo(PostItem); // HOC
