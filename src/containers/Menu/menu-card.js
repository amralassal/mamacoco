import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class MenuCard extends Component {

  render() {
    return (
      <Card
        bg={this.props.bg}
      >
        <Card.Body>
          <Card.Title>
            <Row>
              <Col>{this.props.title}</Col>
              <Col className="text-end">€{this.props.price}</Col>
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
