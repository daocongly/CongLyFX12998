import React from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';


class StaffList extends React.Component {
    constructor(props) {
        super(props);
        this.setState = {
            input: ""


        }
    }
    render(){
        const list = this.props.staff.map((item) =>{
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
            <div className="container">
                <div className="row mt-3">
                    <div className="col-sm-12 col-md-6 col-lg-5">
                    <h5 className="display: inline">Nhân Viên</h5><i class="fa fa-plus-square" aria-hidden="true"></i>
                    </div>
                    <div className="col-sm-12 col-md-5 col-lg-3 ms-auto">
                    <input value={this.state.input}  /><label className="btn btn-primary ms-2" onClick={9}>Tìm</label>
                    </div>       
                </div>
                <hr/>
                <div className="row">
                {list}
                </div>        
            </div>);
    }
}

export default StaffList;