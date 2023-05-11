export const show = (state = false, action) => {
    switch (action.type) {
        case 'toggle':
            return !action.payload;
        default:
            return !action.payload;
    }
};

export default show;
