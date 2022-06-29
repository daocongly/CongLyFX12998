import React from "react";
import { STAFFS, DEPARTMENTS } from "../share/staffs";
import StaffList from "./StaffListComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import StaffDetail from "./StaffDetail";
import { Route, Switch, withRouter } from "react-router-dom";
import Department from "./DepartmentComponent";
import Salary from "./SalaryComponent";
import {connect} from 'react-redux';
import { fetchStaffs, fetchDepart, fetchSalary } from "../redux/ActionCreators"; 


const mapStateToProps = state => {
  return {
    staffs: state.staffs,
    departs: state.departs,
    salarys: state.salarys
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchStaffs: () => {dispatch(fetchStaffs())},
  fetchDepart: () => {dispatch(fetchDepart())},
  fetchSalary: () => {dispatch(fetchSalary())},
})

class Main extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   staff: localStorage.getItem("staff")
    //     ? JSON.parse(localStorage.getItem("staff"))
    //     : STAFFS,
    //   depart: DEPARTMENTS,
    // };
    // this.addnewStaff = this.addnewStaff.bind(this);
  }
  // Thêm id nhân viên mới=với length mảng hiện tại,cập nhật nhân viên mới vào state, lưu trữ trong localStorage
  // addnewStaff(newStaff) {
  //   newStaff.id=this.state.staff.length;
  //   this.setState(
  //     {
  //       staff: [...this.state.staff, newStaff],
  //     },
  //     () => {
  //       localStorage.setItem("staff", JSON.stringify(this.state.staff));
  //     }
  //   );
  // }
  componentDidMount(){
    this.props.fetchStaffs();
    this.props.fetchDepart();
    this.props.fetchSalary();
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
          <Route exact path="/" component={()=><StaffList staff={this.props.staffs.staffs} /*addnewStaff={this.addnewStaff}*//>}/>
          <Route path="/nhanvien/:staffId" component={StaffWithId} />
          <Route path="/phongban" component={() => <Department depart={this.props.departs.departs} />}/>
          <Route path="/bangluong" component={() => <Salary salary={this.props.salarys.salarys} />}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));