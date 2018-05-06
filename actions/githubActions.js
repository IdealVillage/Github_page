import { 
    FETCH_REQUESTED,
    FETCH_SUCCESSED,
    FETCH_FAILED,
    CHANGE_USERID
} from "../contants/actionTypes";

export const fetchRequested=(userId)=>(
    {
        type:FETCH_REQUESTED,
        userId
    }
)

export const fetchFailed=()=>(
    {
        type:FETCH_FAILED
    }
)

export const fetchSuccessed=(data)=>(
    {
        type: FETCH_SUCCESSED,
        data
    }
)

export const changeUserId=(userId)=>(
    {
        type:CHANGE_USERID,
        userId
    }
)
