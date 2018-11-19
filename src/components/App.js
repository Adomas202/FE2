import React from 'react';
import {connect} from 'react-redux';
import Card from './Card';
import Genres from './Genres';
import {
    addMovieHeart,
    removeMovieHeart,
    addLog,
} from '../actions/actions';
import {
    setMovieList,
    getPopularMovies,
} from '../thunks';

class App extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        const {onGetPopularMovies, addLog} = this.props;
        addLog('Aplikacija užkrauta');
        onGetPopularMovies();
    }

    setMovieList(movieList) {
        const {onSetMovieList} = this.props;
        onSetMovieList(movieList);
    };

    removeMovieHeart(movie) {
        const {onRemoveMovieHeart, addLog} = this.props;
        addLog('Nuimta širdelė filmui ' + movie.title);
        onRemoveMovieHeart(movie.id);
    };

    addMovieHeart(movie) {
        const {onAddMovieHeart, addLog} = this.props;
        addLog('Uždėta širdelė filmui ' + movie.title);
        onAddMovieHeart(movie.id);
    };

    render() {
        const {hearted} = this.props;
        const {movies} = this.props;

        return (
            <React.Fragment>
                <Genres onChangeList={this.setMovieList}/>

                <div className="cards">
                    {movies.map((movie) => (
                        <Card
                            key={movie.id}
                            isHearted={hearted.includes(movie.id)}
                            onAddHeart={() => this.addMovieHeart(movie)}
                            onRemoveHeart={() => this.removeMovieHeart(movie)}
                            movie={movie}
                        />
                    ))}
                </div>
            </React.Fragment>
        );
    }
}

export default connect(
    (state) => {
        return {
            movies: state.movies.list,
            hearted: state.hearted,
            logs: state.logs,
        };
    },
    (dispatch) => {
        return {
            onGetPopularMovies: () => dispatch(getPopularMovies()),
            onSetMovieList: (list) => dispatch(setMovieList(list)),
            onAddMovieHeart: (id) => dispatch(addMovieHeart(id)),
            onRemoveMovieHeart: (id) => dispatch(removeMovieHeart(id)),
            addLog: (message) => dispatch(addLog(message)),
        };
    }
)(App);
