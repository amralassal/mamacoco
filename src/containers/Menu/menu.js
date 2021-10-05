import React, {Component} from 'react';
import MenuSection from "./menu-section";
import {Col, Container, Row} from "react-bootstrap";
import MenuCard from "./menu-card";

const mapStyles = {
  width: '100%',
  height: '100%'
};

export default class Menu extends Component {

  static defaultProps = {
    center: {
      lat: 52.3664714,
      lng: 4.8922937
    },
    zoom: 11,
    key: ''
  };

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md={5}>
            {
              this.props.selectedRestaurantsAndMeals.map(
                (resAndMeal) => (
                  <Row>
                    <h4></h4>
                    <h2 className="text-center text-light bg-dark">{resAndMeal.restaurant.name}</h2>
                    {
                      resAndMeal.meal.map(
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
                  </Row>
                )
              )
            }
            {/*{*/}
            {/*  this.props.menu.map(*/}
            {/*    (section, index) => (*/}
            {/*      (*/}
            {/*        <MenuSection*/}
            {/*          {...this.props}*/}
            {/*          key={index}*/}
            {/*          title={section.title}*/}
            {/*          meals={section.meals}*/}
            {/*        />*/}
            {/*      )*/}
            {/*    )*/}
            {/*  )*/}
            {/*}*/}
          </Col>
        </Row>
      </Container>
    )
  }
}
