export default function reducer(state = {
    stories: [],
    fetching: false,
    fetched: false,
    error: null,

}, action){
    switch (action.type) {
        case "FETCH_STORY":{
            return {...state, fetching: true}
        }
        case "FETCH_STORY_FULFILLED": {
            return {...state, fetching: false, fetched: true, stories: action.payload}
        }
        case "FETCH_STORY_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }

        default: {

        }
    }

    return state;
}
