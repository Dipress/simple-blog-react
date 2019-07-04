import React from "react";
import {Link} from "react-router-dom";
import {Table, Button} from "semantic-ui-react";

const PostCell = props => {
  return (
    <Table.Row>
      <Table.Cell>{props.post.id}</Table.Cell>
      <Table.Cell>{props.post.title}</Table.Cell>
      <Table.Cell textAlign="right">
        <Button.Group>
          <Button color="blue">Show</Button>
          <Button
            color="yellow"
            as={Link}
            to={`/dashboard/post/${props.post.id}/update`}
          >
            Update
          </Button>
          <Button color="red">Delete</Button>
        </Button.Group>
      </Table.Cell>
    </Table.Row>
  );
};

export default PostCell;
