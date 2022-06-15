import React from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import {Navbar, NavbarBrand, Nav, NavbarToggler,Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input,} from 'reactstrap';


class StaffList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            searchfilter: this.props.staff,
            isModalOpen: false,
        }
        // giằng buộc this trong method
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.toggleModal = this.toggleModal.bind(this);     

    }
    //nhận giá trị từ input tìm kiếm
    handleSearchChange=(event)=>{
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        })
    }
    // lọc danh sách mảng sau khi tìm kiếm
    handleSearch=()=>{
        const filtersearch= this.props.staff.filter((item) =>
        item.name.toLowerCase().includes(this.state.search.toLowerCase())
        )
        this.setState({
            searchfilter: filtersearch
        })
    }
    toggleModal(){
        this.setState({ 
            isModalOpen: !this.state.isModalOpen})
    }


    render(){
        //danh sách nhân viên
        const list = this.state.searchfilter.map((item) => {
            return (
                <div key={item.id} className="col-sm-6 col-md-4 col-lg-2 text-center">
                    <Link to={`/nhanvien/${item.id}`}>
                    <img src={item.image} alt="" width="100%"></img>
                    <p className="border">{item.name}</p>
                    </Link>
                </div>
                ); });

        return (
            <div className="container">
                <div className="row mt-3">
                    <div>{/*xử lý toggle*/ }
                    <button type="button" 
                    className="btn btn-primary" 
                    dataBsToggle="modal" 
                    dataBsTarget="#myModal">
                    Open modal
                    </button>
                    <div className="modal fade" id="myModal">
                    <div className="modal-dialog">
                    <div className="modal-content">

                    <div className="modal-header">
                    <h4 className="modal-title">Modal Heading</h4>
                    <button type="button" className="btn-close" dataBsDismiss="modal"></button>
                    </div>

                    <div className="modal-body">
                    Modal body..
                    </div>

                    <div className="modal-footer">
                    <button type="button" className="btn btn-danger" dataBsDismiss="modal">Close</button>
                    </div>

                    </div>
                    </div>
                    </div>
                    </div>
                    
                    <div className="col-sm-12 col-md-5 col-lg-3 ms-auto">
                    <input type="text" value={this.state.search} 
                    onChange={this.handleSearchChange} name="search"/>
                    <button className="btn btn-primary ms-2" onClick={this.handleSearch}>Tìm</button>
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