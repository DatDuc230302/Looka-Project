export const pick0 = (state = '', action) => {
    switch (action.type) {
        case 'SET0':
            return action.data;
        default:
            return state;
    }
};

export default pick0;
