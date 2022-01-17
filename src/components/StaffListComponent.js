import ReactDOM from 'react-dom';
import React from 'react';

import dateFormat from 'dateformat';
import { STAFFS } from '../share/staffs';


class StaffList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            staffslist: STAFFS};

    }
    render(){
        const staff=this.state.staffslist.map((staff) =>{
            return (
                
                    <div className="col-sm-12 col-md-5 col-lg-3 card-header m-1">{staff.name}</div>
                
            );
        })

        return (
            <div className="row" >      
                {staff}
                <p>Bấm vào tên nhân viên để xem thông tin</p>
            </div>
    
        );

    }
    


    
}
export default StaffList;