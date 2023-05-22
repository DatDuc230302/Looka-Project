export const pick1 = (state = 1000, action) => {
    switch (action.type) {
        case 'SET1':
            return action.data;
        default:
            return state;
    }
};

export default pick1;
