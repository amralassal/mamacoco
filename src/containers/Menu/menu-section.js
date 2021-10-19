import React, {Component} from 'react';
import MenuCard from "./menu-card";

export default class MenuSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: null
    }
  }

  render() {
    return (
      <div>
        <p className="fs-3 text-center fw-bold">{this.props.title}</p>
        {this.props.meals.map(res => (
          <MenuCard
            key={res.title}
            title={res.title}
            price={res.price}
            description={res.description}
            bg={this.props.selectedMeal.length > 0 && res.title == this.props.selectedMeal[0].title ? 'info' : ''}
          />
        ))}
      </div>
    )
  }
}
