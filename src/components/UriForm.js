import React from 'react';
import PropTypes from 'prop-types';
import {
  Badge,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Alert,
  Container,
  Row,
  Col,
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink
 } from 'reactstrap';

class UriForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isValidUri: props.isValidUri,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      isValidUri: props.isValidUri,
    });
  }

  onUriChange(event) {
    const {
      onUriChange,
    } = this.props;

    onUriChange(event.target.value);
  }

  getAlertColor() {
    return this.state.isValidUri ? 'success' : 'danger';
  }

  onSubmit(event) {
    event.preventDefault();

    if (this.state.isValidUri) {
      const uri = event.target.children[0].children[1].value;
      this.props.onSubmit(uri);
    }
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">Jae URLs</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        <Container>
          <Row>
            <h2>Create A Jae URL</h2>
          </Row>
          <Row>
            <Col>
              <Form onSubmit={this.onSubmit.bind(this)}>
                <FormGroup>
                  <Container>
                    <Row>
                      <Col xs={3}>
                        <h1><Label for={'uri'}><Badge color={"secondary"}>Input A URL</Badge></Label></h1>
                      </Col>
                      <Col>
                        <Alert color={this.getAlertColor()}>
                          <Input
                            type={'text'}
                            name={'uri'}
                            id={'uri'}
                            rows={1}
                            onChange={this.onUriChange.bind(this)}
                          />
                        </Alert>
                      </Col>
                    </Row>
                  </Container>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
};

export default UriForm;
