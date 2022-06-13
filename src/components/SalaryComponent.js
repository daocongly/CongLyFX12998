import React from 'react';
import { Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

function Salary(props){
    const salary = props.salary.map((item) =>{
        return(
            <div className="card col-sm-12 col-md-6 col-lg-4" key={item.id}>
            <div className="card-body">
              <h4 className="card-title">{item.name}</h4>
              <p className="card-text"> Mã nhân viên: {item.id}</p>
              <p className="card-text"> Hệ số lương: {item.salaryScale}</p>
              <p className="card-text"> Số ngày làm thêm: {item.overTime}</p>
              <p className="card-header">Lương: {(item.salaryScale*3000000 + item.overTime*200000).toFixed(0)} </p> 
            </div>
          </div>         
        );
    }) 
    return (
        <div className="container">
            <Breadcrumb>
            <BreadcrumbItem><Link to='/nhanvien'> Nhân Viên</Link></BreadcrumbItem>
            <BreadcrumbItem active> Bảng Lương</BreadcrumbItem>
            </Breadcrumb>
            <div className="row">
               {salary}
            </div>
        </div>
    );
}
export default Salary;