import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb,BreadcrumbItem} from 'reactstrap';
import dateFormat from 'dateformat';
import {Link} from 'react-router-dom';

function RenderDish({dish}) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image}  alt={dish.name}></CardImg>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}
function RenderComments({comments, addComment, dishId}){
    if (comments != null)
        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className ="list-unstyled">
                    {comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author},{dateFormat(comment.date,"mmm d, yyyy")}</p>
                            </li>
                        );
                    })}

                </ul>
                <CommentForm dishId={dishId} addComment={addComment}/>
            </div>
        );
    else
        return(
            <diV></diV>
        );       
}

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state={
            isNavOpen: false,
            isModalOpen: false
        };
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleSubmit(values){
        this.toggleModal();
        this.props.addComment(this.props.dishId,values.rating,values.author,values.comment);
    }
    render(){





    }
}

const DishDetail = (props) => {
    if (props.dish !=null)
    return(
        <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>
            <div className="row">              
                <RenderDish dish ={props.dish}/>
                <RenderComments comments={props.comments}
                addComment={props.addComment}
                dishId={props.dish.id}
                />
            </div>
        </div>
    );
    else
    return(
        <div></div>
    );
}

export default DishDetail;