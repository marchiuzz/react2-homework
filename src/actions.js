export const toggleCards = (shouldShow) => ({
    type: 'toggleCards',
    shouldShow,
});

export const setMostPopularMovies = (list, id = 0) => ({
    type: 'setMostPopularMovies',
    list,
    id,
});

export const setGenres = (genres) => ({
    type: 'setGenres',
    genres,
});

export const setLikedMovie = (id) => ({
    type: 'setLike',
    id,
});

export const setDislikeMovie = (id) => ({
    type: 'removeLike',
    id,
});