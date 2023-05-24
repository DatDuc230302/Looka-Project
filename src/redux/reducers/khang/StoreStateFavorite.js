export const StoreStateFavorite = (state = [], action) => {
    switch (action.type) {
        case 'STORESTATEFAVORITE':
            return action.data;
        default:
            return state;
    }
};

export default StoreStateFavorite;
