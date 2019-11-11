import React from 'react';
import { connect } from 'react-redux';
import { setLikedMovie, setDislikeMovie } from '../actions';

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showDescription: true
        };
    }

    render() {
        const {
            id,
            title,
            backgroundImage,
            date,
            rating,
            votes,
            description
        } = this.props;

        let buttonName;
        const isLiked = this.props.likedMoviesList.includes(id);
        isLiked ? (buttonName = 'uzlikinta') : (buttonName = 'NEuzlikinta');

        return (
            <div className='card'>
                <div
                    className='card__image'
                    style={{
                        backgroundImage: `url(${backgroundImage})`
                    }}
                />

                <div className='card__title'>{title}</div>

                <div className='card__subtitle'>
                    <span>{date}</span>
                    <span>
            {rating} ({votes} votes)
          </span>
                </div>

                <div className='card-info'>
                    <div className='card-info__header'>Summary</div>
                    <button
                        onClick={() => {
                            this.setState({ showDescription: !this.state.showDescription });
                        }}>
                        Toggle
                    </button>

                    <button
                        onClick={() => {
                            isLiked
                                ? this.props.onMovieDislike(id)
                                : this.props.onMovieLike(id);
                        }}
                    >{buttonName}</button>

                    <div className='card-info__description'>
                        {this.state.showDescription ? description : null}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    likedMoviesList: state.liked.movies
});
const mapDispatchToProps = dispatch => ({
    onMovieLike: id => dispatch(setLikedMovie(id)),
    onMovieDislike: id => dispatch(setDislikeMovie(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Card);