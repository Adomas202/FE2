import axios from 'axios';
import { endpoints } from '../../config';
import * as types from './action-types';

export const setMovieList = (list) => ({
    type: types.SET_MOVIES,
    list,
});

export const getPopularMovies = () => (dispatch) => {
    axios
        .get(endpoints.mostPopularMovies())
        .then((res) => dispatch(setMovieList(res.data.results)))
        .catch((error) => console.log(error));
};

export const setGenreList = (list) => ({
    type: types.SET_GENRES,
    list,
});

export const requestGenres = () => (dispatch) => {
    axios
        .get(endpoints.genres())
        .then((res) => dispatch(setGenreList(res.data.genres)))
        .catch((error) => console.log(error));
};

export const requestGenreMovies = (genreId) => (dispatch) => {
    axios
        .get(endpoints.genreMovies(genreId))
        .then((res) => dispatch(setMovieList(res.data.results)))
        .catch((error) => console.log(error));
};

export const addMovieHeart = (id) => ({
    type: types.ADD_HEART,
    id,
});

export const removeMovieHeart = (id) => ({
    type: types.REMOVE_HEART,
    id,
});
