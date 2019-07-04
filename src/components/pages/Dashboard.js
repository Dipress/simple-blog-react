import React from "react";
import {Grid, Button} from "semantic-ui-react";
import {Link} from "react-router-dom";
import PostTable from "./dashboard/PostsTable";

const Dashboard = props => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column verticalAlign="middle">
          <h1>All Posts</h1>
          <Button as={Link} to="/dashboard/post/new">
            Create Post
          </Button>
          <PostTable />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Dashboard;
