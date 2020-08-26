import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from '../reducers';
import sagas from '../sagas';
import types from '../actionTypes';

const sagaMiddleware = createSagaMiddleware()  

const combinereducers = combineReducers({ authen: reducer.authen, booking: reducer.booking, app: reducer.app })
const store = createStore(combinereducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(sagas)

//init data
store.dispatch({type: types.AUTHEN_TYPES.INIT_AUTHEN})

export default store;