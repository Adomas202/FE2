import {combineReducers} from 'redux';
import * as types from './actions/action-types';

const initialMovieState = {
    list: [],
};

const initialGenreState = {
    list: [],
};

const initialHeartsState = [];

export const moviesReducer = (state = initialMovieState, action) => {
    switch (action.type) {
        case types.SET_MOVIES:
            return {...state, list: action.list};
        default:
            return state;
    }
};

export const genresReducer = (state = initialGenreState, action) => {
    switch (action.type) {
        case types.SET_GENRES:
            return {...state, list: action.list};
        default:
            return state;
    }
};

export const heartsReducer = (state = initialHeartsState, action) => {
    switch (action.type) {
        case types.ADD_HEART:
            return [...state, action.id];
        case types.REMOVE_HEART:
            return state.filter((currentId) => currentId !== action.id);
        default:
            return state;
    }
};

export default combineReducers({
    movies: moviesReducer,
    genres: genresReducer,
    hearted: heartsReducer,
});
