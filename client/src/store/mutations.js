import initialState from "./state";


const reducer = (state = initialState, action) => {
    let d = Object.assign({},state);
    switch (action.type) {
        case 1:
            return d;
        default:
            return d;
    }
};

export default reducer
