import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';

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
    const Homepage = () => {
      return (
        <Home/>
      );
    }
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component = {Homepage} />
          <Route exact path="/menu" component ={() => <Menu dishes={this.state.dishes} />}/>
          <Route exact path="/contactus" component = {Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer/>
      </div>
    );
  }
  }
  

export default Main;
