import axios from 'axios';

export function fetchStories() {

    return function(dispatch) {
        axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(response => {
                dispatch({
                    type: "FETCH_STORY_FULFILLED",
                    payload: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: "FETCH_STORY_REJECTED",
                    payload: err
                })
            })
    };
};
