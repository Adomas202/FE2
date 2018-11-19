import React from 'react';
import { connect } from 'react-redux';
import { requestGenreMovies, requestGenres } from "../actions/actions";

class Genres extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        const { onRequestGenres } = this.props;
        onRequestGenres();
    }

    requestGenresMovies = (genreId) => {
        const { onRequestGenreMovies } = this.props;
        onRequestGenreMovies(genreId);
    };

    render() {
        const {genres} = this.props;

        return (
            <div className="genres">
                {genres.list.map((genre) => (
                    <div key={genre.id} className="genre" onClick={() => this.requestGenresMovies(genre.id)}>
                        {genre.name}
                    </div>
                ))}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            genres: state.genres,
        };
    },
    (dispatch) => {
        return {
            onRequestGenres: () => dispatch(requestGenres()),
            onRequestGenreMovies: (genreId) => dispatch(requestGenreMovies(genreId)),
        };
    }
)(Genres);