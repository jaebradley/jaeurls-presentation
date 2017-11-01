import React from 'react';
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavItem,
  NavLink
 } from 'reactstrap';

import CurrentUriForm from '../containers/CurrentUriForm';
import CurrentJaeUrlDisplay from '../containers/CurrentJaeUrlDisplay';

class App extends React.Component {
   render() {
      return (
        <div>
          <Navbar color="faded" light expand="md">
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/jaebradley/jaeurls">API</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/jaebradley/jaeurls-presentation">Github</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
          <Container>
            <h5>Input URL</h5>
            <Row>
              <Col>
                <CurrentUriForm />
              </Col>
            </Row>
            <Row>
              <Col>
                <CurrentJaeUrlDisplay />
              </Col>
            </Row>
          </Container>
        </div>
      );
   }
}

export default App;
