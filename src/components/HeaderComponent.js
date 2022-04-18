import React from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler,Collapse, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
        } 
        this.toggleNav = this.toggleNav.bind(this);      
    }
    toggleNav() {
        this.setState({ 
            isNavOpen: !this.state.isNavOpen})
    }

    render() {
        return (
            <>
                <Navbar dark expand="md">
                    <div className="container-fluid">
                        <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" heght="30" width="41"
                            alt="Ristorante Con Fusion"/>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/nhanvien">
                                    <i className="fa fa-users" aria-hidden="true"></i> Nhân Viên
                                    </NavLink>    
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/phongban">
                                    <i className="fa fa-id-card" aria-hidden="true"></i> Phòng Ban
                                    </NavLink>   
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/bangluong">
                                    <i className="fa fa-money" aria-hidden="true"></i> Bảng Lương
                                    </NavLink>
                                </NavItem>                               
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>                                           
            </>
        )
    }
}

export default Header;