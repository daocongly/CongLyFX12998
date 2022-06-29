import React from "react";
import StaffList from "./StaffListComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import StaffDetail from "./StaffDetail";
import DepartmentList from './DepartmentListComponent';
import { Route, Switch, withRouter } from "react-router-dom";
import Department from "./DepartmentComponent";
import Salary from "./SalaryComponent";
import {connect} from 'react-redux';
import { fetchStaffs, fetchDepart, fetchSalary } from "../redux/ActionCreators"; 

// truyền state từ redux dưới dang props
const mapStateToProps = state => {
  return {
    staffs: state.staffs,
    departs: state.departs,
    salarys: state.salarys
  }
}
// truyền  dispatch action creator dưới dạng props
const mapDispatchToProps = (dispatch) => ({
  fetchStaffs: () => {dispatch(fetchStaffs())},
  fetchDepart: () => {dispatch(fetchDepart())},
  fetchSalary: () => {dispatch(fetchSalary())},
})

class Main extends React.Component {
  // gọi API
  componentDidMount(){
    this.props.fetchStaffs();
    this.props.fetchDepart();
    this.props.fetchSalary();
  }

  render() {
    // render chi tiết nhân viên
    const StaffWithId = ({match}) => {
      return (
        <StaffDetail 
        staff={this.props.staffs.staffs.filter((staff)=>staff.id === parseInt(match.params.staffId, 10))[0]}
        department={this.props.departs.departs}/>
        );
    };
    // render danh sách nhân viên phòng ban
    const DepartWithId = ({match}) => {
      return (
        <DepartmentList 
        depart={this.props.staffs.staffs.filter((staff)=>staff.departmentId === match.params.departId)}/>);
    };
    
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={()=><StaffList staff={this.props.staffs.staffs} />}/>
          <Route path="/phongban/:departId" component={DepartWithId} />
          <Route path="/nhanvien/:staffId" component={StaffWithId} />
          <Route path="/phongban" exact component={() => <Department depart={this.props.departs.departs} />}/>
          <Route path="/bangluong" component={() => <Salary salary={this.props.salarys.salarys} />}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));