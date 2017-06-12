export default(state = [], payload) => {
    switch (payload.type) {
        case 'add':
            return [...state, payload.recipe];
        default:
            return state;
    }
};