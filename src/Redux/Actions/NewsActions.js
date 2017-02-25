import axios from 'axios';

export function fetchNews() {

    return function(dispatch) {
        axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(response => {
                dispatch({
                    type: "FETCH_NEWS_FULFILLED",
                    payload: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: "FETCH_NEWS_REJECTED",
                    payload: err
                })
            })
    };
};
