import axios from "axios";
import {endpoints} from "../config";
import {setGenreList, setMovieList} from "./actions/actions";

export const getPopularMovies = () => (dispatch) => {
    axios
        .get(endpoints.mostPopularMovies())
        .then((res) => dispatch(setMovieList(res.data.results)))
        .catch((error) => console.log(error));
};

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