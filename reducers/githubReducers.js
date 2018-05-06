import { 
    FETCH_SUCCESSED,
    CHANGE_USERID
 } from "../contants/actionTypes";

const githubReducer=(state={data:{},userId:''},action)=>{
    console.log(action)
    switch (action.type) {
        case FETCH_SUCCESSED:
            return {
                ...state,
                data:action.data
            }
        case CHANGE_USERID:
            return {
                ...state,
                userId:action.userId
            }
        default:
            return state
    }
}

export default githubReducer