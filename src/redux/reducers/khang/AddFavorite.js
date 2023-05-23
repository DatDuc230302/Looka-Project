let arr = [];
export const AddFavorite = (state = [], action) => {
    switch (action.type) {
        case 'ADDFAVORITE':
            const objData = { ...action.data };
            if (arr.filter((e) => e.id === action.data.id).length > 0) {
                arr = arr.filter((item) => item.id !== action.data.id);
            } else {
                arr.push(objData);
            }

            return [...arr];
        default:
            return state;
    }
};

export default AddFavorite;
