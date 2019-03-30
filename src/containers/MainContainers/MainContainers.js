import React, {Component, Fragment} from 'react';
import {fetchNews} from "../../store/actions/newsSyncActions";
import {connect} from "react-redux";
import {Button, Card, CardBody, CardTitle} from "reactstrap";
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
                <Card className="newItem" key={newItem.id }>
                    <CardBody>
                        <CardTitle><strong>{newItem.title}</strong></CardTitle>
                    </CardBody>
                </Card>
            )
        });

        return (
            <Fragment>
                <h2>
                    Posts
                    <Link to="/news/new">
                        <Button
                            color="primary"
                            className="float-lg-right"
                        >
                            Add news
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
        fetchNews: () => dispatch(fetchNews())
    }
};

export default connect(mapStateToProps ,mapDispatchToProps)(MainContainers);