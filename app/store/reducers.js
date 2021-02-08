import { addFavorites, removeFavorites } from './actions';

export default function favoritesReducer(state = [], action) {
    switch(action.type) {
        case 'ADD_FAVORITES':
            return addFavorites(state, action.payload);
        case 'REMOVE_FAVORITES':
            return removeFavorites(state, action.payload);
        default:
            return state
    }
}