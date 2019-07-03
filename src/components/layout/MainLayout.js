import React, {Fragment} from "react";
import {Container} from "semantic-ui-react";

const MainLayout = props => {
  return (
    <Fragment>
      <Container text>{props.children}</Container>
    </Fragment>
  );
};

export default MainLayout;
