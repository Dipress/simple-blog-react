import React from "react";
import {Grid, Table, Button} from "semantic-ui-react";
import {Link} from "react-router-dom";

const Dashboard = props => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column verticalAlign="middle">
          <h1>All Posts</h1>
          <Button as={Link} to="/dashboard/post/new">
            Create Post
          </Button>
          <Table compact>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>
                  A New Constitution for Content Moderation
                </Table.Cell>
                <Table.Cell textAlign="right">
                  <Button.Group>
                    <Button color="blue">Show</Button>
                    <Button color="yellow">Update</Button>
                    <Button color="red">Delete</Button>
                  </Button.Group>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>We Already Know What Our Data Is Worth</Table.Cell>
                <Table.Cell textAlign="right">
                  <Button.Group>
                    <Button color="blue">Show</Button>
                    <Button color="yellow">Update</Button>
                    <Button color="red">Delete</Button>
                  </Button.Group>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>3</Table.Cell>
                <Table.Cell>Simple Image Upload with React</Table.Cell>
                <Table.Cell textAlign="right">
                  <Button.Group>
                    <Button color="blue">Show</Button>
                    <Button color="yellow">Update</Button>
                    <Button color="red">Delete</Button>
                  </Button.Group>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Dashboard;
