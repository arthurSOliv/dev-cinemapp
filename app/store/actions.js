function addFavorites(state, payload) {
    state.push(payload.movies);
    return state;
}

function removeFavorites(state, payload) {
    const remaining = state.filter(item => {
        return item.imdbID !== payload.movies.imdbID;
    })

    return remaining;
}

export { addFavorites, removeFavorites };