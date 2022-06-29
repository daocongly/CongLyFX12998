import React from 'react';
import dateFormat from 'dateformat';
import { Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

function StaffDetail(props){
    console.log(props.staff);

    if (props.staff !=null)
    return(
        <div className="container">
            <Breadcrumb>
            <BreadcrumbItem><Link to='/'>Nhân Viên</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-3">
                    <img src={props.staff.image} alt={props.staff.name} width ="250" height="230"/>
                </div>
                <div className="col-sm-12 col-md-8 col-lg-9">
                    <h3>{props.staff.name}</h3>
                    <p>Ngày sinh: {dateFormat(props.staff.doB,"dd/mm/yyyy")}</p>
                    <p>Ngày vào công ty: {dateFormat(props.staff.startDate,"dd/mm/yyyy")}</p>
                    <p>Phòng ban: {props.staff.department.name}</p>
                    <p>Số ngày nghỉ còn lại: {props.staff.annualLeave}</p>
                    <p>Số ngày đã làm thêm: {props.staff.overTime}</p>
                </div>
            </div>
        </div>
    );
    else
    return(
        <div></div>
    );
}

export default StaffDetail;