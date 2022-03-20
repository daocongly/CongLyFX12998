import React from 'react';
import ReactDOM from 'react-dom';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb,BreadcrumbItem} from 'reactstrap';
import dateFormat from 'dateformat';
import {Link} from 'react-router-dom';


    function RenderComment({dishComment}) {
        const listComment = dishComment.map((nhanxet) => {
            return (
                <>
                <p>{nhanxet.comment}</p>
                <p>{nhanxet.author}, {dateFormat(nhanxet.date,"mmm d, yyyy")} </p>
                </>
            );
        });
        return listComment;
    }

    function RenderDish({dish}) {
        if (dish != null) {
            return(
            <div className="container ">
                <div className="row">
                    <div className="col-sm-12 col-md-5 m-1">

                        <Card>
                        <CardImg with="100%" object src={dish.image} alt={dish.name}/>
                        <CardBody>
                        <CardTitle className="h3">{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                        </Card>

                    </div>
                    <div className="col-sm-12 col-md-5 m-1" >
                        <RenderComment dishComment={dish.comments}/>
                    </div>
                </div>
            </div>

            );
        }
        else {
            return <div></div>                     
        }

    }

    const DishDetail = (props) => {

    return (  
        <RenderDish dish = {props.dish} />       
    );
    }

export default DishDetail;