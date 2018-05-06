import { takeEvery } from "redux-saga";
import { call,put } from "redux-saga/effects";
import { fetchSuccessed } from "../actions/githubActions";
import { FETCH_REQUESTED } from "../contants/actionTypes";

const fetchPromise=url=>fetch(url).then(res=>res.json())

const fetchData=function* (action) {
    const url ='https://api.github.com/users/'
    const response=yield call(fetchPromise,url+action.userId)
    yield put(fetchSuccessed(response))
}

const watchFetchData=function* () {
    yield takeEvery(FETCH_REQUESTED,fetchData)
}

export default function* rootSaga() {
    yield watchFetchData()
}

