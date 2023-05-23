export const storeLike = (state = false, action) => {
    switch (action.type) {
        case 'STORE':
            return !action.payload;
        default:
            return state;
    }
};

export default storeLike;
