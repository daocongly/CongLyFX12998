import React from 'react';
// import './App.css';
import {STAFFS} from '../share/staffs';
import StaffList from './StaffListComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Route, Switch, Link} from 'react-router-dom'


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staff: STAFFS
    }
  }
  render (){
    return (
      <div>
      <Header/>
      <Switch>
      <Route exact path="/nhanvien" component={()=> <StaffList staff={this.state.staff}/>}/>    
      </Switch>
      <Footer/>
      </div>
    );
  }
}

export default Main;
