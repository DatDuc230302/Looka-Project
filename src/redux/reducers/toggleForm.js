export const toggleForm = (state = false, action) => {
    switch (action.type) {
        case 'toggle-form':
            return !action.payload;
        default:
            return state;
    }
};

export default toggleForm;
