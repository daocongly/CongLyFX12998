import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Col,FormFeedback} from 'reactstrap';

class StaffList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            searchfilter: this.props.staff,
            isModalOpen: false,
            newStaff: {
                id:'',
                name: '',
                doB: '',
                salaryScale: 1,
                startDate: '',
                department: '',
                annualLeave: 0,
                overTime: 0,
                salary: '',
                image: '/assets/images/alberto.png',
            },
            touched: {
                name: false,
                doB: false,
                startDate: false,
            }
        }
        // giằng buộc this trong method
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.toggleModal = this.toggleModal.bind(this); 
        this.handleBlur= this.handleBlur.bind(this);   
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
    //hiển thị modal
    toggleModal(){
        this.setState({ 
            isModalOpen: !this.state.isModalOpen})
    }
    // input modal thêm nhân viên
    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            newStaff: {...this.state.newStaff,[name]:value}
        });
    }
    // sự kiện
    handleBlur = (field) =>{
        this.setState({
            touched: {...this.state.touched,[field]:true},
        });
    }
    // thẩm định giá trị input
    validate(name,doB,startDate){
        const errors ={
            name: '',
            doB: '',
            startDate: '',
        };
        if(this.state.touched.name && name.length < 2 )
        errors.name = 'Yêu cầu nhiều hơn 2 ký tự';
        else if(this.state.touched.name && name.length >= 30)
        errors.name = 'Yêu cầu ít hơn 30 ký tự';
        if(this.state.touched.doB && doB === '' )
        errors.doB = 'Yêu cầu nhập';
        if(this.state.touched.startDate && startDate === '' )
        errors.startDate = 'Yêu cầu nhập';
        return errors;
    }
    handleSubmit = () => {
        this.props.addChange(this.state.newStaff)
    }

    render(){
        // danh sách nhân viên
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
                // 
        const errors = this.validate( this.state.newStaff.name,this.state.newStaff.doB,this.state.newStaff.startDate )

        return (
            <div className="container">
                <div className="row mt-3">
                        {/*render modal from*/}
                    <Modal isOpen = {this.state.isModalOpen} toggle = {this.toggleModal} >
                        <ModalHeader toggle = {this.toggleModal} >Thêm Nhân Viên</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor ="name" md={4}>Tên</Label>
                                <Col md={8}>
                                    <Input type="text" id="name" name="name"
                                    placeholder="tên"
                                    value={this.state.newStaff.name}
                                    invalid ={errors.name !== ''}
                                    onBlur = {()=>this.handleBlur('name')}
                                    onChange={this.handleInputChange}/>
                                    <FormFeedback>{errors.name}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor ="doB" md={4}>Ngày Sinh</Label>
                                <Col md={8}>
                                    <Input type="date" id="doB" name="doB"
                                    value={this.state.newStaff.doB}
                                    invalid ={errors.doB !== ''}
                                    onBlur = {()=>this.handleBlur('doB')}
                                    onChange={this.handleInputChange}/>
                                    <FormFeedback>{errors.doB}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor ="startDate" md={4}>Ngày vào công ty</Label>
                                <Col md={8}>
                                    <Input type="date" id="startDate" name="startDate"
                                    value={this.state.newStaff.startDate}
                                    invalid ={errors.startDate !== ''}
                                    onBlur = {()=>this.handleBlur('startDate')}
                                    onChange={this.handleInputChange}/>
                                    <FormFeedback>{errors.startDate}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor ="department" md={4}>Phòng Ban</Label>
                                <Col md={8}>
                                <Input type="select" id="department" name="department"
                                    value={this.state.newStaff.department}
                                    onChange={this.handleInputChange}>
                                    <option>Sale</option>
                                    <option>HR</option>
                                    <option>Marketing</option>
                                    <option>IT</option>
                                    <option>Finance</option>
                                </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor ="salaryScale" md={4}>Hệ số lương</Label>
                                <Col md={8}>
                                    <Input type="number" id="salaryScale" name="salaryScale"
                                    value={this.state.newStaff.salaryScale}
                                    onChange={this.handleInputChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor ="annualLeave" md={4}>Số ngày nghỉ còn lại</Label>
                                <Col md={8}>
                                    <Input type="number" id="annualLeave" name="annualLeave"
                                    value={this.state.newStaff.annualLeave}
                                    onChange={this.handleInputChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor ="overTime" md={4}>Số ngày đã làm thêm</Label>
                                <Col md={8}>
                                    <Input type="number" id="overTime" name="overTime"
                                    value={this.state.newStaff.overTime}
                                    onChange={this.handleInputChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                            <Col md={{size: 10,offset: 2}}>
                                <Button type="submit" color="primary"> Thêm</Button>
                            </Col>
                            </FormGroup>
                        </Form>
                        </ModalBody>
                    </Modal>
                    <div className="col-sm-12 col-md-6 col-lg-5">
                    <h5 style={style}>Nhân Viên</h5> <button onClick={this.toggleModal}> <i className="fa fa-plus" aria-hidden="true"></i></button>
                    </div>
                    {/*button search*/}
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