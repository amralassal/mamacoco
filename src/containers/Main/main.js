import React, {Component} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import Menu from "../Menu/menu";

export default class Main extends Component {

  constructor(props) {
    super(props);

    const dummy_title = [
      'Meat',
      'viggie',
      'fish'
    ];

    const dummy_meals = [
      {
        title: 'meal 1',
        price: '30',
        description: 'Some quick example text to build on the card title and make up the bulk of'
      },
      {
        title: 'meal 2',
        price: '24',
        description: 'Some quick example text to build on the card title and make up the bulk of'
      },
      {
        title: 'meal 3',
        price: '49',
        description: 'Some quick example text to build on the card title and make up the bulk of'
      },
    ];

    this.state = {
      menu: [
        {
          title: 'Meat',
          meals: dummy_meals
        },
        {
          title: 'Viggie',
          meals: dummy_meals
        },
        {
          title: 'fish',
          meals: dummy_meals
        }
      ],
      selectedMeal: [],
      searchValue: ''
    }
  }

  findMenu = (jsonData, keyWord) => {
    let selected = {
      selectedRestaurant: null,
      selectedMeal: []
    }
    jsonData.map(res => {
      res.menu.map(section => {
        section.meals.map(meal => {
          if (meal.title.toLowerCase().includes(keyWord) || meal.description.toLowerCase().includes(keyWord)) {
            selected = {
              selectedRestaurant: res,
              selectedMeal: [meal]
            }
          }
        })
      })
    });
    return selected;
  }

  fetchData = () => {
    let {searchValue} = this.state
    const jsonData = require("../../assets/data/restaurant-menus.json")
    const selected = this.findMenu(jsonData, searchValue.toLowerCase())
    if (selected.selectedRestaurant) {
      this.setState({
        menu: selected.selectedRestaurant.menu,
        selectedMeal: selected.selectedMeal,
        searchValue: ''
      })
    }
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
