import React from 'react';
import ReactDOM from 'react-dom';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    
    render() {
        const menu =this.props.dishes.map((dish)=> {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() =>this.onDishSelect(dish)}>
                        <CardImg with="100%" object src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle className="h3">{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                    <DishDetail detail={this.state.selectedDish}/>
                    {/* {this.renderDish(this.state.selectedDish)} */}
                </div>
            </div>

        );
    }
}
export default Menu;
