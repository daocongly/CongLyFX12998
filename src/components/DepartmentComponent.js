import React from 'react';

function Department(props){
    const depart = props.depart.map((item,i) =>{
        return(
            <div key={i} className="card-header border col-sm-12 col-md-6 col-lg-4">
                   <h3>{item.name}</h3>
                   <p>Số lượng nhân viên: {item.numberOfStaff}</p>
            </div>
        );
    }) 
    return (

        <div className="container">
            <div className="row m-2">
               {depart}
            </div>
        </div>
    );
}
export default Department;