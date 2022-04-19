import React from 'react';
// import './App.css';
import {STAFFS} from '../share/staffs';
import StaffList from './StaffListComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import StaffDetail from './StaffDetail';
import {Route, Switch, Link} from 'react-router-dom'


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staff: STAFFS
    }
  }
  render (){
    const StaffWithId = ({match}) => {
      return ( 
        <StaffDetail staff={this.state.staff.filter((staff) =>staff.id === parseInt(match.params.staffId,10))[0]}/>
      );
    }
    return (
      <div>
      <Header/>
      <Switch>
      <Route exact path="/nhanvien" component={()=> <StaffList staff={this.state.staff}/>}/> 
      <Route path="/nhanvien/:staffId" component={StaffWithId}/> 
      </Switch>
      <Footer/>
      </div>
    );
  }
}

export default Main;
