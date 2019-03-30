import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {Button, Card, CardBody, CardText, Col, Form, FormGroup, Input, Label} from "reactstrap";

class Comments extends Component {

    state = {
        name: '',
        comment: ''
    };

    onChangeHandler = event => {
        const name = event.target.name;
        this.setState({[name]: event.target.value})
    };

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
                            <h5>{comment.author}: </h5>
                            <p style={{paddingLeft: '20px'}}> {comment.comment}</p>
                        </div>
                        <div>
                            <Button outline color="danger">Delete</Button>
                        </div>
                    </CardBody>
                </Card>
            )
        }) ;
        return (
            <Fragment>
                <div className="comments">
                    <h2>NEW</h2>
                    {news}
                    <hr/>
                    <h2>Comments</h2>
                    {comments}
                    <hr/>
                </div>
                <div>
                    <h2>Add comment</h2>
                    <hr/>
                    <Form onSubmit={this.submitFormHandler}>
                        <FormGroup>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2} for="name">Name</Label>
                            <Col sm={10}>
                                <Input
                                    type="text" required
                                    name="name" id="name"
                                    placeholder="Enter news name"
                                    value={this.state.name}
                                    onChange={this.onChangeHandler}
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label sm={2} for="comment">Content</Label>
                            <Col sm={10}>
                                <Input
                                    type="textarea" required
                                    name="comment" id="comment"
                                    placeholder="Enter news comment"
                                    value={this.state.comment}
                                    onChange={this.onChangeHandler}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={{offset: 2, size: 10}}>
                                <Button outline type="submit" color="success">Save</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    comments: state.news.comments
});

export default connect(mapStateToProps, null)(Comments);