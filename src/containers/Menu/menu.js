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
      key: '',
      adRestaurant: {
          restaurant: {
            id: 'ad0',
            name: 'I have money for ads Restaurant'
          },
          meal: [
            {
              title: "Sponsored Meal",
              price: "19.50",
              description: "Please buy my meal"
            }
          ]
      }
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

  getMenuCardColor(index) {
    const color = [
      'info',
      'success',
      'secondary',
      'primary',
      'light',
      'dark',
      'danger',
      'warning',
    ]
    return color[index]
  }

  showAd() {
    const adMeal =this.state.adRestaurant.meal[0]
    return(
          <Row>
            <h4></h4>
            <h2 className="text-center text-light bg-dark"
            >{this.state.adRestaurant.restaurant.name}</h2>
            <MenuCard
              key={this.state.adRestaurant.restaurant.id}
              title={adMeal.title}
              price={adMeal.price}
              description={adMeal.description}
              bg={this.getMenuCardColor(6)}
            />
          </Row>
    )
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
              Object.keys(resAndMeal.meal).map(
                (mealKey, indexMealKey) => (
                  resAndMeal.meal[mealKey].map(
                    (meal, indexMeal) => (
                      <MenuCard
                        key={resAndMeal.restaurant.id +'-'+ mealKey + meal.title + indexMeal}
                        title={meal.title}
                        price={meal.price}
                        description={meal.description}
                        bg={this.getMenuCardColor(indexMealKey)}
                      />
                    )
                  )
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

    let showAd;

    let restaurants;
    if (this.props.selectedRestaurantsAndMeals.length > 0) {
      // showAd = this.showAd()
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
            {showAd}
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
