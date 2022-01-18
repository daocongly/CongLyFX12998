import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import {DISHES} from './shared/dishes';
import DishDetail from './DishdetailComponent';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }
  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
    }


  render() {
    return (
      <div>
        <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
          </Navbar>
          <Menu dishes={this.state.dishes}/>
          <DishDetail dish={}/>
      </div>
    );
  }

  }
  

export default App;
