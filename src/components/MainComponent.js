import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
    };
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={Homepage} />
          <Route exact path="/menu" component={Menu} />
        </Switch>
        <Footer/>
      </div>
    );
  }
  }
  

export default Main;
