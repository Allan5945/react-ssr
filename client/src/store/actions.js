
import * as types from "./types";

function mapDispatchToProps(dispatch){
    return{
        onButtonClickChilid:(data)=>dispatch(Object.assign({type:types.CLICKCHILID,data:data}))
    }
}

function mapStateToProps(state) {
    return state;
}
//连接组件

export {mapDispatchToProps,mapStateToProps};