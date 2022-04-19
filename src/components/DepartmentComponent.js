import React from 'react';

function Department(props){
    const depart = props.depart.map((item) =>{
        return(
            <div className="border">
                   <h3>{item.name}</h3>
                   <p>Số lượng nhân viên: {item.numberOfStaff}</p>
               </div>
        );
    }) 
        

    
    return (

        <div className="container">
            <div className="row">
               {depart}
            </div>
        </div>
    );
}
export default Department;