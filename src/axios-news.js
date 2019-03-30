import axios from 'axios';

export const axiosNews = axios.create({
    baseURL: "http://localhost:8800"
});

export default axiosNews;