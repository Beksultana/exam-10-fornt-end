import {FETCH_NEWS_COMMENT_SUCCESS, FETCH_NEWS_SUCCESS} from "../actions/newsTypeActions";

const initialState = {
    news: [],
    comments: {
        news: [],
        comment: []
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NEWS_SUCCESS:
            return {
                ...state,
                news: action.news
            };
        case FETCH_NEWS_COMMENT_SUCCESS:
            const comments = {
                news: [],
                comment: []
            };
            if (action.newItem) {
                comments.news.push(action.newItem);
            }
            if (action.comments) {
                comments.comment.push(action.comments[0]);
            }
            return {
                ...state,
                comments
            };
        default:
            return state;
    }
};

export default reducer;