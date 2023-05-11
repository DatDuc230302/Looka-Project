export const pick2 = (state = -1, action) => {
    switch (action.type) {
        case 'SET2':
            return action.data;
        default:
            return state;
    }
};

export default pick2;
