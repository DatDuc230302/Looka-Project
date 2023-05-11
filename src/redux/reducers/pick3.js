export const pick3 = (state = '', action) => {
    switch (action.type) {
        case 'SET3':
            return action.data;
        default:
            return state;
    }
};

export default pick3;
