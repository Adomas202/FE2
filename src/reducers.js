import {combineReducers} from 'redux';
import * as types from './actions/action-types';

const initialMovie = {
    list: [],
};
const initialGenre = {
    list: [],
};

export const moviesReducer = (state = initialMovie, action) => {
    switch (action.type) {
        case types.SET_MOVIES:
            return {...state, list: action.list};
        default:
            return state;
    }
};

export const genresReducer = (state = initialGenre, action) => {
    switch (action.type) {
        case types.SET_GENRES:
            return {...state, list: action.list};
        default:
            return state;
    }
};

export const heartsReducer = (state = [], action) => {
    switch (action.type) {
        case types.ADD_HEART:
            return [...state, action.id];
        case types.REMOVE_HEART:
            return state.filter((id) => id !== action.id);
        default:
            return state;
    }
};

export const logReducer = (state = [], action) => {
    switch (action.type) {
        case types.ADD_LOG:
            return [ ...state, action.event ];
        default:
            return state;
    }
};

export default combineReducers({
    movies: moviesReducer,
    genres: genresReducer,
    hearted: heartsReducer,
    logs: logReducer,
});
