const isLoadingReducer = (state, action) => {
    switch (action.type) {
        case "true":
            return true;
        case "false":
            return false;
        default:
            return state;
    }
};

export default isLoadingReducer;