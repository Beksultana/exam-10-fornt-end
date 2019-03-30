import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, FormText, Input, Label} from "reactstrap";

class NewPost extends Component {
    render() {
        return (
            <Form>
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
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label sm={2} for="content">Content</Label>
                    <Col sm={10}>
                        <Input
                            type="textarea" required
                            name="content" id="content"
                            placeholder="Enter news content"
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2}  for="File">File</Label>
                    <Col sm={10}>
                        <Input type="file" name="file" id="File" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={{offset: 2, size: 10}}>
                        <Button type="submit" color="success">Save</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default NewPost;