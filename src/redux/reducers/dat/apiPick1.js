export const apiPick1 = (state = [], action) => {
    switch (action.type) {
        case 'APIPICK1':
            return action.data;
        default:
            return state;
    }
};

export default apiPick1;
