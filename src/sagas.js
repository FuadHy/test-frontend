/*
** Author: Fuad
** github.com/FuadHy
** To: addissoftwares
*/
import { call, put, all, takeEvery} from 'redux-saga/effects'
import constants from './constants'
import actions from './store/actions';
import axios from 'axios';

function* fetchEmployees(action) {
    try {
       const data = yield call(axios.get, constants.baseUrl + constants.path.api.employees);
       console.log(data.data.employees)
       yield put({type: actions.SET_EMPLOYEES, data: data.data.employees});
    } catch (e) {
        console.log(e)
        alert('Oops! Something went wrong: check logs')
    }
    yield put({type: actions.SET_LOADER, data: {fetching: 0}});
 }

 function* addEmployees(action) {
    yield put({type: actions.SET_LOADER, data: {adding: 1}});
    try {
       const data = yield call(axios.post, constants.baseUrl + constants.path.api.employees, action.payload);
       console.log(data)
       yield put({type: actions.SET_ADDED_EMPLOYEE, data: data.data.created});
    } catch (e) {
        console.log(e)
        alert('Oops! Something went wrong: check logs')
    }
    yield put({type: actions.SET_LOADER, data: {adding: 2}});
 }

 function* updateEmployees(action) {
    yield put({type: actions.SET_LOADER, data: {adding: 1}});
    try {
       const data = yield call(axios.patch, constants.baseUrl + constants.path.api.employees + action.payload._id, action.payload);
       console.log(data)
       yield put({type: actions.UPDATE_EMPLOYEE_DONE, data: action.payload});
    } catch (e) {   
        console.log(e)
        alert('Oops! Something went wrong: check logs')
    }
    yield put({type: actions.SET_LOADER, data: {adding: 2}});
 }

 function* deleteEmployee(action) {
    yield put({type: actions.SET_LOADER, data: {deleting: 1}});
    try {
       const data = yield call(axios.delete, constants.baseUrl + constants.path.api.employees + action.payload);
       console.log(data)
       yield put({type: actions.REMOVE_EMPLOYEE_DONE, data: action.payload});
    } catch (e) {
        console.log(e)
        alert('Oops! Something went wrong: check logs')
    }
    yield put({type: actions.SET_LOADER, data: {deleting: 2}});
 }

 function* watchAll() {
    yield all([
        takeEvery(actions.FETCH_EMPLOYEES, fetchEmployees),
        takeEvery(actions.ADD_EMPLOYEE, addEmployees),
        takeEvery(actions.REMOVE_EMPLOYEE, deleteEmployee),
        takeEvery(actions.UPDATE_EMPLOYEE, updateEmployees),
    ])
  }

  export default watchAll;