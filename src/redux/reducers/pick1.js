export const pick1 = (state = 'Dat', action) => {
    switch (action.payload) {
        case 'SET':
            return state;
        default:
            return state;
    }
};

export default pick1;
