export default function reducer(state = {
    news: [],
    fetching: false,
    fetched: false,
    error: null,

}, action){
    switch (action.type) {
        case "FETCH_NEWS":{
            return {...state, fetching: true}
        }
        case "FETCH_NEWS_FULFILLED": {
            return {...state, fetching: false, fetched: true, news: action.payload}
        }
        case "FETCH_NEWS_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }

        default: {

        }
    }

    return state;
}
