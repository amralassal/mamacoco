import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button'

export default class VoteButton extends Component {

  render() {
    return (
      <Row>
        <Col>
          <Button variant="primary">Up vote</Button>
        </Col>
        <Col>
          <Button variant="primary">Down vote</Button>
        </Col>
      </Row>
    );
  }
}
