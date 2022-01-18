import React from 'react';
import ReactDOM from 'react-dom';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


class DishDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderDish(detail) {
        if (detail!=null) {
            return (
            <Card>
            <CardImg with="100%" object src={detail.image} alt={detail.name}/>
            <CardBody>
            <CardTitle className="h3">{detail.name}</CardTitle>
            <CardText>{detail.description}</CardText>
            </CardBody>
            </Card>);
        }
        else {
            return (
                <div></div>
            );
        }
    }
    render() {
        return(
            <>
        {this.renderDish(this.props.detail)}
        </>
        );
        
    }
}
export default DishDetail;