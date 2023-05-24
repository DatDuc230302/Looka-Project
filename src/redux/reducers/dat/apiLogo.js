export const apiLogo = (state = [], action) => {
    switch (action.type) {
        case 'APILOGO':
            return action.data;
        default:
            return state;
    }
};

export default apiLogo;
