import React from 'react'
import {
  Collapse,
  Button,
  CardBody,
  Card
} from 'reactstrap';

class Information extends React.Component {
  constructor(props) {
    super(props)

    this.state = { isOpen: false }
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <div>
        <Button
          color={'primary'}
          onClick={this.toggle.bind(this)}
          style={{ marginBottom: '1rem', fontSize: 'small' }}
        >{`What the hell is a "Jae URL" anyway?`}</Button>
        <Collapse isOpen={this.state.isOpen}>
          <Card>
            <CardBody className={'information-text'}>
              I built <a href={"https://github.com/jaebradley/jaeurls"}>a URL shortener</a> from scratch (nerd alert)...but each URL has &#39;jae&#39; prepended to the last path (narcissist alert) like <a href={"https://jaeurls.herokuapp.com/jaep"}>https://jaeurls.herokuapp.com/jaep</a>. And if you can read this, congratulations - it&#39;s small as shit.
            </CardBody>
          </Card>
        </Collapse>
      </div>
    )
  }
}

export default Information;
