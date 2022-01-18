import React from 'react';
import ReactDOM from 'react-dom';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import dateFormat from 'dateformat';


class DishDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderComment(detail) {
        const nhanXet = detail.comments.map((nhanxet) =>
        { return(
            <>
            <p>{nhanxet.comment}</p>
            <p>{nhanxet.author}, {dateFormat(nhanxet.date,"mmm d, yyyy")} </p>
            </>
                 );
        });
        return( nhanXet );

    }

    renderDish(detail) {
        if (detail!=null) {
            return (
                <>
                <div className="col-sm-12 col-md-5 m-1">
                    <Card>
                    <CardImg with="100%" object src={detail.image} alt={detail.name}/>
                    <CardBody>
                    <CardTitle className="h3">{detail.name}</CardTitle>
                    <CardText>{detail.description}</CardText>
                    </CardBody>
                     </Card>

                </div>
                <div className="col-sm-12 col-md-5 m-1" >
                 {this.renderComment(this.props.detail)}
                </div >
                </>
                );           
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