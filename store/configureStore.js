import createSagaMiddleware from "redux-saga";
import githubReducer from "../reducers/githubReducers";
import rootSaga from "../sagas/githubSaga";
import { createStore,applyMiddleware } from "redux";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    githubReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)

export default store



