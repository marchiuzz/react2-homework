import { combineReducers } from 'redux';

const initialState = {
    mostPopular: [],
    activeGenre: 0,
    showCards: true,
    genres: [],
    movies: []
};

const cards = (state = initialState, action) => {
    if (action.type === 'setMostPopularMovies') {
        return {
            ...state,
            mostPopular: action.list,
            activeGenre: action.id
        };
    } else {
        return state;
    }
};

const componentState = (state = initialState, action) => {
    if (action.type === 'toggleCards') {
        return {
            ...state,
            showCards: action.shouldShow
        };
    } else {
        return state;
    }
};

const genres = (state = initialState, action) => {
    if (action.type === 'setGenres') {
        return {
            ...state,
            genres: action.genres
        };
    } else {
        return state;
    }
};

const liked = (state = initialState, action) => {
    switch (action.type) {
        case 'setLike':
            return {
                ...state,
                movies: [...state.movies, action.id]
            };
        case 'removeLike':
            return {
                ...state,
                movies: state.movies.filter(id => id !== action.id)
            };
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    componentState,
    cards,
    genres,
    liked
});