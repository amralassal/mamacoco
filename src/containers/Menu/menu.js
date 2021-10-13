import React, {Component} from 'react';
import MenuSection from "./menu-section";
import {Col, Container, Row} from "react-bootstrap";
import MenuCard from "./menu-card";
import GoogleMap from "../../components/Map/google-map";
import Marker from "../../components/Map/marker";

export default class Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      center: {
        lat: 52.3664714,
        lng: 4.8922937
      },
      zoom: 13,
      key: ''
    }
  }

  changeMapCenterClickHandler(geoData) {
    this.setState({
      center : {
        lat: geoData.lat,
        lng: geoData.lng,
      }
    })
  }

  renderRestaurants() {
    return(
      this.props.selectedRestaurantsAndMeals.map(
        (resAndMeal) => (
          <Row>
            <h4></h4>
            <h2 className="text-center text-light bg-dark"
                onClick={() => this.changeMapCenterClickHandler(resAndMeal.restaurant.geodata)}
            >{resAndMeal.restaurant.name}</h2>
            {
              resAndMeal.meal.map(
                (meal, index) => (
                  <MenuCard
                    key={resAndMeal.restaurant.id +'-'+ meal.title + index}
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
    )
  }

  renderNoResultsFound() {
    return(
      <Row>
        <h4></h4>
        <h2 id='noResFound' className="text-center text-light bg-dark"
        >Sorry, no results found</h2>
      </Row>
    )
  }

  render() {
    let restaurants;
    if (this.props.selectedRestaurantsAndMeals.length > 0) {
      restaurants = this.renderRestaurants()
    } else {
      restaurants = this.renderNoResultsFound()
    }
    return (
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md={5}>
              <GoogleMap
                {...this.state}
              >
              </GoogleMap>
            {restaurants}
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
