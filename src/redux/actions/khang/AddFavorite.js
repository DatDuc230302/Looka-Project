// export const AddFavorite = ({ arr, index }) => {
//     const arrEmpty = [];
//     arrEmpty.push({ arr, index });

//     return {
//         type: 'ADDFAVORITE',
//         payload: {
//             arrEmpty,
//         },
//     };
// };

export const AddFavorite = (arr) => {
    return {
        type: 'ADDFAVORITE',
        data: arr,
    };
};
