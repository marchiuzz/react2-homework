import React from 'react';
import {connect} from 'react-redux';
import {getMoviesByGenreId} from '../thunks';

class Genres extends React.Component {
    render() {
        let isDisabled = false;
        if (this.props.genreId === this.props.id) {
            isDisabled = true;
        }

        return (
            <li className='genre'
                onClick={() => !isDisabled ? this.props.handleGenreChange(this.props.id) : null}>
                {this.props.name}
            </li>
        );
    }
}

const mapStateToProps = state => ({
    genreId: state.cards.activeGenre
});
const mapDispatchToProps = dispatch => ({
    handleGenreChange: id => dispatch(getMoviesByGenreId(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Genres);