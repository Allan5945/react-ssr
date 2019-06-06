import initialState from "./state";


const reducer = (state = initialState, action) => {
    let d = Object.assign({},state);
    switch (action.type) {
        case 'INITDATA':
            d.dataList = [{
                name:"zs",
                age: 19
            }];
            return d;
        default:
            return d;
    }
};

export default reducer
