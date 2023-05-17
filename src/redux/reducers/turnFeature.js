export const turnFeature = (state = false, action) => {
    switch (action.type) {
        case 'TURNFEATURE':
            return action.data;
        default:
            return state;
    }
};

export default turnFeature;
