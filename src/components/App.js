import React from 'react';
import Card from './Card';
import axios from 'axios';
import {endpoints} from '../../config';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movieList: [],
            genreList: [],
        }
    }

    componentDidMount() {
        this.requestPopularMovies();
        this.requestGenres();
    }

    requestPopularMovies = () => {
        axios
            .get(endpoints.mostPopularMovies())
            .then((response) => {
                this.setState({
                    movieList: response.data.results,
                });
            })
            .catch((error) => console.log(error.response));
    };

    requestGenres = () => {
        axios
            .get(endpoints.genres())
            .then((response) => {
                this.setState({
                    genreList: response.data.genres,
                });
            })
            .catch((error) => console.log(error.response));
    };

    filterGenreMovies = (id) => {
        axios
            .get(endpoints.genreMovies(id))
            .then((response) => {
                this.setState({
                    movieList: response.data.results,
                });
            })
            .catch((error) => console.log(error.response));
    };

    render() {
        const {genreList, movieList} = this.state;

        return (
            <React.Fragment>
                {genreList.map((genre, index) => {
                    return (
                        <button
                            onClick={(() => {
                                this.filterGenreMovies(genre.id)
                            })}
                            key={index}>
                            {genre.name}
                        </button>
                    );
                })}
                {movieList.map((movie) => (
                    <Card key={movie.id} data={movie}/>
                ))}
            </React.Fragment>
        );
    }
}

export default App;
