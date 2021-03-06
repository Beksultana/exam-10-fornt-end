import axios from '../../axios-news';
import {CREATE_NEWS_SUCCESS, FETCH_NEWS_COMMENT_SUCCESS, FETCH_NEWS_SUCCESS} from "./newsTypeActions";

export const fetchNewsSuccess = news => ({type: FETCH_NEWS_SUCCESS, news});
export const fetchCommentSuccess = (newItem, comments) => ({type: FETCH_NEWS_COMMENT_SUCCESS, newItem, comments});
export const createNewsSuccess = () => ({type: CREATE_NEWS_SUCCESS});

export const fetchNews = () => {
    return dispatch => {
        return axios.get('/news').then(response => {
            dispatch(fetchNewsSuccess(response.data))
        })
    }
};
export const fetchComments = (newsID, newItem) => {
    return dispatch => {
        return axios.get(`/comments/${newsID}`).then(response => {
            dispatch(fetchCommentSuccess(newItem, response.data))
        })
    }
};
export const postNews = (posts) => {
    return dispatch => {
        return axios.post(`/news`, posts).then(() => {
                dispatch(createNewsSuccess())
            }
        )
    }
};