import React from 'react';
import dateFormat from 'dateformat';

function StaffList(props){
    const list = props.staff.map((item) =>{
        return (
            <div key={item.id} className="col-sm-2 text-center">
                <img src={item.image} alt="" width="100%"></img>
                <p className="border">{item.name}</p>
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