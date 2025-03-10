const alertReducer = (state, action) => {
    switch (action.type) {
        case "SET_ALERT":
            return action.payload;
        case "CLEAR_ALERT":
            return null;
        default:
            return state;
    }
}
export default alertReducer