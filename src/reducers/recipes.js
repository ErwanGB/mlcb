export default(state = [], payload) => {
    switch (payload.type) {
        case 'ADD_RECIPE':
            return [...state, payload.recipe]
        case 'REMOVE_RECIPE':
            let newState = state.filter((el) => el !== payload.recipe)
            return newState;
        default:
            return state;
    }
};