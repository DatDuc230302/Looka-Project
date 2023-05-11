export const backOnboard = (state = false, action) => {
    switch (action.type) {
        case 'BACKONBOARD':
            return action.data;
        default:
            return state;
    }
};

export default backOnboard;
