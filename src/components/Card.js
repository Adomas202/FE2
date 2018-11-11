import React from 'react';
import {getImageUrl} from '../../config';
import PropTypes from 'prop-types';

class Card extends React.Component {

    constructor() {
        super();

        this.state = {
            summaryShowing: false,
        };
    }

    toggleSummary = () => {
        const {summaryShowing} = this.state;

        this.setState({
            summaryShowing: !summaryShowing,
        });
    };

    hasHeart = (isLiked, id) => {
        let heart = '-o';

        isLiked.map(movieId => {

            if (movieId === id) {
                heart = '';
            }

        });
        return heart;
    };

    render() {
        const {summaryShowing} = this.state;
        const {
            data: {
                poster_path,
                original_title,
                overview,
                release_date,
                vote_average,
                vote_count,
            },
        } = this.props;

        return (
            <div className="card">
                <div className="card__image" style={{backgroundImage: `url(${getImageUrl(poster_path)})`}}/>

                <div className="card__title">
                    {original_title}
                </div>

                <div onClick={this.props.onClick} className="card__like">
                    <i className={`fa fa-heart${this.hasHeart(this.props.isLiked, this.props.id)}`}/>
                </div>

                <div className="card__subtitle">
                    <span>{release_date}</span>
                    <span>{vote_average} ({vote_count} votes)</span>
                </div>

                {summaryShowing
                    ? (
                        <div className="card-info">
                            <div className="card-info__header">Summary</div>
                            <div className="card-info__description">
                                {overview}
                            </div>
                        </div>
                    )
                    : null
                }

                <div className="button" onClick={() => this.toggleSummary()}>Show summary</div>
            </div>

        );
    }
}

Card.propTypes = {
    isLiked: PropTypes.array,
    // movieId: PropTypes.number,
};


export default Card;
