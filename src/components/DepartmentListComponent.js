import React from 'react';
import {Link} from 'react-router-dom';


function DepartmentList(props) {
    const list = props.depart.map((item) => {
        return (
            <div key={item.id} className="col-sm-6 col-md-4 col-lg-2 text-center">
                <Link to={`/nhanvien/${item.id}`}>
                <img src={item.image} alt="" width="100%"></img>
                <p className="border">{item.name}</p>
                </Link>
            </div>
            );});
    return (
    <div className="row mt-3">
        {list}
    </div>)
}

export default DepartmentList;