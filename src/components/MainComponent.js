import React from "react";
import { STAFFS, DEPARTMENTS } from "../share/staffs";
import StaffList from "./StaffListComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import StaffDetail from "./StaffDetail";
import { Route, Switch } from "react-router-dom";
import Department from "./DepartmentComponent";
import Salary from "./SalaryComponent";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staff: localStorage.getItem("staff")
        ? JSON.parse(localStorage.getItem("staff"))
        : STAFFS,
      depart: DEPARTMENTS,
    };
    this.addnewStaff = this.addnewStaff.bind(this);
  }
  addnewStaff(newStaff) {
    newStaff.id=this.state.staff.length;
    this.setState(
      {
        staff: [...this.state.staff, newStaff],
      },
      () => {
        localStorage.setItem("staff", JSON.stringify(this.state.staff));
      }
    );
  }
 
  render() {
    const StaffWithId = ({match})=>{
      console.log(match);
      return (
        <StaffDetail staff={this.state.staff.filter((staff)=>staff.id === parseInt(match.params.staffId, 10))[0]}/>
        );
    };
    
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={()=><StaffList staff={this.state.staff} addnewStaff={this.addnewStaff}/>}/>
          <Route path="/nhanvien/:staffId" component={StaffWithId} />
          <Route path="/phongban" component={() => <Department depart={this.state.depart} />}/>
          <Route path="/bangluong" component={() => <Salary salary={this.state.staff} />}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
