import React, {Component} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import Menu from "../Menu/menu";
import jsonData from "../../assets/data/restaurant-menus2.json";

export default class Main extends Component {

  constructor(props) {
    super(props);

    this.nonFoodWords = [
      'i', 'we', 'are', 'look', 'looking', 'feel', 'feeling', 'eat', 'and', 'to', 'like', 'something', 'want', 'wants', 'wanting', 'for', 'tonight', 'around',
      'would', 'love', 'right', 'now', 'a', 'with', 'today'
    ];

    this.state = {
      menu: [
      ],
      selectedMeal: [],
      selectedRestaurant : [{
        name: ''
      }],
      selectedRestaurantsAndMeals: [
        {
          restaurant: {
            name: ''
          },
          meal: []
        }
      ],
      searchValue: ''
    }
  }

  findMenu = (jsonData, keyWordsArray) => {
    if (keyWordsArray.length ==0) return;
    let selected = []
    jsonData.map(res => {
      let meals = {}
      res.menu.map(section => {
        section.meals.map(meal => {
          for (let i = 0; i < keyWordsArray.length; i++) {
            let searchValue = keyWordsArray[i].trim().toLowerCase()
            if (meal.title.toLowerCase().includes(searchValue) || meal.description.toLowerCase().includes(searchValue)) {
              if(!meals[searchValue]) {
                meals[searchValue] = []
              }
              meals[searchValue].push(meal)
            }
          }
        })
      })
      if (Object.keys(meals).length > 0) {
        selected.push({
           restaurant: res,
            meal: meals
         }
        )
      }
    });
    return selected;
  }

  sortRestaurantsByMostCombinations = (meals) => {
    meals.sort(function(a, b){
      return Object.keys(b.meal).length - Object.keys(a.meal).length
    });
  }

  fetchData = () => {
    let {searchValue} = this.state
    if (!searchValue) {
      return;
    }
    const jsonData = require("../../assets/data/restaurant-menus2.json")
    const searchTerms = searchValue.split(/[\s,]+/);
    const searchValueArray = searchTerms.filter(item => !this.nonFoodWords.includes(item))
    console.log(searchValueArray)
    let selectedRestaurantsAndMeals = this.findMenu(jsonData, searchValueArray)
    this.sortRestaurantsByMostCombinations(selectedRestaurantsAndMeals)
    this.setState({
      // menu: selected.selectedRestaurant.menu,
      // selectedMeal: selected.selectedMeal,
      // selectedRestaurant: selected.selectedRestaurant,
      selectedRestaurantsAndMeals: selectedRestaurantsAndMeals,
      searchValue: ''
    })
  }

  searchHandling = () => {
    this.fetchData();
    // this.setState((state) => {
    //   state.menu[0].title += 2;
    //   return state;
    // });
  }

  render() {
    return (
      <div>
        <Form>
          <Row className="justify-content-md-center">
            <Col sm={3} className="my-1">
              <Form.Control
                id="searchForDishBar"
                placeholder="Search for a dish"
                value={this.state.searchValue}
                onChange={e => this.setState({searchValue: e.target.value})}
              />
            </Col>
            <Col xs="auto" className="my-1">
              <Button
                type="submit"
                onClick={this.searchHandling}
              >Search</Button>
            </Col>
          </Row>
          <Row>
            <Menu
              {...this.state}
            />
          </Row>
        </Form>
      </div>
    );
  }
}
