import React, {Fragment} from "react";
import {Container} from "semantic-ui-react";

const DashboardLayout = props => {
  return (
    <Fragment>
      <Container>{props.children}</Container>
    </Fragment>
  );
};

export default DashboardLayout;