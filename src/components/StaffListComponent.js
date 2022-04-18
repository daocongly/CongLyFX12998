import React from 'react';
import dateFormat from 'dateformat';
import {Link} from 'react-router-dom';

function StaffList(props){
    const list = props.staff.map((item) =>{
        return (
            <div key={item.id} className="col-sm-6 col-md-4 col-lg-2 text-center">
                <Link to={`/nhanvien/${item.id}`}>
                <img src={item.image} alt="" width="100%"></img>
                <p className="border">{item.name}</p>
                </Link>
            </div>
        );
    })
    return (
    <div className="container row ">
        <h5>Nhân Viên</h5>
        <hr/>
        {list}
    </div>);
}

export default StaffList;