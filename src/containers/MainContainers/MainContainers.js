import React, {Component, Fragment} from 'react';
import {fetchComments, fetchNews} from "../../store/actions/newsSyncActions";
import {connect} from "react-redux";
import {Button, Card, CardBody, CardText} from "reactstrap";
import './MainContainer.css'
import {Link} from "react-router-dom";

class MainContainers extends Component {

    componentDidMount() {
        this.props.fetchNews()
    }

    render() {

        console.log(this.props.news);
        const news = this.props.news.map(newItem => {
            return (
                <Card outline color="info" className="newItem" key={newItem.id }>
                    <CardBody style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div  style={{width: "12%"}}><img style={{width: "100px", height: '100px'}} src={newItem.image} alt=""/></div>
                        <div style={{width: "63%"}}>
                            <h5><strong>{newItem.title}</strong></h5>
                            <p>{newItem.date}</p>
                        </div>
                        <div style={{width: "25%"}}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>
                                    <Link to="/comments">
                                        <Button onClick={() => this.props.fetchComments(newItem.id, newItem)}
                                                outline style={{margin: '0 10px'}} color="primary">Read Full Post</Button>
                                    </Link>
                                    <Button outline color="danger">Delete</Button>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            )
        });

        return (
            <Fragment>
                <h2>
                    Posts
                    <Link to="/news/new">
                        <Button outline
                            color="primary"
                            className="float-lg-right"
                        >
                            Add new post
                        </Button>
                    </Link>
                </h2>
                <div className="news">
                    <div className="newsInfoBlock">
                        {news}
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    news: state.news.news
});

const mapDispatchToProps = dispatch => {
    return {
        fetchNews: () => dispatch(fetchNews()),
        fetchComments: (id, newItem) => dispatch(fetchComments(id, newItem))
    }
};

export default connect(mapStateToProps ,mapDispatchToProps)(MainContainers);