import React, {Fragment } from 'react' 
import {Header} from "semantic-ui-react";

const PostItem = (props) => {
  return (
    <Fragment>
      <Header as="h2">{props.post.title}</Header>
      <p>
        {props.post.body}
      </p>
    </Fragment>
  )
}

export default PostItem