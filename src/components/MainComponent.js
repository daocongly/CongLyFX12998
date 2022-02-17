import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Routes, Route, useParams} from 'react-router-dom';

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
        <Routes>
          <Route path="/home" element={<Homepage/>} />
          <Route path="/" element={<Homepage/>} />
          <Route exact path="/menu" element={<Menu dishes={this.state.dishes} />}/>
        </Routes>
        <Footer/>
      </div>
    );
  }
  }
  

export default Main;
