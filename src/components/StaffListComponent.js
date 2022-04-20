import ReactDOM from 'react-dom';
import React from 'react';
import dateFormat, {masks} from 'dateformat';
import { STAFFS } from '../share/staffs';

class StaffList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectednhanvien: null
           };
    }
    nhanVien(staff) {
        this.setState({selectednhanvien: staff});
    }
    rendernhanvien(staff) {
        if (staff !=null){
            return (
                <div className="card">
                    <h2>Họ và tên:{staff.name} </h2>
                    <p>Ngày sinh: {dateFormat(staff.doB,"dd/mm/yyyy")}</p>
                    <p>Ngày vào công ty: {dateFormat(staff.startDate,"dd/mm/yyyy")}</p>
                    <p>Phòng ban: {staff.department.name}</p>
                    <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
                    <p>Số ngày đã làm thêm: {staff.overTime}</p>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }
    render(){
        const staffs=this.props.staff.map((staff) =>{
            return (           
                <div onClick={() => this.nhanVien(staff)} className="col-sm-12 col-md-5 col-lg-3 card-header m-1">{staff.name}</div>
            );
        })
        return (
            <>
            <div className="row" >      
                {staffs}  
            </div>
            <div className="row ">
                {this.rendernhanvien(this.state.selectednhanvien)}
            </div>
            </>
        );
    }
 
}
export default StaffList;