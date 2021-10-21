import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VoteButton from "../VoteButton/vote-button";

export default class MenuCard extends Component {

  render() {
    return (
      <Card
        bg={this.props.bg}
      >
        <Card.Body>
          <Card.Title>
            <Row>
              <Col sm={7}>{this.props.title}</Col>
              <Col sm={3}>
                <VoteButton/>
              </Col>
              <Col sm={2} className="text-end">€{this.props.price}</Col>
            </Row>
          </Card.Title>
          <Card.Text>
            {this.props.description}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
