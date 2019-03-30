import React, {Component, Fragment} from 'react';
import {postNews} from "../../../store/actions/newsSyncActions";
import {connect} from "react-redux";
import NewPost from "../../NewPost/NewPost";

class NewNews extends Component {

    createNews = newsData => {
        this.props.postNews(newsData).then(() => {
            this.props.history.push('/');
        })
    };

    render() {
        return (
            <Fragment>
                <h2>New news</h2>
                <NewPost onSubmit={this.createNews}/>
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    postNews: newsData => dispatch(postNews(newsData))
});

export default connect(null, mapDispatchToProps)(NewNews);