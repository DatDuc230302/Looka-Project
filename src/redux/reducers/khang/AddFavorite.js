// export const AddFavorite = (state = [], action) => {
//     switch (action.type) {
//         case 'ADDFAVORITE':
//             const arr = [];
//             arr.push(action.payload);

//             return [...state, arr];
//         default:
//             return state;
//     }
// };

let arr = [];
export const AddFavorite = (state = [], action) => {
    switch (action.type) {
        case 'ADDFAVORITE':
            // arr.push(action.data);
            // return arr;
            if (arr.length > 0) {
                const temp = arr.filter((item) => item.id === action.data.id && item);
                if (temp.length <= 0) {
                    arr.push(action.data);
                } else {
                    arr = arr.filter((item) => item.id !== action.data.id);
                }
            } else {
                arr.push(action.data);
            }
            return [...arr];
        default:
            return state;
    }
};

export default AddFavorite;
