import React, {Component} from 'react';
import MenuSection from "./menu-section";
import {Col, Container, Row} from "react-bootstrap";
import MenuCard from "./menu-card";

export default class Menu extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md={5}>
            {
              this.props.selectedMeal.map(
                (meal) => (
                  <MenuCard
                    key={'selected ' + meal.title}
                    title={meal.title}
                    price={meal.price}
                    description={meal.description}
                    bg='info'
                  />
                )
              )
            }
            {
              this.props.menu.map(
                (section, index) => (
                  (
                    <MenuSection
                      {...this.props}
                      key={index}
                      title={section.title}
                      meals={section.meals}
                    />
                  )
                )
              )
            }
          </Col>
        </Row>
      </Container>
    )
  }
}
