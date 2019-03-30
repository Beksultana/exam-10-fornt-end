import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {Button, Card, CardBody, CardText} from "reactstrap";

class Comments extends Component {
    render() {
        console.log(this.props.comments);
        const news = this.props.comments.news.map(newItem => {
            return (
                <div key={newItem.id}>
                    <h3><strong>{newItem.title}</strong></h3>
                    <hr/>
                    <CardText>{newItem.connect_news}</CardText>
                </div>
            )
        });

        const comments = this.props.comments.comment.map(comment => {
            return (
                <Card key={comment.id}>
                    <CardBody style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>
                            <h5>{comment.author}</h5>
                            <CardText>{comment.comment}</CardText>
                        </div>
                        <div>
                            <Button outline color="danger">Delete</Button>
                        </div>
                    </CardBody>
                </Card>
            )
        });
        return (
            <Fragment>
                <div className="comments">
                    <h2>NEW</h2>
                    {news}
                    <hr/>
                    <h2>Comments</h2>
                    {comments}
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    comments: state.news.comments
});

export default connect(mapStateToProps, null)(Comments);