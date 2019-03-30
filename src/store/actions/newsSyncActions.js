import axios from '../../axios-news';
import {FETCH_NEWS_SUCCESS} from "./newsTypeActions";

export const fetchNewsSuccess = news => ({type: FETCH_NEWS_SUCCESS, news});

export const fetchNews = () => {
    return dispatch => {
        return axios.get('/news').then(response => {
            dispatch(fetchNewsSuccess(response.data))
        })
    }
};