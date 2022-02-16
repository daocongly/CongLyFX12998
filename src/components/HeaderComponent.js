import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import { Jumbotron } from 'react-bootstrap';


class Header extends React.Component {

    render() {
        return (
            <>
                <Navbar dark >
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>              
                    <div className="container-fluid">
                        <div className="row jumbotron ">
                            <div className="col-12 col-sm-6 ">
                                <h1>Ristorante Con Fusion </h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>              
            </>
        )
    }
}

export default Header;