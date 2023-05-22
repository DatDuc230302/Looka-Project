export const AddFavorite = (state = [], action) => {
    switch (action.type) {
        case 'ADDFAVORITE':
            const arr = [];
            arr.push(action.payload);

            return [...state, arr];
        default:
            return state;
    }
};
