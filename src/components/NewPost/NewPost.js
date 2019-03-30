import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";

class NewPost extends Component {

    state = {
        title: '',
        content_news: '',
        image: ''
    };

    submitFormHandler = event => {
        event.preventDefault();

        const formData = new FormData();

        Object.keys(this.state).forEach(key => {
            formData.append(key, this.state[key])
        });

        this.props.onSubmit(formData);
    };

    onChangeHandler = event => {
      const name = event.target.name;
      this.setState({[name]: event.target.value})
    };

    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        })
    };

    render() {
        return (
            <Form onSubmit={this.submitFormHandler}>
                <FormGroup>
                    <h2>Add new post</h2>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2} for="title">Title</Label>
                    <Col sm={10}>
                        <Input
                            type="text" required
                            name="title" id="title"
                            placeholder="Enter news title"
                            value={this.state.title}
                            onChange={this.onChangeHandler}
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label sm={2} for="content_news">Content</Label>
                    <Col sm={10}>
                        <Input
                            type="textarea" required
                            name="content_news" id="content_news"
                            placeholder="Enter news content_news"
                            value={this.state.content_news}
                            onChange={this.onChangeHandler}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2}  for="File">File</Label>
                    <Col sm={10}>
                        <Input value={this.state.image}
                               onChange={this.fileChangeHandler} type="file" name="file" id="File" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={{offset: 2, size: 10}}>
                        <Button outline type="submit" color="success">Save</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default NewPost;