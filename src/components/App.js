import React from 'react';
import {
  Col,
  Container,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  Row
 } from 'reactstrap';

import CurrentUrlForm from '../containers/CurrentUrlForm';
import CurrentJaeUrlDisplay from '../containers/CurrentJaeUrlDisplay';
import CurrentLoadingModal from '../containers/CurrentLoadingModal';

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
                <CurrentUrlForm />
              </Col>
            </Row>
            <Row>
              <Col>
                <CurrentJaeUrlDisplay />
              </Col>
            </Row>
          </Container>
          <CurrentLoadingModal />
        </div>
      );
   }
}

export default App;
