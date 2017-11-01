import React from 'react';
import {
  Col,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Row
 } from 'reactstrap';

import CurrentUrlForm from '../containers/CurrentUrlForm';
import CurrentJaeUrlDisplay from '../containers/CurrentJaeUrlDisplay';
import CurrentLoadingModal from '../containers/CurrentLoadingModal';
import Information from '../components/Information';

class App extends React.Component {
   render() {
      return (
        <div>
          <Navbar color="faded" light expand="md">
            <NavbarBrand>Create a Jae URL</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/jaebradley/jaeurls">API</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/jaebradley/jaeurls-presentation">Github</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
          <Container className={'create-url-container'}>
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
            <Row>
              <Col className={'information-toggle'}>
                <Information />
              </Col>
            </Row>
          </Container>
          <CurrentLoadingModal />
        </div>
      );
   }
}

export default App;
