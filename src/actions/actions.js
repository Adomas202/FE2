import * as types from './action-types';
import { nowDate } from '../date';

export const setMovieList = (list) => ({
    type: types.SET_MOVIES,
    list,
});


export const setGenreList = (list) => ({
    type: types.SET_GENRES,
    list,
});

export const addMovieHeart = (id) => ({
    type: types.ADD_HEART,
    id,
});

export const removeMovieHeart = (id) => ({
    type: types.REMOVE_HEART,
    id,
});

export const addLog = (message) => {
    const log = {
        type: types.ADD_LOG,
        event: {},
    };
    log.event[nowDate()] = message;
    return log;
};
