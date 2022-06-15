import React from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';


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
                const style={
                    display: "inline"
                };

        return (
            <div className="container">
                <div className="row mt-3">
                        {/*render*/}
                    <Modal isOpen = {this.state.isModalOpen} toggle = {this.toggleModal}>
                        <ModalHeader toggle = {this.toggleModal}>Login</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleLogin}></Form>
                            <FormGroup>
                                <Label htmlFor="username"> Username</Label>
                                <Input type = "text" name = "username" id = "username"
                                innerRef={(input) => this.username =input}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password"> PassWord</Label>
                                <Input type = "text" name = "password" id = "password"
                                innerRef={(input) => this.password =input}></Input>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                     <Input type="checkbox" name = "remember"
                                      innerRef={(input) => this.remember =input}></Input>
                                     Remember me
                                </Label>
                            </FormGroup> 
                            <Button type="submit" value="submit" color="bg-primary">Login  </Button>
                        </ModalBody>
                    </Modal>
                    <div className="col-sm-12 col-md-6 col-lg-5">
                    <h5 style={style}>Nhân Viên</h5> <button onClick={this.toggleModal}> <i class="fa fa-plus" aria-hidden="true"></i></button>
                    </div>
                    {/*  */}
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