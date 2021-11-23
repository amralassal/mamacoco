import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import upvote from './upvote.png';
import downvote from './downvote.png';


export default class VoteButton extends Component {

  render() {
    return (
      <Row>
        <Col>
          <Button>
            <img src={upvote} style={
              {height: '2vh', width: '2vh'}}/>
          </Button>
        </Col>
        <Col>
          <Button>
            <img src={downvote} style={
              {height: '2vh', width: '2vh'}}/>
          </Button>
        </Col>
      </Row>
    );
  }
}
