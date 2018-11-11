import React from 'react';
import Card from './Card';
import axios from 'axios';
import {endpoints} from '../../config';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            movieList: [],
            genreList: [],
            isLiked: [],
        }
    }

    onHeartClick = (id) => {
        const likedArray = this.state.isLiked;

        if (likedArray.length !== 0) {

            likedArray.map(favouriteId => {
                if (favouriteId === id) {
                    likedArray.splice(likedArray.indexOf(id), 1);
                } else {
                    likedArray.push(id);
                }
            });
        } else {
            likedArray.push(id);
        }

        this.setState({liked: likedArray});
    };

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
        const {genreList, movieList, isLiked} = this.state;

        return (
            <React.Fragment>
                <div className="genres">
                    {genreList.map((genre) => {
                        return (
                            <a className="genre"
                               onClick={(() => {
                                   this.filterGenreMovies(genre.id)
                               })}
                               key={genre.id}>
                                {genre.name}
                            </a>
                        );
                    })}
                </div>
                {movieList.map((movie) => (
                    <Card onClick={() => this.onHeartClick(movie.id)}
                          isLiked={isLiked}
                          key={movie.id}
                          id={movie.id}
                          data={movie}
                    />
                ))}
            </React.Fragment>
        );
    }
}

export default App;
