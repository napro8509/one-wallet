import { call, delay, put, takeEvery } from 'redux-saga/effects'
import * as actionType from '../actionTypes'
import API from '../../services/BaseApi'
import ApiConstant from '../../config/ApiConstant'

function* handleApiRequest(action) {
    try {
        const response = yield call(API.get, ApiConstant.GET_EMPLOYEE)
        yield put({
            type: actionType.GET_EMPLOYEE.SUCCESS,
            payload: response.data,
        })
    } catch (e) {
        console.log(e)
        yield put({ type: actionType.GET_EMPLOYEE.FAILED, payload: e.message })
    }
}

function* loginSaga() {
    yield takeEvery(actionType.GET_EMPLOYEE.REQUEST, handleApiRequest)
}

export default loginSaga
